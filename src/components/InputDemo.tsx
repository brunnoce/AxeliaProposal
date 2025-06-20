import { Mail, AlertCircle } from "lucide-react"

export const InputDemo = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto p-4 text-sm">
      
      {/*Input con borde gradiente */}
      <div className="p-[2px] rounded-lg bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd]">
        <input
          type="text"
          placeholder="Borde gradiente"
          className="w-full px-4 py-2 bg-white text-black rounded-lg outline-none"
        />
      </div>

      {/*Input con borde */}
      <input
        type="text"
        placeholder="Focus gradiente"
        className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c032e6] transition"
      />

      {/*Input con glassmorphism */}
      <input
        type="text"
        placeholder="Glass input"
        className="px-4 py-2 w-full rounded-lg bg-black/10 backdrop-blur-md border border-white/30 text-black placeholder-black/60 outline-none"
      />

      {/*Input con ícono */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500" size={18} />
        <input
          type="email"
          placeholder="Email con ícono"
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#5124dd]"
        />
      </div>

      {/*Input con glow */}
      <div className="relative group">
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-sm"></span>
        <input
          type="text"
          placeholder="Animación de borde"
          className="relative z-10 w-full px-4 py-2 rounded-lg border border-gray-300 outline-none bg-white focus:ring-2 focus:ring-transparent"
        />
      </div>

      {/*Input con error*/}
      <div className="relative">
        <AlertCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500" size={18} />
        <input
          type="text"
          placeholder="Campo con error"
          className="pl-10 pr-4 py-2 w-full border border-red-500 rounded-lg outline-none text-red-600 bg-red-50"
        />
        <p className="text-xs text-red-500 mt-1">Este campo es obligatorio</p>
      </div>
    </div>
  )
}
