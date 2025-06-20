"use client";

import React from "react";

const Form = () => {
  return (
    <section className="w-full bg-white  py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold uppercase my-20 text-center ">
        Request a Quote
      </h2>

      {/* Form */}
      <form className="max-w-4xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-md p-3"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm mb-1">E-mail</label>
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-md p-3"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col md:col-span-1">
          <label className="text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="border rounded-md p-3"
          />
        </div>

        {/* Time Frame */}
        <div className="flex flex-col">
          <label className="text-sm mb-1">
            Time Frame <span className="text-red-500">*</span>
          </label>
          <select className="border rounded-md p-3">
            <option>Choose Time Frame</option>
            <option>1-2 Weeks</option>
            <option>1 Month</option>
            <option>2-3 Months</option>
          </select>
        </div>

        {/* Size */}
        <div className="flex flex-col">
          <label className="text-sm mb-1">
            Size <span className="text-red-500">*</span>
          </label>
          <select className="border rounded-md p-3">
            <option>Choose Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label className="text-sm mb-1">
            Quantity <span className="text-red-500">*</span>
          </label>
          <select className="border rounded-md p-3">
            <option>Choose Quantity</option>
            <option>1-10</option>
            <option>10-50</option>
            <option>50+</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm mb-1">
            Please Describe Your Project{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Choose a project type"
            className="border rounded-md p-3"
          />
        </div>

        {/* Terms */}
        <p className="md:col-span-2 text-center text-sm text-gray-600">
          By submitting this form you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-[#1959AC] text-white rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Loerum Ipsum →
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
