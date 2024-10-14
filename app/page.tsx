import Carousel from "./components/carousel";
import Domain from "./components/Domains";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import NewJoin from "./components/newjoin";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Carousel />
      <Domain/>
      <Footer/>
      <NewJoin/>
    </div>
  );
};

export default HomePage;
