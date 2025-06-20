"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoLimits = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 px-4 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* L1 (Left 50%) */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Top (60%) */}
          <div className="flex flex-col md:flex-row flex-grow basis-[60%] gap-4">
            {/* L2 (80%) */}
            <div className="w-full md:w-4/5 flex flex-col justify-center gap-4">
              <p className="uppercase text-gray-600 font-semibold">No Limits</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Lorem Ipsum Dolor Sit Amet
              </h2>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition w-max"
              >
                Lorem Ipsum →
              </Link>
            </div>
            {/* R2 (20%) */}
            <div className="w-full md:w-1/5 flex items-center">
              <Image
                src="/BIKE3.png"
                alt="Bike 3"
                width={300}
                height={400}
                className="w-full h-auto max-h-60 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Bottom (40%) */}
          <div className="flex flex-col md:flex-row flex-grow basis-[40%] gap-4">
            {/* L3 (30%) */}
            <div className="w-full md:w-3/10 flex items-center">
              <Image
                src="/BIKE5.png"
                alt="Bike 5"
                width={300}
                height={400}
                className="w-full h-auto max-h-40 object-cover rounded-lg"
              />
            </div>
            {/* R3 (70%) */}
            <div className="w-full md:w-7/10 flex items-center">
              <Image
                src="/BIKE6.png"
                alt="Bike 6"
                width={300}
                height={400}
                className="w-full h-auto max-h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* R1 (Right 50%) */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Row 1 (4 parts) */}
          <div className="flex flex-row basis-4/10 gap-4">
            <div className="w-1/5 flex items-center">
              <Image
                src="/BIKE1.png"
                alt="Bike 1"
                width={300}
                height={400}
                className="w-full h-auto max-h-40 object-cover rounded-lg"
              />
            </div>
            <div className="w-4/5 flex items-center">
              <Image
                src="/BIKE2.png"
                alt="Bike 2"
                width={300}
                height={400}
                className="w-full h-auto max-h-40 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Row 2 (5 parts) */}
          <div className="basis-5/10 flex items-center">
            <Image
              src="/BIKE4.png"
              alt="Bike 4"
              width={600}
              height={400}
              className="w-full h-auto max-h-60 object-cover rounded-lg"
            />
          </div>

          {/* Row 3 (1 part) */}
          <div className="flex flex-row basis-1/10 gap-4">
            <div className="w-1/5 flex items-center">
              <Image
                src="/BIKE7.png"
                alt="Bike 7"
                width={300}
                height={200}
                className="w-full h-auto max-h-20 object-cover rounded-lg"
              />
            </div>
            <div className="w-4/5 flex items-center">
              <Image
                src="/BIKE8.png"
                alt="Bike 8"
                width={300}
                height={200}
                className="w-full h-auto max-h-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoLimits;
