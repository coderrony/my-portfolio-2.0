'use client';
import { FC } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
interface ScrollBarProps {
  className?: string;
}

const ScrollBarNav: FC<ScrollBarProps> = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <motion.div
      style={{ scaleX }}
      className='bg-primary rounded-4xl w-full h-1 fixed top-0 z-50'
    ></motion.div>
  );
};

export default ScrollBarNav;
