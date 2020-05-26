//Hacer que un elemento siga al cursor del mouse. **TIP**: la función que hace que el elemento vaya a la posición del mouse debería invocarse cada cierto intervalo de tiempo con `setInterval`.


const element = document.getElementById("element");


window.onmousemove = moveElement = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x,y);
    element.style.top = (y + 10) + 'px';
    element.style.left = (x + 10) + 'px';
};