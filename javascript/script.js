const container = document.getElementById("container")
const btn = document.querySelector("#grid-btn")

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
// loop to create the grid




function hoverEffect() {
const gridItem = document.querySelectorAll(".grid-item")

gridItem.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        e.target.style.background = 'purple'

        setTimeout(function() {
            e.target.style.background = ""
        }, 750)
    }, false)
})

}

hoverEffect()

//create hover effect


