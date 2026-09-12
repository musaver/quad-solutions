import type { Metadata } from "next";
import { GrowthFunnelPageBody } from "@/components/GrowthFunnelPageBody";
import "./growth-funnel-page.css";

export const metadata: Metadata = {
  title: "Growth Funnel — All-In-One Sales & Marketing Platform",
  description:
    "QUAD Solutions helps local businesses thrive. Automate your lead generation, followup & project acquisition with websites, funnels, a unified inbox, automated booking and review generation. 7-day free trial, no contracts.",
};

export default function GrowthFunnelPage() {
  return <GrowthFunnelPageBody />;
}
