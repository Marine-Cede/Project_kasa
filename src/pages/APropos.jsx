import Banner from "../components/Banner/Banner";
import bannerImg from "../assets/second_banner.png"
import aProposList from "../data/a_propos.json"
import Collaspe from "../components/Collapse/Collapse";
import "./APropos.scss"

export default function APropos() {
    return (
    <div className="main_apropos">
        <Banner image={bannerImg} alt="Paysage montagneux avec une forêt en premier plan"/>
        <div className="main_apropos__collapse">
            {aProposList.map((apropos, index)=>
            <Collaspe key={`${apropos.title}-${index}`} title={apropos.title} description={apropos.description}/>)}
        </div>
    </div>)
}