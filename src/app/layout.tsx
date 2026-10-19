import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arlette Suárez | Portafolio Académico y Desarrollo Web",
  description: "Portafolio académico y profesional de desarrollo web y proyectos de Ingeniería de Sistemas - Arlette Suárez.",
  keywords: ["Arlette Suarez", "Desarrollo Web", "Portafolio", "Next.js", "React", "Ingeniería de Sistemas", "UNCP"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#0b0d17] text-[#f4f5fb] font-sans antialiased selection:bg-[#67e8f9] selection:text-[#0b0d17]">
        {children}
      </body>
    </html>
  );
}
