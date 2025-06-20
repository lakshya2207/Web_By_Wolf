"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0D121E] text-white px-6 pt-20 pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo Section */}
        <div>
          <div className="bg-slate-200 text-black font-bold text-xl px-6 py-2 inline-block rounded-sm shadow-md">
            LOGO
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
            <li className="hover:text-white transition">Lorem Ipsum</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Lorem Ipsum</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white transition">Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
