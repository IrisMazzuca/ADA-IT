// 005
// - Crear una lista que contenga imagenes, de las
// - cuales se va a mostrar solo una.
// - Crear una funcion que me permita ir cambiando
// - de imagen cada vez que la ejecuto, segun el orden
// - en que estan declaradas.

let items = document.querySelector("#container").children;
let btn = document.getElementById("btn");


console.log(items.length);

let currentN = 0;

const changeImg = () => {
    for (let i = 0; i < listElement.length; i++) {
        items[i].style.display = i != currentN ? "none" : "block";
      }
      currentN = currentN < items.length - 1 ? currentN + 1 : 0;
    
      items.forEach((i) => {
          items[i].style.display = (i != currentN) ? "none" : "block";
    })

};

btn.addEventListener("click", () => {
    changeImg();
});

