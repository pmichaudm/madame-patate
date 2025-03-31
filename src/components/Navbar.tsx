import logo from '../assets/logos/logo5.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

export default function Navbar () {
  const liStyle = 'flex cursor-pointer h-full min-w-28 pt-1 items-center justify-center border-b-4 border-transparent hover:border-white transition-all duration-200'
  return (
    <nav className={'flex w-full justify-between bg-slate-900 h-[80px] text-white'}>
      <img src={logo} className={'px-[75px] py-[5px]'}></img>
      <ul className={'flex h-full items-center mr-[75px]'}>
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Services</li>
        <li className={liStyle}>Contact</li>
        <li className={'p-[10px] bg-red-800 ml-[25px] rounded-full cursor-pointer'}>
          <FontAwesomeIcon icon={faPhone} className={'mr-2'}/>Commander
        </li>
      </ul>
    </nav>
  );
}