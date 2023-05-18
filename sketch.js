const ROWS = 16;
const COLUMNS = 16;

const gridContainer = document.querySelector('.grid-container');

for (let i=0; i<ROWS; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.className = `row`;
    gridContainer.appendChild(rowContainer);

    for (let j=0; j<COLUMNS; j++) {
        const newDiv = document.createElement('div');
        newDiv.className = `col`;
        newDiv.textContent = `div ${j}`;
        rowContainer.appendChild(newDiv);
    }
}