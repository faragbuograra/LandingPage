import type { Metadata } from "next";

import "./globals.css";
import localFont from 'next/font/local'
import { Providers } from "./providers";
import { Suspense } from "react";
import Loading from "./loading";

const  myFont = localFont({
  src: [
    {
      path: '/fonts/Gilroy-Medium.ttf',
      weight: '400'
    },
    {
      path: '/fonts/Gilroy-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})
export const metadata: Metadata = {
  title: "AVANT Solutions",
  description: "Frontend Developer Test | AVANT Solutions ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>  <Suspense fallback={<Loading />}>
      <Providers>{children}</Providers>
        </Suspense> </body>
    </html>
  );
}
