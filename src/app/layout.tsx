import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import React from "react";
import Header from "@components/common/header";
import Footer from "@components/common/footer";
import StarsBackground from '@components/common/StarsBackground';
import {generateStars} from "@/utils/generateStars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Adventskalender",
  description: "Ein modernes Remake des Adventskalenders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stars = generateStars(100); // Generate 100 stars

  return (
    <html lang="de">
      <body className={`${inter.className}`}>
          <StarsBackground stars={stars} />
          <Providers>
              <header className={"relative z-10 p-2 py-6 border-b-2 border-b-amber-300 dark:border-b-amber-950"}><Header/></header>
              <main className={"relative z-10 px-2 pt-6 "}>{children}</main>
              <footer className={"relative z-10 p-2 py-6 border-b-2 border-b-amber-300 dark:border-b-amber-950"}><Footer /></footer>
          </Providers>
      </body>
    </html>
  );
}
