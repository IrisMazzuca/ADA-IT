// Escribir un HTML con un div.
// - Luego, por ID, modificar el contenido del DIV
// - agregando una lista de 5 elementos.
// - Una vez agregada la lista, agregar
// - programaticamente un numero a cada elemento
// -
// - por ejemplo, si son 5 elementos deberia verse:
// - 1
// - 2
// - 3
// - 4
// - 5

let myDiv = document.getElementById("myDiv");

myDiv.innerHTML = `  <ol>
<li>Uno</li>
<li>Dos</li>
<li>Tres</li>
<li>Cuatro</li>
<li>Cinco</li>
</ol>
`