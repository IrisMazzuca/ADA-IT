// - Crear un input de tipo checkbox.
// - Escribir una funcion "toggleChecked" que
// - cambie el estado de clickeado a sin
// - clickear o viceversa.

const checkbox = document.getElementById("checkbox");

const toggleChecked = () => {

    checkbox.checked = !checkbox.checked;

    // const status = checkbox.checked;

    // if (status) {
    //     checkbox.checked = false;
    // } else {
    //     checkbox.checked = true;
    // }
}