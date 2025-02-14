"use client";

import React from "react";
import SearchBox from "./SearchBox";
import IconContainer from "./IconContainer";
import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header({ Title }: { Title: string }) {
  const router = useRouter();
  return (
    <div>
      <div className="max-h-[11vh] w-full rounded-none bg-theme_black-light p-3 dark:bg-theme_black-dark md:w-[25vw] md:rounded-t-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-black dark:text-white">{Title}</h1>
      </div>
      <div className="absolute left-[25vw] top-0 h-[11vh] w-[52vw] bg-theme_black-light dark:bg-theme_black-dark">
        <div className="flex h-full w-full items-center justify-end gap-5 rounded-bl-2xl bg-white dark:bg-black">
          <SignedOut>
            <SignInButton >
              <Button variant="outline">Login</Button>
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
          <SearchBox></SearchBox>
          <IconContainer>
            <Bell />
          </IconContainer>
          <Button
            onClick={() => {
              router.push("/");
            }}
            variant={"theme_red"}
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
