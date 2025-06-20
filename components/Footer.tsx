"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0D121E] text-white py-20 pb-40 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div>
          <div className="bg-slate-200 text-black font-bold text-xl px-6 py-2 inline-block">
            LOGO
          </div>
        </div>

        {/* Column 1 – 4 items */}
        <div className="mt-20">
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Column 2 – 4 items */}
        <div className="mt-20">
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Column 3 – 3 items */}
        <div className="mt-20">
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Column 4 – 1 item */}
        <div className="mt-20">
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
