import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Propuesta } from "./pages/Propuesta"
import { Ideas } from "./pages/Ideas"
import { Prototipo } from "./pages/Prototipo"

function App() {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propuesta" element={<Propuesta />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/prototipo" element={<Prototipo />} />
        </Routes>
      </main>
    </>
  )
}

export default App
