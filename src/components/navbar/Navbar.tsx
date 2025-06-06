'use client';
import { FC, useEffect } from 'react';
import logo from '@/assets/logo/logo.png';
import Link from 'next/link';
import { NAVIGATION_DATA } from '@/static/nav.static';
import Image from 'next/image';
import { Palette } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';


import { Button } from '../ui/button';
import { SparklesText } from '../magicui/sparkles-text';
import { motion } from 'motion/react';
import { getColors } from '@/utils/colors';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { ThemeNameType, useThemeStore } from '@/store';


interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = () => {
  // const { setTheme } = useTheme();
  const {theme,setTheme} = useThemeStore()
  const themeColors = getColors();
  console.log("=>>>",theme);


  return (
    <nav className='bg-primary text-primary-foreground w-screen h-20 grid place-items-center  fixed top-0 left-0 z-[9] shadow-md transition-[all]'>
      <div className='container flex justify-between items-center'>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo'
            className='w-10 rounded-full overflow-hidden'
          />
        </Link>
        <ul className='hidden md:flex gap-3.5  '>
          {NAVIGATION_DATA.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              className=''
            >
              <Link href={`#${item.href}`}>{item.title}</Link>
            </motion.li>
          ))}
        </ul>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <SparklesText>
                <Palette className='w-6 h-6 text-primary-foreground hover:cursor-pointer transition-transform duration-200 hover:rotate-12 hover:scale-110' />
              </SparklesText>
            </DialogTrigger>
            <DialogContent className='max-w-xs rounded-xl shadow-lg bg-gradient-to-br from-primary to-secondary'>
              <DialogHeader>
                <DialogTitle className='text-lg text-primary-foreground font-bold text-center mb-2'>
                  Choose Theme Color
                </DialogTitle>
                <DialogDescription className='text-center mb-4'>
                  <span className='text-muted-foreground'>
                    Personalize your experience
                  </span>
                </DialogDescription>
                <div className='flex justify-center gap-5 mt-2'>
                  {(themeColors as ThemeNameType[]).map(color => (
                
                      <Tooltip key={color}>
                        <TooltipTrigger>
                          <Button
                            className={` w-10 h-10 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform cursor-pointer`}
                            style={{
                              background: `linear-gradient(135deg, ${color}, #fff70033)`,
                            }}
                            
                            aria-label={`Set theme color to ${color}`}
                            onClick={() => setTheme(color)}
                          >
                            <span className='sr-only'>{color}</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{color}</TooltipContent>
                      </Tooltip>
               
                  ))}
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
