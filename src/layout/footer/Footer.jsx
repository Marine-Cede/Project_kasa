import logo from '../assets/react.svg'
import "./Footer.scss"

export default function Footer(){
    return (
        <footer>
            <img src={logo} alt="logo de l'entreprise Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}