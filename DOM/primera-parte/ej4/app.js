// Crear un boton que cuando se lo presione dispare un alert con un hola y luego se dispare otro evento que diga chau.

const saludar = document.getElementById("saludar");

saludar.addEventListener("click", () => {
    alert('Hola!!');
})

saludar.addEventListener("click", () => {
    alert('Adios!!');
})