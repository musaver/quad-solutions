import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { validateAdminCredentials } from "@/lib/admin-auth";
import {
  createAdminSessionToken,
  ONE_DAY_IN_SECONDS,
  SESSION_COOKIE_NAME,
} from "@/lib/admin-session";

export async function POST(request: Request): Promise<NextResponse> {
  const formData = await request.formData();

  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  let isValid = false;
  try {
    isValid = await validateAdminCredentials(username, password);
  } catch (err) {
    // Don't leak internal error details to the client.
    // Keeping UX on /admin avoids the browser showing /api/admin/login on 500s.
    console.error("Admin login failed:", err);
    return NextResponse.redirect(
      new URL("/admin?error=1&server=1", request.url),
      303,
    );
  }

  if (!isValid) {
    return NextResponse.redirect(new URL("/admin?error=1", request.url), 303);
  }

  const sessionToken = createAdminSessionToken(username.trim());

  const cookieStore = await cookies();
  cookieStore.set({
    name: SESSION_COOKIE_NAME,
    value: sessionToken,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ONE_DAY_IN_SECONDS,
  });

  return NextResponse.redirect(new URL("/admin/dashboard", request.url), 303);
}
