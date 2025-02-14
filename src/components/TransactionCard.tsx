import { CircleCheck, CircleX, Clock5, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface TransactionCardProps {
    status: "success" | "pending" | "failed"
}

function TransactionCard({status}: TransactionCardProps) {
  return (
    <div className='flex bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark px-2 py-1 rounded-lg'>
                <div className='flex items-center gap-2 w-1/5'>
                    <Image src={"bitcoin-01.svg"} width={30} height={30} alt='img' />
                        <p className='text-sm'>Bitcoin</p>
                </div>
                <div className='w-1/5 flex justify-start items-center'>
                    <p className='font-semibold'>fdg45ewr232grh52rs...44gt</p>
    
                </div>
                <div className='w-1/4 flex gap-2 items-center justify-end'>
                    <p className='opacity-70'>zil1qw...a5qya</p>
                    <MoveRight className='opacity-70' />
                    <p className='opacity-70'>cdb5qw...t54ya</p>

                </div>
                <div className='w-1/6 flex justify-end items-center'>
                    {status === "success" ? <CircleCheck className='text-green-500' size={22} /> : status === "pending" ? <Clock5 className='text-yellow-500' size={22} /> : <CircleX size={22} className='text-red-500'/>}
                </div>
                <div className='w-1/5 flex flex-col items-end'>
                    <div className='flex flex-col items-end'>
                        <p className='text-green-500'>+$1457(32.25%)</p>
                        <p className='text-sm opacity-70'>$1,708.61</p>
                    </div>
                </div>
            </div>
  )
}

export default TransactionCard
