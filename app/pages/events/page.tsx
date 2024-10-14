// pages/events.tsx
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

const Events: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Flex column layout and minimum height for full screen */}
      <Navbar />
      <div className="container px-4 lg:mx-auto my-10 flex-grow">
        {" "}
        {/* Allow content to grow */}
        <h1 className="text-center text-2xl md:text-4xl font-bold text-blue-500 mb-8">
          Our Events
        </h1>
        {/* Commented out the existing event listings */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="border-2 border-blue-500 bg-blue-200 rounded-xl p-4"> 
              <div className="bg-blue-500 h-10 rounded-r-full rounded-l-full flex items-center px-2">
                <div className="flex-grow text-white font-semibold text-xl px-2">Title</div>
                <div className="w-4 h-4 bg-red-500 rounded-full mx-1" />
                <div className="w-4 h-4 bg-yellow-500 rounded-full mx-1" />
                <div className="w-4 h-4 bg-green-500 rounded-full mx-1" />
              </div>
              <div className="flex justify-center my-4">
                <img
                  src="/path/to/image.jpg" 
                  alt="Event Image"
                  className="max-w-full h-32 object-cover rounded" 
                />
              </div>
              <div className="mt-2 text-center font-medium">Sub-heading</div>
            </div>
          ))}
        </div> */}
        {/* Coming Soon Message */}
        <div className="flex flex-col items-center justify-center ">
          {" "}
          {/* Added mb-10 for margin below */}
          <Image
            src="/eventplanning.jpg"
            alt="Planning"
            width={500}
            height={20}
          />
          <h2 className="text-3xl font-bold text-blue-500">Coming Soon!</h2>
          <p className="mt-4 text-xl text-center">
            We are working hard to bring you exciting events. Stay tuned for
            updates!
          </p>
        </div>
      </div>
      <Footer /> {/* Footer will now be positioned at the bottom */}
    </div>
  );
};

export default Events;
