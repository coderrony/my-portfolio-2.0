import { StaticImageData } from 'next/image';
import freeCodeCampImg from '@/assets/awards/freeCodeCamp.png';
import syedaRecommendationsImg from '@/assets/awards/syedaRecommendations.png';
import contestImg from '@/assets/awards/Rony_Das_Contest.png';
import recommendationLetterImg from '@/assets/awards/Recommendation_letter_Phitron.png';

interface AwardsInfoType {
  id: number;
  title: string;
  issuer: string;
  image?: StaticImageData;
  date: string;
  description?: string;
  link?: string;
}
export const awardsInfo: AwardsInfoType[] = [
  {
    id: 1,
    title: 'Programming Contest By Phitron',
    issuer: 'Phitron',
    image: contestImg,
    date: 'August 2022',
    description:
      'Awarded for participating and achieving a notable result in the Programming Contest 2022, organized by Phitron and held on August 12, 2022. The event was powered by Programming Hero.',
    link: 'https://drive.google.com/file/d/1voP6CZT4t_bGx-sAYjsOJS89tNOZTm1d/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    image: freeCodeCampImg,
    date: 'November 2019',
    description:
      'I earned this accomplishment by solving a UI challenge using HTML and CSS. It was my first certification reward from freeCodeCamp.',
    link: 'https://www.freecodecamp.org/certification/ronydas0004/responsive-web-design',
  },

  {
    id: 3,
    title: 'Letter of Recommendation – Tech Knight Programme',
    issuer: 'Phitron',
    image: recommendationLetterImg,
    date: 'April 2023',
    description:
      'Received a formal letter of recommendation for outstanding performance during the Tech Knight Programme. Recognized for strong Django and Python skills, collaboration, attention to detail, and leadership in the Warriors-Marts eCommerce project.',
    link: 'https://drive.google.com/file/d/1rzleSKrKorc5QkWhaiS_nr0JH5Mx3UVr/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Endorsed for Exceptional Problem-Solving and Team Collaboration',
    issuer: 'Syeda Tamanna Sheme',
    image: syedaRecommendationsImg,
    date: 'March 2023',
    description:
      'Received a strong recommendation from my mentor Syeda Tamanna Sheme for my problem-solving ability, teamwork, empathy, and commitment to excellence during our time working together.',
    link: 'https://www.linkedin.com/in/coderrony/',
  },
];
