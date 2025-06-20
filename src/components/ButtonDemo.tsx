import { useState } from "react"
import { Loader2 } from "lucide-react" // si usás shadcn o lucide

export const ButtonDemo = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-transparent">

      {/*Botón normal*/}
      <button className="px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] shadow-md hover:opacity-90 transition">
        Botón
      </button>

      {/*Botón con hover*/}
      <button className="px-4 py-2 rounded-full border font-semibold text-black bg-white hover:bg-gradient-to-br hover:text-white from-[#e7a040] via-[#c032e6] to-[#5124dd] transition">
        Botón con hover
      </button>

      {/*Botón con borde gradiente*/}
      <div className="p-[2px] rounded-full bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd]">
        <button className="px-4 py-2 rounded-full bg-white text-purple-700 font-semibold w-full h-full transition hover:bg-white/90">
          Botón borde gradiente
        </button>
      </div>

      {/*Botón con glow*/}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] blur-md opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>
        <button className="relative px-4 py-2 rounded-full font-semibold text-purple-700 border border-purple-300 bg-white z-10">
          Botón borde glow
        </button>
      </div>

      {/*Botón con loading*/}
      <button
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 2000)
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] transition"
      >
        {loading ? <Loader2 className="animate-spin w-4 h-4" /> : null}
        {loading ? "Cargando..." : "Click para cargar"}
      </button>
    </div>
  )
}
