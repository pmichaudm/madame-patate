import "./index.css";
import './App.css'
import {ModalProvider} from "./lib/context/ModalContext.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    <ModalProvider>
      <div className={`relative flex min-h-screen transition-colors z-0 overflow-hidden bg-slate-50`}>
        <Navbar/>
        a
      </div>
    </ModalProvider>
  )
}

export default App
