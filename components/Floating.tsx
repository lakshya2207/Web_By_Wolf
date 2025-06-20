"use client";

import Image from "next/image";

export default function FloatingCardLayout() {
  return (
    <section className="relative w-full bg-slate-200 my-30 mb-50 pt-40 pb-0 px-4 md:px-8 overflow-visible">
      {/* Floating Image - Above the Top */}
      <div className="absolute top-[-100px] right-8 md:right-16 z-20">
        <Image
          src="/selling.png"
          alt="Floating visual"
          width={400}
          height={400}
          className="w-[400px] h-auto object-contain rounded-xl shadow-xl"
          priority
        />
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
            LOREM IPSUM DOLOR SIT <br />
            AMET CONSECTETUR. <br />
            DIGNISSIM TELLUS.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
            blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
            tortor tincidunt ultricies feugiat mauris. Aliquam placerat turpis
            porta nisl felis. Massa in facilisis semper libero eget eu quisque
            bibendum platea. Tortor fames.
          </p>
          <button className="inline-flex items-center px-5 py-2.5 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-900 transition">
            Lorem ipsum →
          </button>
        </div>

        {/* Empty right column for layout spacing */}
        <div />
      </div>

      {/* Gradient Line */}
      <div className="h-2 mt-12 w-full rounded-full bg-gradient-to-r from-blue-700 via-green-500 to-purple-900 z-10 relative" />

      {/* Floating Card at Bottom */}
       <div className="absolute bottom-[-200px] left-60 z-20 w-5/12">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Lorem ipsum dolor sit
          </h3>
          <div className="space-y-4 text-gray-700 text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum
              vitae amet habitasse semper.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae amet suspendisse fermentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
              amet quisque scelerisque facilisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
