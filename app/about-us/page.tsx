import type { Metadata } from "next";
import { AboutPageBody } from "@/components/AboutPageBody";
import "./about-page.css";

export const metadata: Metadata = {
  title: "About Us | Awake",
  description:
    "A studio built to create brands that matter. Strategic design, creative thinking, and digital experiences for ambitious businesses since 2012.",
};

export default function AboutUsPage() {
  return <AboutPageBody />;
}
