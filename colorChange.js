// Creating HTML structure dynamically
const body = document.querySelector("body");

// Creating the buttons and setting their attributes
const div = document.createElement("div");
div.style.textAlign = "center";
div.innerHTML = `
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <button id="reset">Reset</button>
`;

// Creating the table
const table = document.createElement("table");
table.setAttribute("cellspacing", "8");

for (let row = 0; row < 10; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 10; col++) {
        const td = document.createElement("td");
        td.classList.add("box");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

body.appendChild(div);
body.appendChild(table);

// Adding the external CSS style programmatically
const style = document.createElement("style");
style.textContent = `
* {
    box-sizing: border-box;
    margin: 0 auto;
}
div {
    margin-top: 40px;
}
button {
    margin-right: 10px;
    height: 30px;
    width: 50px;
}
button:hover {
    background-color: cyan;
    border: 0px;
    border-radius: 5px;
    box-shadow: inset 0 0 5px black;
}
table {
    height: 400px;
    width: 500px;
    align-items: center;
    margin-top: 20px;
}
.box {
    height: 40px;
    width: 60px;
    text-align: center;
    border: 0.1px solid black;
    box-shadow: 1px 4px 2px rgb(0, 0, 0);
    border-radius: 50%;
}
`;
body.appendChild(style);

// JavaScript logic
let interval = null, i = 0;
let boxes = document.getElementsByClassName("box");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

function color() {
    for (i; i < boxes.length; i++) {
        boxes[i].style.background = gradient();
        boxes[i].style.boxShadow = shadow();
        i++;
        if (i == boxes.length) {
            start.disabled = false;
            clearInterval(interval);
            interval = null;
        }
        break;
    }
}

function startColor() {
    if (!interval) {
        if (i == boxes.length) {
            resetColor();
        }
        interval = setInterval(color, 50);
        start.disabled = true;
    }
}

function stopColorChange() {
    clearInterval(interval);
    interval = null;
    start.disabled = false;
}

function resetColor() {
    clearInterval(interval);
    interval = null;
    i = 0;
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].style.background = "transparent";
        boxes[j].style.boxShadow = "1px 4px 2px rgb(0, 0, 0)";
    }
    start.disabled = false;
}

start.addEventListener('click', startColor);
stop.addEventListener('click', stopColorChange);
reset.addEventListener('click', resetColor);

function gradient() {
    const color1 = randomRgbString();
    const color2 = randomRgbString();
    const color3 = randomRgbString();
    return `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;
}

function shadow() {
    return `inset 5px 8px 5px black`;
}

function randomRgbString() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}
