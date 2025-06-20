"use client";

import * as React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

const tabContent = {
  research:
    "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
  plan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Praesent ultricies, justo ac hendrerit porttitor.",
  design:
    "Donec vulputate sit amet leo quis viverra. Aliquam erat volutpat. Quisque dignissim eros et mauris tincidunt, vel facilisis metus blandit.",
};

export default function TabbedImageBlock() {
  const [activeTab, setActiveTab] = React.useState("research");

  return (
    <section className="w-full bg-white text-black px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text + Tabs */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-md bg-white rounded-md shadow border border-gray-200 flex justify-between">
              <TabsTrigger
                value="research"
                className="w-full px-4 py-2 text-base font-semibold data-[state=active]:bg-gray-100 data-[state=active]:shadow-inner"
              >
                Research
              </TabsTrigger>
              <TabsTrigger
                value="plan"
                className="w-full px-4 py-2 text-base font-semibold data-[state=active]:bg-gray-100 data-[state=active]:shadow-inner"
              >
                Plan
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="w-full px-4 py-2 text-base font-semibold data-[state=active]:bg-gray-100 data-[state=active]:shadow-inner"
              >
                Design
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="research"
              className="mt-6 text-slate-600 text-base"
            >
              {tabContent.research}
            </TabsContent>
            <TabsContent value="plan" className="mt-6 text-slate-600 text-base">
              {tabContent.plan}
            </TabsContent>
            <TabsContent
              value="design"
              className="mt-6 text-slate-600 text-base"
            >
              {tabContent.design}
            </TabsContent>
          </Tabs>

          <button className="text-blue-600 font-semibold inline-flex items-center gap-2 group hover:underline mt-4">
            Check tools{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm shadow-lg">
          <Image
            src="/handshake.png" // Replace with your actual image path
            alt="Handshake"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
