export const dynamic = 'force-dynamic';

import Banner from "@/components/Banner";

import HowItWorks from "@/components/HowItWorks";
import MilitryBasesMap from "@/components/MilitryBasesMap";
import Services from "@/components/Services";
import Professionals from "@/components/Professionals";
import SliderComponent from "@/components/SliderComponent";
import TextMediaHome from "@/components/TextMediaHome";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTA from "@/components/CTA";
import ArticlesSection from "@/components/ArticlesSection";
import Intro from "@/components/Intro";
import Intro2 from "@/components/Intro2";
import Intro3 from "@/components/Intro3";


export default function Home() {
  return (
    <>
      <Banner/>
      <Intro/>
      <Intro2/>
      <Intro3/>
      <HowItWorks/>
      {/* <MilitryBasesMap/> */}
      <SliderComponent/>
      <TextMediaHome/>
      <Services/>
      <Professionals/>
      <TestimonialSlider/>
      <CTA/>
      <ArticlesSection title="ARTICLES"/>
    </>
  );
}
