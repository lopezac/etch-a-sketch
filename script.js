const board = document.querySelector(".board");
const boardSize = 540;
const gridSizeInput = document.querySelector("#grid-size");
const rangeState = document.querySelector(".range-state");
gridSizeInput.addEventListener("change", () => {
    changeGridSize(gridSizeInput);
});

changeGridSize(gridSizeInput);

function changeGridSize(gridSize) {
    rangeState.textContent = gridSize.value;
    createBoard(gridSize.value);
}

// createBoard(16);
function createBoard(cellAmount) {
    if (board.children.length !== 0) deleteGrid();
    createGrid(cellAmount);
    addCellHoverEffects();
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
            cell.style.filter = "saturate(110%)";
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

function addCellHoverEffects() {
    const cells = document.querySelectorAll(".cell");
    for (cell of cells) {
        cell.addEventListener("mouseover", (e) => {
            changeCellColor(e.target);
        })
    };
}

function changeCellColor(cell) {
    let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    // .match(/\d+/)[0]
    cell.style.backgroundColor = randomColor;
    let cellSaturation = cell.style.filter.match(/\d+/)[0];
    cell.style.filter = `saturate(${cellSaturation - 10}%)`;
}