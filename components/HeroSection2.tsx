import React from "react";

const HeroSection2 = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center mt-20 pt-8 md:p-8 overflow-hidden font-sans"
      style={{
        backgroundImage: "url(/bgcyberpunk1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-white text-center animate-fade-in-up">
        <div className="font-extrabold text-xl mb-8 bg-slate-200 text-black inline-block px-6 py-2 rounded-md animate-slide-in-down">
          LOGO
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in-up">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed mb-4 animate-fade-in-up delay-100">
          Lorem ipsum dolor sit amet consectetur. Mattis euismod volutpat vestibulum nisi at ac risus amet.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-8 animate-fade-in-up delay-200">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque.
        </p>
        <button className="px-8 py-3 bg-white text-black font-bold rounded-md shadow-lg hover:bg-gray-200 transition duration-300 animate-fade-in-up delay-300">
          Lorem Ipsum →
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-slide-in-down {
          animation: slideInDown 1s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection2;
