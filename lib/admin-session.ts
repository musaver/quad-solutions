import crypto from "node:crypto";

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const SESSION_COOKIE_NAME = "admin_session";

type SessionPayload = {
  username: string;
  expiresAt: number;
};

function toBase64Url(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function fromBase64Url(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET environment variable.");
  }

  return secret;
}

function sign(value: string): string {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(value)
    .digest("hex");
}

export function createAdminSessionToken(username: string): string {
  const payload: SessionPayload = {
    username,
    expiresAt: Date.now() + ONE_DAY_IN_SECONDS * 1000,
  };

  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = sign(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(token: string): SessionPayload | null {
  const [encodedPayload, providedSignature] = token.split(".");

  if (!encodedPayload || !providedSignature) {
    return null;
  }

  const expectedSignature = sign(encodedPayload);
  if (providedSignature.length !== expectedSignature.length) {
    return null;
  }

  const isValid = crypto.timingSafeEqual(
    Buffer.from(providedSignature, "utf8"),
    Buffer.from(expectedSignature, "utf8"),
  );

  if (!isValid) {
    return null;
  }

  try {
    const payload = JSON.parse(fromBase64Url(encodedPayload)) as SessionPayload;

    if (!payload.username || typeof payload.expiresAt !== "number") {
      return null;
    }

    if (Date.now() > payload.expiresAt) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export { ONE_DAY_IN_SECONDS, SESSION_COOKIE_NAME };
