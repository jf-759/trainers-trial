import { useState } from "react"
import deck from "./data"
import Flashcard from "./Flashcard"
import "./App.css"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * deck.cards.length)
    } while (randomIndex === currentIndex)
    setCurrentIndex(randomIndex)
  }

  return (
    <div className="App">
      <h1 className="title">{deck.title}</h1>
      <p className="description">{deck.description}</p>
      <p className="count">
        Card {currentIndex + 1} of {deck.cards.length} | Total cards: {deck.cards.length}
      </p>

      {deck.cards && deck.cards.length > 0 ? (
        <Flashcard
          key={deck.cards[currentIndex].id}
          name={deck.cards[currentIndex].name}
          shadow={deck.cards[currentIndex].shadow}
          image={deck.cards[currentIndex].image}
          description={deck.cards[currentIndex].description}
        />
      ) : (
        <p>No cards available.</p>
      )}

      <button className="next-btn" onClick={nextCard}>
        Next Card
      </button>
    </div>
  )
}

export default App;