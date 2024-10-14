import FaqCard from "@/app/components/faqcard";
import Footer from "@/app/components/footer";
import MissionCard from "@/app/components/missioncard";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-300 p-8 text-white text-center mt-2"> {/* Added mt-10 for margin-top */}
        <h1 className="text-5xl font-bold mb-4">Welcome to the LinkedIn Developers Society!</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Empowering students with skills in AI, machine learning, web development, and more.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-white opacity-20 rounded-t-full"></div>
      </section>

      {/* About Us */}
      <section className="py-10">
        <div className="w-full flex justify-center mt-10 mb-8">
          <h1 className="text-center text-4xl font-bold text-blue-500">About Us</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between place-content-center items-center w-full px-4 md:px-10">
          <div className="text-center lg:text-left lg:w-[50%] overflow-hidden">
            <p className="text-2xl font-medium">
              The LinkedIn Developer’s Society is a dynamic student-led club focused on empowering students with cutting-edge skills in AI, machine learning, web development, business strategy, and editorial work. Our goal is to foster a collaborative environment where students can expand their knowledge, participate in real-world projects, and grow both personally and professionally. Through workshops, mentorship, and hands-on experience, we prepare our members for the fast-evolving job market, equipping them with the technical and soft skills needed to thrive in various industries. We welcome students of all backgrounds who share a passion for learning, problem-solving, and innovation.
            </p>
          </div>
          <Image src="/aboutus.png" alt="About Us" width={550} height={550} className="max-w-full h-auto" />
        </div>
      </section>

      {/* Our Mission */}
      <section className="flex flex-col place-content-center place-items-center gap-5">
        <div className="grid grid-cols-3 place-content-center place-items-center w-full">
          <div className="h-[2px] w-full bg-blue-500" />
          <h1 className="text-center text-2xl lg:text-4xl font-semibold">Our Mission</h1>
          <div className="h-[2px] w-full bg-blue-500" />
        </div>
        <h1 className="text-center lg:text-left text-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          dicta reprehenderit ab veritatis nostrum nihil?
        </h1>
        <div className="flex flex-col place-content-center place-items-center gap-0 w-full">
          <Image src="/network.png" alt="Network" width={800} height={600} className="max-w-full h-auto" />
          <div className="bg-black w-full h-auto p-10">
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 space-y-6 lg:space-y-0 lg:space-x-6 place-content-center place-items-center">
              <MissionCard
                title={"Vision"}
                text={
                  "Our vision at the LinkedIn Developer’s Society is to create a vibrant community where students can thrive by mastering cutting-edge technologies and professional skills. We aim to bridge the gap between academic learning and real-world industry practices, empowering students to become innovative leaders who will shape the future of technology, business, and society."
                }
                className="h-40 lg:h-auto px-0 md:px-4 transition-transform transform hover:scale-105" // Added hover effect
              />
              <MissionCard
                title={"Motivation"}
                text={
                  "Our club is passionate about learning and collaboration, aiming to equip students with the skills and confidence needed to navigate the digital world. We foster an inclusive environment that prioritizes creativity, critical thinking, and teamwork, empowering members to explore new horizons in AI, machine learning, web development, and business strategy."
                }
                className="h-40 lg:h-auto px-0 md:px-4 transition-transform transform hover:scale-105" // Added hover effect
              />
              <MissionCard
                title={"Goal"}
                text={
                  "Our goal is to provide a platform where students can engage in hands-on projects, attend workshops, and benefit from mentorship programs that prepare them for success in both their academic and professional journeys. By cultivating technical expertise and essential soft skills, we aim to develop well-rounded individuals ready to excel in the dynamic industries of today and tomorrow."
                }
                className="h-40 lg:h-auto px-0 md:px-4 transition-transform transform hover:scale-105" // Added hover effect
              />
            </div>
            <div className="grid grid-cols-3 place-items-center place-content-center w-full mt-14">
              <div className="h-[2px] w-full bg-blue-500" />
              <h1 className="text-center text-white text-xl lg:text-4xl font-semibold">Our Sponsors</h1>
              <div className="h-[2px] w-full bg-blue-500" />
            </div>

            {/* Sponsors */}
            <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-2 gap-4 place-content-center place-items-center mt-5">
              <div className="flex flex-col items-center relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                  <img
                    src="/srm.png" // Replace with the correct path for Sponsor 1
                    alt="SRMIST KTR"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                  <img
                    src="/dsbs.png" // Replace with the correct path for Sponsor 2
                    alt="DSBS"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/curvy.png"
            width={1500}
            height={600}
            alt="Curvy Background"
            className="-translate-y-1 max-w-full h-auto" // Added max-w-full for responsiveness
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-5 place-content-center place-items-center">
        <h1 className="text-center text-4xl font-semibold mt-2">
          We are here to answer all your questions :)
        </h1>
        <div className="flex flex-col place-content-center place-items-center gap-5">
          <p className="text-xl lg:text-2xl font-medium">
            Some frequently asked questions
          </p>
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <h3 className="text-xl font-semibold">Got some more questions?</h3>
          <button className="bg-blue-200 border-2 border-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-300 transition duration-200">
            <span className="text-lg font-medium">Get in touch</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
