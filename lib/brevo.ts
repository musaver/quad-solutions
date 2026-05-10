const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

export type BrevoAddress = { email: string; name?: string };

export type SendEmailInput = {
  to: BrevoAddress[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: BrevoAddress;
  sender?: BrevoAddress;
};

export class BrevoError extends Error {
  status: number;
  body: unknown;
  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

export async function sendBrevoEmail(input: SendEmailInput): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new BrevoError("BREVO_API_KEY is not set", 500, null);
  }

  const sender =
    input.sender ??
    {
      email: process.env.BREVO_FROM_EMAIL ?? "no-reply@quadsolutions.ai",
      name: process.env.BREVO_FROM_NAME ?? "QUAD Solutions Website",
    };

  const res = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender,
      to: input.to,
      subject: input.subject,
      htmlContent: input.htmlContent,
      textContent: input.textContent,
      replyTo: input.replyTo,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new BrevoError(
      `Brevo request failed (${res.status})`,
      res.status,
      body,
    );
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
