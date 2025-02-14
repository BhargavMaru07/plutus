"use client";

import Link from "next/link";
import { useState } from "react";
import { ChartLine, Bot, SunMoon } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Navbar({ toggleDarkMode, isDarkMode }: { toggleDarkMode: () => void; isDarkMode?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between bg-theme_black-light p-5 text-black dark:bg-theme_black-dark dark:text-white">
      <div className="bg-theme_red-light bg-clip-text p-2 dark:bg-theme_red-dark">
        <p className="text-3xl font-bold text-transparent">PLUTUS</p>
      </div>
      <div className="flex gap-2 text-xl md:gap-10">
        <div onClick={toggleDarkMode} className="flex cursor-pointer gap-2 px-1 py-1 md:px-2">
          <SunMoon size={28} />
          <div className="hidden md:block">{isDarkMode ? "Lightmode" : "Darkmode"}</div>
        </div>
        <ul className="flex gap-2 md:gap-10">
          <li>
            <Link href="/prediction">
              <div className="flex gap-2 px-2 py-1">
                <Bot size={28} />
                <span className="hidden md:block">AI Prediction</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/price-tracker">
              <div className="rounded-lg bg-theme_red-light px-2 py-1">
                <p className="flex gap-2 text-white">
                  <ChartLine size={28} color="white" /> <span className="hidden md:block">Price Tracker</span>
                </p>
              </div>
            </Link>
          </li>
          <li>
            <SignedOut>
              <SignInButton>
                <Button variant="secondary" size={"lg"}>Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </li>
        </ul>
      </div>
    </div>
  );
}
