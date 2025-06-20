import { PanelResizable } from "../components/PanelResizable"

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd]">Axelia Proposal</h1>
      <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 text-[#ad84eb]">
        por Bruno Cé
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Página a modo presentación con ideas y sugerencias para poder mejorar la experiencia del usuario en la landing y el MVP de Axelia.
      </p>

      <div className="flex flex-col items-center justify-center mt-6">
        <blockquote className="mt-6 border-l-2 pl-6 italic text-center">
          "Más que años de experiencia o un CV perfecto, valoramos la actitud, las ganas de aprender y la capacidad de trabajar en equipo. <br /> Si te interesa ser parte de algo desde sus cimientos, este es tu lugar."
        </blockquote>
        <p className="text-muted-foreground text-md text-right w-full">- Juan Nihoul</p>
      </div>

      <section className="mt-4">
        <PanelResizable />
      </section>
    </div>
  )
}
