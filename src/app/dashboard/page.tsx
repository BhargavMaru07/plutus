import Container from '@/components/Container'
import { Graph } from '@/components/Graph'
import SmallCard from '@/components/SmallCard'
import Image from 'next/image'

function page() {
  return (
    <Container Title='Dashboard'>
      <div className='overflow-hidden flex flex-col'>
        <div className='w-full h-1/5 rounded-xl p-2 flex gap-2 bg-white dark:bg-theme_gray-dark'>
          <div className='h-full w-1/3 flex flex-col justify-around bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark rounded-lg px-4 py-2'>
            <p className='font-semibold'>Tokens Worth</p>
            <p className='text-3xl font-semibold'>$7,414.91</p>
            <p className='text-sm text-green-500'>+3.99% ($284.26)</p>
          </div>
          <div className='w-1/3 flex flex-col justify-around bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark rounded-lg px-4 py-2'>
            <p className='font-semibold'>Defi Worth</p>
            <p className='text-xl font-semibold'>$7,414.91</p>
            <p className='text-sm text-green-500'>+3.99% ($284.26)</p>
          </div>
          <div className='w-1/3 flex flex-col justify-around bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark rounded-lg px-4 py-2'>
            <p className='font-semibold'>Wallet Worth</p>
            <p className='text-xl font-semibold'>$7,414.91</p>
            <p className='text-sm text-green-500'>+3.99% ($284.26)</p>

          </div>
        </div>
        <div className='h-3/5'>
          <div className='flex flex-col gap-2'>
            <div className='w-2/3'>
              <Graph coinId="bitcoin"></Graph>
            </div>
            <div className='w-2/3 overflow-auto bg-white flex flex-col gap-2 dark:bg-theme_gray-dark p-4 rounded-xl'>
              <div className='flex gap-5'>
                <div className='w-1/2 h-20 flex flex-col justify-around bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark rounded-lg px-4 py-2'>
                  <p className='font-semibold'>Dominant token</p>
                  <div className='flex justify-between'>
                    <div className='flex gap-2'>
                      <Image src={"bitcoin-01.svg"} width={20} height={20} alt='img' />
                      <p>ALMX</p>
                    </div>
                    <p className='text-green-500'>+$7,414.91(27.27%)</p>
                  </div>
                </div>
                <div className='w-1/2 h-20 flex flex-col justify-around bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark rounded-lg px-4 py-2'>
                  <p className='font-semibold'>Tokens</p>
                  <div className='flex justify-between'>
                    <p className='text-2xl font-semibold'>37</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default page
