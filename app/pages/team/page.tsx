import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-10">
        {/* Core Section */}
        <section className="flex flex-col">
          <div className="flex place-content-center place-items-center bg-blue-600 rounded-r-full min-h-fit max-w-fit">
            <h2 className="text-2xl font-bold text-white relative p-3">The Core</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Alice", "Bob", "Charlie", "David"].map((name, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group"
              >
                {/* Circle Image Placeholder */}
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 flex items-center justify-center group-hover:bg-gray-400 transition duration-200">
                  {/* Display Name Inside Circle for Mobile Only */}
                  <span className="block sm:hidden text-white font-bold">{name}</span> {/* Only on mobile */}
                </div>
                {/* Tooltip for Desktop Hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-auto bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                  {name} - Position
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
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {["Eve", "Frank", "Grace", "Heidi", "Ivan"].map((name, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group"
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 flex items-center justify-center group-hover:bg-gray-400 transition duration-200">
                  {/* Name for mobile view */}
                  <span className="block sm:hidden text-white font-bold">{name}</span> {/* Visible inside circle for mobile */}
                </div>
                {/* Tooltip for desktop hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-auto bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                  {name} - Position
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
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {Array.from({ length: 20 }, (_, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative group mb-8"
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-2 flex items-center justify-center group-hover:bg-gray-400 transition duration-200">
                  {/* Name for mobile view */}
                  <span className="block sm:hidden text-white font-bold">Lead {index + 1}</span> {/* Visible inside circle for mobile */}
                </div>
                {/* Tooltip for desktop hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-auto bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
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
