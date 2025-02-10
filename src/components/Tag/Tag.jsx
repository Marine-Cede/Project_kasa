import "./Tag.scss"

export default function Tag({title}){
    return (
        <div>
            <p className="tags">{title}</p>
        </div>
    )
}