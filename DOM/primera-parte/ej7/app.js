// Crear un h1 y un boton,cuando se hace click en el boton el texto del h1 cambia de color

const btn = document.getElementById("btn");
const title = document.querySelector(".title");

btn.addEventListener("click", (event) => {
    title.classList.replace("title","title--violet");
})
