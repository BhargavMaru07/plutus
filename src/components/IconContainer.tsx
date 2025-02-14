interface IconContainerProps {
    children: React.ReactNode;
}

const IconContainer: React.FC<IconContainerProps> = ({children}) => {
  return (
    <div className='bg-theme_gray_2-light dark:bg-theme_gray_2-dark h-10 rounded-lg flex gap-2 items-center p-2 shadow-inner dark:shadow-gray-900 border-2 border-theme_gray-light dark:border-theme_gray-dark'>
      {children}
    </div>
  )
}

export default IconContainer
