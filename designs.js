// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', makeGrid);

function makeGrid(event) {
    // Prevents page refresh
    event.preventDefault();

    // Select size input
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;

    // Get the element in which the grid will be drawn
    const canvas = document.getElementById('pixelCanvas');

    // Clears the canvas if a grid was already built
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    for (let row = 0; row < gridHeight; row++) {
        // Create a table row
        const tr = document.createElement('tr');

        // Create columns
        for (let column = 0; column < gridWidth; column++) {
            const td = document.createElement('td');

            // When clicked, paint the clicked cell
            td.addEventListener('click', paintCell);

            tr.appendChild(td);
        }

        // Add the columns to the row
        canvas.appendChild(tr);
    }
}

function paintCell(click) {
    // Paint the clicked cell with the selected color
    click.target.style.backgroundColor = document.getElementById('colorPicker').value;
}