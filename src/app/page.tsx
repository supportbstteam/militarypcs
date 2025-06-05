import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MilitryBasesMap from "@/components/MilitryBasesMap";
import Services from "@/components/Services";
import Professionals from "@/components/Professionals";
import SliderComponent from "@/components/SliderComponent";
import TextMediaHome from "@/components/TextMediaHome";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTA from "@/components/CTA";
import ArticlesSection from "@/components/ArticlesSection";


export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <HowItWorks/>
      <MilitryBasesMap/>
      <TextMediaHome/>
      <SliderComponent/>
      <Services/>
      <Professionals/>
      <TestimonialSlider/>
      <CTA/>
      <ArticlesSection/>
      <Footer/>
    </>
  );
}
