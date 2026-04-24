import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { WebflowRuntime } from "@/components/WebflowRuntime";
import { WebflowRouteSync } from "@/components/WebflowRouteSync";

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
  title: "Awake - Webflow HTML website template",
  description:
    "A sleek and modern Webflow template designed for creative agencies, startups, and freelancers. Elevate your online presence with stunning animations, responsive design, and seamless user experience.",
  robots: { index: false, follow: false },
  icons: {
    icon: "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e3732f7782e21e4dbbc032_favicon.svg",
    apple:
      "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e3742df2a2b68f26be1706_webclip.svg",
  },
};

const webflowTouchClass = `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`;

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
        <WebflowRouteSync />
        <WebflowRuntime />
      </body>
    </html>
  );
}
