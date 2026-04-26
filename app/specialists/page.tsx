import type { Metadata } from "next";
import { SpecialistsPageBody } from "@/components/SpecialistsPageBody";
import "../about-us/about-page.css";

export const metadata: Metadata = {
  title: "Specialists",
  description:
    "Meet the specialist leaders behind QUAD Solutions — Growth Marketing, Creative Production, Digital Products, and AI & Automation, all under one unified roof.",
};

export default function SpecialistsPage() {
  return <SpecialistsPageBody />;
}
