import type { Metadata } from "next";
import { ServicesPageBody } from "@/components/ServicesPageBody";
import "../case-studies/case-studies-page.css";
import "./services-page.css";

export const metadata: Metadata = {
  title: "Services | Awake",
  description:
    "Eight core disciplines — brand strategy, identity, UX, content, marketing, web, digital, and motion — one cohesive team.",
};

export default function ServicesPage() {
  return <ServicesPageBody />;
}
