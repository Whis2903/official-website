// RecruitmentPortal.tsx
"use client"; // Indicate this is a client component

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
      <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border rounded py-2 px-4"
          required
        />
        <input
          type="text"
          placeholder="Reg No"
          className="border rounded py-2 px-4"
          required
        />
        <input
          type="email"
          placeholder="SRM Mail"
          className="border rounded py-2 px-4"
          required
        />
        <input
          type="email"
          placeholder="Personal Mail"
          className="border rounded py-2 px-4"
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="border rounded py-2 px-4"
          required
        />
        <input
          type="text"
          placeholder="Department"
          className="border rounded py-2 px-4"
          required
        />
        <input
          type="text"
          placeholder="Section"
          className="border rounded py-2 px-4"
          required
        />
        <input
          type="text"
          placeholder="Year"
          className="border rounded py-2 px-4"
          required
        />

        {/* Dropdown for selecting domain */}
        <div className="flex flex-col mt-4">
          <label className="text-xl font-bold mb-2">Select Your Domain:</label>
          <select
            value={selectedDomain}
            onChange={handleDomainChange}
            className="border rounded py-2 px-4"
            required
          >
            <option value="" disabled>Select a domain</option>
            <option value="Web Development">Web Development</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Editorial">Editorial</option>
            <option value="Corporate">Corporate</option>
            <option value="Events">Events</option>
          </select>
        </div>

        {/* Resume Upload */}
        <input
          type="file"
          accept=".pdf"
          className="border rounded py-2 px-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecruitmentPortal;
