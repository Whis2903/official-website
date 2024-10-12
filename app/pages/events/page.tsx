// pages/events.tsx
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/Navbar';
import React from 'react';

const Events: React.FC = () => {
  return (
    <div>
      <Navbar /> 
      <div className="container mx-auto my-10">
        <h1 className="text-center text-4xl font-bold text-blue-500 mb-8">Our Events</h1>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="border-2 border-blue-500 bg-blue-200 rounded-xl p-4"> 
              <div className="bg-blue-500 h-10 rounded-t-xl flex items-center">
                <div className="flex-grow text-white font-bold text-lg px-2">Title</div>
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
              <div className="mt-2 text-center">Sub-heading</div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Events;
