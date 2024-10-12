import Carousel from "./components/carousel";
import DomainChart from "./components/chart";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Carousel />
      <div className="flex items-center px-10 w-full">
        <div className="flex flex-col place-content-center place-items-center w-[50%] gap-10">
          <h1 className="text-5xl font-semibold">Title</h1>
          <p className="text-center text-xl text-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            assumenda magni illum exercitationem repellendus, eum veniam quis
            saepe perferendis reiciendis ex voluptate. Consectetur repudiandae
            illum ullam voluptas quae fugit iusto.
          </p>
          <div className="grid grid-cols-5 place-content-center place-items-center gap-5">
            {["Events", "Buisness", "Web Dev", "AI/ML", "Editorial"].map((name, index) => (
              <div key={index}>
                <button className="bg-blue-300 px-4 py-2 border-2 border-blue-500 rounded-2xl hover:bg-blue-400 transition-colors duration-300">
                  <span className="text-lg">{name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%]">
          <DomainChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
