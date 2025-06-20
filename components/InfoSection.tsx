import React from "react";
import Image from "next/image"; // For optimized images in Next.js

const InfoSection = () => {
  return (
    <section className="bg-white p-6 md:p-8 mt-20 max-w-7xl mx-auto shadow-lg shadow-gray-900/40 rounded-tl-lg">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Content Section */}
        <div className="flex-2 p-10 md:p-16 flex flex-col justify-start box-border">
          <p className="text-blue-600 font-bold text-md mb-3">
            Lorem ipsum dolor sit amet
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8 uppercase">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed font-semibold mb-8 md:mb-10">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>

          {/* Bullet Points */}
          <ul>
            {[...Array(3)].map((_, index) => (
              <li key={index} className="flex items-start mb-4 md:mb-5">
                <span className="text-2xl mr-4 text-red-500 mt-0.5">
                  <Image
                    src="/bullet.png"
                    alt="bullet"
                    width={60}
                    height={60}
                    objectFit="contain"
                    quality={100}
                    className="bg-transparent"
                  />
                </span>
                <p className="text-sm md:text-base leading-snug font-semibold">
                  <span className="font-bold block mb-1">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi
                    egestas.
                  </span>
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu
                  eu non viverra. Risus quam mattis senectus vitae interdum odio
                  ornare gravida vestibulum. Donec turpis nulla felis mauris eu
                  donec. Ipsum sit ut tortor.
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative overflow-hidden min-h-[300px] md:min-h-[500px]">
          <Image
            src="/two_men_talking.png"
            alt="Two men talking"
            layout="fill"
            objectFit="contain"
            quality={100}
            className="w-full h-full bg-transparent"
          />
        </div>
      </div>

      {/* Gradient Bar at the Bottom */}
      <div
        className="w-full p-2"
        style={{
          background:
            "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)",
        }}
      ></div>
    </section>
  );
};

export default InfoSection;
