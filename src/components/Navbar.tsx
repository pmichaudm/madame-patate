import logo from '../assets/logos/logo5.png'

export default function Navbar () {
  return (
    <nav className={'flex w-full bg-slate-900 h-[60px] text-white'}>
      <img src={logo}></img>
      <ul className={'flex gap-4'}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}