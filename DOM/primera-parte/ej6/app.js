//Crear un input y un h1,cuando se escriba en el input se vea reflejado en el input

const titulo = document.getElementById("titulo");
const input = document.querySelector("#inputTitulo");

input.addEventListener("keyup", (event) => {
    titulo.innerHTML = event.target.value;
})