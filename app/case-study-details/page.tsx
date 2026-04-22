import type { Metadata } from "next";
import { CaseStudyDetailsPageBody } from "@/components/CaseStudyDetailsPageBody";
import "./case-study-details-page.css";

export const metadata: Metadata = {
  title: "FlowBank — FinTech | Case Study | Awake",
  description:
    "How FlowBank carved out a distinct identity in fintech — brand strategy, positioning, and measurable outcomes.",
};

export default function CaseStudyDetailsPage() {
  return <CaseStudyDetailsPageBody />;
}
