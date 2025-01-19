import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const swiss = localFont({ src: '../font/SuisseIntl-BoldItalic.ttf' })


export const metadata: Metadata = {
  title: "Jossua Figueiras",
  description: "Jossua Figueiras' personal website/ portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${swiss.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
