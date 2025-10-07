import deck from "./data"
import Flashcard from "./Flashcard"
import "./App.css"

function App() {
  
  return (
    <div className="App">
      <h1 className="title">{deck.title}</h1>
      <p className="description">{deck.description}</p>
      <Flashcard cards={deck.cards} />
    </div>
  )
}

export default App