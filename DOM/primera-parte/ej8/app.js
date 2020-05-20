//Crear un h1 y dos botones,los botones hacen que se agrande y achique la letra del h1

const titulo = document.getElementById("titulo");
const btnAgrandar = document.getElementById("btnAgrandar");
const btnAchicar = document.getElementById("btnAchicar");



const obtenerFontSize = (elemento) => {
    const obtenerFontSize = getComputedStyle(titulo).fontSize;
    const soloValor = obtenerFontSize.slice(0,-2);
    const convertirANumber = Number(soloValor);
    return convertirANumber;
}

const cambiarFontSize = (tamano,elementoACambiar) => {
    const fontSize = obtenerFontSize(elementoACambiar) + tamano;
    elementoACambiar.style.fontSize =`${fontSize}px`;
}

btnAgrandar.addEventListener("click", () => {
    cambiarFontSize(5,titulo);
})

btnAchicar.addEventListener("click", () => {
    cambiarFontSize(-5,titulo);
})


// btnAgrandar.addEventListener("click", ()=>{
//     tamano += 5;
//     titulo.style.fontSize = `${tamano}px`;
// })

// btnAchicar.addEventListener("click", ()=>{
//     tamano -= 5;
//     titulo.style.fontSize = `${tamano}px`;
// })