import Container from '@/components/Container'
import React from 'react'

function page() {
  return (
    <div>
      <Container Title='Tokens'>
      <div className='w-full h-1/5 rounded-xl p-2 flex gap-2 bg-white dark:bg-theme_gray-dark'>
          <div className='h-full w-1/2 flex flex-col justify-around bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark rounded-lg px-4 py-2'>
            <p className='font-semibold'>Tokens Worth</p>
            <p className='text-3xl font-semibold'>$7,414.91</p>
            <p className='text-sm text-green-500'>+3.99% ($284.26)</p>
          </div>
          <div className='w-1/2 flex flex-col justify-around bg-theme_black-light dark:bg-theme_gray_2F2F2F-dark rounded-lg px-4 py-2'>
            <p className='font-semibold'>Defi Worth</p>
            <p className='text-xl font-semibold'>$7,414.91</p>
            <p className='text-sm text-green-500'>+3.99% ($284.26)</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default page
