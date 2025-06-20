import { Link } from 'react-router-dom'
import { useState } from 'react'

export const NavBar = () => {
  const [active, setActive] = useState('Inicio')

  const linkClass = (name: string) =>
    active === name
      ? 'px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] transition'
      : 'px-4 py-2 rounded-full text-purple-600 font-semibold border border-purple-300 hover:bg-purple-100 transition'

  return (
    <nav className="flex gap-4 p-4 shadow-md w-full items-center justify-center">
      <Link to="/" onClick={() => setActive('Inicio')} className={linkClass('Inicio')}>
        Inicio
      </Link>
      <Link to="/propuesta" onClick={() => setActive('Propuesta')} className={linkClass('Propuesta')}>
        Propuesta
      </Link>
      <Link to="/ideas" onClick={() => setActive('Ideas')} className={linkClass('Ideas')}>
        Ideas
      </Link>
      <Link to="/prototipo" onClick={() => setActive('Prototipo')} className={linkClass('Prototipo')}>
        Prototipo
      </Link>
    </nav>
  )
}
