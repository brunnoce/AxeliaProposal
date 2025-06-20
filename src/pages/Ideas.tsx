import { EffectCard } from "../components/EffectCard"

import { Glassmorphism } from "../components/Glassmorphism"
import { Calendar04 } from "../components/Calendar"
import { PopoverComponent } from "../components/Popover"
import { ScrollAreaComponent } from "../components/ScrollArea"
import { ButtonDemo } from "@/components/ButtonDemo"
import { InputDemo } from "@/components/InputDemo"

export const Ideas = () => {
  return (
    <section className="flex flex-wrap gap-6 justify-center mt-8">
      <EffectCard title="Glassmorphism" description="Un efecto visual moderno y elegante">
        <Glassmorphism />
      </EffectCard>
      <EffectCard title="Shadcn components" description="Componentes hechos, funcionales, con estilos. Agiliza mucho el desarrollo">
        <Calendar04 />
        <br />
        <PopoverComponent />
        <ScrollAreaComponent />
      </EffectCard>
      <EffectCard title="Seguir el mismo branding" description="Que todos los componentes sigan una misma estética, comenzar desde el primer día a armar una librería propia">
        <div className="flex flex-col">
          <ButtonDemo />
          <InputDemo />
        </div>
      </EffectCard>  
    </section>
  )
}
