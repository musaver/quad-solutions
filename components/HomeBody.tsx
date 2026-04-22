"use client";

import parse from "html-react-parser";
import { TemplateNavbar } from "@/components/TemplateNavbar";
import { HOME_CONTENT_HTML } from "@/components/homeBodyHtml";

export function HomeBody() {
  return (
    <div className="main">
      <div className="gradient-background" />
      <TemplateNavbar />
      {parse(HOME_CONTENT_HTML)}
    </div>
  );
}
