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

  const toggleDataset = (dataset: keyof DatasetVisibility) => {
    setCurrentDomain(dataset); // Update the current domain

    const updatedVisibility: DatasetVisibility = {
      "Web-Dev": false,
      Events: false,
      Editorial: false,
      Corporate: false,
      "AI/ML": false,
    };
    updatedVisibility[dataset] = true; // Only the selected dataset will be visible

    // No need to manage dataset visibility here if you're only updating the current domain
  };

  return (
    <div>
      {/* Button Section */}
      <div className="flex justify-center space-x-4 mb-4">
        {Object.keys(domainDetails).map((key) => (
          <button
            key={key}
            onClick={() => toggleDataset(key as keyof DatasetVisibility)}
            className={`px-4 py-2 rounded ${
              currentDomain === key
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Flexbox for Title/Description and Chart */}
      <div className="flex">
        {/* Left Side for Title and Description */}
        <div className="flex flex-col justify-center items-center w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-2 text-center">
            {domainDetails[currentDomain].title}
          </h1>
          <p className="mb-4 text-center">
            {domainDetails[currentDomain].description}
          </p>
        </div>

        {/* Right Side for Chart */}
        <div className="w-1/2 p-4">
          <DomainChart datasetVisibility={{ [currentDomain]: true }} /> {/* Pass only the current domain */}
        </div>
      </div>
    </div>
  );
};

export default Domain;
