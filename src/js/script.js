const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', () => {
    minimizeAll()
    card.classList.toggle('active')
  })
})

function minimizeAll() {
  cards.forEach((card) => {
    card.classList.remove('active')
  })
}
