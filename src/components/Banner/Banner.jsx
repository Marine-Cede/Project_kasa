import "./Banner.scss"

export default function Banner({image, title, alt}){
    return (
        <div className="banner">
            <img className="banner__image" src={image} alt={alt}></img>
            <h1 className="banner__title">{title}</h1>
        </div>
    )
}