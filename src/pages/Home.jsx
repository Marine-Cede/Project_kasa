import Banner from "../components/Banner/Banner";
import "./Home.scss"

import bannerImg from "../assets/Banner_Background.png"

import logementsList from "../data/logements"
import Card from "../components/Card/Card";

export default function Home() {
    return (
    <div className="home">
        <Banner image={bannerImg} alt="Paysage rocheux au bord de mer" title="Chez vous, partout et ailleurs"/>
            <section className="home__section">
                {logementsList.map((logement)=>
                    <Card title={logement.title} image={logement.cover} />)
                }
            </section>
    </div>
    )
}