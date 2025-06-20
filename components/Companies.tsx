"use client";

import React, { useState } from "react";
import Image from "next/image";

const Companies = () => {
  const [logoSrc, setLogoSrc] = useState("/logos.png");

  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl w-11/12 sm:text-3xl md:text-4xl font-bold text-center mb-8 uppercase">
        Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
      </h2>

      {/* Logos */}
      <div className="relative w-full max-w-6xl h-auto">
        <Image
          src={logoSrc}
          alt="Company Logos"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          onError={() => setLogoSrc("/logos.jpg")}
        />
      </div>
    </section>
  );
};

export default Companies;
