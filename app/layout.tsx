import type { Metadata } from "next";
import { Inter,Oswald,Khand} from "next/font/google";
import "./globals.css";


import NavBar from '@/app/ui/components/navbar'

const inter = Inter({ subsets: ["latin"] });
const oswlad = Oswald({subsets:["latin"]});
const khand = Khand({weight: "700", subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Felipe Laboren",
  description: "Portafolio Felipe Laboren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[--bg-color] ${khand.className}`}>
        <div
          className="navbar-bottom w-[100svw] sm:h-[13svh] h-[11svh] z-30 fixed"
        ></div>
        <NavBar/>
          {children}
      </body>
    </html>
  );
}
