'use client';
import { FC, useState } from 'react';
import ProjectsCategories from './ProjectsCategories';
import Projects from './Projects';
import data from './data';
import allImg from '@/assets/select-all.png';

interface MyWorkProps {
  className?: string;
}

const MyWork: FC<MyWorkProps> = () => {
  const [projects, setProjects] = useState(data);
  const seen = new Set();
  const uniqueCategory = [{ category: 'all', icon: allImg }];

  // console.log("projects ",projects);
  

  for (const item of data) {
    if (!seen.has(item.category)) {
      seen.add(item.category);
      uniqueCategory.push({ category: item.category, icon: item.icon });
    }
  }

  const filterProjectsHandle = (category: string) => {
    if (category === 'all') {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      project => project.category === category,
    );
    setProjects(filterProjects);
  };

  return (
    <section
      id='myWork'
      className={`md:py-8 bg-gradient-to-br from-white via-blue-50 to-primary/10`}
    >
      <div className='container mx-auto px-4 flex flex-col items-center'>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-primary text-center tracking-tight drop-shadow-lg'>
          My Work
        </h2>
        {/* Add your work/project cards here */}
        <ProjectsCategories
          categories={uniqueCategory}
          filterProjectsHandle={filterProjectsHandle}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default MyWork;
