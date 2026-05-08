import type { Metadata } from "next";
import { Suspense } from "react";
import { ServiceDetailsPageBody } from "@/components/ServiceDetailsPageBody";
import { getServiceDetailsContent } from "@/lib/serviceDetailsContent";
import "@/app/styles/service-details-page.css";
import "@/app/case-studies/case-studies-page.css";
import "@/app/services/services-page.css";

const content = getServiceDetailsContent("mobile-app-development");

export const metadata: Metadata = {
  title: content.documentTitle,
  description: content.metaDescription,
};

export default function MobileAppDevelopmentPage() {
  return (
    <Suspense fallback={null}>
      <ServiceDetailsPageBody slug="mobile-app-development" />
    </Suspense>
  );
}
