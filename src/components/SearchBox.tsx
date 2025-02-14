import { Search } from 'lucide-react'
import React from 'react'

function SearchBox() {
  return (
    <div className='bg-theme_gray_2-light dark:bg-theme_gray_2-dark w-2/5 h-10 rounded-lg flex gap-2 items-center p-2 shadow-inner dark:shadow-gray-900 border-2 border-theme_gray-light dark:border-theme_gray-dark'>
        <label htmlFor="inp" className='cursor-text'>
      <Search size={22} />
        </label>
      <input type="text" id='inp' placeholder='Search for a....' className='w-full rounded-lg bg-transparent outline-none border-none'/>
    </div>
  )
}

export default SearchBox
