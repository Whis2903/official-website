import Domain from "./components/Domains";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import NewHero from "./components/newHero";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <NewHero/>
      <Domain/>
      <Footer/>
    </div>
  );
};

export default HomePage;
