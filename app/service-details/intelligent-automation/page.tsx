import type { Metadata } from "next";
import { Suspense } from "react";
import { ServiceDetailsPageBody } from "@/components/ServiceDetailsPageBody";
import { getServiceDetailsContent } from "@/lib/serviceDetailsContent";
import "../service-details-page.css";

const content = getServiceDetailsContent("intelligent-automation");

export const metadata: Metadata = {
  title: content.documentTitle,
  description: content.metaDescription,
};

export default function IntelligentAutomationPage() {
  return (
    <Suspense fallback={null}>
      <ServiceDetailsPageBody slug="intelligent-automation" />
    </Suspense>
  );
}
