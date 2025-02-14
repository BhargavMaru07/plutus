import Link from "next/link";
import { MoveUp, MoveDown } from "lucide-react";
import Image from "next/image";


interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    price_change_percentage_24h: number;
}

interface CardHProps {
    coin: Coin;
    classname?: string;
}

export default function CardH({ coin, classname }: CardHProps) {
    return (
        <div className={classname ? classname : "text-black dark:text-white"}>
            <Link href={`price-tracker/${coin.id}`}>
                <div className="flex items-center gap-4 justify-between px-4 py-5 text-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_infinite]"></div>
                    <div className="flex gap-2 items-center w-1/5 font-semibold">
                        {/* <img
                            src={coin.image}
                            alt={coin.name}
                            width={30}
                            height={30} 
                        /> */}

                        <Image src={coin.image} alt={coin.name} width={32} height={32} />
                        <h2 className="text-xlfont-semibold">
                            {coin.name} - {coin.symbol}
                        </h2>
                    </div>
                    <p className="text-lg lg:block hidden w-1/5">
                        <span className={`flex justify-end ${coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`} >{coin.price_change_percentage_24h > 0 ? <MoveUp /> : <MoveDown />}{coin.price_change_percentage_24h}%</span>
                    </p>
                    <p className="text-lg lg:block hidden  w-1/5 text-end">
                         ${coin.high_24h}
                    </p>
                    <p className="text-lg lg:block hidden w-1/5 text-end">
                         ${coin.low_24h}
                    </p>
                    <p className="text-lg block w-1/5 text-end">
                         ${coin.current_price}
                    </p>
                </div>
            </Link>
        </div>
    )
}