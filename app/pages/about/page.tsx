import FaqCard from "@/app/components/faqcard";
import Footer from "@/app/components/footer";
import MissionCard from "@/app/components/missioncard";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <Navbar />

      {/* About Us */}
      <section>
        <div className="grid grid-cols-3 place-content-center place-items-center w-full">
          <div className="h-[2px] w-[97%] bg-blue-500" />
          <h1 className="text-4xl font-semibold">About Us</h1>
          <div className="h-[2px] w-[97%] bg-blue-500" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between place-content-center items-center w-full px-10">
          <div className="text-center lg:text-left lg:w-[50%]">
            <p className="text-2xl font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
              eligendi? Optio molestiae beatae quisquam minus repellendus eius
              impedit at corporis. Laborum harum nobis commodi? Veniam eius
              saepe magnam qui assumenda eum nobis ab, expedita voluptates
              reprehenderit porro quis sequi. Pariatur expedita dignissimos hic
              doloribus veritatis voluptas dolores voluptatem deserunt mollitia!
            </p>
          </div>
          <Image src={"/aboutus.png"} alt={""} width={550} height={550} />
        </div>
      </section>

      {/* Our Mission */}
      <section className="flex flex-col place-content-center place-items-center gap-5">
        <div className="grid grid-cols-3 place-content-center place-items-center w-full">
          <div className="h-[2px] w-[97%] bg-blue-500" />
          <h1 className="text-xl lg:text-4xl font-semibold">Our Mission</h1>
          <div className="h-[2px] w-[97%] bg-blue-500" />
        </div>
        <h1 className="text-center lg:text-left text-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          dicta reprehenderit ab veritatis nostrum nihil?
        </h1>
        <div className="flex flex-col place-content-center place-items-center gap-0 w-full">
          <Image src="/network.png" alt="" width={800} height={600} />
          <div className="bg-black w-full h-auto p-10">
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 space-y-6 lg:space-y-0 lg:space-x-6 place-content-center place-items-center">
              <MissionCard
                title={"Vision"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minima earum. Accusamus placeat alias voluptates necessitatibus molestiae, vitae consequatur corporis ducimus harum atque. Vel, debitis. Aperiam, magni doloremque? Autem, nihil?"
                }
              />
              <MissionCard
                title={"Motivation"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minima earum. Accusamus placeat alias voluptates necessitatibus molestiae, vitae consequatur corporis ducimus harum atque. Vel, debitis. Aperiam, magni doloremque? Autem, nihil?"
                }
              />
              <MissionCard
                title={"Goal"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, minima earum. Accusamus placeat alias voluptates necessitatibus molestiae, vitae consequatur corporis ducimus harum atque. Vel, debitis. Aperiam, magni doloremque? Autem, nihil?"
                }
              />
            </div>
            <div className="flex items-center place-content-center w-full mt-14">
              <div className="h-[2px] w-full bg-blue-500" />
              <h1 className="text-white text-xl lg:text-4xl font-semibold">
                Our Sponsors
              </h1>
              <div className="h-[2px] w-full bg-blue-500" />
            </div>
            {/* Sponsors */}
            <div className="grid grid-rows-2 grid-cols-2 lg:grid-cols-4 gap-4 place-content-center place-items-center mt-5">
              {["Sponsor1", "Sponsor2", "Sponsor3", "Sponsor4"].map(
                (name, index) => (
                  <div
                    className="flex flex-col items-center relative group"
                    key={index}
                  >
                    <div className="w-32 h-32 bg-gray-300 rounded-full mb-2"></div>
                    <div>
                      <h1 className="text-white text-2xl">{name}</h1>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <Image
            src="/curvy.png"
            width={1500}
            height={600}
            alt={""}
            className="-translate-y-1"
          ></Image>
        </div>
      </section>
      {/* FAQ */}
      <section className="flex flex-col gap-5 place-content-center place-items-center">
        <h1 className="text-center text-4xl font-semibold mt-2">
          We are here to answer all your question :)
        </h1>
        <div className="flex flex-col place-content-center place-items-center gap-5">
          <p className="text-xl lg:text-2xl font-medium">
            Some frequently asked questions
          </p>
          <FaqCard/>
          <FaqCard/>
          <FaqCard/>
          <h3 className="text-xl font-semibold">Got some more questions?</h3>
          <button className="bg-blue-200 border-2 border-blue-500 px-4 py-2 rounded-2xl">
            <span className="text-lg font-medium">Get in touch</span>
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default About;
