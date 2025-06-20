"use client";

import React from "react";
import Image from "next/image";

const cardData = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/card1.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/card2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/card3.png",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: "/card4.png",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-white py-18 px-10">
      {/* Section Heading */}
      <div className="mb-12 ">
        <p className="text-sm font-semibold text-blue-700 uppercase">
          Lorem ipsum dolor sit amet
        </p>
        <h2 className="text-3xl my-3 font-bold uppercase text-black">
          Lorem ipsum dolor sit
        </h2>
        <p className="text-sm font-semibold w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          beatae molestias in? Dolor consectetur accusantium obcaecati? Tempora
          quam voluptatem hic aliquam ad est ipsum, quasi ea, soluta aspernatur
          iste adipisci commodi laborum non facere sequi. Voluptate eius
          voluptatem dolor odit?
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap justify-center gap-20 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white w-full sm:w-[45%] md:w-[30%] rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={card.image}
                alt="Card image"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-md font-bold">{card.title}</h3>
              <p className="text-sm text-gray-700">{card.desc}</p>
              <a
                href="#"
                className="text-sm text-blue-600 font-semibold hover:underline mt-2"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
