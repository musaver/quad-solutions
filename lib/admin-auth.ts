import crypto from "node:crypto";
import type { RowDataPacket } from "mysql2";
import { getPool } from "@/lib/db";

type AdminUserRow = RowDataPacket & {
  id: number;
  username: string;
  password_hash: string;
};

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
