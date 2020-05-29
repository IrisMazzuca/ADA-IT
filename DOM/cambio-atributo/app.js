// - Dado el siguiente HTML
//   \*/
//   <input type="text" id="miInput" name="miInput"></input>
//   /\*\*
// - cambiar el atributo name a miExInput
//   \*/

const miInput = document.getElementById("miInput");

miInput.name = "miExInput";

console.log(miInput.name);