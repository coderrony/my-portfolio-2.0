"use client"
import { FC } from 'react';
import { HeaderAnimation } from './HeaderAnimation';
import HeaderContent from './HeaderContent';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = () => {
  return (
    <header id='#home' className='relative w-full h-[600px] sm:h-[680px] md:h-[700px]  transition-all duration-300 ease-in-out bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-black/80  shadow-2xl'>
      <HeaderAnimation />
      <HeaderContent />
    </header>
  );
};

export default Header;
