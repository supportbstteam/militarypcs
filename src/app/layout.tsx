import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
// imports for slider 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { QueryProvider } from "@/lib/query/QueryProvider";
import { cookies } from "next/headers";
import Headers from "@/components/layout/Headers";

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

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>


export const metadata: Metadata = {
  title: "MilitaryPCS",
  description: " Empowering Military Families with Trusted Services",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";



  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-white text-black antialiased  ">
        <QueryProvider>

       {!token ? <Header/> : <Headers/>} 
        {children}
        <Footer/>
        </QueryProvider>
      </body>
    </html>
  );
}
