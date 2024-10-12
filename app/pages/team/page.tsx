import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-10 mt-8"> {/* Added margin-top here */}
        {/* Core Section */}
        <section className="flex flex-col">
          <div className="flex place-content-center place-items-center bg-blue-600 rounded-r-full min-h-fit max-w-fit">
            <h2 className="text-2xl font-bold text-white relative p-3">The Core</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Vishal Mohan Nair", position: "President" },
              { name: "Ayush Panwar", position: "Vice President" },
              { name: "Adityasankar Sengupta", position: "Vice President" },
              { name: "Ansh Semwhal", position: "Treasurer" },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group mb-4" // Added mb-4 for spacing
              >
                {/* Circle Image Placeholder */}
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 flex items-center justify-center group-hover:bg-gray-400 transition duration-200">
                  {/* Hidden name for desktop hover */}
                  <span className="hidden text-white font-bold">{member.name}</span>
                </div>
                {/* Tooltip for Mobile and Desktop */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-full w-auto bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {member.name} - {member.position}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Heads Section */}
        <section className="flex flex-col gap-5">
          <div className="flex place-content-center place-items-center bg-blue-600 rounded-r-full min-h-fit max-w-fit">
            <h2 className="text-2xl font-bold text-white relative p-3">The Heads</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"> {/* Adjusted to 4 columns for desktop */}
            {[
              { name: "Eve", position: "Head of AI/ML" },
              { name: "Frank", position: "Head of Web Dev" },
              { name: "Grace", position: "Head of Events" },
              { name: "Heidi", position: "Head of Business" },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group mb-4" // Added mb-4 for spacing
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 flex items-center justify-center group-hover:bg-gray-400 transition duration-200">
                  <span className="hidden text-white font-bold">{member.name}</span>
                </div>
                {/* Tooltip for Mobile and Desktop */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-full w-auto bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {member.name} - {member.position}
                </div>
              </div>
            ))}
          </div>
          {/* Centered Circles for the Last Two Heads with Same Gap */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"> {/* Adjusted to match the first line */}
            {[
              { name: "Ivan", position: "Head of Editorial" },
              { name: "Judy", position: "Head of Marketing" },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group mb-4" // Added mb-4 for spacing
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 flex items-center justify-center group-hover:bg-gray-400 transition duration-200">
                  <span className="hidden text-white font-bold">{member.name}</span>
                </div>
                {/* Tooltip for Mobile and Desktop */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-full w-auto bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {member.name} - {member.position}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leads Section */}
        <section className="flex flex-col gap-5">
          <div className="flex place-content-center place-items-center bg-blue-600 rounded-r-full min-h-fit max-w-fit">
            <h2 className="text-2xl font-bold text-white relative p-3">The Leads</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"> {/* Adjusted to 4 columns for desktop */}
            {Array.from({ length: 20 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group mb-8" // Added mb-8 for spacing
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 flex items-center justify-center group-hover:bg-gray-400 transition duration-200">
                  <span className="hidden text-white font-bold">Lead {index + 1}</span>
                </div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-y-full w-auto bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Lead {index + 1} - Position
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
m