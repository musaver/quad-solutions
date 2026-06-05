import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";

let pool: mysql.Pool | null = null;

export function getPool(): mysql.Pool {
  if (pool) {
    return pool;
  }

  const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } =
    process.env;

  if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) {
    throw new Error(
      "Missing MySQL env vars. Set MYSQL_HOST, MYSQL_USER, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_PORT.",
    );
  }

  pool = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT ? Number(MYSQL_PORT) : 3306,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD ?? "",
    database: MYSQL_DATABASE,
    connectionLimit: 10,
  });

  return pool;
}

export type DbConnectionResult = {
  ok: boolean;
  message: string;
  envConfigured: boolean;
  details?: {
    host: string;
    port: number;
    database: string;
    user: string;
    serverVersion: string;
    latencyMs: number;
  };
  error?: string;
};

export async function testDatabaseConnection(): Promise<DbConnectionResult> {
  const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_DATABASE } = process.env;
  const envConfigured = Boolean(MYSQL_HOST && MYSQL_USER && MYSQL_DATABASE);

  if (!envConfigured) {
    return {
      ok: false,
      message: "Environment variables are not configured",
      envConfigured: false,
      error:
        "Missing MYSQL_HOST, MYSQL_USER, or MYSQL_DATABASE. Check your .env.local file.",
    };
  }

  const start = Date.now();

  try {
    const [rows] = await getPool().query<
      (RowDataPacket & { ok: number; version: string })[]
    >("SELECT 1 AS ok, VERSION() AS version");

    const row = rows[0];

    return {
      ok: true,
      message: "Database connection successful",
      envConfigured: true,
      details: {
        host: MYSQL_HOST!,
        port: MYSQL_PORT ? Number(MYSQL_PORT) : 3306,
        database: MYSQL_DATABASE!,
        user: MYSQL_USER!,
        serverVersion: row?.version ?? "unknown",
        latencyMs: Date.now() - start,
      },
    };
  } catch (err) {
    return {
      ok: false,
      message: "Database connection failed",
      envConfigured: true,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
