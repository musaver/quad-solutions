/**
 * Simple JSON-file store for leads — used "for now" while MySQL is optional.
 *
 * Leads are appended to data/leads.json at the project root. This keeps the
 * Quick match flow fully working without a database configured. The MySQL path
 * (lib/leadsRepo.ts) is untouched and still used first when DB env vars are set.
 *
 * Note: file-based storage is fine for local/single-server use. On serverless
 * hosts the filesystem is ephemeral — switch to MySQL for production durability.
 */
import { promises as fs } from "fs";
import path from "path";
import type { LeadAnswers, MatchedPersona } from "@/lib/leadMatching";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

export type StoredJsonLead = {
  id: string;
  createdAt: string;
  division: string;
  subService: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string | null;
  matchedSpecialist: string;
  matchedDivision: string;
  source: string;
};

async function readLeads(): Promise<StoredJsonLead[]> {
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredJsonLead[]) : [];
  } catch {
    // File missing or unreadable → start fresh.
    return [];
  }
}

/** Append a qualified lead to data/leads.json and return the stored record. */
export async function appendLeadToJson(
  answers: LeadAnswers,
  persona: MatchedPersona,
  source = "lead-widget",
): Promise<StoredJsonLead> {
  await fs.mkdir(DATA_DIR, { recursive: true });

  const leads = await readLeads();

  const record: StoredJsonLead = {
    id: `lead_${Date.now()}_${leads.length + 1}`,
    createdAt: new Date().toISOString(),
    division: answers.division,
    subService: answers.subService,
    budget: answers.budget,
    timeline: answers.timeline,
    name: answers.name,
    email: answers.email,
    phone: answers.phone && answers.phone.trim() ? answers.phone.trim() : null,
    matchedSpecialist: persona.name,
    matchedDivision: persona.divisionId,
    source,
  };

  leads.push(record);
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");

  return record;
}
