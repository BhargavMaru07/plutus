import Image from 'next/image'
import React from 'react'

function SmallCard() {
    return (
        <div className='flex bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark px-2 py-1 rounded-lg'>
            <div className='flex gap-2 w-1/4'>
                <Image src={"bitcoin-01.svg"} width={30} height={30} alt='img' />
                <div>
                    <p className='font-semibold'>BTC</p>
                    <p className='text-sm'>Bitcoin</p>
                </div>
            </div>
            <div className='w-1/4 flex justify-end'>
                <p className='font-semibold'>74.13%</p>

            </div>
            <div className='w-1/4 flex flex-col items-end'>
                <p className='font-semibold'>$1,708.61</p>
                <p className='text-sm text-green-500'>+$1457(32.25%)</p>
            </div>
            <div className='w-1/4 flex flex-col items-end'>
                <p className='font-semibold'>$26.64</p>
                <p className='text-sm opacity-70'>0.0456 ETH</p>
            </div>
        </div>
    )
}

export default SmallCard
