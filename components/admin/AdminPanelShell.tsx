import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  isActive: boolean;
};

type AdminPanelShellProps = {
  username: string;
  navItems: NavItem[];
  children: React.ReactNode;
};

export function AdminPanelShell({
  username,
  navItems,
  children,
}: AdminPanelShellProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-slate-50 to-violet-50 px-3 py-4 text-slate-800 sm:px-6 sm:py-7">
      <div className="mx-auto grid w-full max-w-[1500px] gap-5 lg:grid-cols-[270px_1fr] xl:gap-6">
        <aside className="rounded-3xl border border-slate-200/60 bg-white/90 p-4 shadow-[0_10px_35px_-20px_rgba(30,41,59,0.35)] backdrop-blur sm:p-5">
          <div className="border-b border-slate-100 pb-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Admin
            </p>
            <h1 className="mt-[10px] admin-panel-title text-[15px] font-semibold tracking-tight text-slate-800">
              Admin Panel
            </h1>
          </div>

          <nav className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center justify-center rounded-2xl border px-4 mb-[10px] buttons-admin-panel py-2.5 text-sm font-medium no-underline transition-all duration-200 ${
                  item.isActive
                    ? "border-violet-200 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 text-white shadow-[0_10px_25px_-14px_rgba(79,70,229,0.85)]"
                    : "border-slate-200/80 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 hover:shadow-[0_10px_20px_-16px_rgba(79,70,229,0.75)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <form action="/api/admin/logout" method="POST" className="mt-5">
            <button
              type="submit"
              className="w-full rounded-2xl border border-rose-200/70 bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-600 transition hover:bg-rose-100"
            >
              Logout
            </button>
          </form>
        </aside>

        <section className="space-y-6">
          <header className="rounded-3xl border border-slate-200/60 bg-white/90 p-5 shadow-[0_10px_35px_-24px_rgba(30,41,59,0.35)] backdrop-blur sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Signed in as
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-800">{username}</p>
          </header>

          <div className="rounded-3xl border border-slate-200/60 bg-white/90 p-4 shadow-[0_10px_35px_-24px_rgba(30,41,59,0.35)] backdrop-blur sm:p-6">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

