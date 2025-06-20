import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import Head from "next/head";
import gsap from "gsap";

export default function HomePage() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <>
<main
  className="w-full overflow-hidden flex flex-col relative md:bg-none"
>
  {/* Background image for mobile only */}
  <div
    className="absolute mt-20 inset-0 bg-no-repeat bg-cover bg-right opacity-10 md:hidden z-0"
    style={{
      backgroundImage: "url('/BIKE1.png')",
    }}
  />

        <section className="relative w-full flex-grow">
          <div className="absolute right-0 top-0 h-full w-2/5 bg-cover bg-right hidden md:block">
            <div className="relative w-full h-full">
              <Image
                src="/bike_hero.png"
                alt="Hero Bike Image"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-white to-transparent opacity-90"></div>
          </div>

          <Navbar />

          <div className="relative z-10 flex items-center px-6 sm:px-8 md:px-20 py-16 hero-content">
            <div className="max-w-xl w-full space-y-6 text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                Lorem ipsum dolor sit amet
              </h1>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vulputate massa quis erat dapibus, vel tincidunt enim tristique.
                Praesent tempor est vel augue dignissim, vitae feugiat magna
                posuere. Quisque sed turpis non sapien accumsan faucibus.
              </p>

              <div className="w-full max-w-md">
                {/* Desktop layout: side by side */}
                <div className="hidden sm:flex w-full gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    className="bg-[#1959AC] hover:bg-blue-700 text-white"
                  >
                    Submit <ArrowRight size={20} />
                  </Button>
                </div>

                {/* Mobile layout: icon inside input */}
                <div className="relative sm:hidden w-full">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="w-full pr-12"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1959AC]"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm mt-2">
                <Check className="w-6 h-6 p-1 bg-[#1959AC] text-white rounded-full " />
                No credit card required
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
