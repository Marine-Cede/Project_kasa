import logo from '../../assets/logo_footer.svg'
import "./Footer.scss"

export default function Footer(){
    return (
        <footer className='footer'>
            <img src={logo} alt="logo de l'entreprise Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}