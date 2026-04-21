"use client";

import parse from "html-react-parser";
import { HOME_BODY_HTML } from "./homeBodyHtml";

export function HomeBody() {
  return <>{parse(HOME_BODY_HTML)}</>;
}
