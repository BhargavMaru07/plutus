"use client";

import { APIDataContext } from "@/hooks/UseApi";
import { useContext } from "react";
import CardH from "@/components/CardH";
import Container from "@/components/Container";

export default function PriceTrackerPage() {
  const context = useContext(APIDataContext);

  if (!context) {
    throw new Error("Error in Context");
  }

  const { data } = context;

  return (
    <Container Title="Cryptocurency Prices">
      <div className="h-screen overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 justify-between px-4 pt-5 text-xl font-bold">
            <p className="w-1/5">Coin</p>
            <p className="w-1/5 text-end lg:block hidden">24h%</p>
            <p className="w-1/5 text-end lg:block hidden">High</p>
            <p className="w-1/5 text-end lg:block hidden">Low</p>
            <p className="lg:w-1/5 text-end">Current Price</p>
          </div>
          <hr className="border-black dark:border-white mb-4" />
          {data.map((coin) => (
            <CardH key={coin.id} coin={coin} classname="relative overflow-hidden text-black dark:text-white bg-theme_gray-light dark:bg-theme_gray-dark rounded-lg" />
          ))}
        </div>
      </div>
    </Container>
  );
}
