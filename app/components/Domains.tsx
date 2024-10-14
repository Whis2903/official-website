"use client";
import React, { useState } from "react";
import DomainChart from "./chart"; // Adjust path if necessary
import Image from "next/image"; // If using Next.js

type DomainKeys = "Web-Dev" | "Events" | "Editorial" | "Business" | "AI/ML";
/*
type DatasetVisibility = {
  [key in DomainKeys]: boolean;
};
*/
type DomainInfo = {
  title: string;
  description: string;
  imageSrc: string; // Add an image source property for each domain
};

const domainDetails: Record<DomainKeys, DomainInfo> = {
  "Web-Dev": {
    title: "Web Development Domain",
    description: "This domain focuses on building, designing, and maintaining websites and web applications. It covers a wide range of technologies and practices, including frontend development, which involves creating user interfaces and ensuring an engaging user experience (UX), and backend development, which handles server-side logic, databases, and application architecture. Web development also involves responsive design, accessibility, performance optimization, and the integration of modern frameworks and tools to create scalable, secure, and dynamic web solutions. It's an ever-evolving field that bridges creativity and technical expertise to deliver high-quality digital experiences.",
    imageSrc: "/webdev.gif",
  },
  Events: {
    title: "Events Domain",
    description: "This domain specializes in the strategic planning, seamless organization, and efficient management of events. It encompasses a wide range of functions, from conceptualizing event themes and coordinating logistics to executing marketing campaigns that drive attendance and engagement. The focus is on creating memorable experiences through meticulous attention to detail, ensuring that every aspect, from venue selection to audience interaction, runs smoothly. Whether it's a corporate event, a community gathering, or a large-scale conference, this domain thrives on delivering impactful, well-orchestrated events that leave a lasting impression.",
    imageSrc: "/events.gif",
  },
  Editorial: {
    title: "Editorial Domain",
    description: "This domain is dedicated to the art and science of content creation, editing, and publishing across diverse media platforms, including digital, print, and social channels. It emphasizes producing high-quality, engaging content that aligns with the audience's needs and interests. From developing compelling narratives to ensuring clarity, accuracy, and consistency, the editorial process plays a critical role in building credibility and fostering engagement. The domain also focuses on effective audience targeting, ensuring that content is tailored to reach and resonate with the intended demographic while maintaining a strong editorial voice.",
    imageSrc: "/editorial.gif",
  },
  Business: {
    title: "Business Domain",
    description: "This domain focuses on the strategic and operational aspects of running a successful business. It includes corporate communications, where businesses craft and deliver key messages to internal and external stakeholders, and branding, which involves building a strong, recognizable identity that resonates with the target audience. Additionally, it encompasses stakeholder engagement, fostering positive relationships with clients, partners, and investors. The domain covers business strategy, market analysis, financial planning, and leadership, driving growth and ensuring sustainable success in a competitive marketplace.",
    imageSrc: "/business.gif",
  },
  "AI/ML": {
    title: "AI and Machine Learning Domain",
    description: "This domain delves into the cutting-edge fields of artificial intelligence (AI) and machine learning (ML), focusing on developing intelligent systems that can learn, adapt, and improve from experience. It involves the design and implementation of algorithms that enable machines to analyze complex data, recognize patterns, and make data-driven decisions. With applications ranging from predictive analytics and natural language processing to autonomous systems and deep learning, this domain plays a pivotal role in driving innovation across industries. By leveraging AI and ML, organizations can enhance efficiency, optimize processes, and uncover new opportunities for growth and problem-solving.",
    imageSrc: "/aiml.gif",
  },
};

const Domain = () => {
  const [currentDomain, setCurrentDomain] = useState<DomainKeys>("Web-Dev");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDataset = (dataset: DomainKeys) => {
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
              onClick={() => toggleDataset(key as DomainKeys)}
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
                      onClick={() => toggleDataset(key as DomainKeys)}
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
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 p-1">
          {/* Larger Image above the title */}
          <Image
            src={domainDetails[currentDomain].imageSrc}
            alt={`${domainDetails[currentDomain].title} image`}
            width={500}  // Increased width
            height={500} // Increased height
            className="mb-4"
          />
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
