import { useState } from 'react'
import deck from "./data"
import './App.css'

function App() {

  return (
    <div>
      {deck.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  )

}

export default App
