/**
 * Persistence for lead-qualification submissions.
 *
 * Uses the project's existing raw mysql2 pool (lib/db.ts) — no ORM — to stay
 * consistent with how this codebase already talks to MySQL. The canonical
 * schema lives in scripts/leads-schema.sql and is applied lazily here.
 */
import type { ResultSetHeader } from "mysql2";
import { getPool } from "@/lib/db";
import type { LeadAnswers, MatchedPersona } from "@/lib/leadMatching";

const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS leads (
    id                 BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    division           VARCHAR(64)  NOT NULL,
    sub_service        VARCHAR(64)  NOT NULL,
    budget             VARCHAR(64)  NOT NULL,
    timeline           VARCHAR(64)  NOT NULL,
    name               VARCHAR(255) NOT NULL,
    email              VARCHAR(255) NOT NULL,
    phone              VARCHAR(64)  NULL,
    matched_specialist VARCHAR(255) NOT NULL,
    matched_division   VARCHAR(64)  NOT NULL,
    source             VARCHAR(64)  NOT NULL DEFAULT 'lead-widget',
    created_at         TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_leads_created_at (created_at),
    KEY idx_leads_division (division)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

let tableReady: Promise<void> | null = null;

/** Ensure the leads table exists — runs once per process. */
function ensureLeadsTable(): Promise<void> {
  if (!tableReady) {
    tableReady = getPool()
      .query(CREATE_TABLE_SQL)
      .then(() => undefined)
      .catch((err) => {
        // Reset so a later request can retry after a transient failure.
        tableReady = null;
        throw err;
      });
  }
  return tableReady;
}

export type StoredLead = {
  id: number;
};

/** Insert a qualified lead together with the specialist it was matched to. */
export async function insertLead(
  answers: LeadAnswers,
  persona: MatchedPersona,
  source = "lead-widget",
): Promise<StoredLead> {
  await ensureLeadsTable();

  const [result] = await getPool().execute<ResultSetHeader>(
    `INSERT INTO leads
       (division, sub_service, budget, timeline, name, email, phone,
        matched_specialist, matched_division, source)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      answers.division,
      answers.subService,
      answers.budget,
      answers.timeline,
      answers.name,
      answers.email,
      answers.phone && answers.phone.trim() ? answers.phone.trim() : null,
      persona.name,
      persona.divisionId,
      source,
    ],
  );

  return { id: result.insertId };
}
