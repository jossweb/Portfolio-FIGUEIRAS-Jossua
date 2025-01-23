import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const suisseRegular = localFont({ 
  src: '../font/SuisseIntl-Regular.otf',
  variable: '--font-suisse-regular'
})
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
      <body className={`${suisseRegular.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}