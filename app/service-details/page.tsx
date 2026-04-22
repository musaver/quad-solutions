import type { Metadata } from "next";
import { ServiceDetailsPageBody } from "@/components/ServiceDetailsPageBody";
import "./service-details-page.css";

export const metadata: Metadata = {
  title: "Service Details | Awake",
  description:
    "Transform your brand with expert strategy — from brand strategy to visual identity, comprehensive creative services for lasting growth.",
};

export default function ServiceDetailsPage() {
  return <ServiceDetailsPageBody />;
}
