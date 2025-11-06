import type { Metadata } from "next";
import "@styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@components/Header/header";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esteban Iglesias Vargas — Portfolio",
  description: "Portfolio of Esteban Iglesias Vargas — Software Engineer and Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}