import React from "react";

const HeroSection3 = () => {
  return (
    <section
      className="relative w-full min-h-screen items-center justify-center mt-20 pt-8 md:p-8 overflow-hidden font-sans"
      style={{
        backgroundImage: "url(/window.png)", // Path to your background image
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
          {/* Paragraph 1 */}
          <p className="text-6xl mb-4 text-center uppercase">
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
            viverra mi. dolor sit amet consectetur. Quis adipiscing
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
