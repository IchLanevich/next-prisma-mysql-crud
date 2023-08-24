"use client";
import Navbar from "@/components/molecule/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MERN MySQL",
  description: "MySQL Express Next Node Tech Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-200 dark:bg-slate-900`}>
        <Providers>
          <nav className="dark:bg-slate-700 bg-slate-100">
            <Navbar />
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
