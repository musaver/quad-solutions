import type { Metadata } from "next";
import { Suspense } from "react";
import { CaseStudyDetailsPageBody } from "@/components/CaseStudyDetailsPageBody";
import "./case-study-details-page.css";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "A closer look at how Quad Solutions combined strategy, creative, and engineering to deliver measurable outcomes for a client engagement.",
};

export default function CaseStudyDetailsPage() {
  return (
    <Suspense fallback={null}>
      <CaseStudyDetailsPageBody />
    </Suspense>
  );
}
