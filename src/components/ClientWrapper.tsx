"use client";

import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

export default function ClientWrapper() {
  return (
    <>
      <GoogleAnalytics />
      <Analytics />
    </>
  );
}
