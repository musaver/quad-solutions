import type { Metadata } from "next";
import { CaseStudiesPageBody } from "@/components/CaseStudiesPageBody";
import "./case-studies-page.css";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Quad Solutions teams have shipped marketing campaigns, content systems, software products, and AI automations that moved the numbers for our clients.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageBody />;
}
