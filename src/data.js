import pikaShadow from "./assets/pikaShadow.jpg"
import pikachu from "./assets/pikachu.jpg"
import charShadow from "./assets/charShadow.jpg"
import charmander from "./assets/charmander.jpg"

const deck = {
    title: "Trainer's Trial",
    description: "Flip the card to reveal the creature! Test your memory and see how many you know!",
    cards: [
        {
            id: 1,
            name: "Pikachu",
            shadow: pikaShadow,
            image: pikachu,
            description: "An electric-type Pokemon known for storing electricity in its cheeks."
        },
        {
            id: 2,
            name: "Charmander",
            shadow: charShadow,
            image: charmander,
            description: "A Fire-type starter Pokemon. Its tail flame shows its life force."
        },
        {
            id: 3,
            name: "Vaporeon",
            shadow:
            image: "",
            description: "A Grass/Poison-type Pokemon that has a plant bulb growing on its back."
        },
        {
            id: 4,
            name: "Squirtle",
            shadow:
            image: "",
            description: "A water-type Pokemon that withdraws into its shell for protection."
        },
    ]
}

export default deck;