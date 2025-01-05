
let interval = null, i = 0;
let boxes = document.getElementsByClassName("box");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

//iterating over all 60 boxes and filling random-Gradient-colors one-by-one
function color() {
    for (i; i < boxes.length; i++) {
        boxes[i].style.background = gradient();
        boxes[i].style.boxShadow = shadow();
        i++;
        break;
    }
}
//Start color change function
function startColor() {
    if (!interval) {
        interval = setInterval(color, 50);
        start.disabled = true;//disabling start button after one click
    }
}
//calling startColor function on STOP button click
start.addEventListener('click', startColor);

//stopColorChange Function
function stopColorChange() {
    clearInterval(interval);
    interval = null;
    start.disabled = false;//Enabling start button after STOP button click
}

//calling stopColorChange function on STOP button click
stop.addEventListener('click', stopColorChange);

//Reset color Function
function resetColor() {
    clearInterval(interval);
    interval = null;
    i = 0;// reset the current iteration index of the color function after the RESET button is clicked.This ensures that when the Start button is clicked again after resetting,the color changes begin from the first box (index 0) rather than continuing from where the last iteration stopped.

    for (let j = 0; j < boxes.length; j++) {
        boxes[j].style.background = "transparent";
        boxes[j].style.boxShadow = "1px 4px 2px rgb(0, 0, 0)";
    }
    start.disabled = false;
}
//calling resetColor function on STOP button click
reset.addEventListener('click', resetColor);




//function to generate random gradient colors
function gradient() {
    const color1 = randomRgbString();
    const color2 = randomRgbString();
    const color3 = randomRgbString();
    return `linear-gradient(45deg, ${color1}, ${color2},${color3})`;
}

//to generate shadow
function shadow() {
    return `inset 5px 8px 5px black`;
}

//to generate Random colors in javascript
function randomRgbString() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}




