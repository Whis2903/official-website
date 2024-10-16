import { LuInstagram, LuTwitter, LuLinkedin, LuGithub } from 'react-icons/lu'; 

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-black text-white"> {/* Changed bg-white to bg-black and added text-white */}
      <div className="grid grid-cols-3 place-content-center place-items-center w-full">
        <div className="h-[2px] w-[97%] bg-blue-500" />
        <img src="/footer-logo.png" alt="Logo" className="w-32 h-18" /> 
        <div className="h-[2px] w-[97%] bg-blue-500" />
      </div>

      <div className="flex justify-center items-center gap-4 mt-5">
        <LuInstagram size={25} />
        <LuGithub size={25} />
        <LuLinkedin size={25} />
      </div>

      <p className="mt-4 text-sm text-gray-400 font-bold"> {/* Changed text-gray-500 to text-gray-400 for better contrast */}
        © Crafted with ❤️ by LinkedIn Developers Society SRMIST
      </p>
    </footer>
  );
};

export default Footer;
