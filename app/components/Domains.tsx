"use client";
import React, { useState } from "react";
import DomainChart from "./chart"; // Ensure the correct import of this component
import Image from "next/image"; // Import Image from next/image
import Slider from "react-slick"; // Import slider
import "slick-carousel/slick/slick.css"; // Import CSS for slick-carousel
import "slick-carousel/slick/slick-theme.css";

type DomainKeys = "Web-Dev" | "Events" | "Editorial" | "Business" | "AI/ML";

type DomainInfo = {
  title: string;
  description: string;
  imageSrc: string;
};

const domainDetails: Record<DomainKeys, DomainInfo> = {
  "Web-Dev": {
    title: "Web Development",
    description:
      "This domain focuses on building, designing, and maintaining websites and web applications. It encompasses various technologies such as HTML, CSS, JavaScript, and frameworks like React and Angular. Web developers create user-friendly interfaces and ensure responsive designs for seamless user experiences across devices.",
    imageSrc: "/webdev.gif",
  },
  Events: {
    title: "Events",
    description:
      "This domain specializes in the strategic planning, seamless organization, and efficient management of events. This includes corporate functions, seminars, workshops, and social gatherings. The team coordinates logistics, promotes events, and ensures that all aspects run smoothly to provide memorable experiences.",
    imageSrc: "/events.gif",
  },
  Editorial: {
    title: "Editorial",
    description:
      "This domain is dedicated to the art and science of content creation, editing, and publishing. Editorial teams work on curating engaging stories, articles, and multimedia content, focusing on clarity, coherence, and audience engagement. They ensure that all content meets quality standards and aligns with the organization's voice.",
    imageSrc: "/editorial.gif",
  },
  Business: {
    title: "Business",
    description:
      "This domain focuses on the strategic and operational aspects of running a successful business. It covers areas such as marketing, finance, human resources, and project management. The team analyzes market trends, develops business strategies, and fosters relationships with stakeholders to drive growth and success.",
    imageSrc: "/business.gif",
  },
  "AI/ML": {
    title: "AI/ML",
    description:
      "This domain delves into the cutting-edge fields of artificial intelligence (AI) and machine learning (ML). It involves researching and developing algorithms and models that enable machines to learn from data, make decisions, and improve over time. The team works on applications ranging from natural language processing to computer vision, pushing the boundaries of technology.",
    imageSrc: "/aiml.gif",
  },
};

const Domain = () => {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const domainKeys = Object.keys(domainDetails) as DomainKeys[];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentDomainIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
      {/* Header section */}
      <div className="grid grid-cols-3 place-content-center place-items-center w-full mb-4">
        <div className="h-[2px] w-[97%] bg-blue-500" />
        <h1 className="text-4xl font-semibold text-center">Our Domains</h1>
        <div className="h-[2px] w-[97%] bg-blue-500" />
      </div>

      {/* Domain buttons for desktop view (hidden below 1024px) */}
      <div className="hidden lg:flex justify-center mb-6 w-full">
        {domainKeys.map((key, index) => (
          <button
            key={key}
            onClick={() => setCurrentDomainIndex(index)}
            className={`px-8 py-3 mx-2 rounded-lg text-lg transition-all duration-200 ease-in-out 
                      ${
                        currentDomainIndex === index
                          ? "bg-blue-500 text-white shadow-lg"
                          : "bg-gray-200 text-gray-700 shadow-sm hover:bg-gray-300"
                      }
                      hover:shadow-md hover:scale-105`}
          >
            {domainDetails[key].title}
          </button>
        ))}
      </div>

      {/* Mobile slider view for screens below 1024px */}
      <div className="lg:hidden mb-6">
        <Slider {...settings}>
          {Object.entries(domainDetails).map(([key, domain]) => (
            <div key={key} className="flex flex-col items-center">
              <DomainChart datasetVisibility={{ [key]: true }} />
              <h2 className="text-2xl font-bold mb-2 text-blue-500 text-center">
                {domain.title}
              </h2>
              <Image
                src={domain.imageSrc}
                alt={`${domain.title} image`}
                width={500}
                height={500}
                className="mb-4 mx-auto"
              />
              <p className="text-lg text-center px-4">
                {domain.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop and tablet view */}
      <div className="hidden lg:flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-4">
          <Image
            src={domainDetails[domainKeys[currentDomainIndex]].imageSrc}
            alt={`${domainDetails[domainKeys[currentDomainIndex]].title} image`}
            width={500}
            height={500}
            className="mb-4 lg:mx-auto" // Center image for larger screens
          />
          <h1 className="text-2xl font-bold mb-2 text-center text-blue-500">
            {domainDetails[domainKeys[currentDomainIndex]].title}
          </h1>
          <p className="mb-4 text-center">
            {domainDetails[domainKeys[currentDomainIndex]].description}
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <DomainChart datasetVisibility={{ [domainKeys[currentDomainIndex]]: true }} />
        </div>
      </div>
    </section>
  );
};

export default Domain;
