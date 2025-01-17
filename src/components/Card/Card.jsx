import "./Card.scss"

function Card({image, title}){
    return(
        <div className="card">
            <img className="card__image" src={image}></img>
            <h2 className="card__title">{title}</h2>
        </div>
    )
}
export default Card