"use client";

import Link from "next/link"
import { useState } from "react";
import { SunMoon, Home, LayoutDashboard, Coins, ChartLine, ArrowLeftRight } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";

export default function Sidebar() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className="bg-theme_black-light dark:bg-theme_black-dark text-black dark:text-white h-20 md:h-screen flex justify-between items-center md:flex-col md:justify-start md:rounded-2xl p-3 text-center">
            <div className="bg-clip-text bg-theme_red-light dark:bg-theme_red-dark">
                <h1 className="text-transparent text-4xl font-semibold">PLUTUS</h1>
            </div>
            <hr className="m-5 w-2/3 border-black dark:border-white hidden md:block" />
            <div className="flex gap-5 items-center w-2/3 justify-end md:flex-col ">
                <div>
                    <ul className="flex md:flex-col gap-2 font-semibold">
                        <li className="hover:bg-theme_gray-dark rounded-lg px-4 py-2">
                            <Link href={"/"}><div className="flex gap-2 items-center"><Home size={22} /><span className="hidden sm:block">Home</span></div></Link>
                        </li>
                        <li className="hover:bg-theme_gray-dark rounded-lg px-4 py-2">
                            <Link href={"/dashboard"}><div className="flex gap-2 items-center"><LayoutDashboard size={22} /><span className="hidden sm:block">Dashboard</span></div></Link>
                        </li>
                        <li className="hover:bg-theme_gray-dark rounded-lg px-4 py-2">
                            <Link href={"/tokens"}><div className="flex gap-2 items-center"><Coins size={22} /><span className="hidden sm:block">Tokens</span></div></Link>
                        </li>
                        <li className="hover:bg-theme_gray-dark rounded-lg px-4 py-2 whitespace-nowrap">
                            <Link href={"/price-tracker"}><div className="flex gap-2 items-center"><ChartLine size={22} /><span className="hidden sm:block">Price Tracker</span></div></Link>
                        </li>
                        <li className="hover:bg-theme_gray-dark rounded-lg px-4 py-2">
                            <Link href={"/transactions"}><div className="flex gap-2 items-center"><ArrowLeftRight size={22} /><span className="hidden sm:block">Transactions</span></div></Link>
                        </li>
                    </ul>
                </div>
                <div className="bg-theme_gray_2F2F2F-light dark:bg-black rounded-xl cursor-pointer p-[3px] transition-all duration-500 md:mt-10" onClick={toggleDarkMode}>
                    <div className="relative flex gap-3">
                        <div className={`absolute w-1/2 bg-white dark:bg-theme_gray_2F2F2F-dark h-full rounded-lg transition-all duration-500 z-10 ${isDarkMode ? null : "translate-x-full"}`}></div>
                        <SunMoon size={28} className="z-20 block sm:hidden" />
                        <div className="z-20 py-1 px-2 text-white font-semibold hidden sm:block">
                            Darkmode
                        </div>
                        <div className="z-20 py-1 px-2 font-semibold hidden sm:block">
                            LightMode
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
            </div>
        </div>
    )
}