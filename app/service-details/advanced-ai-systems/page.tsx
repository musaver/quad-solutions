import type { Metadata } from "next";
import { Suspense } from "react";
import { ServiceDetailsPageBody } from "@/components/ServiceDetailsPageBody";
import { getServiceDetailsContent } from "@/lib/serviceDetailsContent";
import "../service-details-page.css";
import "../../case-studies/case-studies-page.css";
import "../../services/services-page.css";

const content = getServiceDetailsContent("advanced-ai-systems");

export const metadata: Metadata = {
  title: content.documentTitle,
  description: content.metaDescription,
};

export default function AdvancedAiSystemsPage() {
  return (
    <Suspense fallback={null}>
      <ServiceDetailsPageBody slug="advanced-ai-systems" />
    </Suspense>
  );
}
