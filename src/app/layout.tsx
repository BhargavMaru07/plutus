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
import useDarkMode from "@/hooks/useDarkMode";


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
          <body className={`${ubuntu.className}`}>
            <GoogleAnalytics />
            <Analytics />
            <div className="grid md:grid-cols-[20vw_auto] grid-cols-1  md:gap-2 bg-white dark:bg-black md:p-1 p-0">
              <div>
                <Sidebar />
              </div>
              <div>
                {children}
              </div>
            </div>
            <footer>
              <Footer />
            </footer>
          </body>
        </html>
      </APIDataProvider>
    </ClerkProvider>
  );
}
