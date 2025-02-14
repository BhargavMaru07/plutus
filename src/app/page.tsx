"use client"

import Container from '@/components/Container'
import Stratergy from '@/components/Stratergy'
import React from 'react'

function page() {
  return (
    <div>
      <Container Title="Home">
        <div className='flex gap-2'>
          <div className='w-2/3 h-full'>

          </div>
          <div className='w-1/3 h-full'>
            <Stratergy />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page








// "use client"

// import Link from 'next/link';
// import Card from '@/components/Card';
// import useDarkMode from "@/hooks/useDarkMode";
// import Navbar from "@/components/Navbar";
// import { Button } from '@/components/ui/button';
// import { ClerkProvider } from '@clerk/nextjs';


// export default function Home() {

//   interface Data {
//     name: string;
//     description: string;
//     image: string;
//     leader?:boolean;
//     badge?:string;

    
//   }

//   const data: Data[] =[
//     {
//       name:"Priyansh Patel",
//       description:"A blockchain developer",
//       image:"./profile-pic-01.jpeg",
//       leader:true,
//       badge:"Solana Developer"
//     },
//     {
//       name:"Gunj Patel",
//       description:"An AI model trainer",
//       image:"./profile-pic-01.jpeg",
//       badge:"AI Developer",
//     },
//     {
//       name:"Bhargav Maru",
//       description:"A backend developer",
//       image:"./profile-pic-01.jpeg",
//       badge:"Backend Developer",
//     },
//     {
//       name:"Jay Odedra",
//       description:"A frontend developer",
//       image:"./profile-pic-01.jpeg",
//       badge:"Frontend Developer",
//     }
//   ]

//   const {isDarkMode, toggleDarkMode} = useDarkMode();


//   return (
//       <div>
//         <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//         <div className="h-screen w-full overflow-x-hidden bg-white dark:bg-theme_black-dark">
//           <div className="grid h-screen w-full grid-cols-1 items-center gap-4 p-4 text-center md:grid-cols-[750px_600px]">
//             <div className="">
//               <p className="mb-4 text-6xl dark:text-white">Hey!</p>
//               <div className="mb-4 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text">
//                 <p className="mb-10 text-6xl font-bold text-transparent">let&apos;s connect your wallet</p>
//               </div>
//               <Link href={"http://plutus.priyanshpatel.site"}>
//                 <Button variant="theme_red">Connect your Wallet</Button>
//               </Link>
//             </div>
//             <div className="relative ml-28 hidden w-full transform items-center justify-center transition-all duration-500 ease-in-out hover:scale-110 md:flex">
//               <img src="bitcoin-01.svg" alt="price" className="absolute left-10 w-60 animate-jump rounded-md" />
//               <img src="ethereum.png" alt="price" className="absolute left-56 w-96 animate-jump rounded-md" />
//               <img src="solana.png" alt="price" className="absolute top-1/2 w-96 animate-jump rounded-md" />
//             </div>
//           </div>
//         </div>
//         <div className="mb-32 flex h-full w-full flex-col justify-center gap-10 overflow-x-hidden bg-white text-center dark:bg-theme_black-dark">
//           <div className="bg-theme_red-light bg-clip-text text-3xl">
//             <p className="font-bold text-transparent">Meet Our Team</p>
//           </div>
//           <div className="w-fullh-full flex flex-wrap justify-center gap-5">
//             {data.map((item, index) => (
//               <Card key={index} data={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//   );
// }
