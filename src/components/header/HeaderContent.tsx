'use client';
import { motion } from 'motion/react';
import { FC } from 'react';

interface HeaderContentProps {
  className?: string;
}

const HeaderContent: FC<HeaderContentProps> = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className='flex h-full absolute  inset-25 sm:inset-40  flex-col  items-center justify-center transition-all duration-300 ease-in-out'>
      <motion.h3
        className='text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg mb-2'
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Rony Das
      </motion.h3>

      <motion.p
        className='w-[35rem] text-center my-3 max-w-full text-gray-200 font-medium drop-shadow-md'
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        As a Full-Stack Web Developer, I specialize in building scalable and
        real-time web applications with modern design and clean, maintainable
        code. Let’s turn your ideas into fast, responsive, and high-performing
        solutions.
      </motion.p>

      <motion.div
        className='flex items-center gap-5 mb-4'
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href='#contact'
          className='btn text-white font-bold shadow-lg hover:scale-105 hover:from-blue-500 hover:to-pink-500 transition-all duration-200'
        >
          Let&#39;s Talk
        </a>
        <a href='#myWork' className='btn bg-gray-200 text-black'>
          My Work
        </a>
      </motion.div>
    </div>
  );
};

export default HeaderContent;
