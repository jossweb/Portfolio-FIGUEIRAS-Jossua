import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}