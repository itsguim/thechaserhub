import orderData from "./OrderData.js"
import { storeTableData } from "./Storage.js"
// ---------------------------------------------

const setBtn = document.querySelector('#set-btn')

function handleSetData(e) {
  e.preventDefault()
  const textValue = document.querySelector('#text-inp').value
  const colValue = document.querySelector('#col-inp').value
  const tableColumns = document.querySelectorAll('.data_handler')

  if (textValue !== '') {
    // Define the data 
    const spanData = document.createElement('span')
    spanData.innerHTML = textValue
    spanData.classList.add('data')
    // Append data to the selected column
    tableColumns[colValue].append(spanData)
  }
  // Order data based on the selected column w/ the input
  orderData(colValue)
  // Save to localStorage 
  storeTableData()
  // Clear input
  document.querySelector('#text-inp').value = ''
}

setBtn.addEventListener('click', handleSetData)

export default handleSetData