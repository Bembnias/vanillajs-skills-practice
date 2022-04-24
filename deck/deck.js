import { suites, ranks } from "./suitesAndRanks.js"
export let deck = []

// ================ Create New Deck ================
suites.map(suitesItem => {
  ranks.map(ranksItem => {
    const shortcut = suitesItem.shortcut + ranksItem.shortcut
    const card = new Object()
    card.shortcut = shortcut
    card.rank = ranksItem.rank
    card.suite = suitesItem.suite
    card.img = `./img/${shortcut}.png`

    deck.push(card)
  })
})