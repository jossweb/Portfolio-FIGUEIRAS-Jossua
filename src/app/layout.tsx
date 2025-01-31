import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '../components/LanguageProvider'
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Jossua Figueiras",
  description: "Jossua Figueiras' personal website / portfolio",
  icons: {
    icon: [
      {
        url: '/img/icon-jossweb.webp',
        type: 'image/webp',
        sizes: '32x32'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}