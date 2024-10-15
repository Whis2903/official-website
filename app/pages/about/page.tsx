import FaqCard from "@/app/components/faqcard";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-500">
        <div className="bg-black">
          <div className="flex place-content-center place-items-center px-5 py-10">
            <p className="text-white text-justify absolute opacity-25">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              explicabo tempore libero culpa, quibusdam error? Deleniti nemo
              consequatur perferendis tempora hic fuga, corrupti optio cum eaque
              fugit modi voluptas esse reprehenderit ea dicta veritatis, quidem
              iure. Vero possimus iste, nulla minus quis similique facilis enim
              aliquam veritatis officiis blanditiis ea, ex laudantium architecto
              eaque, perspiciatis sunt voluptate. Nesciunt blanditiis nostrum
              officia quas doloremque iste est cumque nobis dignissimos deserunt
              ratione dolores, quo expedita corporis veniam rerum neque maxime
              molestias sequi, ea quasi! Quisquam sint minima itaque voluptatum,
              nesciunt quia neque quam tenetur quo consequuntur at harum
              molestias, a magnam dolores aut et maiores nostrum provident
              dolore eveniet voluptatibus voluptas tempore minus? Excepturi
              autem nemo hic, culpa corrupti nisi laborum, similique illo labore
              sequi deleniti aliquid, fuga maxime odit ex sint alias amet. Eaque
              non voluptatem in, nulla harum veniam totam dolores nobis vero
              magnam eligendi rerum atque eveniet laudantium placeat? Ut
              obcaecati aut maxime odio vel?
            </p>
            <h1 className="text-center text-[7.5rem] relative text-blue-500 font-bold">
              LinkedIn Developers Club
            </h1>
          </div>
          <div className="flex justify-between items-center w-full px-10 py-10">
            <div className="flex flex-col place-content-center place-items-end gap-2">
              <div className="flex items-center gap-2">
                <Keys />
                <Keys />
                <Keys />
                <Keys />
                <Keys />
              </div>
              <div className="flex items-center gap-2">
                <Keys />
                <Keys />
                <Keys />
                <div>
                  <div className="flex place-content-center place-items-center p-2 bg-gradient-to-tl from-blue-500 from-[20%] to-white rounded-2xl">
                    <div className="flex place-content-end place-items-end h-24 w-44 bg-gradient-to-tl from-blue-600 to-white from-[15%] shadow-lg rounded-2xl hover:opacity-40 transition-opacity duration-300 p-3">
                      <p className="text-2xl">Connect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <p className="text-white text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat iste fugiat corrupti accusantium. Rem voluptatem sed
                porro rerum amet!
              </p>
              <p className="text-white text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat iste fugiat corrupti accusantium. Rem voluptatem sed
                porro rerum amet!
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/curvy.png"
          alt="Curvy Background"
          layout="responsive" // This ensures the image is responsive to the container
          width={1500}
          height={600}
          className="w-full h-auto object-cover -translate-y-1" // Ensures the image fits the entire width
        />

      </section>

      {/* Our Mission */}
      <section className="bg-gradient-to-b from-blue-500 to-white to-[60%] flex flex-col place-content-center place-items-center gap-5">
        <div className="grid grid-cols-3 place-content-center place-items-center w-full">
          <div className="h-[3px] w-full bg-black" />
          <h1 className="text-center text-3xl lg:text-4xl font-semibold">
            Our Mission
          </h1>
          <div className="h-[3px] w-full bg-black" />
        </div>
        <h1 className="text-center lg:text-left text-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          dicta reprehenderit ab veritatis nostrum nihil?
        </h1>
        <div className="flex flex-col place-content-center place-items-center gap-0 w-full">
          <Image
            src="/network.png"
            alt="Network"
            width={800}
            height={600}
            className="max-w-full h-auto"
          />
          <div className="bg-black w-full h-auto p-10">
            <div className="flex justify-between items-start w-full">
              <div className="flex place-content-start place-items-start h-[35rem] w-[20rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-shrink-0 p-3">
                <h1 className="text-2xl font-medium">Mission</h1>
              </div>
              <div className="flex flex-col gap-10 items-end flex-grow">
                <div className="flex place-content-end place-items-end h-[17rem] w-[62rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-grow p-3">
                  <h1 className="text-2xl font-medium">Vision</h1>
                </div>
                <div className="flex place-content-end place-items-start h-[15rem] w-[30rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-grow p-3">
                  <h1 className="text-2xl font-medium">Goal</h1>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 space-y-6 lg:space-y-0 lg:space-x-6 place-content-center place-items-center">
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
            </div> */}
            <div className="grid grid-cols-3 place-items-center place-content-center w-full mt-14">
              <div className="h-[2px] w-full bg-blue-500" />
              <h1 className="text-center text-white text-xl lg:text-4xl font-semibold">
                Our Sponsors
              </h1>
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
            alt="Curvy Background"
            layout="responsive" // This ensures the image is responsive to the container
            width={1600}
            height={600}
            className="w-full h-auto object-cover -translate-y-1" // Ensures the image fits the entire width
          />

        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-5 place-content-center place-items-center">
        <h1 className="text-center text-5xl font-semibold my-3">
          We are here to answer all your questions :)
        </h1>
        <div className="flex justify-between items-center w-full pl-32 pr-10">
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
          <div className="grid lg:grid-cols-4 grid-rows-4 py-2">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="rounded-full h-24 w-24"
                style={{
                  background: `radial-gradient(circle at 20% 10%, #D9D9D9, #0062FF, #0062FF)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;

const Keys = () => {
  return (
    <div>
      <div className="flex place-content-center place-items-center p-2 bg-gradient-to-tl from-blue-500 from-[20%] to-white rounded-2xl">
        <div className="flex place-content-end place-items-end h-24 w-24 bg-gradient-to-tl from-blue-600 to-white from-[15%] shadow-lg rounded-2xl hover:opacity-40 transition-opacity duration-300 p-3">
          <span className="text-2xl">o</span>
        </div>
      </div>
    </div>
  );
};
