// **Buscaminas**

// - Crear un programa que dado un array 2d permita ingresar una coordenada (representando los índices del array), y mostrar si era una casilla vacía o tenía una mina. En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas. Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó. Las minas y casillas vacías (ocultas y descubiertas) pueden representarse con emojis con con números o letras.

const tablero =
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
]

// console.log(tablero[0][0]);

// const bombaUno = tablero[0][1];
// const bombaDos = tablero[0][2];
// const bombaTres = tablero[2][0];


// let coordenadaFila = Number(prompt("Ingrese la coordenada 1: Nro de fila:"));
// let coordenadaColumna = Number(prompt("Ingrese la coordenada 2: Nro de columna:"));


const casilla = document.querySelectorAll(".casilla");
const resultado = document.getElementById("resultado");
const perdio = document.getElementById("perdio");

let jugable = true;
let contador = 0;

const buscaminas = (coor1, coor2) => {
  if(jugable){
    let coordenadaIngresada = tablero[coor1][coor2];

    if(coordenadaIngresada == "💣" ) {

      event.target.textContent = "💥";
      resultado.textContent ="¡Oh no!¡Has encontrado una bomba!";
      jugable = false;
      perdio.textContent = "Perdiste! :(";

    } else  {
      event.target.textContent = "💨";
      resultado.textContent ="La caja está vacía!";
      event.target.disabled = true;
      contador++;
      console.log(contador);
      if (contador >= 6) {
        jugable = false;
        perdio.textContent = "Ganaste!!";
      }
    } 
  }
};


// 📦 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// Ingrese una coordenada: 0,0
// La caja está vacía!

// 💨 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// Ingrese una coordenada: 0,1
// ¡Oh no!¡Has encontrado una bomba!

// 💨 💥 📦
// 📦 📦 📦
// 📦 📦 📦

