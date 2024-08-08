import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

// src/components/Layout.tsx
import React, { FC } from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your Website Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="min-h-screen flex flex-col"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, #5420A4 100%)",
        }}
      >
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
};

export default RootLayout;
