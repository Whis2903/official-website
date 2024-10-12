"use client";
import React, { useState } from "react";
import DomainChart from "./chart"; // Adjust path if necessary

type DatasetVisibility = {
  [key: string]: boolean;
};

type DomainInfo = {
  title: string;
  description: string;
};

const domainDetails: { [key: string]: DomainInfo } = {
  "Web-Dev": {
    title: "Web Development Domain",
    description:
      "This domain encompasses various aspects of web development, including frontend and backend technologies, design principles, and user experience.",
  },
  Events: {
    title: "Events Domain",
    description:
      "This domain covers the planning, organization, and management of events, focusing on aspects like marketing, logistics, and audience engagement.",
  },
  Editorial: {
    title: "Editorial Domain",
    description:
      "This domain focuses on content creation, editing, and publishing across various media platforms, emphasizing quality and audience targeting.",
  },
  Corporate: {
    title: "Corporate Domain",
    description:
      "This domain involves corporate communications, branding, and stakeholder engagement, crucial for business success.",
  },
  "AI/ML": {
    title: "AI and Machine Learning Domain",
    description:
      "This domain explores artificial intelligence and machine learning technologies, focusing on their applications and implications across industries.",
  },
};

const Domain = () => {
  const [currentDomain, setCurrentDomain] = useState<keyof DatasetVisibility>("Web-Dev");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDataset = (dataset: keyof DatasetVisibility) => {
    setCurrentDomain(dataset);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <section className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
      {/* Title Section */}
      <div className="grid grid-cols-3 place-content-center place-items-center w-full mb-4">
        <div className="h-[2px] w-[97%] bg-blue-500" />
        <h1 className="text-4xl font-semibold text-center">Our Domains</h1>
        <div className="h-[2px] w-[97%] bg-blue-500" />
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center mb-6">
        {/* Desktop buttons */}
        <div className="hidden sm:flex justify-center space-x-6 mb-6">
          {Object.keys(domainDetails).map((key) => (
            <button
              key={key}
              onClick={() => toggleDataset(key as keyof DatasetVisibility)}
              className={`px-6 py-3 rounded-lg text-lg transition duration-200 ${
                currentDomain === key
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-300 text-gray-600"
              } hover:bg-blue-400 hover:text-white`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Mobile dropdown */}
        <div className="relative sm:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-6 py-3 rounded-lg text-lg bg-blue-500 text-white shadow-lg hover:bg-blue-400 transition duration-200"
          >
            {currentDomain}
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
              {Object.keys(domainDetails).map(
                (key) =>
                  key !== currentDomain && (
                    <button
                      key={key}
                      onClick={() => toggleDataset(key as keyof DatasetVisibility)}
                      className="block px-6 py-3 text-left w-full text-gray-600 hover:bg-gray-100 transition duration-200"
                    >
                      {key}
                    </button>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Flexbox for Title/Description and Chart */}
      <div className="flex flex-col-reverse sm:flex-row">
        {/* Left Side for Title and Description (comes first in mobile view) */}
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-2 text-center text-blue-500">
            {domainDetails[currentDomain].title}
          </h1>
          <p className="mb-4 text-center">{domainDetails[currentDomain].description}</p>
        </div>

        {/* Right Side for Chart (comes second in mobile view) */}
        <div className="w-full sm:w-1/2 p-4">
          <DomainChart datasetVisibility={{ [currentDomain]: true }} />
        </div>
      </div>
    </section>
  );
};

export default Domain;
