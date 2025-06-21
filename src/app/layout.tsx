import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ronydas.dev';
const SEO_DESCRIPTION =
  process.env.MY_SEO_DESCRIPTION ||
  'Ronydas is a Typescript developer building high-quality web apps.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ronydas | Typescript Developer',
    template: '%s | Ronydas: Typescript Developer',
  },
  description: SEO_DESCRIPTION,
  keywords: [
    'ronydas',
    'coderrony',
    'full stack developer',
    'software engineer',
    'web developer',
    'typescript developer',
    'react developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: SITE_URL,
    siteName: 'Ronydas',
    title: 'Ronydas | Typescript Developer',
    description: SEO_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Ronydas - Typescript Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ronydas',
    creator: '@ronydas',
    title: 'Ronydas - Typescript Developer',
    description: SEO_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: `${SITE_URL}/en`,
      bn: `${SITE_URL}/bn`,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${poppins.variable} montserrat antialiased `}
      >
             
        {children}
      </body>
    </html>
  );
}
