import React, { Suspense } from 'react'
import Header from './Header'
import Loading from './Loading'

interface IconContainerProps {
  Title: string;
  children: React.ReactNode;
}

const Container: React.FC<IconContainerProps> = ({ Title, children }) => {
  return (
    <div className="relative mx-auto md:rounded-2xl rounded-none shadow-md h-screen flex flex-col">
      <Header Title={Title} />
      <div className="flex-1 bg-theme_black-light overflow-hidden dark:bg-theme_gray_1E1E1E-dark p-5 md:rounded-b-2xl md:rounded-r-2xl flex flex-col">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
};


export default Container
