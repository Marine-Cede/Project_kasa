import bannerImg from "../../assets/Banner_Background.png"
import "./Banner.scss"

export default function Banner(){
    return (
        <div className="banner">
            <img className="banner__image" src={bannerImg} alt="Paysage rocheux au bord de mer"></img>
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}