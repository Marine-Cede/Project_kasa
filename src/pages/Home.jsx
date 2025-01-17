import Banner from "../components/Banner/Banner";
import "./Home.scss"

import logementsList from "../data/logements"
import Card from "../components/Card/Card";

export default function Home() {
    return (
    <div className="home">
        <Banner/>
            <section className="location">
                {logementsList.map((logement)=>
                    <Card title={logement.title} image={logement.cover} />)
                }
            </section>
    </div>
    )
}