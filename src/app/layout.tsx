import type { Metadata } from "next";
import { plusJakartaSans } from "./fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "L3B 2024",
  description: "Lomba Lintas Lembah dan Bukit (L3B) 2024",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} min-h-screen bg-[#0A4833]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
