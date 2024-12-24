import Aos from "@/components/aos";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "App Name",
  description: "App Description",
  openGraph: {
    title: "App Name",
    description: "App Desciption",
    url: "/",
    images: [
      {
        url: "/preview.png",
        alt: "App Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Aos />
      <html lang="en" className="relative">
        <body className={twMerge(dmSans.variable, "font-dm antialiased")}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
