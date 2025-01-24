import { useState } from "react"
import "./Collapse.scss"

export default function Collapse({title, description,className="collapse"}){
    const [opened, setOpened] = useState(false)
    function toggle(){
        setOpened(!opened)
        console.log(opened)
    }
    return(
        <div className={className}>
            <div className="collapse__title">
                <h2>{title}</h2>
                <i className={!opened ? "fa-solid fa-chevron-up collapse__title__closed" : "fa-solid fa-chevron-up collapse__title__opened"} onClick={toggle}></i>
            </div>
            <p className={opened ? "collapse__description" : " collapse__description collapse__description__hidden"}>{description}</p>
        </div>
    )
}
