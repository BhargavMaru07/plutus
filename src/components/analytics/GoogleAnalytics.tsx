"use client";

import Script from "next/script";

const GA_TRACKING_ID = "";

declare global {
  interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          function gtag(...args: any[]) {
            window.dataLayer.push(args);
          }


          gtag("js", new Date());
          gtag("config", GA_TRACKING_ID);
        }}
      />
    </>
  );
};
