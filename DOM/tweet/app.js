// Tweet: hacer un textarea que permita escribir hasta 240 caracteres. Debe haber un contador de caracteres restantes que se vaya actualizando, debe empezar con 240 e irse restando. También debe haber un botón de enviar que cuando se haga click en este borre el texto ingresado, reinicie el contador y muestre un alert que diga que fue enviado. Si el texto ingresado es más largo que el permitido, tanto el texto como el contador debe ponerse en color rojo, el contador debe pasar a números negativo y el botón debe cambiar de estilo y deshabilitarse (no poder clickearlo).

const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const counter = document.getElementById("counter");


const characters = 240;
let actualization = 0;

counter.innerHTML = `~ ${characters} caracteres disponibles ~`;


textarea.addEventListener = ("keyup", (characters, actualization) => {
    
    actualization = Number(characters - Number((textarea.value).split("").length));

    counter.innerHTML = `~ ${actualization} caracteres disponibles ~`;

    if (actualization < 0) {

        textarea.classList.add("textarea--error");
        counter.classList.add("counter--error");
        btn.classList.add("btn--error");
    }
})


btn.addEventListener = ("click", (characters) => {

    textarea.value.innerHTML = "";

    counter.innerHTML = `~ ${characters} caracteres disponibles ~`;

    return alert("✔ Su mensaje fue enviado!");
})