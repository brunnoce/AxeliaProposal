import { Home, Lightbulb, LayoutDashboard, User, Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useState } from "react"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-white border border-gray-300 p-2 rounded-full text-[#5124dd] hover:shadow-md transition cursor-pointer"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen p-6 bg-white/40 backdrop-blur-md border-r border-white/30 shadow-lg flex flex-col gap-6 z-40 transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        {isOpen && (
          <>
            <h2 className="text-2xl font-bold mt-10 bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] bg-clip-text text-transparent">
              Axelia
            </h2>

            <nav className="flex flex-col gap-4 mt-4 text-sm text-black">
              <NavItem to="/" icon={<Home size={18} />}>Inicio</NavItem>
              <NavItem to="/propuesta" icon={<LayoutDashboard size={18} />}>Propuesta</NavItem>
              <NavItem to="/ideas" icon={<Lightbulb size={18} />}>Ideas</NavItem>
              <NavItem to="/prototipo" icon={<User size={18} />}>Prototipo</NavItem>
            </nav>
          </>
        )}
      </aside>
    </>
  )
}

const NavItem = ({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-3 px-4 py-2 rounded-lg text-white bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] shadow"
          : "p-[2px] rounded-lg bg-gradient-to-br from-[#e7a040] via-[#c032e6] to-[#5124dd] hover:shadow-md transition"
      }
    >
      {({ isActive }) =>
        isActive ? (
          <>
            {icon}
            <span>{children}</span>
          </>
        ) : (
          <div className="flex items-center gap-3 w-full px-4 py-2 rounded-lg bg-white text-[#5124dd] hover:bg-white/90 transition">
            {icon}
            <span>{children}</span>
          </div>
        )
      }
    </NavLink>
  )
}