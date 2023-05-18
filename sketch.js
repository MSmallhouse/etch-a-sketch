const GRID_WIDTH = 500;
const GRID_HEIGHT = 500;
const ROWS = 16;
const COLUMNS = 16;

function hover() {
    this.style.backgroundColor = 'black';
}

function setWindowSize() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.width = `${GRID_WIDTH}`;
    gridContainer.style.height = `${GRID_HEIGHT}`;
}

function initGrid(rows, columns) {
    for (let i=0; i<rows; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.className = `row`;
        rowContainer.style.height = `${GRID_WIDTH/rows}px`;
        gridContainer.appendChild(rowContainer);

        for (let j=0; j<columns; j++) {
            const newDiv = document.createElement('div');
            newDiv.className = `grid-square`;
            newDiv.style.width = `${GRID_HEIGHT/columns}px`;
            rowContainer.appendChild(newDiv);
            newDiv.addEventListener('mouseover', hover);
        }
    }
}

const gridContainer = document.querySelector('.grid-container');

setWindowSize();
initGrid(ROWS, COLUMNS);