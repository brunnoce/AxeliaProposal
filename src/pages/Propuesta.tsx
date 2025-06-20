import { Card } from "../components/Card"

export const Propuesta = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-xl font-bold">Cosas que agregaría / utilizaría</h2>

      <section className="mt-6 flex flex-wrap justify-center gap-6 max-w-6xl">
        <Card
          title="Buscar transmitir confianza, elegancia y seguridad"
          description="Tratar desde el más mínimo detalle en el front, transmitir seguridad y profesionalismo (iconos centrados, imagenes en buena calidad, etc)"
        />
        <Card
          title="Buscar modernidad en el sitio"
          description="La modernidad inspira confianza y tranquilidad al usuario, más tratandose de un sitio de ciberseguridad."
        />
        <Card
          title="Unificación de la marca"
          description="No mezclar tipografía, colores, etc"
        />
        <Card
          title="Visuales modernos"
          description="Tipo efecto glassmorphism - parallax (pestaña Ideas)"
        />
        <Card
          title="Promoción de redes"
          description="Tener presencia en redes sociales inspira tranquilidad al usuario, tener una identidad puede ser diferencial."
        />
        <Card
          title="Animado gusta más"
          description="Pequeñas animaciones pueden ser atractivas, pero no demasiado. Pequeños iconos que se muevan, un fondo con efecto."
        />
        <Card
          title="Enfasis al CTA"
          description="Call to Action. En la landing el cliente tiene que conocer a la empresa y tener la intención de contactar."
        />
        <Card
          title="Fijarse hasta en el mínimo detalle"
          description="Desde un 404 not found personalizado hasta iconos relacionados con la marca."
        />
      </section>
    </div>
  )
}