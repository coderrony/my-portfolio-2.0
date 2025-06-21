import { FC } from 'react';
import { BorderBeam } from '../magicui/border-beam';

import { skillsData } from './skillsData';


interface MySkillsProps {
  className?: string;
}

const MySkills: FC<MySkillsProps> = ({ className }) => {
  return (
    <section id='mySkills' className="relative md:py-8 bg-white/80 overflow-hidden">
      {/* Cool background: blurred gradient blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-52 h-52 sm:w-80 sm:h-80 bg-gradient-to-tr from-purple-300 via-blue-200 to-transparent opacity-40 rounded-full blur-2xl pointer-events-none z-0" />
      <div className={`container mx-auto max-w-3xl px-4 py-8 sm:p-6 space-y-8 sm:space-y-10 relative z-10 ${className || ''}`}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center  bg-clip-text bg-gradient-to-r   text-primary drop-shadow mb-4 sm:mb-6">
          My Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillsData.map(({ title, skills }) => (
            <div
              key={title}
              className="rounded-xl p-4 sm:p-5 bg-gradient-to-br shadow-lg relative"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 drop-shadow">
                {title}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-white/90 text-gray-800 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white shadow transition hover:scale-105 hover:bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <BorderBeam duration={Math.random() * 7 + 5} size={120} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
