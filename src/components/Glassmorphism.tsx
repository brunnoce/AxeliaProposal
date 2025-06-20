import hack from "../assets/hack.webp"

export const Glassmorphism = () => {
  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${hack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-xl flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Glassmorphism</h3>
        <p className="text-md">
          Este panel muestra el efecto de vidrio con desenfoque y transparencia elegante.
        </p>
      </div>
    </div>
  )
}
