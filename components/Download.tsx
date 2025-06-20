"use client";

import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-blue-600 font-semibold mb-2">Lorem Ipsum</p>
          <h2 className="text-4xl font-bold mb-4">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </p>
          <div className="flex items-center gap-4">
            <a href="#">
              <Image
                src="/playstore.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
              />
            </a>
            <a href="#">
              <Image
                src="/appStore.png"
                alt="Download on the App Store"
                width={150}
                height={50}
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/phone-hand.png"
            alt="Phone in hand"
            width={700}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
