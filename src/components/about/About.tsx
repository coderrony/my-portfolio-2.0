import { FC } from 'react';
import { Award, BookUser, Eye } from 'lucide-react';
import Image from 'next/image';

import myImg2 from '@/assets/my-image/without-bg.png';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShineBorder } from '@/components/magicui/shine-border';
import Link from 'next/link';
interface AboutProps {
  className?: string;
}

const About: FC<AboutProps> = () => {
  return (
    <section
      id='about'
      className='md:py-10 bg-gradient-to-br from-white via-blue-50 to-primary/10'
    >
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-[35%_53%] gap-20 items-center'>
        {/* Image Section */}
        <div className='hidden lg:flex justify-center items-center'>
          <div className='relative rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/60 hover:scale-105 hover:shadow-primary transition-all duration-300 max-h-[38rem]'>
            <Image
              src={myImg2}
              alt='AboutImage'
              className='object-cover h-full w-full grayscale-0 hover:grayscale transition-all duration-300'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none' />
            <BorderBeam duration={10} size={150} />
          </div>
        </div>

        {/* Content Section */}
        <div className='space-y-8'>
          <h2 className='text-4xl font-extrabold text-primary text-center lg:text-left tracking-tight drop-shadow-lg'>
            About Me
          </h2>

          <div className='grid grid-cols-2 gap-8'>
            <div className='relative flex flex-col items-center p-6 bg-white/80 border border-primary/20 rounded-xl shadow-md hover:bg-primary hover:text-white transition-all duration-300'>
              <span className='flex justify-center items-center text-3xl mb-3 bg-primary/10 rounded-full p-3'>
                <BookUser />
              </span>
              <h5 className='text-lg font-semibold'>Projects</h5>
              <small className='text-sm opacity-80'>50+ Completed</small>
              <BorderBeam duration={8} size={200} />
            </div>

            <div className='relative flex flex-col items-center p-6 bg-white/80 border border-primary/20 rounded-xl shadow-md hover:bg-primary hover:text-white transition-all duration-300'>
              <span className='flex justify-center items-center text-3xl mb-3 bg-primary/10 rounded-full p-3'>
                <Award />
              </span>
              <h5 className='text-lg font-semibold'>Experience</h5>
              <small className='text-sm opacity-80'>2+ Years Working</small>
              <BorderBeam duration={8} size={300} />
            </div>
          </div>
          <div className='relative'>
            <p className='text-lg leading-relaxed text-gray-700 bg-white/70 rounded p-6 shadow-sm'>
              Hi, I&#39;m{' '}
              <span className='font-bold text-primary'>Rony Das</span>, a
              passionate Web Developer since 2019. I specialize in{' '}
              <span className='font-semibold'>
                React, Next.js, JavaScript, Python, Django
              </span>{' '}
              and more. My priority is to get your business online the right
              way, with industry-standard design and all the functionality you
              need. Let&#39;s connect and bring your project to life! See my
              resume below.
            </p>

            <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
          </div>

          <div className='flex justify-center lg:justify-start'>
            <Link
              href='https://drive.google.com/file/d/1VPC0OiigxGSmhBpTVghYIsQ_wGAQotSO/view?usp=drive_link'
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-200 text-lg'
            >
              My Resume <Eye size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
