"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function FeatureShowcase() {
  return (
    <section className="w-full my-30 bg-white py-20 px-4 md:px-8">
      <div className="max-w-5xl md:mx-20 text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-gray-600 max-w-3xl md:mx-20 text-base md:text-lg">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>

      {/* Content */}
      <div className="relative mt-16 max-w-6xl md:mx-20 flex flex-col md:block">
        {/* Image with floating cards */}
        <div className="relative w-full md:w-2/3 md:mx-20 rounded-xl shadow overflow-visible">
          {/* Image */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/top.png"
              alt="Group of bikers"
              fill
              className="object-cover rounded-sm"
              priority
            />

            {/* Mobile floating card (inside image, bottom overlay) */}
            <Card className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] z-20 md:hidden bg-white/90 backdrop-blur-sm shadow-md">
              <CardContent className="p-4">
                <h3 className="text-base font-semibold text-slate-800 mb-1">
                  Artist & Investor
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Enim sagittis, sit porttitor morbi lobortis amet, libero
                  adipiscing auctor. Malesuada tristique libero, id netus
                  tincidunt. Egestas ac arcu amet nisl quis est ...
                </p>
                <button className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:underline text-sm">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Desktop floating card */}
          <Card className="hidden md:block absolute top-1/2 -right-80 transform -translate-y-1/2 w-[460px] z-30 shadow-lg bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Artist & Investor
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </p>
              <button className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:underline">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-blue-600" />
          <span className="w-3 h-3 rounded-full bg-slate-300" />
          <span className="w-3 h-3 rounded-full bg-slate-300" />
          <span className="w-3 h-3 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}
