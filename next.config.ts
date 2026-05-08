import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/service-details",
        has: [{ type: "query", key: "service", value: "marketing" }],
        destination: "/growth-marketing",
        permanent: true,
      },
      {
        source: "/service-details",
        has: [{ type: "query", key: "service", value: "creative" }],
        destination: "/creative-production",
        permanent: true,
      },
      {
        source: "/service-details",
        has: [{ type: "query", key: "service", value: "digital" }],
        destination: "/digital-products",
        permanent: true,
      },
      {
        source: "/service-details",
        has: [{ type: "query", key: "service", value: "ai" }],
        destination: "/ai-automation",
        permanent: true,
      },
      {
        source: "/service-details",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service-details/paid-advertising",
        destination: "/growth-marketing/paid-advertising",
        permanent: true,
      },
      {
        source: "/service-details/organic-marketing",
        destination: "/growth-marketing/organic-marketing",
        permanent: true,
      },
      {
        source: "/service-details/strategic-optimization",
        destination: "/growth-marketing/strategic-optimization",
        permanent: true,
      },
      {
        source: "/service-details/visual-content-creation",
        destination: "/creative-production/visual-content-creation",
        permanent: true,
      },
      {
        source: "/service-details/video-post-production",
        destination: "/creative-production/video-post-production",
        permanent: true,
      },
      {
        source: "/service-details/ai-generated-content",
        destination: "/creative-production/ai-generated-content",
        permanent: true,
      },
      {
        source: "/service-details/web-development",
        destination: "/digital-products/web-development",
        permanent: true,
      },
      {
        source: "/service-details/mobile-app-development",
        destination: "/digital-products/mobile-app-development",
        permanent: true,
      },
      {
        source: "/service-details/custom-software-solutions",
        destination: "/digital-products/custom-software-solutions",
        permanent: true,
      },
      {
        source: "/service-details/intelligent-automation",
        destination: "/ai-automation/intelligent-automation",
        permanent: true,
      },
      {
        source: "/service-details/ai-communication-tools",
        destination: "/ai-automation/ai-communication-tools",
        permanent: true,
      },
      {
        source: "/service-details/advanced-ai-systems",
        destination: "/ai-automation/advanced-ai-systems",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
