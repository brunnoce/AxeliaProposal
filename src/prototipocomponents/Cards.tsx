interface CardsProps {
  title: string
  description: string
}

export const Cards = ({ title, description }: CardsProps) => {
  return (
    <div className="p-[2px] rounded-2xl bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
      <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-start justify-center text-center">
        <h3 className="text-lg font-semibold text-[#5124dd] mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  )
}
