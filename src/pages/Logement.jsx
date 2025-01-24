import { Navigate, useParams } from "react-router-dom"
import logementList from "../data/logements.json"
import Carrousel from "../components/Carrousel/Carrousel";
import "./Logement.scss"
import Tag from "../components/Tag/Tag";
import Collapse from "../components/Collapse/Collapse";
import Profile from "../components/Profile/Profile";
import Rating from "../components/Rating/Rating";
export default function Logement() {
    const {idLogement} = useParams();
    const logement = logementList.find((element)=> element.id == idLogement)
    if(!logement){
        return(<Navigate to="*"/>)
    }
    return (
    <div className="logement">
        <Carrousel images={logement.pictures}/>
        <div className="logement__global"> 
            <div className="logement__global__items">        
                <div className="logement__global__items__title">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                </div>
                <div className="logement__global__items__tags">
                    {logement.tags.map((tag)=> <Tag title={tag}/>)}
                </div>
            </div>
            <div className="logement__global__items__customer">
                <Profile name={logement.host.name} picture={logement.host.picture}/>
                <Rating rate={logement.rating}/>
            </div>
        </div> 

        <div className="logement__collapse">
            <Collapse title="Description" description={logement.description} className="collapse_logement"/>
            <Collapse title="Équipements" description={logement.equipments} className="collapse_logement"/>
        </div>
    </div>
    )
}