import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Cormorant, Staatliches } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { Footer } from "@/components/landing/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  weight: ["400", "700", "300", "500", "600"],
  subsets: ["latin"],
});

const staatliches = Staatliches({
  variable: "--font-staatliches",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laajawab Spices - The Art of Effortless Cooking",
  description: "Where tradition meets innovation in every blend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${staatliches.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
