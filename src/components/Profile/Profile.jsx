import "./Profile.scss"

export default function Profile({name, picture}){
    return(
        <div className="profile">
            <p className="profile__name">{name}</p>
            <img src={picture} className="profile__img"></img>
        </div>
    )
}