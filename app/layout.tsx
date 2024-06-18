import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rodelenz | Home",
  description: "Rodelenz Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className}`}>
        <main className=" bg-[#161513] text-white/85 flex justify-center items-center flex-col overflow-y-clip">
          <div className=" max-w-7xl mx-auto w-full ">
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </div>
        </main>
      </body>
    </html>
  );
}
