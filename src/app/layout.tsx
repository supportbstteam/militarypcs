import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
// imports for slider 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "@/styles/globals.css"; // your global Tailwind CSS file
// imports for slider ends 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // add any weights you want
  display: "swap",
});

export const metadata: Metadata = {
  title: "MilitryPCS",
  description: " Empowering Military Families with Trusted Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-white text-black antialiased  ">
        {children}
      </body>
    </html>
  );
}
