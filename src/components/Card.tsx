interface CardProps {
  title: string
  description: string
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="relative p-[1px] rounded-2xl w-64 h-64 bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] shadow-[0_4px_20px_rgba(192,50,230,0.3)] transition hover:shadow-[0_6px_30px_rgba(192,50,230,0.5)] hover:scale-105">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 h-full flex flex-col justify-center items-center text-center">
        <h3 className="text-lg font-semibold mb-2 text-[#5124dd]">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}