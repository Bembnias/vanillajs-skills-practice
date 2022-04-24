export const createCard = (array) => {
  return array.map(card => {
    return `<div class="card"><img src="${card.img}" /></div>`
  })
}