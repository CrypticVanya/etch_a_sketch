const container = document.getElementById("container")

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.innerText = (i + 1)
        container.appendChild(cell).className = "grid-item"
    }
}

makeRows(16,16)

// loop to create the grid

const gridItem = document.querySelectorAll(".grid-item")

gridItem.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'purple'

        setTimeout(function() {
            e.target.style.background = ""
        }, 750)
    }, false)
})

