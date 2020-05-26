// Hacer una cuenta regresiva del 10 al 0. Por cada número, tiene que cambiar el color de fondo de pantalla. Investigar `setInterval`.

const counter = document.getElementById("counter");
const btn = document.getElementById("btn");
const text = document.getElementById("text");
const body = document.getElementById("body");



let intervalId;
let number = 10;


const randomBgColor = () => {

    const colors = ["pink","lavender","lightyellow","lightgrey","violet","lightsalmon","aqua","lightcoral","lightgreen","lightseagreen", "lightblue"];

    const i = Number(Math.floor(Math.random()*11));

    return colors[i];
}

const textChange = () => {

    if (counter.textContent == 10) {
        text.innerHTML = "Diez";
    };
    if (counter.textContent == 9) {
        text.innerHTML = "Nueve";
    };
    if (counter.textContent == 8) {
        text.innerHTML = "Ocho";
    };
    if (counter.textContent == 7) {
        text.innerHTML = "Siete";
    };
    if (counter.textContent == 6) {
        text.innerHTML = "Seis";
    };
    if (counter.textContent == 5) {
        text.innerHTML = "Cinco";
    };
    if (counter.textContent == 4) {
        text.innerHTML = "Cuatro";
    };
    if (counter.textContent == 3) {
        text.innerHTML = "Tres";
    };
    if (counter.textContent == 2) {
        text.innerHTML = "Dos";
    };
    if (counter.textContent == 1) {
        text.innerHTML = "Uno";
    };
    
}


btn.addEventListener("click", () => {
   
    intervalId = setInterval(() => {
        counter.textContent = number;
        number--;
        text.classList.add("text");
        body.style.backgroundColor = randomBgColor();
        textChange();
        
        if(number == -1) {
            clearInterval(intervalId);
            text.innerHTML = "Cero";
        };

    }, 1000)

});


