import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from '@/app/ui/components/navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio Felipe Laboren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[--bg-color] ${inter.className}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
