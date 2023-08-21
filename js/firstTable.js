document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector(".first-data-table");
    const rows = table.rows;
    const targetColumns = [6,8]; 
    targetColumns.forEach(targetColumn => {
        let highestValue = -Infinity;
    
        for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
          const cell = rows[rowIdx].cells[targetColumn];
          const cellValue = parseInt(cell.textContent);
          if (!isNaN(cellValue) && cellValue > highestValue) {
            highestValue = cellValue;
          }
        }
    
        for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
          const cell = rows[rowIdx].cells[targetColumn];
          const cellValue = parseInt(cell.textContent);
    
          if (!isNaN(cellValue)) {
            if (cellValue === highestValue) {
              cell.classList.add("high-value");
            } else if (cellValue >= 3.99 && cellValue <= 5) {
              cell.classList.add("mid-value");
            }
          }
        }
      });
  });
  