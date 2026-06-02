import crypto from "node:crypto";
import mysql from "mysql2/promise";

type AdminUserRow = {
  id: number;
  username: string;
  password_hash: string;
};

let pool: mysql.Pool | null = null;

function getPool(): mysql.Pool {
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

function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function validateAdminCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const trimmedUsername = username.trim();

  if (!trimmedUsername || !password) {
    return false;
  }

  const [rows] = await getPool().query<AdminUserRow[]>(
    "SELECT id, username, password_hash FROM admin_users WHERE username = ? LIMIT 1",
    [trimmedUsername],
  );

  const user = rows[0];

  if (!user) {
    return false;
  }

  const incomingHash = hashPassword(password);
  return incomingHash === user.password_hash;
}
