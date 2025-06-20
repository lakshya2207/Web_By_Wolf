import React from "react";
import Image from "next/image";

const InfoSection = () => {
  return (
    <section className="bg-white p-6 md:p-8 mt-20 max-w-7xl mx-auto shadow-lg shadow-gray-900/40 rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Content */}
        <div className="flex-[2] p-4 md:p-8 lg:p-12">
          <p className="text-blue-600 font-bold text-md mb-3">
            Lorem ipsum dolor sit amet
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 uppercase">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </h1>

          <p className="text-base md:text-lg leading-relaxed font-semibold mb-8">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus. Amet massa malesuada sit
            pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>

          <ul className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image
                    src="/bullet.png"
                    alt="Bullet icon"
                    fill
                    className="object-contain"
                  />
                </div>
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

        {/* Right Image */}
        {/* Right Image Section */}
        <div className="flex-1 relative w-full h-64 md:h-auto md:min-h-[500px]">
          <Image
            src="/two_men_talking.png"
            alt="Two men talking"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Gradient Bar */}
      <div
        className="w-full h-4 md:h-6 mt-4 rounded-b-lg"
        style={{
          background:
            "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)",
        }}
      ></div>
    </section>
  );
};

export default InfoSection;
