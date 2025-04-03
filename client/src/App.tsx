import "./index.css";
import './App.css'
import {ModalProvider} from "./lib/context/ModalContext.tsx";
import Navbar from "./components/Navbar.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Accueil from "./pages/Accueil.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const location = useLocation();

  return (
    <ModalProvider>
      <div className={`relative flex flex-col min-h-screen transition-colors z-0 overflow-hidden bg-slate-50 font-montserrat`}>
        <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Accueil/>}/>
          <Route path={'/accueil'} element={<Accueil/>}/>
        </Routes>
        <Footer/>
      </div>
    </ModalProvider>
  )
}

export default App
