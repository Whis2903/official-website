"use client";
import React, { useState } from "react";
import DomainChart from "./chart";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
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
    description: "This domain focuses on building, designing, and maintaining websites and web applications. It encompasses various technologies such as HTML, CSS, JavaScript, and frameworks like React and Angular. Web developers create user-friendly interfaces and ensure responsive designs for seamless user experiences across devices.",
    imageSrc: "/webdev.gif",
  },
  Events: {
    title: "Events",
    description: "This domain specializes in the strategic planning, seamless organization, and efficient management of events. This includes corporate functions, seminars, workshops, and social gatherings. The team coordinates logistics, promotes events, and ensures that all aspects run smoothly to provide memorable experiences.",
    imageSrc: "/events.gif",
  },
  Editorial: {
    title: "Editorial",
    description: "This domain is dedicated to the art and science of content creation, editing, and publishing. Editorial teams work on curating engaging stories, articles, and multimedia content, focusing on clarity, coherence, and audience engagement. They ensure that all content meets quality standards and aligns with the organization's voice.",
    imageSrc: "/editorial.gif",
  },
  Business: {
    title: "Business",
    description: "This domain focuses on the strategic and operational aspects of running a successful business. It covers areas such as marketing, finance, human resources, and project management. The team analyzes market trends, develops business strategies, and fosters relationships with stakeholders to drive growth and success.",
    imageSrc: "/business.gif",
  },
  "AI/ML": {
    title: "AI/ML",
    description: "This domain delves into the cutting-edge fields of artificial intelligence (AI) and machine learning (ML). It involves researching and developing algorithms and models that enable machines to learn from data, make decisions, and improve over time. The team works on applications ranging from natural language processing to computer vision, pushing the boundaries of technology.",
    imageSrc: "/aiml.gif",
  },
};

const Domain = () => {
  const [currentDomain, setCurrentDomain] = useState<DomainKeys>("Web-Dev");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentDomain(Object.keys(domainDetails)[current] as DomainKeys),
  };

  return (
    <section className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-3 place-content-center place-items-center w-full mb-4">
        <div className="h-[2px] w-[97%] bg-blue-500" />
        <h1 className="text-4xl font-semibold text-center">Our Domains</h1>
        <div className="h-[2px] w-[97%] bg-blue-500" />
      </div>

      {/* Mobile view slider */}
      <div className="sm:hidden mb-6">
        <Slider {...settings}>
          {Object.entries(domainDetails).map(([key, domain]) => (
            <div key={key} className="flex flex-col items-center">
              {/* Chart for the current domain */}
              <DomainChart datasetVisibility={{ [key]: true }} />
              <h2 className="text-xl font-bold mb-2 text-blue-500 text-center">{domain.title}</h2>
              <Image
                src={domain.imageSrc}
                alt={`${domain.title} image`}
                width={500}
                height={500}
                className="mb-4"
              />
              <p className="mb-4 text-center">{domain.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 p-1">
          <Image
            src={domainDetails[currentDomain].imageSrc}
            alt={`${domainDetails[currentDomain].title} image`}
            width={500}
            height={500}
            className="mb-4"
          />
          <h1 className="text-2xl font-bold mb-2 text-center text-blue-500">{domainDetails[currentDomain].title}</h1>
          <p className="mb-4 text-center">{domainDetails[currentDomain].description}</p>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <DomainChart datasetVisibility={{ [currentDomain]: true }} />
        </div>
      </div>
    </section>
  );
};

export default Domain;
