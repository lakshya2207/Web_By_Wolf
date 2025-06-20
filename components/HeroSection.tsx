// components/HeroSection.js

import { Phone } from "lucide-react";
import Image from "next/image"; // Next.js optimized image
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row bg-white p-6 max-w-7xl mx-auto mt-20 shadow-lg shadow-gray-900/40 rounded-tl-lg">
        {/* Left Column */}
        <div className="md:w-1/2 p-4 space-y-4">
          {/* Top Section */}
          <p className="text-blue-600 text-sm mb-2 font-semibold">
            Lorem ipsum dolor sit
          </p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            LOREM IPSUM <br /> DOLOR SIT AMET
          </h1>
          <p className="text-gray-800 text-sm leading-relaxed mb-8 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
            sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
            eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
            tellus at purus lectus.
          </p>

          {/* Small Image Sections */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-30 h-30 flex-shrink-0 mr-4 relative">
                <Image
                  src="/s1i1.png"
                  alt="Motorcycle rider"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <p className="text-gray-800 text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ornare fermentum feugiat.
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-30 h-30 flex-shrink-0 mr-4 relative">
                <Image
                  src="/s1i2.png"
                  alt="Motorcycle lineup"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <p className="text-gray-800 text-sm font-semibold">
                Lorem ipsum dolor sit amet, ac tellus faucibus urna ullamcorper
                id dui cursus. Venenatis.
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-30 h-30 flex-shrink-0 mr-4 relative">
                <Image
                  src="/s1i3.png"
                  alt="People talking"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <p className="text-gray-800 text-sm font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam
                auctor tortor tincidunt.
              </p>
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-8 flex items-center border-t pt-4">
            <button className="bg-[#1959AC] text-white px-6 py-2 rounded-sm flex items-center hover:bg-blue-700 transition-colors font-semibold">
              Lorem ipsum
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
            <button className="text-[#1959AC] bg-white px-6 py-2 gap-2 rounded-sm flex items-center transition-colors font-semibold">
              <Phone className="w-6 h-6" />
              123456789
            </button>
          </div>
        </div>

        {/* Right Column (Main Image) */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
          <Image
            src="/bike_row.png"
            alt="Row of motorcycles"
            layout="fill"
            objectFit="cover"
            className="rounded-r-lg md:rounded-l-none rounded-b-lg md:rounded-b-none"
          />
        </div>
      </div>

      {/* Gradient Section */}
      <div className="flex flex-col md:flex-row bg-white p-2 max-w-7xl mx-auto" style={{background: "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)"}}></div>
    </section>
  );
};

export default HeroSection;
