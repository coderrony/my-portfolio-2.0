import { StaticImageData } from 'next/image';

// icons
import frontendIcon from '@/assets/icon/front-end.png';
import backendIcon from '@/assets/icon/server_1383395.png';
import fullStackIcon from '@/assets/icon/fullstack.png';

// full-stack images
import fullstackTechBDT from '@/assets//full-stack/TechBdt.jpg';
import whatsappCloneImg from '@/assets//full-stack/whatsapp-clone.png';
import ecomHubImg from '@/assets//full-stack/ecomHub.png';
import multiVendorImg from '@/assets//full-stack/multi-vendor.png';

// backend images
import mvcPattern from '@/assets/backend/node-Bookstore.png';

// frontend images
import supportMeImg from "@/assets/frontend/supportme.png"
import movieDBImg from "@/assets/frontend/movieDB.png"
import blogifyImg from "@/assets/frontend/blogify.png"


export type ProjectType = {
  id: number;
  category: string;
  icon: StaticImageData;
  image: string[] | StaticImageData[];
  title: string;
  slug: string;
  desc: string;
  video?: string;
  live?: string;
  github?: string;
  content?: string;
};

const data: ProjectType[] = [
  {
    id: 1,
    category: 'fullstack',
    icon: fullStackIcon,
    image: [fullstackTechBDT],
    title: 'TechBDT.com (Full-Stack)',
    slug: 'techbdtcom-fullstack',
    desc: `🛒 TechBdt.com — Modern E-commerce Based on Dropshipping Platform TechBdt.com is a feature-rich e-commerce application built with Next.js and TypeScript, designed to support a seamless e-commerce business model. The platform focuses on performance, scalability, and user security.`,
    live: 'https://www.techbdt.com/',
    content: `
    
 **Key Features:**

- 🚀 Built with Next.js 14+ App Router and TypeScript for high performance and maintainability
- ✅ Secure OTP-based phone verification for user account validation
- 🔍 Product filtering, search, and category-based browsing
- 🛍️ Smooth shopping experience with cart, checkout, and order tracking
- 💡 Admin-ready structure for managing products, users, and orders
- 📱 Fully responsive and optimized for all devices
    `,
  },

  {
    id: 2,
    category: 'backend',
    icon: backendIcon,
    image: [mvcPattern],
    title: 'Nodejs MVC Pattern (Backend)',
    slug: 'nodejs-mvc-pattern-backend',
    desc: 'This application is developed based on the MVC pattern, demonstrating how MVC works in practice. The entire application, including both the frontend and backend, is rendered on a Node.js server. It represents a bookstore where users—depending on their roles (admin or guest)—can add, delete, and update books. Additional features include adding books to a cart, wishlist, and more.',
    video:"https://youtu.be/N4_nFQ81ZyU?si=g-DGPiLvfUa8i09u",
    github:"https://github.com/coderrony/Node_Bookstore",
    content:`
    
## Tech Stack

**Server:** Node, Express,ejs, TailwindCSS

## Features
- Add To Cart
- Whitelist
- Authentication 
- Role Base Authorization
    `
  },
  {
    id: 3,
    category: 'fullstack',
    icon: fullStackIcon,
    image: [whatsappCloneImg],
    title: 'Whatsapp Clone (Full-Stack)',
    slug: 'whatsapp-clone-fullstack',
    desc: `💬 WhatsApp Clone with Video Calls – MERN Stack & Socket.IO
This project is based on the Udemy course "Build a WhatsApp Clone with Video Calls – MERN Stack & Socket.IO", which I have successfully completed. It replicates core features of WhatsApp, including real-time messaging and peer-to-peer video calling.`,
    content: `        
**Tech Stack:**
- WebRTC for peer-to-peer video calling
- JWT (JSON Web Tokens) for secure authentication
- Authentication & secure chat handling
- Full-stack development using the MERN stack (MongoDB, Express, React, Node.js)
- Essential real-time app concepts
`,

    github: 'https://github.com/coderrony/whatsapp-clone',
  },
  {
    id: 4,
    category: 'fullstack',
    icon: fullStackIcon,
    image: [ecomHubImg],
    title: 'Final assignment of LWS (Full-Stack)',
    slug: 'final-assignment-of-lws-full-stack',
    desc: `🚀 Exciting Milestone Achieved!
I’ve successfully completed the final assignment of the Learn with Sumit – Reactive Accelerator program. This e-commerce project met all course requirements, and I went a step further by adding extra features to improve functionality and user experience. It was a challenging but highly rewarding journey!`,
    live: 'https://ecom-hub-nine.vercel.app/en',
    github:"https://github.com/coderrony/EcomHUB",
    content:`

🌟 Key Features Implemented:
1. User Authentication.
2. OTP Verification:
- Strengthened security with email OTP verification for user sign-up and password reset.
3. E-Commerce Homepage:
- Created a dynamic homepage showcasing SHOP BY CATEGORY, TRENDING PRODUCTS, and TOP NEW ARRIVALS—fetched directly from the database.
4. Product Details, Cart, and Wishlist
5. Search and Filter Functionality:
- Implemented a robust search feature and sidebar filters for Categories, Price, Size, and Color.
6. Order Checkout & Invoice Generation:
- Integrated a smooth checkout process with form validation and PDF invoice generation that users can download and receive via email.
7. Stock Management:
- Real-time stock control preventing overselling, with logic to automatically release inventory if payments are incomplete.
8. SEO & Internationalization:
- Made the website SEO-friendly for better search engine visibility.
- Enabled support for Bangla and English, providing a fully localized experience.
    `
  },
  {
     id: 5,
    category: 'frontend',
    icon: frontendIcon,
    image: [supportMeImg],
    title: 'Shadcn UI & Zod (Fronted)',
    slug: 'shadcn-ui-and-zod-fronted',
    desc: `In this Shadcn UI course, I learned complex UI design, including calendar integration, form validation with Zod and react-hook-form, graph charts, dashboard design, and more. Although I completed the course in JavaScript, the final course project was intended to be done in TypeScript.`,
    live: 'https://shadcn-ui-collection.vercel.app',
    github:"https://github.com/coderrony/Shadcn-UI-Collection",
  },
  {
     id: 6,
    category: 'frontend',
    icon: frontendIcon,
    image: [movieDBImg],
    title: 'MovieDB (Fronted)',
    slug: 'moviedb-fronted',
    desc: `I successfully completed all required tasks as outlined in the assignment and delivered a fully functional UI. While the course was completed in Nextjs, the final project was intended to be done in Javascript, showcasing best practices in scalable frontend development.`,
    live: 'https://nextjs-movie-db-eight.vercel.app/en',
    github:"https://github.com/coderrony/Nextjs_movie_DB",
  },
  {
     id: 7,
    category: 'frontend',
    icon: frontendIcon,
    image: [blogifyImg],
    title: 'Blogify (Fronted)',
    slug: 'blogify-fronted',
    desc: `📝 Full-Featured Blog Application – Reactive Accelerator Assignment
As part of the LWS Reactive Accelerator program, I built a fully functional blog application that includes all essential features expected from a modern content platform.`,
    live: 'https://662cb448cd933ba38b0a3de8--cosmic-profiterole-c1eaa5.netlify.app',
    github:"https://github.com/coderrony/React_Blogify",
    content:`
 **Key Features:**
- 🔄 Infinite scroll with sync and end-of-content message
- 🔐 Authentication system with access & refresh token handling
- ✍️ Create, edit, delete blogs with author-only access control
- ❤️ Like, favorite, and comment functionality with login protection
- 👤 Dynamic author profiles with avatar and bio updates
- 🔍 Search modal using usePortal, powered by API
- 📱 Fully responsive UI and error-handled state management
- ⚙️ Follows complete REST API integration as per assignment specs
    `
  },
  {
    id: 8,
    category: 'fullstack',
    icon: fullStackIcon,
    image: [multiVendorImg],
    title: '🛍️ Multi-Vendor E-commerce Platform – Built with Django',
    slug: 'multi-vendor-e-commerce-platform-built-with-django-full-stack',
    desc: `A scalable and feature-rich multi-vendor e-commerce application developed using Django. This platform allows multiple sellers to register, list their products, and manage orders independently, while customers can browse, search, and purchase from various vendors in a seamless shopping experience.`,
    live: 'https://elearningproject.pythonanywhere.com',
    github: 'https://github.com/coderrony/Multi_Vendor_Ecommerce',
    content:`
 **Key Features:**
- 🧾 Vendor-specific product & order management
- 🔐 Secure authentication and role-based access
- 🛒 Full shopping cart & checkout system
- 📦 Order tracking and inventory control
- 📊 Admin dashboard for platform oversight
    `
  }
];
export default data;
