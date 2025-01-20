import { NavLink } from "react-router-dom";
import logo from '../../assets/logo_header.svg'
import "./Header.scss"

export default function Header(){
    return (
        <header className="navigation">
            <img  src={logo} alt="Logo du site Kasa"></img>
            <nav>
                <NavLink className="navLien" to="/">ACCUEIL</NavLink>
                <NavLink className="navLien" to="/apropos">A PROPOS</NavLink>
            </nav>
        </header>
    )
}