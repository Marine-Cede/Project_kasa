import { BrowserRouter, Route, Routes } from "react-router-dom"
import APropos from "./pages/APropos"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/apropos" element={<APropos/>}/>
        <Route path="/logements/:idLogement" element={<Logement/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
