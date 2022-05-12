const board = document.querySelector(".board");
const boardSize = 960;
const boardInput = document.querySelector("#board-input");
boardInput.addEventListener("change", createGrid(boardInput.value));

function createGrid(cellAmount) {
    let cellSize = boardSize / cellAmount;
    board.style.gridTemplateColumns = `repeat(${cellAmount}, auto)`;
    
    for (let row = 0; row < cellAmount; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        for (let col = 0; col < cellAmount; col++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            personalizeCell(cell, cellSize);
            rowDiv.appendChild(cell);
        }

        board.appendChild(rowDiv);
    }
}

function personalizeCell(cell, cellSize) {
    cell.style.width = `${cellSize}px`;
    cell.style. height = `${cellSize}px`;
    cell.style.outline = "black solid 1px";
}

function removeGrid() {

}