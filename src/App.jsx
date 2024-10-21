import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"

function App() {
   return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
