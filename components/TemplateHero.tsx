"use client";

import parse from "html-react-parser";
import { HOME_HERO_HTML } from "@/components/homeBodyHtml";

/** Main landing hero (`#home`) — same markup as the home page. */
export function TemplateHero() {
  return <>{parse(HOME_HERO_HTML)}</>;
}
