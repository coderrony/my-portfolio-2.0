'use client';

import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

import { ProjectType } from './data';
import { ScrollArea } from '../ui/scroll-area';
import Link from 'next/link';

interface ProjectDetailsProps {
  project: ProjectType;
  className?: string;
}

const badgeColors: Record<string, string> = {
  frontend: 'bg-blue-100 text-blue-700',
  backend: 'bg-green-100 text-green-700',
  fullstack: 'bg-purple-100 text-purple-700',
};

const ProjectDetails: FC<ProjectDetailsProps> = ({ project, className }) => {
  return (
    <ScrollArea
      className={`max-h-[80vh] max-w-screen  scroll-smooth mx-auto  p-6 space-y-6 ${
        className || ''
      }`}
    >
      <div className='flex items-center gap-4'>
        <Image
          src={project.icon}
          alt={project.category}
          width={40}
          height={40}
          className='rounded'
        />
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            badgeColors[project.category] || 'bg-gray-100 text-gray-700'
          }`}
        >
          {project.category.toUpperCase()}
        </span>
      </div>
      <h2 className='text-xl md:text-2xl font-bold text-gray-800'>
        {project.title}
      </h2>

      {project.image && project.image.length > 0 && (
        <div className='flex gap-4 flex-wrap my-4 items-center justify-center'>
          {project.image.map((img, idx) => (
            <Image
              key={idx}
              src={img as StaticImageData}
              alt={project.title}
              className='rounded-lg border shadow-md object-contain w-full'
            />
          ))}
        </div>
      )}

      {project.video && (
        <div className='aspect-video w-full'>
          <iframe
            src={project.video
              .replace('youtu.be/', 'www.youtube.com/embed/')
              .replace('?si=', '?si=')}
            title={project.title}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-64 rounded-lg border shadow-sm'
          />
        </div>
      )}

      <p className='text-gray-700 text-sm leading-relaxed my-4'>
        {project.desc}
      </p>
      {project?.content && (
        <div className='prose prose-sm sm:prose lg:prose-lg max-w-none'>
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      )}

      <div className='flex flex-wrap gap-4 mt-6'>
        {project.demo && (
          <Link
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 group'
          >
            <svg
              className='w-5 h-5 text-white group-hover:scale-110 transition-transform'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
            Live Demo
          </Link>
        )}
        {project.github && (
          <Link
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-200 group'
          >
            <svg
              className='w-5 h-5 text-white group-hover:scale-110 transition-transform'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z' />
            </svg>
            GitHub
          </Link>
        )}
      </div>
    </ScrollArea>
  );
};

export default ProjectDetails;
