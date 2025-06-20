import React from "react";
import Image from "next/image"; // For optimized image handling
import Navbar from "./Navbar"; // adjust path if needed
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";
import Head from "next/head"; // For SEO and header management

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        {/* Add other meta tags for SEO as needed */}
      </Head>

      <main className="w-full overflow-hidden flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full flex-grow">
          {/* Background Image on Right using next/image */}
        <div className="absolute right-0 top-0 h-full w-2/5 bg-cover bg-right">
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

  {/* Gradient overlay at bottom 30px only */}
  <div className="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-white to-transparent opacity-90"></div>
</div>


          {/* Navbar */}
          <Navbar />

          {/* Left Content Section */}
          <div className="relative z-10 flex items-center px-8 md:px-20 py-16">
            <div className="max-w-xl w-full space-y-6 text-left">
              <h1 className="text-6xl font-bold text-gray-900">
                Lorem ipsum dolor sit amet
              </h1>

              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vulputate massa quis erat dapibus, vel tincidunt enim tristique.
                Praesent tempor est vel augue dignissim, vitae feugiat magna
                posuere. Quisque sed turpis non sapien accumsan faucibus.
              </p>

              <div className="flex items-center gap-2">
                <Input
                  type="email"
                  className="w-1/2" // half width
                />
                <Button
                  type="submit"
                  className="flex items-center gap-1 bg-[#1959AC] hover:bg-blue-700 text-white"
                >
                  Submit <ArrowRight size={16} />
                </Button>
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
