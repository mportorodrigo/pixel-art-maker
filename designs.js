// Select color input
const selectedColor = document.getElementById('colorPicker').value;

// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById('sizePicker').addEventListener('submit', makeGrid);

function makeGrid(event) {
    // Prevents page refresh
    event.preventDefault();

    // Select size input
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;

    // Gets the element in which the grid will be drawn
    const canvas = document.getElementById('pixelCanvas');

    for (let row = 0; row < gridHeight; row++) {
        // Create a table row
        const tr = document.createElement('tr');

        // Create columns
        for (let column = 0; column < gridWidth; column++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }

        // Add the columns to the row
        canvas.appendChild(tr);
    }
}
