import type { Metadata } from "next";
import { AboutPageBody } from "@/components/AboutPageBody";
import "./about-page.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Quad Solutions unifies marketing, content, software, and AI under one roof so growing businesses can scale without juggling five different agencies.",
};

export default function AboutUsPage() {
  return <AboutPageBody />;
}
