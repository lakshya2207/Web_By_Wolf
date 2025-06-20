"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center mt-20 pt-8 md:p-8 overflow-hidden font-sans"
      style={{
        backgroundImage: "url(/window.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen justify-between pt-8">
        {/* Logo at top */}
        <div
          ref={logoRef}
          className="font-extrabold text-xl p-3 px-6 bg-slate-200 text-black inline-block w-26"
        >
          LOGO
        </div>

        {/* Centered Text */}
        <div className="flex-grow flex items-center justify-center">
          <p
            ref={textRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center uppercase leading-tight"
          >
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
            viverra mi. dolor sit amet consectetur. Quis adipiscing
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
