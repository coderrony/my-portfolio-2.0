'use client';

import React, { forwardRef, useRef } from 'react';
import HeaderImage from '@/assets/my-image/ronyDasImageOne.jpg';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import Image from 'next/image';

import typeScriptIcon from '@/assets/typescript.png';
import nextjsSvg from '@/assets/nextjs-icon.svg';
import reactSvg from '@/assets/react-js-icon.svg';
import nodeJsSvg from '@/assets/nodejs-icon.svg';
import dockerSvg from '@/assets/docker-icon.svg';
import mongodbSvg from '@/assets/mongodb-icon.svg';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

export function HeaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className='relative   flex lg:w-5xl   mx-auto items-center justify-center overflow-hidden p-5 '
      ref={containerRef}
    >
      <div className='flex size-full    flex-col items-stretch justify-between gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <Circle ref={div1Ref} className='border-3 border-primary' >
            <Image src={reactSvg} alt='React js' className='w-full h-full' />
          </Circle>

          <Circle ref={div5Ref} className='border-3 border-primary' >
            <Image src={nodeJsSvg} alt='NodeJs' className='w-full h-full' />
          </Circle>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Circle ref={div2Ref} className='border-3 border-primary'>
            <Image
              src={typeScriptIcon}
              alt='typescript'
              className='w-full h-full'
            />
          </Circle>

          <span className='hidden sm:block text-xs md:text-lg font-bold  drop-shadow text-white z-10'>
            Typescript
          </span>

          <div
            ref={div4Ref}
            // className='w-40 h-52 sm:w-72 sm:h-80  rounded-[9rem_9rem_2rem_2rem] overflow-hidden z-30'
            className='w-[120px] h-52 sm:w-72 sm:h-80  rounded-[9rem_9rem_2rem_2rem] overflow-hidden z-30 '
          >
            <Image src={HeaderImage} alt='Header Portait' className='ring-2 ring-primary' />
          </div>


          <span className='hidden sm:block  text-xs md:text-lg font-bold text-white drop-shadow z-10'>
            Developer
          </span>

          <Circle ref={div6Ref} className='border-3 border-primary'>
            <Image src={nextjsSvg} alt='docker' className='w-full h-full' />
          </Circle>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <Circle ref={div3Ref} className='border-3 border-primary'>
            <Image src={dockerSvg} alt='docker' className='w-full h-full' />
          </Circle>
          <Circle ref={div7Ref} className='border-3 border-primary'>
            <Image src={mongodbSvg} alt='docker' className='w-full h-full' />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
     
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
