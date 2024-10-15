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
      <section className="bg-blue-500 overflow-hidden">
        <div className="bg-black">
          <div className="relative flex flex-col lg:flex-row place-content-center place-items-center px-5 py-10">
            <p className="text-white text-justify absolute inset-0 opacity-25 lg:w-full lg:h-full p-5 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi possimus error harum tenetur dolore. Voluptatem omnis facere, illum incidunt nulla temporibus expedita. Reprehenderit veniam aut aliquid sequi rem, explicabo nesciunt atque nobis, est dolores harum maxime laboriosam quo! Est quidem placeat repellat fugit molestiae officia, vero laudantium dolorem reiciendis nostrum sint consectetur. Nemo eius, magni consequuntur recusandae deserunt, necessitatibus veniam fugit facilis fuga ipsum, officia dolore hic neque perspiciatis numquam. Ad ducimus odit accusamus dolorem iusto quos sint, rerum quod officiis fugiat corrupti culpa incidunt voluptas voluptatem enim quisquam, reprehenderit similique quibusdam! Fuga rerum asperiores neque aliquid mollitia provident consequuntur, quia, molestias placeat unde totam expedita veritatis dolor? Mollitia expedita architecto dolor harum maiores odio sit cupiditate sed exercitationem, porro facere et sequi illum beatae non ipsa iusto asperiores inventore. Itaque delectus qui quo hic perferendis cumque, ipsam quod exercitationem optio iste voluptas minus ullam neque id repudiandae nulla dicta amet aspernatur praesentium sit officia omnis! Molestias dolorem qui impedit obcaecati tempora? Quae nihil quasi, cum, consequatur quis pariatur aliquid voluptatem corporis necessitatibus molestiae tempora minus voluptas, voluptatum saepe doloremque neque? Incidunt quasi culpa nulla recusandae in numquam, iusto vitae quibusdam vero id? Dolorem eaque corporis eos neque maiores. Aliquid?
            </p>
            <h1
              className="text-center text-[4rem] md:text-[6rem] lg:text-[6rem] relative font-bold z-10"
              style={{
                color: "transparent", // Make the inside of the text transparent
                WebkitTextStroke: "2px #0062FF", // Blue outline for the text
                textShadow: "none", // No shadow effect, only outline
              }}
            >
              LinkedIn Developers Society
            </h1>

          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-10 py-10">
            <div className="flex flex-col place-content-center place-items-end gap-2 hidden lg:flex"> {/* Hide on mobile */}
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
            <div className="w-full lg:w-[50%] mt-5 lg:mt-0 text-center">
              <p className="text-white text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat iste fugiat corrupti accusantium. Rem voluptatem sed
                porro rerum amet!
              </p>
              <p className="text-white text-xl lg:text-2xl text-center">
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
          layout="responsive"
          width={1500}
          height={600}
          className="w-full h-auto object-cover -translate-y-1"
        />
      </section>

      {/* Our Mission */}
      <section className="bg-gradient-to-b from-blue-500 to-white to-[60%] flex flex-col place-content-center place-items-center gap-5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center w-full px-5">
          <div className="h-[3px] w-full bg-black" />
          <h1 className="text-center text-3xl lg:text-4xl font-semibold">
            Our Mission
          </h1>
          <div className="h-[3px] w-full bg-black" />
        </div>
        <h1 className="text-center lg:text-left text-2xl font-medium px-5">
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
          <div className="bg-black w-full h-auto p-5 lg:p-10">
            <div className="flex flex-col lg:flex-row justify-between items-start w-full">

              {/* Responsive Mission, Vision, and Goal Cards */}
              <div className="flex flex-col gap-4 w-full lg:w-[20rem]">
                <div className="flex place-content-center place-items-center h-[35rem] md:h-[30rem] sm:h-[25rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-shrink-0 p-3 mb-5">
                  <h1 className="text-2xl font-medium">Mission</h1>
                </div>
                <div className="flex place-content-center place-items-center h-[35rem] md:h-[30rem] sm:h-[25rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-shrink-0 p-3 mb-5 lg:hidden">
                  <h1 className="text-2xl font-medium">Vision</h1>
                </div>
                <div className="flex place-content-center place-items-center h-[35rem] md:h-[30rem] sm:h-[25rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-shrink-0 p-3 mb-5 lg:hidden">
                  <h1 className="text-2xl font-medium">Goal</h1>
                </div>
              </div>

              {/* Desktop view for Vision and Goal cards with responsive heights */}
              <div className="hidden lg:flex flex-col gap-10 items-end flex-grow">
                <div className="flex place-content-end place-items-end h-[25rem] md:h-[22rem] sm:h-[18rem] w-full lg:w-[62rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-grow p-3 flex-shrink">
                  <h1 className="text-2xl font-medium">Vision</h1>
                </div>
                <div className="flex place-content-end place-items-start h-[20rem] md:h-[18rem] sm:h-[15rem] w-full lg:w-[30rem] rounded-xl bg-gradient-to-br from-blue-500 to-white flex-grow p-3">
                  <h1 className="text-2xl font-medium">Goal</h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center place-content-center w-full mt-14">
              <div className="h-[2px] w-full bg-blue-500" />
              <h1 className="text-center text-white text-xl lg:text-4xl font-semibold">
                Our Sponsors
              </h1>
              <div className="h-[2px] w-full bg-blue-500" />
            </div>

            {/* Sponsors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 place-content-center place-items-center mt-5">
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
      <section className="flex flex-col gap-5 place-content-center place-items-center px-5">
        <h1 className="text-center text-5xl font-semibold my-3">
          We are here to answer all your questions :)
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="flex flex-col place-content-center place-items-center gap-5 w-full lg:w-1/2">
            <p className="text-xl lg:text-2xl font-medium">
              Some frequently asked questions
            </p>
            <FaqCard />
            <FaqCard />
            <FaqCard />
            <h3 className="text-xl font-semibold">Got some more questions?</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Contact Us
            </button>
          </div>
          <div className="flex flex-col place-content-center place-items-center w-full lg:w-1/2">
            <Image
              src="/faq.png"
              alt="FAQ"
              width={300}
              height={300}
              className="max-w-full h-auto"
            />
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
