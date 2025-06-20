"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

// Reusable hook to apply animation
function useScrollFadeIn(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const el = ref.current;
    if (el) {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [ref]);
}

// Scroll wrapper component
function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollFadeIn(ref);
  return <div ref={ref}>{children}</div>;
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Reveal><Home /></Reveal>
        <Reveal><HeroSection /></Reveal>
        <Reveal><InfoSection /></Reveal>
        <Reveal><HeroSection2 /></Reveal>
        <Reveal><Companies /></Reveal>
        <Reveal><Cards /></Reveal>
        <Reveal><HeroSection3 /></Reveal>
        <Reveal><Form /></Reveal>
        <Reveal><Download /></Reveal>
        <Reveal><NoLimits /></Reveal>
        <Reveal><HeroSection4 /></Reveal>
        <Reveal><Testimonial /></Reveal>
        <Reveal><TabbedImageBlock /></Reveal>
        <Reveal><Floating /></Reveal>
        <Reveal><FeatureShowcase /></Reveal>
        <Reveal><FAQ /></Reveal>

        {/* No animation for last 2 */}
        <HeroSection5 />
      </main>

      <Footer />
    </div>
  );
}
