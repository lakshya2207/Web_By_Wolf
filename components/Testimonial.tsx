"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

// SVG Icons
const BoltIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <path
      d="M30.6667 32L24 45.3333H40L33.3333 58.6667"
      stroke="#0546D2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M53.3333 46.9525C57.3165 45.3919 61.3333 41.8367 61.3333 34.6663C61.3333 23.9997 52.4445 21.333 48 21.333C48 15.9997 48 5.33301 32 5.33301C16 5.33301 16 15.9997 16 21.333C11.5555 21.333 2.66666 23.9997 2.66666 34.6663C2.66666 41.8367 6.6834 45.3919 10.6667 46.9525"
      stroke="#0546D2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <path
      d="M12.36 38.44L15.13 32.5656C15.4862 31.8115 16.5138 31.8115 16.8694 32.5656L19.64 38.44L25.8362 39.3883C26.6312 39.5099 26.948 40.5325 26.3725 41.1195L21.8899 45.6891L22.9478 52.1448C23.0837 52.9739 22.2522 53.6059 21.5408 53.2144L16 50.1648L10.4592 53.2144C9.74784 53.6059 8.91635 52.9739 9.05221 52.1448L10.1101 45.6891L5.62747 41.1195C5.05192 40.5325 5.36877 39.5099 6.16376 39.3883L12.3599 38.4403Z"
      stroke="#155ADA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M44.3597 38.4403L47.1307 32.5656C47.4861 31.8115 48.5139 31.8115 48.8693 32.5656L51.6403 38.4403L57.8363 39.3883C58.6312 39.5099 58.948 40.5325 58.3725 41.1195L53.8899 45.6891L54.9477 52.1448C55.0837 52.9739 54.2523 53.6059 53.5408 53.2144L48 50.1648L42.4592 53.2144C41.7477 53.6059 40.9163 52.9739 41.0523 52.1448L42.1101 45.6891L37.6275 41.1195C37.052 40.5325 37.3688 39.5099 38.1637 39.3883L44.3597 38.4403Z"
      stroke="#155ADA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.3597 14.4404L31.1307 8.56562C31.4861 7.81146 32.5139 7.81146 32.8693 8.56562L35.6403 14.4404L41.8363 15.3883C42.6312 15.5099 42.948 16.5326 42.3725 17.1194L37.8899 21.689L38.9477 28.1448C39.0837 28.9739 38.2523 29.6059 37.5408 29.2144L32 26.1647L26.4592 29.2144C25.7478 29.6059 24.9163 28.9739 25.0522 28.1448L26.1101 21.689L21.6275 17.1194C21.0519 16.5326 21.3688 15.5099 22.1638 15.3883L28.3597 14.4404Z"
      stroke="#155ADA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CastleIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.3333 58.6663H18.6667C15.7211 58.6663 13.3333 56.2786 13.3333 53.333V29.8175C13.3333 29.5015 13.2398 29.1927 13.0646 28.9298L8.26872 21.7361C8.09349 21.4732 8 21.1644 8 20.8486V6.93301C8 6.04935 8.71635 5.33301 9.6 5.33301H14.4C15.2837 5.33301 16 6.04935 16 6.93301V11.733C16 12.6167 16.7163 13.333 17.6 13.333H25.0667C25.9503 13.333 26.6667 12.6167 26.6667 11.733V6.93301C26.6667 6.04935 27.3829 5.33301 28.2667 5.33301H35.7333C36.6171 5.33301 37.3333 6.04935 37.3333 6.93301V11.733C37.3333 12.6167 38.0496 13.333 38.9333 13.333H46.4C47.2837 13.333 48 12.6167 48 11.733V6.93301C48 6.04935 48.7163 5.33301 49.6 5.33301H54.4C55.2837 5.33301 56 6.04935 56 6.93301V20.8486C56 21.1644 55.9064 21.4732 55.7312 21.7361L50.9355 28.9298C50.7603 29.1927 50.6667 29.5015 50.6667 29.8175V53.333C50.6667 56.2786 48.2789 58.6663 45.3333 58.6663Z"
      stroke="#155ADA"
      strokeWidth="1.5"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 5.33301H40"
      stroke="#155ADA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 26.667V37.3337"
      stroke="#155ADA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 58.6667C43.7822 58.6667 53.3334 49.1155 53.3334 37.3333C53.3334 25.5513 43.7822 16 32 16C20.2179 16 10.6667 25.5513 10.6667 37.3333C10.6667 49.1155 20.2179 58.6667 32 58.6667Z"
      stroke="#155ADA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Testimonials
const testimonials = [
  {
    icon: <BoltIcon />,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    name: "Jane Cooper",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    icon: <StarIcon />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    name: "Ralph Edwards",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    icon: <CastleIcon />,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    name: "Courtney Henry",
    avatar: "/avatars/avatar3.jpg",
  },
  {
    icon: <ClockIcon />,
    text: "Hendrerit augue ut non quis integer netus. Sit rhoncus magnis habitant. Egestas amet habitant tellus ornare. Hendrerit senectus. Mauris eget vitae praesent neque nec. Lorem justo libero viverra nulla rhoncus.",
    name: "Cameron Williamson",
    avatar: "/avatars/avatar4.jpg",
  },
];

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#155ADA] text-white px-4 md:px-8 py-16 md:py-20 lg:py-24 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col">
            <h4 className="text-[#bfdbfe] text-lg font-semibold tracking-wide">
              Join other Sun harvesters
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="mt-4 text-white text-opacity-90 max-w-2xl text-base md:text-lg">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <Button className="bg-white text-[#1e3a8a] hover:bg-gray-100 px-6 py-3 rounded-md text-base font-semibold shadow-md md:self-start md:mt-2">
            Lorem Ipsum
          </Button>
        </div>

        <div className="relative">
          <ScrollArea className="w-full pb-6">
            <div
              ref={scrollRef}
              className="flex gap-6 lg:gap-8 xl:gap-10 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((item, index) => (
                <Card
                  key={index}
                  className="min-w-[280px] md:min-w-[300px] lg:min-w-[340px] max-w-[360px] bg-white text-black flex-shrink-0 flex flex-col justify-between p-6 md:p-8 rounded-xl shadow-lg border border-transparent hover:border-[#8dccff] hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="flex flex-col gap-4 p-0">
                    <div className="w-10 h-10 mb-2">{item.icon}</div>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover border-2 border-gray-200"
                      />
                      <span className="font-semibold text-gray-900 text-sm md:text-base">
                        {item.name}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="flex gap-4 mt-8 md:mt-10 justify-start">
            <Button
              className="bg-white text-[#1e3a8a] hover:bg-gray-100 rounded-full w-12 h-12 text-2xl font-bold shadow-md"
              onClick={() => scroll(-350)}
            >
              ←
            </Button>
            <Button
              className="bg-white text-[#1e3a8a] hover:bg-gray-100 rounded-full w-12 h-12 text-2xl font-bold shadow-md"
              onClick={() => scroll(350)}
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
