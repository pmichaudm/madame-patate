import background from '../assets/poutine.jpg'

export default function Accueil() {
    return (
      <div className="relative w-full h-[calc(100vh-80px)]">
        <img
          src={background}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 flex justify-center items-center h-full">
          <h1 className="text-white text-4xl">Accueil</h1>
        </div>
      </div>
    )
}