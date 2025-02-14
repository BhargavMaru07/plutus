"use client"

import { APIDataContext } from "@/hooks/UseApi";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { useParams } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";
import { Graph } from "@/components/Graph";
import { formatLargeNumber } from "@/helper/helper";


export default function Page() {
  const { id } = useParams();

  const context = useContext(APIDataContext);

  if (!context) {
    throw new Error("Error in Context");
  }

  const { data } = context;
  const coin = data.find((coin) => coin.id === id);


  if (!data.length) {
    return <div>Loading...</div>;
  }

  if (!coin) {
    return <div>Coin not found. Please check the URL.</div>;
  }

  return (
    <div className="flex flex-col h-screen overflow-auto">
      <Suspense fallback={<Loading />}>
        <div className="flex justify-between p-3 bg-theme_gray-light dark:bg-theme_gray-dark text-black dark:text-white rounded-t-2xl">
          <div className="flex gap-4">
            <div>
              <Image src={coin.image} alt={coin.symbol} width={40} height={40} />
            </div>
            <div>
              <p className="font-semibold">{coin.symbol}</p>
              <p>{coin.name}</p>
            </div>
          </div>
          <div>
            <p>
              <strong>Currunt price: </strong>${coin.current_price}
            </p>
          </div>
        </div>
        <div className="bg-theme_gray-light dark:bg-theme_gray-dark rounded-b-2xl">
          <Graph coinId={coin.id}></Graph>
        </div>
        <div className="w-full h-full text-black dark:text-white bg-theme_gray-light dark:bg-theme_gray-dark rounded-none md:rounded-t-lg md:rounded-b-2xl grid grid-cols-1 lg:grid-cols-3 gap-7 justify-between p-5 mt-2 ">
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">market_cap_rank
              :</strong> ${coin.market_cap_rank}
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">Current Price:</strong> ${coin.current_price}
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">
              Market Cap:</strong> ${formatLargeNumber(coin.market_cap)}
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">Total volume
              :</strong> ${formatLargeNumber(coin.total_volume)}
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">Price change 24H
              :</strong> <span className={coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>{coin.price_change_percentage_24h}%</span>
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">Price change 24H
              :</strong> <span className={coin.price_change_24h > 0 ? "text-green-500" : "text-red-500"}>${formatLargeNumber(coin.price_change_24h)}</span>
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">High 24H
              :</strong> ${coin.high_24h}
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">Low 24H
              :</strong> ${coin.low_24h}
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">ATH(All Time High) Change
              :</strong> <span className={coin.ath_change_percentage > 0 ? "text-green-500" : "text-red-500"}>{coin.ath_change_percentage}%</span>
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">Market cap change 24H
              :</strong> <span className={coin.market_cap_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>{coin.market_cap_change_percentage_24h}%</span>
          </p>
          <p className="text-lg flex gap-1 py-4">
            <strong className="sm:block">Market cap change 24H
              :</strong> <span className={coin.market_cap_change_24h > 0 ? "text-green-500" : "text-red-500"}>${formatLargeNumber(coin.market_cap_change_24h)}</span>
          </p>
          <p className="text-lg flex gap-1 py-4 opacity-50">
            <strong className="sm:block">Last Updated
              :</strong>{coin.last_updated}
          </p>
        </div>
      </Suspense>
    </div>
  );
}