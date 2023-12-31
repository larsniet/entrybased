import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClass = classNames(
    inter.className,
    "lg:h-screen lg:overflow-hidden bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
  );
  return (
    <html lang="en">
      <body className={bodyClass}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
