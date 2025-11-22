import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/navbar'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Portfolio de Développeur - [Ton Nom]",
  description: "Découvrez mes projets et compétences en développement web avec Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        
        <Navbar /> 

        <div className="min-h-screen bg-gray-50">
            {children}
        </div>

      </body>
    </html>
  );
}