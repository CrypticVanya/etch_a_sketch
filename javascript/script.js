
//Grab divs from the DOM where the cell will be placed along with the button to activate it

const container = document.getElementById("container")
const btn = document.querySelector("#grid-btn")


// function that executes when the button is clicked, allows for the manipulation of the grid

btn.addEventListener('click', () => {
    let answer = Number(prompt("How many grids?"))
    if (answer < 0) {
        alert("ERROR")  
    } else if (answer <= 100) {
        container.innerHTML = ''
        makeRows(answer, answer)
        hoverEffect() 
    } else {
        alert("ERROR")
    }
})


// loop that creates the cell in the dom

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div")
        cell.innerText = ''
        container.appendChild(cell).className = "grid-item"
    }
}

makeRows(16,16)


//create hover effect when passing over cells

function hoverEffect() {
    const gridItem = document.querySelectorAll(".grid-item")

    gridItem.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.style.background = 'rgba(173, 0, 135, 0.25)'

            setTimeout(function() {
                e.target.style.background = ""
            }, 1000)
    })
})

}

hoverEffect()
