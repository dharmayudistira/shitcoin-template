import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='relative'>
      <body className={twMerge(dmSans.className, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
