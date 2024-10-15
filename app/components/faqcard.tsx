"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

function FaqCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the LinkedIn Developers Society?",
      answer:
        "The LinkedIn Developers Society is a community dedicated to empowering developers through collaboration, knowledge sharing, and networking.",
    },
    {
      question: "How can I become a member?",
      answer:
        "You can become a member by signing up on our website and joining our community events and activities.",
    },
    {
      question: "What types of events do you organize?",
      answer:
        "We organize workshops, mentorship programs, networking events, and hackathons to help developers grow and connect.",
    },
  ];

  function handleMenu(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col place-content-center place-items-center lg:w-[30rem] bg-gradient-to-r from-[#0062FF] to-[#F3F3F3] bg-[length:140%_100%] bg-[position:37%_0] rounded-2xl px-3 lg:px-5 py-3"
        >
          <div className="flex justify-between items-center w-full mx-10">
            <h1 className="lg:text-xl">{faq.question}</h1>
            <FaPlus
              size={20}
              onClick={() => handleMenu(index)}
              className={openIndex === index ? "hidden" : "block"}
            />
            <FaPlus
              size={15}
              onClick={() => handleMenu(index)}
              className={openIndex === index ? "block" : "hidden lg:hidden"}
            />
          </div>
          <div
            className={`flex flex-col min-w-auto lg:w-[30rem] mt-2 border-2 border-black rounded-2xl p-5 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              openIndex === index ? "block max-h-auto" : "hidden max-h-0"
            }`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqCard;
