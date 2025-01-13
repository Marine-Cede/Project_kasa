import { BrowserRouter, Route, Routes } from "react-router-dom"
import APropos from "./pages/APropos"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import Error from "./pages/Error"
import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div id="main">
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/apropos" element={<APropos/>}/>
          <Route path="/logements/:idLogement" element={<Logement/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
