import logo from "../assets/logos/logo5.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 shadow h-72 px-[75px]">
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-white text-2xl">Casse-Croûte Madame Patate</h2>
            <p className="text-white text-sm">Votre destination pour les meilleures patates frites!</p>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo Madame Patate" className="max-w-[150px] md:max-w-[200px]" />
          </div>

          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-white text-2xl">Suivez-nous!</h2>
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl mx-2" />
          </div>
        </div>
        <div className="">
          <p className="text-gray-500 text-sm">© 2025 Casse-Croûte Madame Patate. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}