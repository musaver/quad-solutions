import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminPanelShell } from "@/components/admin/AdminPanelShell";
import { SESSION_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-session";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const session = sessionToken ? verifyAdminSessionToken(sessionToken) : null;

  if (!session) {
    redirect("/admin");
  }

  return (
    <AdminPanelShell
      username={session.username}
      navItems={[
        { href: "/admin/dashboard", label: "Dashboard", isActive: true },
        {
          href: "/admin/video-generator",
          label: "Video Generator",
          isActive: false,
        },
      ]}
    >
      <section className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Dashboard</h2>
        <p className="mt-3 text-base text-slate-600">
          Welcome to your admin workspace.
        </p>

        {/* <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/80 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-slate-500">
            Status
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-900">Coming soon</p>
        </div> */}
      </section>
    </AdminPanelShell>
  );
}
