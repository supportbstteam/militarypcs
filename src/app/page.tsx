import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MilitryBasesMap from "@/components/MilitryBasesMap";
import CountersSection from "@/components/ui/CounterSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <HowItWorks/>
      <MilitryBasesMap/>

      <Footer/>
    </>
  );
}
