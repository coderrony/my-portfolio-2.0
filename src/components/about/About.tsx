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
      className='md:py-8 bg-gradient-to-br from-white via-blue-50 to-primary/10'
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
              <small className='text-sm opacity-80'>25+ Completed</small>
              <BorderBeam duration={8} size={200} />
            </div>

            <div className='relative flex flex-col items-center p-6 bg-white/80 border border-primary/20 rounded-xl shadow-md hover:bg-primary hover:text-white transition-all duration-300'>
              <span className='flex justify-center items-center text-3xl mb-3 bg-primary/10 rounded-full p-3'>
                <Award />
              </span>
              <h5 className='text-lg font-semibold'>Practical Experience</h5>
              <small className='text-sm opacity-80'>
                Building Real Projects
              </small>
              <BorderBeam duration={8} size={300} />
            </div>
          </div>
          <div className='relative'>
            <p className='relative mt-4 bg-gradient-to-br from-white/90 via-blue-50/80 to-primary/10 border border-primary/20 rounded-xl shadow-lg p-6 lg:p-8 text-sm lg:text-base leading-relaxed text-gray-800 backdrop-blur-md transition-all duration-300 hover:shadow-primary/40'>
              <span className='block text-xl lg:text-2xl font-bold text-primary mb-2'>
                👋 Hi, I&apos;m{' '}
                <span className='text-primary font-extrabold'>Rony Das</span>{' '}
                <span className='text-base text-gray-500 font-medium'>
                  (26 y/o)
                </span>
              </span>
              <span className='block mb-3 text-gray-600 italic'>
                Passionate about building real-time, scalable web applications.
              </span>
              <span className='block mb-3'>
                My programming journey began in{' '}
                <span className='font-semibold text-primary'>2019</span>,
                sparked by curiosity about real-time systems in stock markets
                and trading. This fascination led me to explore how such robust
                applications are engineered.
              </span>
              <span className='block mb-3'>
                I started with{' '}
                <span className='font-semibold text-blue-700'>C</span> and{' '}
                <span className='font-semibold text-blue-700'>C++</span>, then
                joined{' '}
                <span className='font-semibold text-primary'>
                  CSE Fundamentals with Phitron
                </span>{' '}
                to master problem-solving, logic, and data structures. I honed
                my skills through countless problems on online judges and
                participated in various courses and bootcamps.
              </span>
              <span className='block mb-3'>
                With a solid foundation, I transitioned to development, building
                both real-world and practice projects. Currently, I’m focused on{' '}
                <span className='font-semibold text-primary'>
                  system design
                </span>{' '}
                and scalable architectures.
              </span>
              <span className='block'>
                I thrive on challenging projects and am quick to adapt to any
                tech stack.<span className='font-semibold text-primary'> My goal is to make meaningful contributions to every
                team I join. </span>
              </span>
            </p>

            <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
          </div>

          <div className='flex justify-center lg:justify-start'>
            <Link
              href={process.env.MY_RESUME!}
              target='_blank'
              rel='noopener noreferrer'
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
