import { Sidebar } from "../prototipocomponents/Sidebar"
import { Banner } from "../prototipocomponents/Banner"
import { Cards } from "../prototipocomponents/Cards"
import { Form } from "../prototipocomponents/Form"

export const Prototipo = () => {
  return (
    <div className="p-8">
      <Sidebar />
      <Banner />
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Cards title="Seguridad" description="Protección avanzada ante amenazas, monitoreo constante y prevención de vulnerabilidades." />
        <Cards title="Soporte 24/7" description="Nuestro equipo técnico está disponible todos los días para asistir cualquier inconveniente." />
        <Cards title="Confidencialidad" description="Manejo seguro y privado de todos los datos e información sensible." />
      </div>
      <div className="w-full min-h-screen bg-gradient-to-br rounded-2xl from-[#e7a040] via-[#c032e6] to-[#5124dd] flex items-center justify-center p-8">
        <Form />
      </div>
    </div>
  )
}