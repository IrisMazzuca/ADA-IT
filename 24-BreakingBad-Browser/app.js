// # Parte 2

// Tienen libertad creativa de resolución en cuanto a la parte visual de diseño

// Vamos a consumir la api de[The Breaking Bad API](https://breakingbadapi.com/)

// - Crear una card que muestre Nombre del personaje, imagen del mismo, cumpleanios, status, apodo y temporada.
// - Listar en las cards todos los personajes.
// - Crear una barra de busqueda para buscar por el nombre de personaje.
// - Cuando haga click en la card esta debe mostrarme un modal con una frase aleatoria y la cantidad de muertes que lleva.


//characters: "https://breakingbadapi.com/api/characters",  
// quotes: "https://breakingbadapi.com/api/quotes",
// deaths: "https://breakingbadapi.com/api/deaths" 



// petición de los datos de los personajes utilizacon fetch
let characters;
const getCharacters = () => {

    return fetch("https://breakingbadapi.com/api/characters")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            characters = data;
            createCards(data);

        })
};


// petición de los datos del contador de muertes utilizacon fetch
let deathsCountByCharacter = {}

function getDeath(name) {
    if (deathsCountByCharacter[name]) {
        return deathsCountByCharacter[name]
    }
    return fetch(`https://breakingbadapi.com/api/death-count?name=${name}`)
        .then(response => response.json())
        .then(death => {
            deathsCountByCharacter = death[0].deathCount
            // console.log(deathsCountByCharacter, name)

            return deathsCountByCharacter
            // console.log("death", deaths)
            // return deathsCountByCharacter.deathCount
        })
}



// petición de las frases de los personajes utilizacon fetch
let quotes;
const getQuotes = () => {

    return fetch("https://breakingbadapi.com/api/quotes")
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            quotes = data;

        })
};

// función para crear el HTML con las tarjetas de todos los personajes:
const cardContainer = document.getElementById("cardContainer");
let deaths;
const createCards = (characters) => {
    // como parámetro uso la información de getCharacters
    const cards = characters.reduce((htmlCards, character) => {
        return htmlCards + `
        <div class="m-3 card " id="card${character.char_id}" style="width: 18rem;" onclick="changeTextBody(${character.char_id},'${character.name}')">
            <div class="m-3 container-img">
                <img src="${character.img}" class="card-img-top img grayscale" id="image${character.char_id}"  alt="${character.name}">
            </div>
            <div class="card-body flex" id="showCard${character.char_id}">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text"><strong>Birthday: </strong> ${character.birthday}</p>
                <p class="card-text"><strong>Status: </strong> ${character.status}</p>
                <p class="card-text"><strong>Nickname: </strong> ${character.nickname}</p>
                <p class="card-text"><strong>Season: </strong> ${character.appearance}</p>
            </div>
            <div class="card-body d-none" id="hiddenCard${character.char_id}">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text"><strong>Quote: </strong> <em>"${getRandomQuote(character.name)}"</em></p>
                <p id="deaths${character.char_id}" class="card-text"> Loading ... </p>
            </div>
        </div>`
    }, "");
    cardContainer.innerHTML = cards;
}

// defino las variables para los botones y el input del header:
const btnSearch = document.getElementById("button-addon2");
const clear = document.getElementById("clear");
const inputValue = document.getElementById("inputValue");

// buscador del valor en la base de datos de characters, buscador por nombre:
const searchValue = (value) => {
    const filter = characters.filter(character => {
        return character.name.toLowerCase().includes(value.toLowerCase());
    });

    createCards(filter);
}

// creación de evento para el botón de search
btnSearch.addEventListener("click", () => {
    searchValue(inputValue.value);
});

// creación de evento para la zona de input al hacer "enter"
inputValue.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        searchValue(inputValue.value);
    }
});

// creación de evento para el botón de clear, limpia la búsqueda
clear.addEventListener("click", () => {
    inputValue.value = "";
    createCards(characters)
});


// creación de la función para el onclick

const changeTextBody = (id, name) => {

    const hiddenCard = document.getElementById(`hiddenCard${id}`);
    const showCard = document.getElementById(`showCard${id}`);
    const image = document.getElementById(`image${id}`);
    const card = document.getElementById(`card${id}`);
    const deaths = document.getElementById(`deaths${id}`);

    hiddenCard.classList.toggle("d-none");
    showCard.classList.toggle("d-none");
    image.classList.toggle("grayscale");
    card.classList.toggle("card-active");
    getDeath(name).then(value => {
        deaths.innerHTML = `<strong>Deaths:</strong> ${value}`;
    });
};


// función para traer en forma random una frase del personaje seleccionado por el usuario.

const getRandomQuote = (name) => {

    let arrayQuotes = quotes.filter(quote => quote.author === name)
    let randomNumber = Math.ceil(Math.random() * arrayQuotes.length);

    return randomQuote = arrayQuotes[randomNumber - 1] ? arrayQuotes[randomNumber - 1].quote : "";
}




// llamo a las funciones:

getQuotes()
    // .then(() => getDeath())
    .then(() => getCharacters());


