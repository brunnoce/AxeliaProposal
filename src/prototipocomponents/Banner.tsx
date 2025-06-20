import bannerImg from "../assets/hack.webp"

export const Banner = () => {
  return (
    <div className="w-full min-h-[380px] max-w-7xl mx-auto my-12 p-10 bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 hover:scale-[1.02] transition-transform duration-300">
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-4">
          ¡Bienvenido a Axelia!
        </h1>
        <p className="text-white/90 text-lg leading-relaxed max-w-xl">
          Este es un prototipo que busca mostrar ideas y sugerencias para mejorar la experiencia del usuario en el sitio de Axelia.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={bannerImg}
          alt="Bienvenida"
          className="max-w-sm md:max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </div>
  )
}
