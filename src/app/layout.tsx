import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

// APP_FONT
const dmSans = DM_Sans({ subsets: ['latin'] });

// APP_METADATA
export const metadata: Metadata = {
  title: 'Light Saas Landing Page',
  description: 'Template created by Frontend Tribe'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='relative'>
      {/* APP_BACKGROUND */}
      <body className={twMerge(dmSans.className, 'antialiased bg-[#FFFFFF]')}>
        {children}
      </body>
    </html>
  );
}
