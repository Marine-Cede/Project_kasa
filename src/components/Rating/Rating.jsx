import "./Rating.scss"

export default function Rating({rate}){

    const maxStars = 5;
    const stars = []

    for (let i =1; i<= maxStars; i++){
        if(i <= rate){
            stars.push("star__active")
        }else{
            stars.push("star__inactive")
        }
    }


    return(
        <div className="star">
            {stars.map((star,index)=> <i  key={`star-${index}`} className={`fa-solid fa-star ${star}`}></i>)}
        </div>
    )
}