import React, { Suspense } from 'react'
import Header from './Header'
import Loading from './Loading'

interface IconContainerProps {
    Title: string;
    children: React.ReactNode;
}

const Container: React.FC<IconContainerProps> = ({Title, children}) => {
  return (
    <div>
      <div className="relative mx-auto md:rounded-2xl rounded-none shadow-md h-screen overflow-auto scrollbar-hide custom-hide-scrollbar">
      <Header Title={Title}></Header>
      <div className="h-[89vh] bg-theme_black-light dark:bg-theme_gray_1E1E1E-dark p-5 md:rounded-b-2xl md:rounded-r-2xl">
        <Suspense fallback={<Loading />}>
        {children}
        </Suspense>
      </div>
    </div>
    </div>
  )
}

export default Container
