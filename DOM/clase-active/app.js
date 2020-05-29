// // 003
// /\*\*

// - Crear una lista con varios elementos.
// - Crear una funcion que asigne la clase
// - "active" a uno de estos elementos seleccionados.
// - Ademas al mismo tiempo tiene que eliminar
// - la clase "active" del resto de los elementos.
// - Asignarle algun estilo para diferenciar la clase
// - "active" de cuando no se encuentra la misma.
//   \*/

const elemento = document.querySelector("#lista").children;

const asignarActive = (indice) => {

    for (let i = 0; i < elemento.length; i++) {

        if (i == indice) {
            elemento[i].classList.add("active");
        } else {
            elemento[i].classList.remove("active"); 
        }
    }
    
}

// console.log(elemento, elemento[0].textContent);
