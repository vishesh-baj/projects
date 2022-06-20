import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <nav className="w-full h-16 flex justify-between items-center px-10 bg-white ">
      <h1>LOGO</h1>
      <AiOutlineMenu onClick={handleToggle} />
      <ul
        className={`${
          !toggle && "hidden"
        } fixed bg-teal-50 md:bg-transparent right-0 transition ease-in duration-300 top-0 h-screen w-[50vw] md:static md:flex gap-10`}
      >
        <AiOutlineClose
          onClick={handleToggle}
          size={20}
          className="absolute right-5 top-5"
        />
        <li className="font-medium uppercase hover:rounded-lg px-3 py-2 hover:bg-rose-50 text-sm lg:text-sm">
          <a href="/">Home</a>
        </li>
        <li className="font-medium uppercase hover:rounded-lg px-3 py-2 hover:bg-rose-50 text-sm lg:text-sm">
          <a href="/">Services</a>
        </li>
        <li className="font-medium uppercase hover:rounded-lg px-3 py-2 hover:bg-rose-50 text-sm lg:text-sm">
          <a href="/">About</a>
        </li>
        <li className="font-medium uppercase hover:rounded-lg px-3 py-2 hover:bg-rose-50 text-sm lg:text-sm">
          <a href="/">Contact</a>
        </li>
        <li className="font-medium uppercase hover:rounded-lg px-3 py-2 hover:bg-rose-50 text-sm lg:text-sm">
          <a href="/">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
