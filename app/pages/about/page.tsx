import FaqCard from "@/app/components/faqcard";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";
import MissionCard from "@/app/components/missioncard";
import Image from "next/image";
import React from "react";

interface KeysProps {
  letter: string; // 'letter' is expected to be a string
}

const Keys: React.FC<KeysProps> = ({ letter }) => {
  return (
    <div>
      <div className="flex place-content-center place-items-center p-2 bg-gradient-to-tl from-blue-500 from-[20%] to-white rounded-2xl">
        <div className="flex place-content-end place-items-end h-24 w-24 bg-gradient-to-tl from-blue-600 to-white from-[15%] shadow-lg rounded-2xl hover:opacity-40 transition-opacity duration-300 p-3">
          <span className="text-2xl font-bold text-white">{letter}</span>
        </div>  
      </div>
    </div>
  );
};

function About() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-500 overflow-hidden">
        <div className="bg-black">
          <div className="relative flex flex-col lg:flex-row place-content-center place-items-center px-5 py-10">
            <p className="text-white text-justify absolute inset-0 opacity-25 lg:w-full lg:h-full p-5 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi possimus error harum tenetur dolore. Voluptatem omnis facere, illum incidunt nulla temporibus expedita. Reprehenderit veniam aut aliquid sequi rem, explicabo nesciunt atque nobis, est dolores harum maxime laboriosam quo! Est quidem placeat repellat fugit molestiae officia, vero laudantium dolorem reiciendis nostrum sint consectetur. Nemo eius, magni consequuntur recusandae deserunt, necessitatibus veniam fugit facilis fuga ipsum, officia dolore hic neque perspiciatis numquam. Ad ducimus odit accusamus dolorem iusto quos sint, rerum quod officiis fugiat corrupti culpa incidunt voluptas voluptatem enim quisquam, reprehenderit similique quibusdam! Fuga rerum asperiores neque aliquid mollitia provident consequuntur, quia, molestias placeat unde totam expedita veritatis dolor? Mollitia expedita architecto dolor harum maiores odio sit cupiditate sed exercitationem, porro facere et sequi illum beatae non ipsa iusto asperiores inventore. Itaque delectus qui quo hic perferendis cumque, ipsam quod exercitationem optio iste voluptas minus ullam neque id repudiandae nulla dicta amet aspernatur praesentium sit officia omnis! Molestias dolorem qui impedit obcaecati tempora? Quae nihil quasi, cum, consequatur quis pariatur aliquid voluptatem corporis necessitatibus molestiae tempora minus voluptas, voluptatum saepe doloremque neque? Incidunt quasi culpa nulla recusandae in numquam, iusto vitae quibusdam vero id? Dolorem eaque corporis eos neque maiores. Aliquid?
            </p>
            <h1
              className="text-center relative font-bold z-10"
              style={{
                fontSize: "4rem", // Default font size for mobile
                color: "transparent", // Make the inside of the text transparent
                WebkitTextStroke: "2px #0062FF", // Blue outline for the text
                textShadow: "none", // No shadow effect, only outline
              }}
            >
              <span className="hidden md:block text-[6rem] lg:text-[6rem]">{/* For desktop view */}</span>
              LinkedIn Developers Society
            </h1>

          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-10 py-10">
            <div className="flex flex-col place-content-center place-items-end gap-2 hidden lg:flex"> {/* Hide on mobile */}
              <div className="flex items-center gap-2">
                {["L", "I", "N", "K", "E"].map((letter, index) => (
                  <Keys key={index} letter={letter} /> // Render keys for first line
                ))}
              </div>
              <div className="flex items-center gap-2">
                {["D", "I", "N"].map((letter, index) => (
                  <Keys key={index + 5} letter={letter} /> // Render keys for second line with offset
                ))}
                <div>
                  <div className="flex place-content-center place-items-center p-2 bg-gradient-to-tl from-blue-500 from-[20%] to-white rounded-2xl">
                    <div className="flex place-content-end place-items-end h-24 w-44 bg-gradient-to-tl from-blue-600 to-white from-[15%] shadow-lg rounded-2xl hover:opacity-40 transition-opacity duration-300 p-3">
                      <p className="text-2xl">Connect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] mt-5 lg:mt-0 text-center">
              <p className="text-white text-xl lg:text-2xl">
                Welcome to the LinkedIn Developers Society, a vibrant community dedicated to empowering developers and fostering innovation. Our society is built on the belief that collaboration and knowledge-sharing are key to advancing our skills and driving impactful projects. We are committed to providing a platform where developers can connect, learn, and grow together.
              </p>
              <p className="text-white text-xl lg:text-2xl text-center">
                Our mission is to bridge the gap between aspiring developers and industry experts. Through workshops, mentorship programs, and networking events, we strive to cultivate an inclusive environment that supports professional development and encourages creativity. Join us as we explore the ever-evolving tech landscape and build a future where every developer can thrive!
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/curvy.png"
          alt="Curvy Background"
          layout="responsive"
          width={1500}
          height={600}
          className="w-full h-auto object-cover -translate-y-1"
        />
      </section>

      {/* Our Mission */}
      <section className=" bg-gradient-to-b from-blue-500 to-white to-[60%] flex flex-col place-content-center place-items-center gap-5">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center place-items-center mt-5">
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
              <div className="flex flex-col items-center relative group">
                <div className="w-32 h-32 overflow-hidden mb-2"> {/* Removed 'rounded-full' */}
                  <img
                    src="/l.png" // Replace with the correct path for Sponsor 3
                    alt="LinkedIn"
                    className="w-full h-full object-fit"
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
      <section className="flex flex-col gap-5 place-content-center place-items-center px-5">
        <h1 className="text-center text-5xl font-semibold my-3">
          We are here to answer all your questions :)
        </h1>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col place-content-center place-items-center gap-5 w-full lg:w-1/2">
            <p className="text-xl lg:text-2xl font-medium text-center">
              Some frequently asked questions
            </p>
            <FaqCard />
            <h3 className="text-xl font-semibold text-center">Got some more questions?</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-10"> {/* Added mb-10 for margin */}
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
