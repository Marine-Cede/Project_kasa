import { useParams } from "react-router-dom"
import logementList from "../data/logements.json"
import Carrousel from "../components/Carrousel/Carrousel";
import "./Logement.scss"
import Tag from "../components/Tag/Tag";
export default function Logement() {
    const {idLogement} = useParams();
    const logement = logementList.find((element)=> element.id == idLogement)
    return (
    <div className="logement">
        <Carrousel images={logement.pictures}/>
        <div className="logement__items">
            <div className="logement__items__title">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
            </div>
            <div className="logement__items__tags">
                {logement.tags.map((tag)=> <Tag title={tag}/>)}
            </div>
        </div>
    </div>
    )
}