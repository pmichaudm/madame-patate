import { useState } from "react";
import logo from "../assets/logos/logo5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [commanderHover, setCommanderHover] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const liStyle =
    "flex cursor-pointer h-full min-w-28 pt-1 items-center justify-center border-b-4 border-transparent hover:border-orange-600 transition-all duration-200";

  return (
    <nav className="flex w-full justify-between bg-slate-900 h-[80px] text-white relative">
      {/* Left Logo */}
      <img
        src={logo}
        className="absolute left-1/2 -translate-x-1/2 h-[80px] md:h-auto md:static md:translate-x-0 md:px-[75px] py-[5px]"
       alt={'Casse-Croûte Madame Patate'}/>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex h-full items-center mr-[75px]">
        <li className={liStyle}>Accueil</li>
        <li className={liStyle}>Menu</li>
        <li className={liStyle}>Histoire</li>
        <li className={liStyle}>Contact</li>
        <li className="p-[10px] bg-orangePatate ml-[25px] rounded-full cursor-pointer hover:scale-110 transition-transform duration-200" onMouseEnter={() => setCommanderHover(true)} onMouseLeave={() => setCommanderHover(false)}>
          <FontAwesomeIcon icon={faPhone} className={`mr-2 ${commanderHover && 'animate-pulse'}`} />
          Commander
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="absolute top-[25px] right-[15px] md:hidden mr-6 text-2xl" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Navbar */}
      <div
        className={`absolute top-full left-0 w-full bg-slate-900 transition-all duration-400 linear transform origin-top z-20
        ${menuOpen ? "opacity-100 translate-x-0 visible" : "opacity-50 translate-x-[100%] invisible"} md:hidden`}
      >
        <ul className="flex flex-col text-center py-4 space-y-4">
          <li className={liStyle} onClick={toggleMenu}>Accueil</li>
          <li className={liStyle} onClick={toggleMenu}>Menu</li>
          <li className={liStyle} onClick={toggleMenu}>Histoire</li>
          <li className={liStyle} onClick={toggleMenu}>Contact</li>
          <li className="p-[10px] bg-red-800 mx-auto w-40 rounded-full cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Commander
          </li>
        </ul>
      </div>
    </nav>
  );
}
