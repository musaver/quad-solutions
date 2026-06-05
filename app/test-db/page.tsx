import { testDatabaseConnection } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function TestDbPage() {
  const result = await testDatabaseConnection();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Database Connection Test
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Use this page to verify your MySQL connection and environment
          variables.
        </p>

        <div
          className={`mt-8 rounded-2xl border px-5 py-4 ${
            result.ok
              ? "border-emerald-500/40 bg-emerald-500/10"
              : "border-red-500/40 bg-red-500/10"
          }`}
        >
          <p
            className={`text-lg font-medium ${
              result.ok ? "text-emerald-200" : "text-red-200"
            }`}
          >
            {result.ok ? "Connected" : "Not connected"}
          </p>
          <p className="mt-1 text-sm text-slate-300">{result.message}</p>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Environment
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
              <dt className="text-slate-400">Env vars configured</dt>
              <dd className="font-medium">
                {result.envConfigured ? "Yes" : "No"}
              </dd>
            </div>
            {result.details ? (
              <>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <dt className="text-slate-400">Host</dt>
                  <dd className="font-mono text-slate-200">
                    {result.details.host}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <dt className="text-slate-400">Port</dt>
                  <dd className="font-mono text-slate-200">
                    {result.details.port}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <dt className="text-slate-400">Database</dt>
                  <dd className="font-mono text-slate-200">
                    {result.details.database}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <dt className="text-slate-400">User</dt>
                  <dd className="font-mono text-slate-200">
                    {result.details.user}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-slate-800 pb-3">
                  <dt className="text-slate-400">Server version</dt>
                  <dd className="font-mono text-slate-200">
                    {result.details.serverVersion}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Query latency</dt>
                  <dd className="font-mono text-slate-200">
                    {result.details.latencyMs} ms
                  </dd>
                </div>
              </>
            ) : null}
          </dl>
        </section>

        {result.error ? (
          <section className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-red-300">
              Error
            </h2>
            <p className="mt-3 font-mono text-sm text-red-200">{result.error}</p>
          </section>
        ) : null}

        <p className="mt-8 text-xs text-slate-500">
          Refresh this page to run the connection test again. Remove or protect
          this route before going to production if you do not want it public.
        </p>
      </div>
    </main>
  );
}
