
let interval = null, i = 0;
let boxes = document.getElementsByClassName("box");

function color() {
    for (i; i < boxes.length; i++) {
        boxes[i].style.background = gradient();
        boxes[i].style.boxShadow = shadow();
       i++;
        break;
    }
}
let start = document.getElementById("start");
start.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(color, 500);
        start.disabled = true;
    }
});
let stop = document.getElementById("stop");
stop.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    start.disabled = false;
});
let reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    i = 0;
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].style.background = "white";
        boxes[j].style.boxShadow = "1px 4px 2px rgb(0, 0, 0)";
    }
    start.disabled = false;
});


 //function to generate random gradient colors
  function gradient() {
    const color1 = randomRgbaString();
    const color2 = randomRgbaString();
    const color3 = randomRgbaString();
    return `linear-gradient(45deg, ${color1}, ${color2},${color3})`;
}

//to generate shadow
function shadow(){
    return `inset 5px 8px 5px black`;
}
  
//to generate Random colors in javascript
function randomRgbaString () {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgba(${r},${g},${b})`
  }
  

 

 