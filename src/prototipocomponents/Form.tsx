export const Form = () => {
  return (
    <div className="max-w-xl w-full mx-auto p-8 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Contacto rápido</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#c032e6]"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#c032e6]"
        />
        <textarea
          rows={4}
          placeholder="Mensaje"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#c032e6]"
        />
        <button
          type="button"
          className="mt-4 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] hover:scale-105 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
