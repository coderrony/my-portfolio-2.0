import { FC } from 'react';
import { contactData } from './data';
import Link from 'next/link';

import { Mail } from 'lucide-react';

interface ContactMeProps {
  className?: string;
}

const ContactMe: FC<ContactMeProps> = ({ className = '' }) => {
  return (
    <section
      className={`py-15 md:py-25 bg-gradient-to-br from-white via-blue-50 to-primary/10 ${className}`}
      id="contact"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary text-center tracking-tight drop-shadow-lg mb-4">
          Get In Touch
        </h2>
        <p className="mb-8 text-center text-gray-600 max-w-xl">
          Shoot me a message via any of the links below. I&apos;d love to connect!
        </p>
        <div className="flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 rounded-lg shadow border border-primary/20">
          <Mail className="text-primary text-2xl" />
          <Link
            href={`mailto:${process.env.MY_EMAIL}`}
            className="text-primary font-semibold hover:underline break-all"
          >
            {process.env.MY_EMAIL}
          </Link>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          {contactData.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-20 h-20 bg-primary text-white rounded-xl flex flex-col items-center justify-center border-2 border-transparent hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-200 shadow-lg hover:shadow-xl"
              aria-label={item.name}
            >
              <item.icon className="text-3xl mb-1 transition-transform duration-200 group-hover:-translate-y-1" />
              <span className="text-xs font-semibold mt-1 opacity-80 group-hover:opacity-100">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
