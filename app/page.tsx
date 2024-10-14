import Carousel from "./components/carousel";
import Domain from "./components/Domains";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Carousel />
      <Domain/>
      <Footer/>
    </div>
  );
};

export default HomePage;
