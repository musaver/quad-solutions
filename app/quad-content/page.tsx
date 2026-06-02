import type { Metadata } from "next";
import { QuadContentPageBody } from "@/components/QuadContentPageBody";
import "./quad-content-page.css";

export const metadata: Metadata = {
  title: "QUAD Content — Edits, Reels, UGC & brand ads",
  description:
    "QUAD Content is the in-house content studio at Quad Solutions. Cinematic long-form, story-led Reels for YouTube & Instagram, and paid-ready UGC + brand ads — produced end-to-end.",
};

export default function QuadContentPage() {
  return <QuadContentPageBody />;
}
