// Crear un input que cuando se escriba en el,por consola se muestre lo que se escribe.

const input = document.getElementById("input");

input.addEventListener("keyup", () => {
    title.innerHTML = event.target.value;
})