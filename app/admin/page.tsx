import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-session";

type AdminLoginPageProps = {
  searchParams: Promise<{ error?: string; server?: string }>;
};

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (session && verifyAdminSessionToken(session)) {
    redirect("/admin/dashboard");
  }

  const params = await searchParams;
  const hasError = params.error === "1";
  const hasServerError = params.server === "1";

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 sm:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[80vh] w-full max-w-5xl items-stretch overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 shadow-[0_24px_90px_-35px_rgba(79,70,229,0.55)] backdrop-blur md:grid-cols-[1fr_1.1fr]">
        <section className="hidden border-r border-slate-800/80 bg-gradient-to-br from-violet-600/25 via-slate-900/10 to-cyan-400/20 p-10 md:flex md:flex-col md:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-violet-300/40 bg-violet-400/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-200">
              Secure Admin Area
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight">
              Welcome back
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Manage your operations, content, and internal updates from one place.
              Login to continue to your dashboard.
            </p>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <p className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-4 py-3">
              Fast and secure authentication
            </p>
            <p className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-4 py-3">
              Session-protected admin routes
            </p>
          </div>
        </section>

        <section className="flex items-center p-6 sm:p-10">
          <div className="w-full">
            <div className="mb-6 md:hidden">
              <span className="inline-flex rounded-full border border-violet-300/40 bg-violet-400/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-200">
                Secure Admin Area
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight">Admin Login</h2>
            <p className="mt-2 text-sm text-slate-400">
              Use your admin credentials to access the dashboard.
            </p>

            {hasServerError ? (
              <p
                role="alert"
                className="mt-5 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
              >
                Server error. Please check your database/admin configuration.
              </p>
            ) : hasError ? (
              <p
                role="alert"
                className="mt-5 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
              >
                Invalid username or password.
              </p>
            ) : null}

            <form action="/api/admin/login" method="POST" className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  placeholder="Enter your username"
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/60 transition focus:border-violet-400/70 focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none ring-violet-500/60 transition focus:border-violet-400/70 focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3.5 font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:from-violet-400 hover:to-indigo-400"
              >
                Sign in
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
