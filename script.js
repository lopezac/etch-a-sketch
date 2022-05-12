const board = document.querySelector(".board");
const boardSize = 540;
const boardInput = document.querySelector("#board-input");
const boardBtn = document.querySelector("#grid-btn");
boardBtn.addEventListener("click", () => {
    createBoard(boardInput.value);
});

createBoard(16);
const cells = document.querySelectorAll(".cell");
for (cell of cells) {
    cell.addEventListener("hover", () => {
        console.log(this);
    })
}
//'#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
function createBoard(cellAmount) {
    if (board.children.length !== 0) deleteGrid();
    createGrid(cellAmount);
}

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
    cell.style.outline = "black solid 0.1px";
}

function deleteGrid() {
    const rows = board.children;
    while (rows.length != 0) {
        board.removeChild(rows[0]);
    };
}