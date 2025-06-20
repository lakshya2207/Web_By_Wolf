"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection4 = () => {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Image */}
        <div className="">
          <Image
            src="/twoBIkers.png" // ✅ Replace with your actual image
            alt="Hero Image"
            width={400}
            height={400}
            className="w-10/12 h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className=" flex flex-col gap-6">
          <p className="text-blue-600 font-medium">Lorem ipsum</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            <span className="text-blue-600">LOREM</span> IPSUM DOLOR SIT
            AMET CONSECTETUR. ENIM DONEC.
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
            amet non.
          </p>

          {/* List Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <p className="text-gray-800">Lorem Ipsum</p>
            <p className="text-gray-800">Lorem Ipsum</p>
            <p className="text-gray-800">Lorem Ipsum</p>
            <p className="text-gray-800">Lorem Ipsum</p>
            <p className="text-gray-800">Lorem Ipsum</p>
            <p className="text-gray-800">Lorem Ipsum</p>
          </div>

          {/* CTA Button */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition w-max"
          >
            Lorem Ipsum →
          </Link>
        </div>
      </div>

      {/* Optional Bottom Border */}
      <div className="w-full h-4 mt-10 bg-gradient-to-r from-blue-600 via-green-500 to-purple-700"></div>
    </section>
  );
};

export default HeroSection4;
