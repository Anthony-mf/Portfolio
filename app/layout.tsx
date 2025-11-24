import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Portfolio ",
  description: "Découvrez mes projets et compétences en développement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
                
        <div className=" min-h-screen bg-gray-50">
            {children}
        </div>
      </body>
    </html>
  );
}