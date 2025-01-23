import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const suisseRegular = localFont({ 
  src: '../font/SuisseIntl-Regular.otf',
  variable: '--font-suisse-regular'
})

const suisseItalic = localFont({ 
  src: '../font/SuisseIntl-RegularItalic.otf',
  variable: '--font-suisse-italic'
})

const suisseBoldItalic = localFont({ 
  src: '../font/SuisseIntl-BoldItalic.ttf',
  variable: '--font-suisse-bold-italic'
})


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
        className={`${suisseRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
