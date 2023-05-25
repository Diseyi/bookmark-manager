import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" w-11/12 xl:w-10/12 2xl:w-9/12 m-auto relative">
      {children}
    </div>
  )
}

export default Container