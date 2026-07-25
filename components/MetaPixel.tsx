"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  META_PIXEL_ENABLED,
  META_PIXEL_ID,
  trackPixelEvent,
} from "@/lib/metaPixel";

const basePixelCode = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;

/** Phone / email / WhatsApp links are direct conversions for us, so they report as `Contact`. */
function contactMethodFor(href: string): string | null {
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) return "whatsapp";
  return null;
}

/**
 * Meta (Facebook) Pixel, gated to production builds — see `META_PIXEL_ENABLED`. Kept as a
 * wrapper so the tracker's hooks are never conditionally called.
 */
export function MetaPixel() {
  if (!META_PIXEL_ENABLED) return null;
  return <MetaPixelTracker />;
}

/**
 * The base snippet fires the first PageView itself, so the effects below only report
 * subsequent client-side route changes and outbound contact clicks.
 */
function MetaPixelTracker() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    trackPixelEvent("PageView");
  }, [pathname]);

  // Delegated so every tel:/mailto:/wa.me link is covered — including the floating WhatsApp
  // button, the footer, and any Webflow-authored markup — without touching each component.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href) return;
      const method = contactMethodFor(href);
      if (method) trackPixelEvent("Contact", { contact_method: method });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: basePixelCode }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
