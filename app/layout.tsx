import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { WebflowRuntime } from "@/components/WebflowRuntime";
import { WebflowRouteSync } from "@/components/WebflowRouteSync";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MetaPixel } from "@/components/MetaPixel";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Quad Solutions | Growth, Creative, Digital & AI Agency",
    template: "%s | Quad Solutions",
  },
  description:
    "Quad Solutions is your entire digital department under one roof — Growth Marketing, Creative Production, Digital Products, and AI Automation. Trusted by 100+ brands worldwide.",
  robots: { index: true, follow: true },
  verification: {
    google: "JqVqBHfLvcYI0_i3yjSGRE90aQ_7iLvnOiOHzkP6J7k",
  },
  icons: {
    icon: "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e3732f7782e21e4dbbc032_favicon.svg",
    apple:
      "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e3742df2a2b68f26be1706_webclip.svg",
  },
};

const webflowTouchClass = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quad Solutions",
  alternateName: "QUAD Solutions",
  url: "https://www.quadsolutions.ai/",
  logo: "https://www.quadsolutions.ai/assets/logo/web-logo-final.jpg",
  description:
    "Quad Solutions is a full-service digital agency offering Growth Marketing, Creative Production, Digital Products, and AI Automation under one roof, trusted by 100+ brands worldwide.",
  email: "support@quadsolutions.ai",
  telephone: "+1-307-427-2883",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/quadsolutions.ai",
    "https://www.facebook.com/share/1L45uNjwa3/",
    "https://www.linkedin.com/company/quadsolution-ai/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-domain="awakeagency.webflow.io"
      data-wf-page="67a5fb8bc33c7f25ab4e52e0"
      data-wf-site="67a5fb8bc33c7f25ab4e52d9"
      data-wf-status="1"
      className={`${interTight.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className={`body ${interTight.className}`} suppressHydrationWarning>
        {/* Preload the hero gradient so `document.readyState === "complete"`
           (the event Webflow IX3 uses to fire its hero load animation) happens
           as early as possible — otherwise IX3 replays the animation after the
           gradient finishes downloading. */}
        <link
          rel="preload"
          as="image"
          href="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4efa959606e9a7d41cc67_background-gradient.webp"
          fetchPriority="high"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="webflow-w-mod"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: webflowTouchClass }}
        />
        {/* Preload critical animation scripts for faster hero content display */}
        <Script
          src="/assets/js/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/gsap/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/gsap/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/gsap/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        {children}
        <MetaPixel />
        <WhatsAppFloat />
        <WebflowRouteSync />
        <WebflowRuntime />
      </body>
    </html>
  );
}
