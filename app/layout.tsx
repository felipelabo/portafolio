"use client"
import type { Metadata } from "next";
import { Inter,Oswald,Khand} from "next/font/google";
import "./globals.css";
import {AnimatePresence} from 'framer-motion'

import NavBar from '@/app/ui/components/navbar'

const inter = Inter({ subsets: ["latin"] });
const oswlad = Oswald({subsets:["latin"]});
const khand = Khand({weight: "700", subsets: ["latin"]})

/*export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio Felipe Laboren",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[--bg-color] ${khand.className}`}>
        <NavBar/>
        <AnimatePresence mode='wait'>
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
