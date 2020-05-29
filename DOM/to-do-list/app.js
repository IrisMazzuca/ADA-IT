// // 001
// /\*\*

// - Crear un TODO list, que tenga
// - 1.  un input para agregar nuevos TODO
// - 2.  Este input debe tener un button para poder
// - agregar el TODO desde el input
// - 3.  un button por cada TODO de la lista
// - para borrar el mismo.
// - 4.  Un checkbox, antes del texto de cada TODO,
// - que me permita tachar el elemento de la lista
// - como resuelto.
//   \*/

// 002
// /\*\*

// - Tomar el input del ejercicio anterior y hacer que
// - cambie sus bordes de color y de ancho cuando
// - hacemos foco(focus, hacemos click en el recuadro) en el,
// - y que esos mismos bordes y color vuelvan al
// - estado anterior cuando sacamos el foco (blur).

const inputNewTask = document.getElementById("newTask");
const btnAdd = document.getElementById("btnAdd");
const list = document.getElementById("list");

const deleteFx = (event) => {
    event.target.parentNode.remove();
};

const lineThrough = (event) => {
    // event.target.parentNode.classList.toggle("line-through");
    event.target.parentNode.children[0].classList.toggle("line-through");
};

btnAdd.addEventListener("click", (event) => {

    list.innerHTML += `
    <div>
        <li>
        <span>${inputNewTask.value}</span>
        <input onclick = "lineThrough(event)" type="checkbox" name="" id="checkbox">
        <button id="btnDelete" onclick = "deleteFx(event)"> Eliminar </button>
        </li>
    </div>
    `;
});

inputNewTask.addEventListener("focus", () => {
    inputNewTask.classList.toggle("focus");
});
inputNewTask.addEventListener("blur", () => {
    inputNewTask.classList.toggle("focus");
});
