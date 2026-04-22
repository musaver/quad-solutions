import type { Metadata } from "next";
import { Suspense } from "react";
import { CaseStudyDetailsPageBody } from "@/components/CaseStudyDetailsPageBody";
import "./case-study-details-page.css";

export const metadata: Metadata = {
  title: "Case Study | Awake",
  description:
    "How we partner with brands on strategy, identity, and digital — positioning, creative, and measurable outcomes.",
};

export default function CaseStudyDetailsPage() {
  return (
    <Suspense fallback={null}>
      <CaseStudyDetailsPageBody />
    </Suspense>
  );
}
