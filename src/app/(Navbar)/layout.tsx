"use client"

import Navbar from "@/components/Navbar";
import useDarkMode from "@/hooks/useDarkMode";
import React, { ReactNode } from "react";

interface NavLayoutProps {
    children: ReactNode;
}

const NavLayout: React.FC<NavLayoutProps> = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

const { isDarkMode, toggleDarkMode } = useDarkMode();

    return <div>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex justify-center pt-24">{children}</div>
    </div>;
};

export default NavLayout;
