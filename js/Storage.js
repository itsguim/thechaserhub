function storeTableData() {
  const cells = document.querySelectorAll('.data_handler');
  // Seleciona todos os 'td'
  const data = Array.from(cells)
    .map((cell) => Array.from(cell.children)
      .map((span) => span.innerHTML.trim()));
  // Usa map() para mapear cada célula 'td' e, em seguida, mapear cada elemento 'span' dentro dela, retornando uma array de arrays com os dados da tabela
  localStorage.setItem('myTableData', JSON.stringify(data)); // Armazena o objeto 'data' no LocalStorage
}

function loadTableData() {
  const cells = document.querySelectorAll('.data_handler');
  const data = JSON.parse(localStorage.getItem('myTableData'));

  if (data) {
    cells.forEach((cell, index) => {
      const columnData = data[index]; // Pra cada array dentro de data, cria um columnData
      columnData.forEach((dataItem) => { // Pra cada string dentro das arrays data[i]
        const span = document.createElement('span');
        span.classList.add('data');
        span.innerHTML = dataItem;
        cell.appendChild(span);
      });
    });
  }
}

loadTableData()

export { storeTableData, loadTableData }