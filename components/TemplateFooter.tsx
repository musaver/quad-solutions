"use client";

import parse from "html-react-parser";
import { HOME_FOOTER_HTML } from "@/components/homeBodyHtml";

/** Webflow footer markup shared with the home page (`HOME_FOOTER_HTML`). */
export function TemplateFooter() {
  return <>{parse(HOME_FOOTER_HTML)}</>;
}
