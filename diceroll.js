let rollEl = document.querySelector(`.roll`)
let diceEl = document.querySelector(`.dice`)
let listEl = document.querySelector(`.roll-history`)


let dices = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

let roll = 0;

rollEl.addEventListener("click", function () {
    diceEl.classList.add(`animate`)

})

diceEl.addEventListener("animationend", function () {
    diceEl.classList.remove(`animate`);
    let randomNum = Math.floor(Math.random() * 6);

    let choosenDice = dices[randomNum]
    roll++;

    let li = document.createElement("LI")
    let span = document.createElement("SPAN")
    span.innerHTML = choosenDice;

    diceEl.innerHTML = choosenDice;
    li.innerHTML = ` Roll:${roll} `
    li.appendChild(span)

    listEl.appendChild(li)



})



