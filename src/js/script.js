const cards = document.querySelectorAll('.card')
const dados = getData()

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

function render(card) {
  return `
  <article class="card">
        <h2 class="title">${card.title}</h2>
        <img
          src="${card.image}"
          alt=""
        />
        <p class="description">
          ${card.description}
        </p>
      </article>`
}

async function getData() {
  const config = {
    headers: { Accept: 'application/json' },
  }
  const res = await fetch('../src/data/dados.json', config)
  const data = await res.json()
  return data
}
