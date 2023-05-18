const ROWS = 16;
const COLUMNS = 16;

const gridContainer = document.querySelector('.grid-container');

/*const newDiv = document.createElement('div');
newDiv.textContent = 'New';
const newDiv2 = document.createElement('div');
newDiv2.textContent = 'New 2';
container.appendChild(newDiv);
container.appendChild(newDiv2);*/

const rowContainer = document.createElement('div');
rowContainer.className = `row`;
gridContainer.appendChild(rowContainer);

for (let i=0; i<ROWS; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = `col`;
    newDiv.textContent = `div ${i}`;
    rowContainer.appendChild(newDiv);
}