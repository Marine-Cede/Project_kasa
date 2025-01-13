import { useParams } from "react-router-dom"
export default function Logement() {
    const {idLogement} = useParams();
    return (<div>
        Page logement {idLogement}
    </div>)
}