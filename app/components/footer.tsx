import { LuInstagram, LuTwitter, LuLinkedin } from 'react-icons/lu'; 

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-white">
      <div className="grid grid-cols-3 place-content-center place-items-center w-full">
        <div className="h-[2px] w-[97%] bg-blue-500" />
        {/* <img src="/logo.png" alt="Logo" className="w-60 h-30" /> */}
        <h1 className="text-4xl font-semibold">Logo</h1>
        <div className="h-[2px] w-[97%] bg-blue-500" />
      </div>

      <div className="flex justify-center items-center gap-4 mt-5">
        <LuInstagram size={25} />
        <LuTwitter size={25} />
        <LuLinkedin size={25} />
      </div>

      <p className="mt-4 text-sm text-gray-500 font-bold">
        © Crafted with ❤️ by LinkedIn Developers Society 2024
      </p>
    </footer>
  );
};

export default Footer;
