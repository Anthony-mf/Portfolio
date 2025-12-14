import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Anthony Marques Felix - Portfolio",
  description: "Découvrez mes projets et compétences en développement full-stack.",
  icons: {
    icon: [
      { url: "/public/images/P_Icon.ico" },
      { url: "/public/images/P_Icon.png", type: "image/png" },
    ],
    apple: "/public/images/P_Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

