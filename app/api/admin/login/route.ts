import { NextResponse } from "next/server";
import { validateAdminCredentials } from "@/lib/admin-auth";
import {
  createAdminSessionToken,
  ONE_DAY_IN_SECONDS,
  SESSION_COOKIE_NAME,
} from "@/lib/admin-session";

function redirectToAdmin(
  request: Request,
  params: Record<string, string>,
): NextResponse {
  const url = new URL("/admin", request.url);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();

    const username = String(formData.get("username") ?? "");
    const password = String(formData.get("password") ?? "");

    let isValid = false;
    try {
      isValid = await validateAdminCredentials(username, password);
    } catch (err) {
      console.error("Admin login database error:", err);
      return redirectToAdmin(request, { error: "1", server: "1" });
    }

    if (!isValid) {
      return redirectToAdmin(request, { error: "1" });
    }

    const sessionToken = createAdminSessionToken(username.trim());
    const response = NextResponse.redirect(
      new URL("/admin/dashboard", request.url),
      303,
    );

    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: ONE_DAY_IN_SECONDS,
    });

    return response;
  } catch (err) {
    console.error("Admin login failed:", err);
    return redirectToAdmin(request, { error: "1", server: "1" });
  }
}
