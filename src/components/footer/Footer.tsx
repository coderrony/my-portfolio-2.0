import Link from 'next/link';
import { FC } from 'react';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`w-full bg-primary text-primary-foreground  py-12  shadow-inner ${className || ''}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-base sm:text-lg font-semibold tracking-wide">
          &copy; {new Date().getFullYear()} My Rony Das. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href={`${process.env.MY_GITHUB}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 7.43c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z" />
            </svg>
          </Link>
          <Link
            href={`mailto:${process.env.MY_EMAIL}`}
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <svg width="24" height="24" fill="currentColor" className="inline-block">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;