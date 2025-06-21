'use client';
import { FC, useRef } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { awardsInfo } from './data';

interface CertificateAndAwardsProps {
  className?: string;
}

const CertificateAndAwards: FC<CertificateAndAwardsProps> = ({ className }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section
      id='CertificateAndAwards'
      className='relative md:py-8 bg-white/80 overflow-hidden '
    >
      {/* Blurred gradient blobs */}
      <div className='absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl pointer-events-none z-0' />
      <div className='absolute bottom-0 right-0 w-52 h-52 sm:w-80 sm:h-80 bg-gradient-to-tr from-purple-300 via-blue-200 to-transparent opacity-40 rounded-full blur-2xl pointer-events-none z-0' />

      <div
        className={`container mx-auto max-w-3xl px-4 py-8 sm:p-6 space-y-8 sm:space-y-10 relative z-10 ${
          className || ''
        }`}
      >
        <h2 className='text-3xl sm:text-4xl font-extrabold text-primary text-center tracking-tight drop-shadow-lg'>
          Certificates & Awards
        </h2>

        <Carousel
          plugins={[plugin.current]}
          className='w-full max-w-xs sm:max-w-xl mx-auto'
        >
          <CarouselContent className='p-5'>
            {awardsInfo.map(item => (
              <CarouselItem key={item.id} className='flex justify-center'>
                <div className='relative    rounded-xl shadow-xl p-6 w-full max-w-md flex flex-col items-center transition-transform hover:scale-[1.02]'>
                  {item.image && (
                    <div className='w-w-36 h-36 mb-4 rounded-xl overflow-hidden shadow-lg   '>
                      <a href={item.link} target='_blank'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          className='object-contain w-full h-full'
                          priority
                        />
                      </a>
                    </div>
                  )}
                  <h4 className=' sm:text-xl font-bold text-center mb-1 text-neutral-900 '>
                    {item.title}
                  </h4>
                  <div className='text-xs sm:text-sm text-neutral-600  mb-2 text-center'>
                    <span className='font-semibold'>{item.issuer}</span>
                    {' • '}
                    <span>{item.date}</span>
                  </div>
                  {item.description && (
                    <p className='text-neutral-700 dark:text-neutral-300 text-center mb-4 text-sm'>
                      {item.description}
                    </p>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block px-2 py-1 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-base font-bold sm:font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition'
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default CertificateAndAwards;
