import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

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

export const metadata: Metadata = {
  title: "Velvet Rose Curtains | Curtain Shop & Services in Abu Dhabi",
  description:
    "Velvet Rose Curtains offers a wide range of curtains, upholstery fabrics, wallpapers, and carpets, along with expert curtain tailoring and fitting services in Abu Dhabi.",
  keywords: [
    "curtains",
    "upholstery fabrics",
    "wallpapers",
    "carpets",
    "curtain services",
    "curtain tailoring",
    "curtain fitting",
    "Abu Dhabi",
    "interior design",
    "home decor",
    "curtain shop",
  ],
  robots: "index, follow",
  themeColor: "#6B21A8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
