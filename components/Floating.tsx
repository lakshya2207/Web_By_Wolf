"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingCardLayout() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
        },
      });

      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
        },
      });

      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-slate-200 pt-40 pb-20 px-4 md:px-8 overflow-visible">
      {/* Top Image */}
      <div
        ref={imageRef}
        className="relative md:absolute md:top-[-100px] md:right-8 md:z-20 mb-8 md:mb-0"
      >
        <Image
          src="/selling.png"
          alt="Floating visual"
          width={400}
          height={400}
          className="w-[300px] sm:w-[360px] md:w-[400px] h-auto object-contain rounded-xl shadow-xl"
          priority
        />
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left: Text */}
        <div ref={textRef} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
            LOREM IPSUM DOLOR SIT <br />
            AMET CONSECTETUR. <br />
            DIGNISSIM TELLUS.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor
            tincidunt ultricies feugiat mauris. Aliquam placerat turpis porta
            nisl felis. Massa in facilisis semper libero eget eu quisque
            bibendum platea. Tortor fames.
          </p>
          <button className="inline-flex items-center px-5 py-2.5 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-900 transition">
            Lorem ipsum →
          </button>
        </div>

        {/* Right: empty for layout spacing */}
        <div className="hidden md:block" />
      </div>

      {/* Gradient Line */}
      <div className="h-2 mt-12 w-full rounded-full bg-gradient-to-r from-blue-700 via-green-500 to-purple-900 z-10 relative" />

      {/* Bottom Card */}
      <div
        ref={cardRef}
        className="relative md:absolute md:bottom-[-150px] md:left-60 z-20 w-full md:w-5/12 mt-12 md:mt-0 px-4 md:px-0"
      >
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-[500px] mx-auto md:mx-0">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Lorem ipsum dolor sit
          </h3>
          <div className="space-y-4 text-gray-700 text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
              amet habitasse semper.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae amet suspendisse fermentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
              quisque scelerisque facilisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
