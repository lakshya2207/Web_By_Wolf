import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row bg-white p-6 max-w-7xl mx-auto mt-20 shadow-lg shadow-gray-900/40 rounded-lg overflow-hidden">
        {/* Left Column */}
        <div className="md:w-1/2 p-4 space-y-4">
          <p className="text-blue-600 text-sm mb-2 font-semibold">
            Lorem ipsum dolor sit
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
            {[
              { src: "/s1i1.png", alt: "Motorcycle rider", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare fermentum feugiat." },
              { src: "/s1i2.png", alt: "Motorcycle lineup", text: "Lorem ipsum dolor sit amet, ac tellus faucibus urna ullamcorper id dui cursus. Venenatis." },
              { src: "/s1i3.png", alt: "People talking", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt." },
            ].map(({ src, alt, text }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-cover rounded" />
                </div>
                <p className="text-gray-800 text-sm font-semibold">{text}</p>
              </div>
            ))}
          </div>

          {/* Footer Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 border-t pt-4">
            <button className="bg-[#1959AC] text-white px-6 py-2 rounded-sm flex items-center hover:bg-blue-700 transition-colors font-semibold">
              Lorem ipsum
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="text-[#1959AC] bg-white px-6 py-2 gap-2 rounded-sm flex items-center border border-[#1959AC] hover:bg-blue-50 transition-colors font-semibold">
              <Phone className="w-5 h-5" />
              123456789
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 relative h-72 md:h-auto">
          <Image
            src={`${"/bike_row.png"||"/BIKE7.png"}`}
            alt="Row of motorcycles"
            fill
            className="object-cover rounded-lg md:rounded-l-none"
          />
        </div>
      </div>

      {/* Gradient Section */}
      <div
        className="max-w-7xl mx-auto h-4 md:h-6 rounded-b-lg"
        style={{
          background:
            "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
