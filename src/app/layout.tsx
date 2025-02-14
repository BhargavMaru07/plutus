// "use client";

import { siteConfig } from "@/config/siteConfig";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import { APIDataProvider } from "@/hooks/UseApi";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <APIDataProvider>
        <html lang="en">
          <body className={`${ubuntu.className} min-h-screen flex flex-col`}>
            <GoogleAnalytics />
            <Analytics />
            <div className="h-screen grid md:grid-cols-[16vw_auto] grid-cols-1  md:gap-2 bg-white dark:bg-black md:p-0 p-0">
                <Sidebar  />
              <div>
                {children}
              </div>
            </div>

          </body>
        </html>
      </APIDataProvider>
    </ClerkProvider>
  );
}
