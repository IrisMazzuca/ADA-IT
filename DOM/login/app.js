// Hacer un login,se deber crear un form,donde se ingrese usuario y password,en caso de ser correcto,mostrar un alert que diga estas logeado,en caso contrario mostrar un mensaje en pantalla que diga usuario no registrado.

const userId = document.getElementById("userId");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const user = "iris_mazzu";
const pass = 12345;


const logIn = () => {
    if ((userId.value == user) && (password.value == pass)) {
        alert("✔ Estás logeado!");
    } else {
        alert("✘ Usuario no registrado");
    }
}

btn.addEventListener("click", () => {
    logIn();
})
