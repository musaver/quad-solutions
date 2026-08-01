import { type NextRequest } from "next/server";
import { SERVICE_TREE, CONTACT } from "@/lib/leadMatching";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * AI chat backend, powered by Groq (OpenAI-compatible Chat Completions API).
 * Groq has a free tier — get a key at https://console.groq.com.
 *
 * Env vars:
 *   GROQ_API_KEY  (required) — your Groq API key (starts with "gsk_")
 *   GROQ_MODEL    (optional) — model id, defaults to "llama-3.3-70b-versatile"
 *   GROQ_BASE_URL (optional) — defaults to https://api.groq.com/openai/v1
 *
 * Streams the reply back to the widget as plain text.
 */

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_TURNS = 20;
const DEFAULT_MODEL = "llama-3.3-70b-versatile";
const DEFAULT_BASE_URL = "https://api.groq.com/openai/v1";

/** Build the grounding system prompt from the same service tree the widget uses. */
function buildSystemPrompt(): string {
  const catalogue = SERVICE_TREE.map((d) => {
    const subs = d.subServices
      .map((s) => `    - ${s.label}: ${s.hint}`)
      .join("\n");
    return `- ${d.label} — specialist: ${d.specialistName}, ${d.specialistTitle}\n${subs}`;
  }).join("\n");

  return [
    "You are the lead-qualification assistant for Quad Solutions, a full-service digital agency.",
    "Quad Solutions offers four service divisions, each led by a specialist. Here is the full catalogue:",
    "",
    catalogue,
    "",
    "Your job:",
    "- Help website visitors figure out which division and specialist fits their need.",
    "- Answer questions about the services clearly and concisely (2–4 sentences, friendly, no fluff).",
    "- When a visitor's need is clear, recommend the matching specialist by name and title, and invite them to book a call.",
    `- Booking / contact: send them to ${CONTACT.bookingUrl} or ${CONTACT.phone} (${CONTACT.email}).`,
    "- Encourage them to share their name and email so a specialist can follow up.",
    "",
    "Rules:",
    "- Only discuss the four divisions above. If asked about something Quad doesn't offer, say so and point to the closest fit.",
    "- Do NOT invent specific prices. If asked about cost, give rough ranges as estimates only and suggest a call for an exact quote.",
    "- Never invent specialists, case studies, or guarantees. Stay factual about the catalogue above.",
    "- Keep replies short and skimmable — this is a chat widget, not an email.",
  ].join("\n");
}

const SYSTEM_PROMPT = buildSystemPrompt();

export async function POST(request: NextRequest) {
  // TODO: remove the hardcoded fallback once GROQ_API_KEY is set in Vercel.
  const apiKey =
    process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "AI chat is not configured (missing GROQ_API_KEY)." }),
      { status: 503, headers: { "content-type": "application/json" } },
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = (await request.json()) as { messages?: ChatMessage[] };
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const history = (body.messages ?? [])
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content.trim() }));

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return new Response(
      JSON.stringify({ error: "The last message must be from the user." }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  const model = process.env.GROQ_MODEL ?? DEFAULT_MODEL;
  const baseUrl = process.env.GROQ_BASE_URL ?? DEFAULT_BASE_URL;

  let upstream: Response;
  try {
    upstream = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        stream: true,
        max_tokens: 1024,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
      }),
    });
  } catch (err) {
    console.error("Groq request failed", err);
    return new Response(
      JSON.stringify({ error: "Could not reach the AI service." }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("Groq error", upstream.status, detail);
    return new Response(
      JSON.stringify({ error: "The AI service returned an error." }),
      { status: 502, headers: { "content-type": "application/json" } },
    );
  }

  // Transform xAI's OpenAI-style SSE stream into a plain-text token stream.
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const reader = upstream.body.getReader();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let buffer = "";
      try {
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          // SSE events are separated by blank lines; each has one or more
          // `data:` lines. We only care about the JSON payloads.
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? ""; // keep the last, possibly-partial line

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const payload = trimmed.slice(5).trim();
            if (payload === "" || payload === "[DONE]") continue;
            try {
              const json = JSON.parse(payload) as {
                choices?: { delta?: { content?: string } }[];
              };
              const token = json.choices?.[0]?.delta?.content;
              if (token) controller.enqueue(encoder.encode(token));
            } catch {
              /* ignore keep-alive / non-JSON lines */
            }
          }
        }
        controller.close();
      } catch (err) {
        console.error("Groq stream error", err);
        try {
          controller.enqueue(
            encoder.encode(
              "\n\n(Sorry — I hit an error. Please try again, or use the Quick match option.)",
            ),
          );
        } catch {
          /* already closed */
        }
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
