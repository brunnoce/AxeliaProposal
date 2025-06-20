interface EffectCardProps {
  title: string
  description?: string
  children: React.ReactNode
}

export const EffectCard = ({ title, description, children }: EffectCardProps) => {
  return (
    <div className="w-[80vw] h-[80vh] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-lg p-4 flex flex-col items-center justify-center text-center space-y-4">
      <div className="text-md font-bold">{title}</div>
      {description && <p className="text-sm">{description}</p>}
      <div className="flex-1 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

