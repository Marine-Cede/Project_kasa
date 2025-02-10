import { Link } from "react-router-dom"
import msgError from "../assets/404.png"
import "./Error.scss"

export default function Error() {
    return (<div className="error_main">
        <img src={msgError} alt="Numero d'erreur 404"></img>
        <p className="error_main__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error_main__link">Retourner sur la page d'accueil</Link> 
    </div>)
}