'use client';
import { FC, useState } from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import { BorderBeam } from '@/components/magicui/border-beam';

interface ProjectsCategoriesProps {
  className?: string;
  categories: { category: string; icon: StaticImageData }[];
  filterProjectsHandle: (v: string) => void;
}

const ProjectsCategories: FC<ProjectsCategoriesProps> = ({
  categories,
  filterProjectsHandle,
}) => {
  const [activeTab, setActiveTab] = useState(categories[0].category);

  const handleActivity = (category: string) => {
    setActiveTab(category);
    filterProjectsHandle(category);
  };

  return (
    <div className={`flex items-center justify-center py-8`}>
      <ul className='flex  flex-wrap w-full gap-4 justify-center items-center rounded-xl shadow-lg px-6 py-3 backdrop-blur-md'>
        {categories.map(item => (
          <motion.li
            key={item.category}
            className={`cursor-pointer relative flex flex-col items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
              item.category === activeTab
                ? 'bg-primary text-primary-foreground font-bold shadow'
                : 'hover:bg-fuchsia-200 text-gray-700'
            }`}
            onClick={() => handleActivity(item.category)}
            whileTap={{ scale: 0.95 }}
          >
            <div className='w-10 h-10 flex items-center justify-center mb-1 rounded-full bg-white shadow-inner overflow-hidden'>
              <Image
                width={28}
                height={28}
                src={item.icon}
                alt={`${item.category} icon`}
                className='object-contain'
                priority
              />
            </div>
            <span
              className={`text-[15px] tracking-wide capitalize ${
                item.category === activeTab
                  ? 'text-primary-foreground'
                  : 'text-gray-700'
              }`}
              style={{
                letterSpacing: '0.03em',
                fontWeight: item.category === activeTab ? 600 : 500,
                textShadow:
                  item.category === activeTab
                    ? '0 1px 4px rgba(0,0,0,0.10)'
                    : 'none',
              }}
            >
              {item.category}
            </span>
          </motion.li>
        ))}
         <BorderBeam duration={8} size={120} />
      </ul>
    </div>
  );
};

export default ProjectsCategories;
