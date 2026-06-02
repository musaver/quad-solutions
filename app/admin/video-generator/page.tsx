import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminPanelShell } from "@/components/admin/AdminPanelShell";
import { VideoGeneratorOptionsPanel } from "@/components/admin/VideoGeneratorOptionsPanel";
import { SESSION_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/admin-session";

export default async function VideoGeneratorPage() {
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
        { href: "/admin/dashboard", label: "Dashboard", isActive: false },
        {
          href: "/admin/video-generator",
          label: "Video Generator",
          isActive: true,
        },
      ]}
    >
      <section className="rounded-2xl bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Video Generator
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Create high-converting video concepts and scripts from one place.
        </p>

        <VideoGeneratorOptionsPanel />
      </section>
    </AdminPanelShell>
  );
}

