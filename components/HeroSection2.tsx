import React from "react";

const HeroSection2 = () => {
  return (
    <section
      className="relative w-full min-h-screen items-center justify-center mt-20 pt-8 md:p-8 overflow-hidden font-sans"
      style={{
        backgroundImage: "url(/bgcyberpunk1.png)", // Path to your background image
        backgroundSize: "cover", // Makes the image cover the entire section
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="flex flex-col ">
        {/* Logo Placeholder */}
        <div className="font-extrabold z-20 text-xl p-3 px-6 bg-slate-200 w-26 text-black">
          LOGO
        </div>
        {/* Content Container */}
        <div className="relative z-20 max-w-4xl mx-auto text-white flex flex-col items-start px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight mb-6 text-left">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS
            EGESTAS ALIQUAM VIVERRA MI.
          </h1>

          {/* Paragraph 1 */}
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-center">
            Lorem ipsum dolor sit amet consectetur. Mattis euismod volutpat
            vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
            pellentesque id sed. Id tellus id luctus id. At quis nunc libero
            urna arcu vulputate sed. Nisi porta massa diam condimentum nulla
            quam.
          </p>

          {/* Paragraph 2 */}
          <p className="text-base sm:text-lg leading-relaxed mb-8 text-center">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
            condimentum ultrices non. Ornare semper in tincidunt pellentesque
            cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
            Nulla luctus quam lacus non at. Tincidunt morbi feugiat a pulvinar
            euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>

          {/* Call-to-Action Button */}
          <button className="flex m-auto items-center px-6 py-3 bg-white text-black font-semibold rounded-md shadow-lg hover:bg-gray-200 transition-colors duration-300">
            Lorem Ipsum
            <span className="ml-2">→</span> {/* Arrow icon */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
