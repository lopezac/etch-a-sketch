const board = document.querySelector(".board");
const boardSize = 540;
const gridSizeInput = document.querySelector("#grid-size");
const rangeState = document.querySelector(".range-state");

const saturateBtn = document.querySelector("#saturate-btn");
const randomColorsBtn = document.querySelector("#random-colors");
const pencilColor = document.querySelector("#pencil-color");
let singleColor = true;
let randomColors = false;
let saturation = false;

randomColorsBtn.addEventListener("click", toggleRandomColors);
saturateBtn.addEventListener("click", toggleSaturation)

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
            cell.style.filter = "saturate(100%)";
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
    if (singleColor) {
        paintCell(cell, pencilColor.value);
    } else if (randomColors) {
        paintCell(cell, getRandomColor());
    }

    if (saturation) {
        saturateCell(cell);
    }
    // let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    // .match(/\d+/)[0]
    // cell.style.backgroundColor = randomColor;
}

function paintCell(cell, color) {
    cell.style.backgroundColor = color;
}

function saturateCell(cell) {
    let cellSaturation = cell.style.filter.match(/\d+/)[0];
    cell.style.filter = `saturate(${cellSaturation - 10}%)`;
}

function getRandomColor() {
    return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}

function toggleRandomColors() {
    if (singleColor) {
        randomColors = true;
        singleColor = false;
    } else {
        randomColors = false;
        singleColor = true;
    }
}

function toggleSaturation() {
    saturation = (saturation) ? false : true;
}