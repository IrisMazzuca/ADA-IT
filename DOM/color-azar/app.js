// //002
// /\*\*

// - Modificar la funcion previa para que, si no se recibe
// - un color por parametro, se busque un color de forma
// - azarosamente.
//   \*/

const hola = document.getElementById("hola");
const chau = document.getElementById("chau");

const cambiarFondo = (elemento, color = colorRandom()) => {
    elemento.style.backgroundColor = color;
};

const colorRandom = () => {
    const colores = ["pink", "yellow", "lightblue", "violet", "green"];

    let indiceRandom = Math.floor(Math.random()*colores.length);

    console.log(indiceRandom);
  
    return colores[indiceRandom];
};

cambiarFondo(hola,"grey");
cambiarFondo(chau);
cambiarFondo(chau);
cambiarFondo(chau);
