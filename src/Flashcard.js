import { useState } from "react"
import "./Flashcard.css"
 
function Flashcard({ name, image, description}) {
    const [flipped, setFlipped] = useState(false)

    const handleFlip = () => {
        setFlipped(!flipped)
    }

    return (
        <div className="flashcard-container" onClick={handleFlip}>
            <div className={`flashcard ${flipped ? "flipped" : ""}`}>
                <div className="front">
                    <h2>who's That Pokemon?!</h2>
                    <img src={image} alt="pokemon-shadow" className="shadow" />
                </div>

                <div className="back">
                    <h2>{name}</h2>
                    <img src={image} alt={name} className="pokemon-image"/>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard