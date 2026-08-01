import { NextResponse, type NextRequest } from "next/server";
import {
  matchLead,
  isDivisionId,
  getDivision,
  type LeadAnswers,
} from "@/lib/leadMatching";
import { insertLead } from "@/lib/leadsRepo";
import { appendLeadToJson } from "@/lib/leadsJsonStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = Partial<LeadAnswers> & { source?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const division = (payload.division ?? "").trim();
  const subService = (payload.subService ?? "").trim();
  const budget = (payload.budget ?? "").trim();
  const timeline = (payload.timeline ?? "").trim();
  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();

  // --- Validation -------------------------------------------------------
  if (!isDivisionId(division)) {
    return NextResponse.json(
      { ok: false, error: "Please choose what you're looking to do." },
      { status: 400 },
    );
  }

  const divisionDef = getDivision(division)!;
  if (!divisionDef.subServices.some((s) => s.slug === subService)) {
    return NextResponse.json(
      { ok: false, error: "Please choose an option that narrows your need." },
      { status: 400 },
    );
  }

  if (!budget || !timeline) {
    return NextResponse.json(
      { ok: false, error: "Please share your budget and timeline." },
      { status: 400 },
    );
  }

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const answers: LeadAnswers = {
    division,
    subService,
    budget,
    timeline,
    name,
    email,
    phone: phone || undefined,
  };

  // --- Match (pure) -----------------------------------------------------
  const persona = matchLead(answers);

  // --- Persist ----------------------------------------------------------
  // Prefer MySQL when it's configured; otherwise (or if it fails) fall back to
  // the JSON file store so leads are never lost while the DB is optional.
  const source = payload.source ?? "lead-widget";
  const dbConfigured = Boolean(
    process.env.MYSQL_HOST && process.env.MYSQL_USER && process.env.MYSQL_DATABASE,
  );

  let stored = false;
  if (dbConfigured) {
    try {
      await insertLead(answers, persona, source);
      stored = true;
    } catch (err) {
      console.error("MySQL insert failed, falling back to JSON", err);
    }
  }

  if (!stored) {
    try {
      await appendLeadToJson(answers, persona, source);
    } catch (err) {
      console.error("Failed to store lead (JSON)", err);
      return NextResponse.json(
        { ok: false, error: "Could not save your details. Please try again." },
        { status: 502 },
      );
    }
  }

  // Return the matched persona so the widget can render the result card.
  return NextResponse.json({ ok: true, persona });
}
