import { storeTableData } from "./Storage.js"
const clearBtn = document.querySelector('#clear-btn')
const updateLocalStorage = storeTableData

/* Event handler pra apagar os "dados" da tabela ao clickar com btn direito sobre o item */
document.addEventListener('contextmenu', (e) => {
  if (e.target.matches('.data')) {
    e.preventDefault()
    e.target.remove()
    updateLocalStorage()
  }
})

/*****************/

clearBtn.addEventListener('click', clearAllData)

function clearAllData(e) {
  e.preventDefault()
  document.querySelectorAll('.data').forEach(data => data.remove())
  // Update localstorage quando limpar tudo
}







