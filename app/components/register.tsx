// RecruitmentPortal.tsx
"use client";

import React, { useState } from "react";

const Register = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("");

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDomain(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with selected domain: ", selectedDomain);
    // You can send the form data to a server here
  };

  return (
    <div className="bg-white/5 p-6 rounded-lg shadow-lg w-[90%] md:w-[40rem] mx-auto">
      <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-blue-700 to-blue-400 text-center text-4xl md:text-6xl font-bold my-6">
        Join Our Team
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 place-content-center place-items-center">
        <input
          type="text"
          placeholder="Full Name"
          className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-[90%]"
          required
        />
        <input
          type="text"
          placeholder="Reg No"
          className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-[90%]"
          required
        />
        <input
          type="email"
          placeholder="SRM Mail"
          className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-[90%]"
          required
        />
        <input
          type="email"
          placeholder="Personal Mail"
          className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-[90%]"
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-[90%]"
          required
        />

        {/* Flex layout for Department, Section, and Year */}
        <div className="flex flex-col md:flex-row gap-4 w-[90%]">
          <input
            type="text"
            placeholder="Department"
            className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="Section"
            className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="Year"
            className="border-blue-500 border-2 rounded-2xl py-2 px-4 w-full"
            required
          />
        </div>

        {/* Dropdown for selecting domain */}
        <div className="flex items-center justify-between mt-4 w-[90%]">
          <label className="text-xl font-bold mb-2">Select Your Domain:</label>
          <select
            value={selectedDomain}
            onChange={handleDomainChange}
            className="border-2 border-blue-500 rounded-2xl py-2 px-4"
            required
          >
            <option value="" disabled>
              Select a domain
            </option>
            <option value="Web Development">Web Development</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Editorial">Editorial</option>
            <option value="Corporate">Corporate</option>
            <option value="Events">Events</option>
          </select>
        </div>

        {/* File input for resume upload */}
        <div className="flex items-center justify-between w-[90%] mt-4">
          <label className="text-xl font-bold">Upload your resume:</label>
          <input
            type="file"
            accept=".pdf"
            className="border-none rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-2xl mt-6 w-[70%]"
        >
          <span className="font-medium text-2xl">Submit</span>
        </button>
      </form>
    </div>
  );
};

export default Register;
