import { useState } from "react"
import "./Carrousel.scss"

export default function Carrousel({images}) {
    const length = images.length
    const [currentImg, setCurrentImg] = useState(0)

    function nextImg(){
        let index = currentImg        
        if(currentImg >= length -1){
            index = 0
        }
        else {
            index = currentImg + 1
        }      
        setCurrentImg(index)
    }

    function previousImg(){
        let index = currentImg
        if(currentImg <= 0){
            index = length -1
        }
        else{
            index = currentImg - 1
        }
        setCurrentImg(index)
    }
    return(
        <div className="carrousel">
                <div className="carrousel__slider" style={{ transform: `translateX(${-currentImg * 100}%)` }}>
                {
                images.map((image)=>
                    <img src={image} className="carrousel__slider__img"></img>
                 )}
                </div>
                {length > 1 &&
                <div className="carrousel__items">
                    <i className="fa-solid fa-chevron-left carrousel__items__chevron" onClick={previousImg}/>
                    <p className="carrousel__items__number">{currentImg+1}/{length}</p>
                    <i className="fa-solid fa-chevron-right carrousel__items__chevron" onClick={nextImg}/>
                </div>}
            </div>
    )
}