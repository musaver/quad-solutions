import type { Metadata } from "next";
import { CaseStudiesPageBody } from "@/components/CaseStudiesPageBody";
import "./case-studies-page.css";

export const metadata: Metadata = {
  title: "Case Studies | Awake",
  description:
    "A curated collection of brand strategies, identities, digital products, and campaigns — each one built to make a lasting impact.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageBody />;
}
