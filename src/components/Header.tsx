"use client";

import React from 'react'
import SearchBox from './SearchBox'
import IconContainer from './IconContainer'
import { Bell } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

function Header({Title}:{Title:string}) {
  const router = useRouter();
  return (
    <div>
        <div className="bg-theme_black-light dark:bg-theme_black-dark md:rounded-t-2xl rounded-none max-h-[11vh] md:w-[25vw] w-full p-3">
                <h1 className="text-3xl text-black dark:text-white font-bold text-center mb-8">
                  {Title}
                </h1>
              </div>
              <div className='absolute top-0 left-[25vw] h-[11vh] w-[52vw] bg-theme_black-light dark:bg-theme_black-dark'>
                <div className='w-full h-full flex justify-end gap-5 items-center bg-white dark:bg-black rounded-bl-2xl'>  
                  <SearchBox></SearchBox>
                  <IconContainer><Bell /></IconContainer>
                  <Button onClick={() => {router.push("/")}} variant={'theme_red'}>Connect</Button>
                </div>
              </div>
    </div>    
)
}

export default Header
