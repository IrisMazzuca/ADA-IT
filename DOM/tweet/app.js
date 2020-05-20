// Tweet: hacer un textarea que permita escribir hasta 240 caracteres. Debe haber un contador de caracteres restantes que se vaya actualizando, debe empezar con 240 e irse restando. También debe haber un botón de enviar que cuando se haga click en este borre el texto ingresado, reinicie el contador y muestre un alert que diga que fue enviado. Si el texto ingresado es más largo que el permitido, tanto el texto como el contador debe ponerse en color rojo, el contador debe pasar a números negativo y el botón debe cambiar de estilo y deshabilitarse (no poder clickearlo).

const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const counter = document.getElementById("counter");

let arrayText = (textarea.value).split("");
let numCharacters = (arrayText.length);
let characters = 240;

counter.innerHTML = `~ ${characters} caracteres disponibles ~`;


const tweet = () => {
    characters = characters - numCharacters;
    counter.innerHTML = `~ ${characters} caracteres disponibles ~`;
}

textarea.addEventListener = ("keyup", () => {
    tweet ();
})


btn.addEventListener = ("click", () => {

})