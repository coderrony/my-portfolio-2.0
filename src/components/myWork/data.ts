import frontendImg from '@/assets/front-end.png';
import backendImg from '@/assets/server_1383395.png';
import fullstackImg from '@/assets/fullstack.png';
import { StaticImageData } from 'next/image';

// images
import BlogifyImg from '@/assets/frontend/frontendTwo.png';

export type ProjectType = {
  id: number;
  category: string;
  icon: StaticImageData;
  image: string[] | StaticImageData[];
  video?: string;
  title: string;
  slug: string;
  desc: string;
  content?: string;
  demo?: string;
  github?: string;
};

const data: ProjectType[] = [
  {
    id: 1,
    category: 'frontend',
    icon: frontendImg,
    image: [BlogifyImg, BlogifyImg, BlogifyImg, BlogifyImg],
    video: 'https://youtu.be/N4_nFQ81ZyU?si=XQj0h9PrwZL8YusP',
    title: 'React Blogify (Frontend)',
    slug: 'react-blogify-frontend',
    desc: 'a Blog application with integrate backend api.in this hole project i implement Infinite Scroll,Reusable Components,Concerned About File Structure, and more',
    demo: 'https://662cb448cd933ba38b0a3de8--cosmic-profiterole-c1eaa5.netlify.app/',
    github:
      'https://github.com/coderrony/learn_with_sumit_reactive_accelerator_course_assignment/tree/master/05_React_Blogify',
  },
  {
    id: 2,
    category: 'frontend',
    icon: frontendImg,
    image: [],
    title: 'Frontend Bootcamp (Frontend)',
    slug: 'frontend-bootcamp-frontend',
    desc: 'simple single-page website for showcasing yourself, your product, or more little business.',
    content: `        
##### Node Bookstore
This application is developed based on the MVC pattern, demonstrating how MVC works in practice. The entire application, including both the frontend and backend, is rendered on a Node.js server. It represents a bookstore where users—depending on their roles (admin or guest)—can add, delete, and update books. Additional features include adding books to a cart, wishlist, and more.

###### Tech Stack
**Server:** Node, Express,ejs, TailwindCSS


##### Features
- Add To Cart
- Whitelist
- Authentication 
- Role Base Authorization

##### Documentation
- Adding tailwindcss  utility-first CSS framework that helps build modern and responsive user interfaces efficiently.
- bcrypt used to hash passwords securely before storing them in the database.
- Adding [tailwindcss](https://tailwindcss.com/docs/installation/using-postcss) a utility-first CSS framework that helps build modern and responsive user interfaces efficiently.

    
`,
    demo: 'https://voluble-conkies-e1801e.netlify.app/',
    github: 'https://github.com/coderrony/Frontend_Bootcamp',
  },
  {
    id: 3,
    category: 'fullstack',
    icon: fullstackImg,
    image: [],
    title: 'Stock Data Visualization (Fullstack)',
    slug: 'stock-data-visualization-fullstack',
    desc: "it's a full-stack project that shows stock market data that come from a JSON file. you can manipulate the data by editing, updating, filtering or more and see the visual representation.",
    demo: 'https://megamart.pythonanywhere.com/?trade_code=AL-HAJTEX',
    github: 'https://github.com/coderrony/stock_data_visualization_django',
  },

  {
    id: 4,
    category: 'fullstack',
    icon: fullstackImg,
    image: [],
    title: 'MEGA MART (Fullstack)',
    slug: 'mega-mart-fullstack',
    desc: 'Introducing Mega-Mart - Your One-Stop E-commerce Solution! I am thrilled to present Mega-Mart, a cutting-edge e-commerce platform that I have personally developed.',
    demo: 'https://ecommercemegamart.pythonanywhere.com/',
    github: 'https://github.com/coderrony/MEGA-MART',
  },

  {
    id: 5,
    category: 'backend',
    icon: backendImg,
    image: [],
    title: 'Django Rest Framework-JWT-Full-Authentication (Backend)',
    slug: 'django-rest-framework-jwt-full-authentication-backend',
    desc: 'In this project just created API, I am aiming to implement full authentication using the Django REST framework in the backend.',
    github:
      'https://github.com/coderrony/Django-Rest-Framework-JWT-Full-Authentication',
  },
  {
    id: 6,
    category: 'frontend',
    icon: frontendImg,
    image: [],
    title: 'Youtube Clone (Frontend)',
    slug: 'youtube-clone-frontend',
    desc: 'youtube clone use Rapid Api',
    demo: 'https://6563134025d30a502c2960d8--transcendent-lily-69361e.netlify.app/',
    github: 'https://github.com/coderrony/Youtube-Clone',
  },
];
export default data;
