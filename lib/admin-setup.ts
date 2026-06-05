import type { RowDataPacket } from "mysql2";
import { getPool } from "@/lib/db";

export type AdminSetupResult = {
  sessionSecretConfigured: boolean;
  adminUsersTableOk: boolean;
  adminUserCount: number;
  error?: string;
};

export async function testAdminAuthSetup(): Promise<AdminSetupResult> {
  const sessionSecretConfigured = Boolean(
    process.env.ADMIN_SESSION_SECRET?.trim(),
  );

  try {
    const [rows] = await getPool().query<
      (RowDataPacket & { count: number })[]
    >("SELECT COUNT(*) AS count FROM admin_users");

    return {
      sessionSecretConfigured,
      adminUsersTableOk: true,
      adminUserCount: Number(rows[0]?.count ?? 0),
    };
  } catch (err) {
    return {
      sessionSecretConfigured,
      adminUsersTableOk: false,
      adminUserCount: 0,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
