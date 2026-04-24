import type { Metadata } from "next";
import { ServicesPageBody } from "@/components/ServicesPageBody";
import "../case-studies/case-studies-page.css";
import "./services-page.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Specialized teams across marketing, content, software, and AI automation — four disciplines working as one digital department for your business.",
};

export default function ServicesPage() {
  return <ServicesPageBody />;
}
