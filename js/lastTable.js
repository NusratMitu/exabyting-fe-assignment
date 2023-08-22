document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector(".last-data-table");
    const rows = table.rows;
  
    const targetColumns = [2,3,4,5,6,7,8,9,10];
  
    targetColumns.forEach(targetColumn => {
      const values = [];
  
      for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
        const cell = rows[rowIdx].cells[targetColumn];
        const cellValue = parseInt(cell.textContent);
        if (!isNaN(cellValue)) {
          values.push(cellValue);
        }
      }
  
      values.sort((a, b) => b - a);
      const highestValue = values[0];
      const secondHighestValue = values[1];
      const lowestValue = values[values.length - 1];
  
      for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
        const cell = rows[rowIdx].cells[targetColumn];
        const cellValue = parseInt(cell.textContent);
  
        if (!isNaN(cellValue)) {
          if (cellValue === highestValue) {
            cell.classList.add("highest-value");
          } else if (cellValue === secondHighestValue) {
            cell.classList.add("second-highest-value");
          } else if (cellValue > lowestValue && cellValue < secondHighestValue) {
            cell.classList.add("mid-range-value");
          }
        }
      }
 
    });
  });
  

  