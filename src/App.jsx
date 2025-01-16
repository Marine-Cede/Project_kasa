import { BrowserRouter, Route, Routes } from "react-router-dom"
import APropos from "./pages/APropos"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import Error from "./pages/Error"
import Header from "./layout/header/Header"
import Footer from "./layout/footer/Footer"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
    <div id="main" className="main_page">
      <Header/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/apropos" element={<APropos/>}/>
          <Route path="/logements/:idLogement" element={<Logement/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      <Footer/>
    </div>
      
    </BrowserRouter>
  )
}

export default App
