import React from "react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex gap-5 justify-center items-center">
      <div className="animate-jump">
        <Image src="/not-found.png" alt="Not Found" width={400} height={400}></Image>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="bg-clip-text bg-theme_red-light">
          <p className="text-transparent text-7xl">OOPS!</p>
        </div>
        <p className="text-xl">Somthing went wrong :&#40;</p>
        <p className="font-semibold text-lg">Page Not Found</p>
      </div>
    </div>
  );
}
