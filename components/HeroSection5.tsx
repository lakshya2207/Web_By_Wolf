"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection5() {
  return (
    <section className="w-full h-screen bg-white flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        {/* Logo */}
        <div className="bg-gray-200 text-black font-bold text-xl px-6 py-2">
          LOGO
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-black leading-snug">
          LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. DUI.
        </h1>

        {/* CTA Button with glow effect */}
          <Button className="bg-[#1959AC] hover:bg-blue-800 text-base px-5 py-4">
            Loerum Ipsum <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
    
      </div>
    </section>
  );
}
