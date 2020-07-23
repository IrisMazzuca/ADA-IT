// Usando inputs de tipo `range`, crear 3 sliders que permitan seleccionar un color rgb (los números van del 0 al 255). Al cambiar de valor, debería: cambiarse el color de pantalla, mostrarse los valores actuales de cada slider, mostrarse el valor rgb final, por ejemplo:
//   - R: 33 
//   - G: 44
//   - B: 27
//   - rgb(33,44,27)
  
//   **BONUS POINT**: que permita cambiar a sistema HSL

const colorR = document.getElementById("colorR");
const colorG = document.getElementById("colorG");
const colorB = document.getElementById("colorB");
const colorRLi = document.getElementById("colorRLi");
const colorGLi = document.getElementById("colorGLi");
const colorBLi = document.getElementById("colorBLi");
const colorRGBLi = document.getElementById("colorRGBLi");
const btn = document.getElementById("btn");
const body = document.getElementById("body");


btn.addEventListener("click", (event) => {
    event.preventDefault();

    colorRLi.innerHTML = "★ R: " + colorR.value;
    colorGLi.innerHTML = "★ G: " + colorG.value;
    colorBLi.innerHTML = "★ B: " + colorB.value;
    const rgb = colorRGBLi.innerHTML = `rgb(${colorR.value}, ${colorG.value}, ${colorB.value})`;

    body.style.backgroundColor = rgb;
})



