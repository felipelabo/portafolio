import type { Metadata } from "next";
import { Inter,Oswald,Lexend} from "next/font/google";
import "./globals.css";

import NavBar from '@/app/ui/components/navbar'

const inter = Inter({ subsets: ["latin"] });
const oswlad = Oswald({subsets:["latin"]});

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
      <body className={`bg-[--bg-color] ${oswlad.className}`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
