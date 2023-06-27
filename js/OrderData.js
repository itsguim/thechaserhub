function orderData(colNumber) {
  // colNumber defines the column which will be ordered
  const tableData = document.querySelectorAll(`[data-colpos="${colNumber}"] .data`)
  const tableDataArr = Array.from(tableData)

  // Map an array of the innertxtes of the elements selected
  const innerTextes = tableDataArr.map((dataItem) => {
    let inner = dataItem.innerHTML
    return inner
  })

  // Sort the array above and pass/replace it as the original array
  const sortedDatas = innerTextes.sort()
  for (let i = 0; i < tableDataArr.length; i++) {
    tableDataArr[i].innerHTML = sortedDatas[i]
  }
}

export default orderData
