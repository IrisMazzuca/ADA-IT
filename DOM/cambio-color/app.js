// // 001
// /\*\*

// - Escribir una funcion que nos permita pasarle un elemento
// - y un color, y le cambie el color de fondo al elemento.
//   \*/

const hola = document.getElementById("hola");
const chau = document.getElementById("chau");

const cambiarFondo = (elemento, color) => {
    elemento.style.backgroundColor = color;
};