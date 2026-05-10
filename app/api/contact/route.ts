import { NextResponse, type NextRequest } from "next/server";
import { sendBrevoEmail, escapeHtml, BrevoError } from "@/lib/brevo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  services?: string[] | string;
  budget?: string;
  message?: string;
};

const SOURCE_LABELS: Record<string, string> = {
  cta: "Homepage CTA",
  contact: "Contact Page",
  footer: "Footer",
};

export async function POST(request: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const budget = (payload.budget ?? "").trim();
  const message = (payload.message ?? "").trim();
  const services = Array.isArray(payload.services)
    ? payload.services.filter(Boolean)
    : payload.services
      ? [payload.services]
      : [];
  const source = (payload.source ?? "website").trim();

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address" },
      { status: 400 },
    );
  }

  const DEFAULT_RECIPIENTS = [
    "musaverleo@gmail.com",
    "hello@quadsolutions.com",
  ];
  const recipients = (process.env.BREVO_TO_EMAIL ?? DEFAULT_RECIPIENTS.join(","))
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (recipients.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Recipient is not configured" },
      { status: 500 },
    );
  }

  const sourceLabel = SOURCE_LABELS[source] ?? source;
  const subject = `New ${sourceLabel} enquiry from ${name}`;

  const rows: Array<[string, string]> = [
    ["Source", sourceLabel],
    ["Name", name],
    ["Email", email],
  ];
  if (phone) rows.push(["Phone", phone]);
  if (services.length) rows.push(["Services", services.join(", ")]);
  if (budget) rows.push(["Budget", budget]);
  if (message) rows.push(["Message", message]);

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#444;vertical-align:top;white-space:nowrap;">${escapeHtml(
          label,
        )}</td><td style="padding:6px 12px;color:#111;white-space:pre-wrap;">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");

  const htmlContent = `
    <div style="font-family:Inter,system-ui,Arial,sans-serif;color:#111;">
      <h2 style="margin:0 0 12px;">New website enquiry</h2>
      <p style="margin:0 0 16px;color:#555;">Submitted from <strong>${escapeHtml(
        sourceLabel,
      )}</strong>.</p>
      <table style="border-collapse:collapse;border:1px solid #e5e5e5;">${htmlRows}</table>
    </div>
  `;

  const textContent = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    await sendBrevoEmail({
      to: recipients.map((address) => ({ email: address, name: "QUAD Solutions" })),
      replyTo: { email, name },
      subject,
      htmlContent,
      textContent,
    });
  } catch (err) {
    if (err instanceof BrevoError) {
      console.error("Brevo send failed", err.status, err.body);
    } else {
      console.error("Brevo send failed", err);
    }
    return NextResponse.json(
      { ok: false, error: "Could not send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
