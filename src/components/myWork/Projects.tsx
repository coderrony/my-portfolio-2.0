'use client';

import { FC } from 'react';
import { ProjectType } from './data';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import ProjectDetails from './ProjectDetails';

interface ProjectsProps {
  className?: string;
  projects: ProjectType[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className='w-full py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      <AnimatePresence mode='sync'>
        {projects.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
          >
            <div className='h-48 bg-gray-100 relative'>
              {item.image.length > 0 ? (
                <Image
                  src={item.image[0]}
                  title={item.title}
                  className='w-full h-full border-none object-cover hover:scale-110 transition-transform duration-500 ease-in-out'
                  loading='lazy'
                  alt='image'
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-gray-400'>
                  No Preview
                </div>
              )}
            </div>

            <div className='p-4 space-y-3'>
              <div className='flex items-center gap-2'>
                <Image
                  src={item.icon}
                  alt='Category Icon'
                  className='w-6 h-6'
                />
                <span className='text-xs text-gray-500 capitalize'>
                  {item.category}
                </span>
              </div>

              <h3 className='text-lg font-semibold text-primary line-clamp-2'>
                {item.title}
              </h3>

              <p className='text-sm text-gray-600 line-clamp-3'>{item.desc}</p>

              <div className='flex flex-col md:flex-row justify-between items-stretch sm:items-center pt-4 gap-2'>
                {item?.live && (
                  <Link
                    href={item.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1 px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-sm font-medium w-full sm:w-auto justify-center'
                  >
                    <svg
                      width='16'
                      height='16'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline-block'
                    >
                      <path
                        d='M14 3h7v7m0-7L10 14'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    Live live
                  </Link>
                )}
                {item?.github && (
                  <Link
                    href={item.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm font-medium w-full sm:w-auto justify-center'
                  >
                    <svg
                      width='16'
                      height='16'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline-block'
                    >
                      <path
                        d='M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                      />
                    </svg>
                    GitHub
                  </Link>
                )}

                <Dialog>
                  <DialogTrigger className='flex items-center gap-1 px-3 py-1 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium w-full sm:w-auto justify-center'>
                    <svg
                      width='16'
                      height='16'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline-block'
                    >
                      <path
                        d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        stroke='currentColor'
                        strokeWidth='2'
                      />
                      <path
                        d='M2 12C3.8 7 7.6 4 12 4s8.2 3 10 8c-1.8 5-5.6 8-10 8s-8.2-3-10-8Z'
                        stroke='currentColor'
                        strokeWidth='2'
                      />
                    </svg>
                    View
                  </DialogTrigger>
                  <DialogContent className='w-full max-w-6xl sm:rounded-2xl p-0 overflow-hidden'>
                    <ProjectDetails project={item} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
