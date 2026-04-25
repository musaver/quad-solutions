"use client";

import { TemplateNavbar } from "@/components/TemplateNavbar";
import { Footer } from "@/components/Footer";
import {
  HeroSection,
  HeroVideoScroll,
  LogoMarqueeSection,
  AboutSection,
  ServicesSection,
  WorkSection,
  TeamSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  AwardsSection,
  CTASection,
} from "@/components/home";

export function HomeBody() {
  return (
    <div className="main">
      <div className="gradient-background" />
      <TemplateNavbar />
      <HeroSection />
      <HeroVideoScroll />
      <LogoMarqueeSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TeamSection />
      <TestimonialsSection />
      {/*<PricingSection />*/}
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
