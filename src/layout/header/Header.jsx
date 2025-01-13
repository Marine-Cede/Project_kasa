import { NavLink } from "react-router-dom";
import logo from '../assets/react.svg'
import "./Header.scss"

export default function Header(){
    return (
        <header>
            <img src={logo} alt="Logo du site Kasa"></img>
            <nav>
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/apropos">A propos</NavLink>
            </nav>
        </header>
    )
}