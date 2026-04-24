import type { Metadata } from "next";
import { Suspense } from "react";
import { ServiceDetailsPageBody } from "@/components/ServiceDetailsPageBody";
import "./service-details-page.css";

export const metadata: Metadata = {
  title: "Service Details",
  description:
    "Explore how Quad Solutions delivers marketing, content, software, and AI automation services — scoped, staffed, and shipped by one integrated team.",
};

export default function ServiceDetailsPage() {
  return (
    <Suspense fallback={null}>
      <ServiceDetailsPageBody />
    </Suspense>
  );
}
