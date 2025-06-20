"use client";

import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import FeatureShowcase from "@/components/FeatureShowcase";
import Floating from "@/components/Floating";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import HeroSection3 from "@/components/HeroSection3";
import HeroSection4 from "@/components/HeroSection4";
import HeroSection5 from "@/components/HeroSection5";
import Home from "@/components/Home";
import InfoSection from "@/components/InfoSection";
import NoLimits from "@/components/NoLimits";
import TabbedImageBlock from "@/components/TabbedImageBlock";
import Testimonial from "@/components/Testimonial";

export default function HomePage() {
  return (
    <div>
      <Home />
      {/* <div className="absolute right-0"> */}
      <HeroSection />
      <InfoSection />
      {/* </div> */}
      <HeroSection2 />
      <Companies />
      <Cards />
      <HeroSection3 />
      <Form />
      <Download />
      <NoLimits />
      <HeroSection4 />
      <Testimonial />
      <TabbedImageBlock />
      <Floating />
      <FeatureShowcase />
      <FAQ />
      <HeroSection5 />
      <Footer />
    </div>
  );
}
