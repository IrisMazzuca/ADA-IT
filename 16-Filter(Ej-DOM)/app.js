// Permitir ingresar una URL de una imagen, que cargue la imagen, y poder aplicarle distintos filtros (usando `filter` de CSS)

const urlInput = document.getElementById("urlInput");
const btnEnter = document.getElementById("btnEnter");
const image = document.getElementById("image");
const btnGreyscale = document.getElementById("btnGreyscale");
const btnSepia = document.getElementById("btnSepia");
const btnSaturate = document.getElementById("btnSaturate");
const btnReset = document.getElementById("btnReset");

// url: https://www.nupciasmagazine.com/wp-content/uploads/2017/07/yoksel-zok-420835-unsplash.jpg



btnEnter.addEventListener("click", (event) => {
    event.preventDefault();

    image.src = urlInput.value;
    image.style.opacity = 1;
});


btnGreyscale.addEventListener("click", (event) => {
    event.preventDefault();

    image.className = "greyscale image";
});

btnSepia.addEventListener("click", (event) => {
    event.preventDefault();

    image.className = "image sepia";
});

btnSaturate.addEventListener("click", (event) => {
    event.preventDefault();

    image.className = "image saturate";
});

btnReset.addEventListener("click", (event) => {
    event.preventDefault();

    image.className = "image";
});