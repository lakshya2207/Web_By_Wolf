"use client";

import React from "react";
import Image from "next/image";

const Companies = () => {
  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl w-1/2 sm:text-3xl md:text-4xl font-bold text-center mb-8 uppercase">
        Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
      </h2>

      {/* Logos */}
      <div className="relative w-full max-w-6xl h-auto">
        <Image
          src="/logos.png" // Make sure the file is in /public or correct path
          alt="Company Logos"
          width={1920} // Use actual image width for best quality
          height={1080} // Use actual image height
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Companies;
