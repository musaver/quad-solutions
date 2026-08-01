"use client";

/**
 * Floating AI chat widget for Quad Solutions.
 *
 * A single chat interface: a greeting, tappable suggestion chips, and a text
 * input. Messages stream back from /api/chat (Groq, OpenAI-compatible), grounded
 * in the Quad Solutions service catalogue so answers stay on-brand.
 *
 * Sits bottom-right, stacked above the WhatsApp float.
 */
import { useEffect, useRef, useState } from "react";

type ChatMsg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi! I'm the Quad Solutions assistant. Ask me about growth marketing, creative production, digital products, or AI automation — or tap a suggestion below.";

const SUGGESTIONS = [
  "What services do you offer?",
  "I need help growing my revenue",
  "I want to build a website or app",
  "Can you automate my workflow with AI?",
];

// Shorter chips shown after each assistant reply to keep things moving.
const FOLLOWUPS = [
  "Tell me more",
  "Which specialist fits?",
  "What would this cost?",
  "How do I book a call?",
];

export function LeadChatWidget() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const threadRef = useRef<HTMLDivElement | null>(null);

  // Keep the thread scrolled to the newest message as it streams.
  useEffect(() => {
    if (open && threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [chat, streaming, open]);

  function onChatSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void sendMessage(input);
  }

  async function sendMessage(raw: string) {
    const text = raw.trim();
    if (!text || streaming) return;

    const nextHistory: ChatMsg[] = [...chat, { role: "user", content: text }];
    setChat([...nextHistory, { role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextHistory }),
      });

      if (!res.ok || !res.body) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "The assistant is unavailable right now.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setChat((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "The assistant is unavailable.";
      setChat((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", content: msg };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  function reset() {
    setChat([]);
    setInput("");
    setStreaming(false);
  }

  return (
    <div className="qs-lead-root">
      {open && (
        <section
          className="qs-lead-panel"
          role="dialog"
          aria-label="Chat with Quad Solutions"
        >
          <header className="qs-lead-header">
            <div className="qs-lead-header-main">
              <span className="qs-lead-avatar" aria-hidden>
                Q
              </span>
              <div>
                <p className="qs-lead-title">Chat with Quad Solutions</p>
                <p className="qs-lead-subtitle">
                  Ask anything — we usually reply in seconds.
                </p>
              </div>
            </div>
            <div className="qs-lead-header-actions">
              {chat.length > 0 && (
                <button
                  type="button"
                  className="qs-lead-reset"
                  onClick={reset}
                  aria-label="Start over"
                  title="Start over"
                >
                  ⟲
                </button>
              )}
              <button
                type="button"
                className="qs-lead-close"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </header>

          <div className="qs-lead-body qs-lead-thread" ref={threadRef}>
            <div className="qs-lead-bubble qs-lead-bubble--bot">{GREETING}</div>

            {chat.map((m, i) => (
              <div
                key={i}
                className={`qs-lead-bubble ${
                  m.role === "user"
                    ? "qs-lead-bubble--user"
                    : "qs-lead-bubble--bot"
                }`}
              >
                {m.content ||
                  (streaming && i === chat.length - 1 ? (
                    <span className="qs-lead-typing" aria-label="typing">
                      <span />
                      <span />
                      <span />
                    </span>
                  ) : (
                    ""
                  ))}
              </div>
            ))}

            {chat.length === 0 && !streaming && (
              <div className="qs-lead-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="qs-lead-suggestion"
                    onClick={() => sendMessage(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Follow-up chips after the assistant has replied */}
            {chat.length > 0 &&
              !streaming &&
              chat[chat.length - 1].role === "assistant" &&
              chat[chat.length - 1].content.trim() !== "" && (
                <div className="qs-lead-suggestions">
                  {FOLLOWUPS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="qs-lead-suggestion"
                      onClick={() => sendMessage(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
          </div>

          <form className="qs-lead-inputbar" onSubmit={onChatSubmit}>
            <input
              type="text"
              className="qs-lead-input"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={streaming}
            />
            <button
              type="submit"
              className="qs-lead-send"
              disabled={streaming || !input.trim()}
              aria-label="Send"
            >
              ↑
            </button>
          </form>
        </section>
      )}

      {/* Floating launcher */}
      <button
        type="button"
        className="qs-lead-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
      >
        {open ? (
          <span className="qs-lead-launcher-x" aria-hidden>
            ×
          </span>
        ) : (
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
            <path
              fill="currentColor"
              d="M12 3c5 0 9 3.36 9 7.5S17 18 12 18a10.6 10.6 0 0 1-3.2-.49L4 19l1.2-3.2A6.9 6.9 0 0 1 3 10.5C3 6.36 7 3 12 3Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
