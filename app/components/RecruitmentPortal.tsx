// RecruitmentPortal.tsx
"use client"; // Indicate this is a client component

import Image from "next/image";
import React, { useState } from "react";

const RecruitmentPortal = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>("");

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDomain(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with selected domain: ", selectedDomain);
    // You can also gather the form data and send it to a server here
  };

  return (
    <div className="p-10">
      <h1 className="text-center text-5xl font-bold mb-6 text-blue-500">Join Our Team</h1>
      <div className="flex justify-between items-center w-full">
        <div className="w-[50%] hidden lg:block">
          <Image src="" alt="HiringLogo" width={500} height={100}/>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-blue-500/20 p-4 rounded-2xl"
        >
          {/* Full name and registration number */}
          <div className="flex gap-3 justify-between items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl w-[50%]"
              required
            />
            <input
              type="text"
              placeholder="Reg No"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl w-[50%]"
              required
            />
          </div>
          {/* Email IDs (SRM and Personal) */}
          <div className="flex gap-3 justify-between items-center">
            <input
              type="email"
              placeholder="SRM Mail"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl"
              required
            />
            <input
              type="email"
              placeholder="Personal Mail"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl"
              required
            />
          </div>
          {/* Department + Section + Year */}
          <div className="flex gap-3 justify-between items-center">
            <input
              type="text"
              placeholder="Department"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl"
              required
            />
            <input
              type="text"
              placeholder="Section"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl"
              required
            />
            <input
              type="text"
              placeholder="Year"
              className="border-2 border-blue-400 py-2 px-4 rounded-2xl"
              required
            />
          </div>

          {/* Dropdown for selecting domain */}
          <div className="flex gap-3 justify-between items-center">
            <select
              value={selectedDomain}
              onChange={handleDomainChange}
              className="rounded-2xl py-2 px-4 border-2 border-blue-400 w-[50%]"
              required
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
            <select
              value={selectedDomain}
              onChange={handleDomainChange}
              className="rounded-2xl py-2 px-4 border-2 border-blue-400 w-[50%]"
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

          {/* Resume Upload */}
          <div className="flex gap-3 justify-between items-center px-3">
            <h1 className="text-xl font-semibold">Enter your resume: </h1>
            <input
              type="file"
              accept=".pdf"
              className="border rounded py-2 px-4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentPortal;
