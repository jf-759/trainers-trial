import { useState } from "react"
import "./Flashcard.css"


export default function Flashcard({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
    const [guess, setGuess] = useState("")
    const [feedback, setFeedback] = useState("")

    const currentCard = cards[currentIndex]

    const handleGuessSubmit = () => {
        if (guess.trim().toLowerCase() === currentCard.name.toLowerCase()) {
            setFeedback("✅ Correct! You guessed it!")
            setShowAnswer(true)
        } else {
            setFeedback("X Nope! Try Again!")
        }   
    }

    const handleFlip = () => {
        setShowAnswer(!showAnswer)
        setFeedback("")
    }

    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(currentIndex + 1) 
            resetCardState()
        }
    }


    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1) 
            resetCardState()
        }
    }

    const resetCardState = () => {
        setShowAnswer(false)
        setGuess("")
        setFeedback("")
    }
    
    return (
        <div className="flashcard-container">
            <div 
                className="card"
                onClick={() => setShowAnswer(!showAnswer)}
                >
                {!showAnswer ? (
                    <img
                        src={currentCard.shadow}
                        alt="Shadow"
                        className="pokemon-image"
                    />
                ) : (

                    <div className="revealed-side">
                        <img
                            src={currentCard.image}
                            alt={currentCard.name}
                            className="pokemon-image"
                        />
                        <h3>{currentCard.name}</h3>
                        <p>{currentCard.description}</p>
                    </div>
                )}
            </div>

            {!showAnswer && (
                <div className="guess-section">
                    <input
                        type="text"
                        placeholder="Who's that Pokemon?"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                    />
                    <button onClick={handleGuessSubmit}>Submit</button>
                    <button onClick={handleFlip}>Flip Card</button>
                </div>
            )}

            <p
                className={`feedback ${
                    feedback.includes("Correct") ? "correct" : "incorrect"
                }`}
            >
                {feedback}
            </p>

            <div className="nav-buttons">
                <button 
                    onClick={handleBack}
                    disabled={currentIndex === 0}
                    className={currentIndex === 0 ? "disabled" : ""}
                >
                    ⬅️ Back
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === cards.length -1}
                    className={currentIndex === cards.length - 1 ? "disabled" : ""}
                >
                    Next ➡️
                </button>
            </div>

            <p className="card-counter">
                Card {currentIndex + 1} of {cards.length}
            </p>

        </div>
    )
}