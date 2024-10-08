import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Solutions Pvt. Ltd.",
  description: "Media Solutions Pvt. Ltd. Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className}`}
        style={{
          background: "white",
        }}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
