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
import UserSync from "@/components/UserSync";
import ClientWrapper from "@/components/ClientWrapper";

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
            <UserSync /> {/* ✅ Runs on the server but does not render anything */}
            <ClientWrapper /> {/* ✅ Client components like analytics */}
            <div className="grid grid-cols-1 bg-white p-0 dark:bg-black md:grid-cols-[20vw_auto] md:gap-2 md:p-1">
              <div>
                <Sidebar />
              </div>
              <div>{children}</div>
            </div>

          </body>
        </html>
      </APIDataProvider>
    </ClerkProvider>
  );
}
