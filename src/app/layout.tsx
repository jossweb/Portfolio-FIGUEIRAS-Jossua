import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
});

const glitch = localFont({
  src: "/fonts/Glitch0.ttf",
  variable: "--font-glitch",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio FIGUEIRAS Jossua",
  description: "Portfolio FIGUEIRAS Jossua", //need to change it !!!
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${workSans.variable} ${glitch.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}