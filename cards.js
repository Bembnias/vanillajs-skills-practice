import { deck } from './deck/deck.js'
import { shuffledDeck } from './deck/shuffledDeck.js'
import { createCard } from './deck/UI/createCard.js'

// ============= UI ELEMENTS =============
const sortedDeckContainer = document.querySelector('#sortedDeck')
const shuffledDeckContainer = document.querySelector('#shuffledDeck')

// Show Sorted Deck
sortedDeckContainer.innerHTML = createCard(deck).join("")

// Show Shuffled Deck
shuffledDeckContainer.innerHTML = createCard(shuffledDeck).join("")
