// Kitten Browser

// Getting information from the API
let apiInfo = [];
const getApiInfo = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    apiInfo = await response.json();
}

// PART 1 - Menu -> Tabs section

const menu = document.querySelector("ul");
const tabSection = document.querySelectorAll(".tab-section");

// Remove 'is-active' class from the first tab
menu.addEventListener("click", (e) => {

    let target_a = e.target; // "a" 
    let target_li = e.target.parentElement; // "li"


    menu.firstElementChild.classList.remove('is-active');

    displayTab(target_li)
    displaySection(target_a)
});

// Add class 'is-active' to the tab selected
let selectedTab;
const displayTab = (tab) => {

    if (selectedTab) { // remove is-active from last selectedTab
        selectedTab.classList.remove('is-active');
    }
    selectedTab = tab;
    selectedTab.classList.add('is-active');

};

// Display section selected by removing 'is-hidden' class
const displaySection = (link) => {

    tabSection.forEach(tab => {
        // getting the # out of the href, so that we can get the word alone.
        let newLink = link.hash.substring(1);


        if (tab.id === newLink) {
            tab.classList.remove('is-hidden');
        }
        else {
            tab.classList.add('is-hidden');
        }

    });
};

//Part 2 -> Random Tab

const btnRandom = document.getElementById("random-cat-btn");
const imgRandom = document.getElementById("cat-img");

btnRandom.addEventListener("click", () => {
    btnRandom.classList.add("is-loading")
    getRandom()
});

//onload function in the image. When it stop loading, it removes the is-loading class
const stopIsLoading = () => {

    btnRandom.classList.remove("is-loading")
};

// API call with fetch, and it displays the image
const getRandom = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search/");
    const data = await response.json();

    imgRandom.src = data[0].url;
};




// PART 3 -> Breeds Details

const select = document.getElementById("breed-dropdown");

// Display all the breeds' names from the API.
const showOptions = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds`);
    const data = await response.json();

    select.innerHTML = data.reduce((acc, item) => {
        let options = acc + `<option id='${item.id}-option')" value=${item.id}>${item.name}</option>`;

        // optionSelected(item.id);

        return options
    }, "")



}


const card = document.getElementById("card-body");


const updateCardInfo = async () => {

    const responseInfo = await fetch(`https://api.thecatapi.com/v1/breeds/${select.value}`);
    const info = await responseInfo.json();

    // console.log('info', info)


    let temperament = info.temperament.split(",")
    console.log('aca1', temperament);

    const temperamentSpan = temperament.reduce((acc, t) => {
        return acc + `<span class="tag">${t} </span>`
    }, ' ');

    console.log('aca1', temperamentSpan);

    card.innerHTML =
        `
    <h1 id="breed-name">${info.name}</h1>
    <p id="breed-description">
    ${info.description}
    </p>
    <div class="tags" id="breed-temperament">
    ${temperamentSpan}
    </div>
  `

}

const imageBreed = document.getElementById("breed-img");

const updateCardImg = async () => {

    const responseImg = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`);
    const img = await responseImg.json();


    imageBreed.src = img[0].url;

}




// PART 4 -> Breeds Search/Finder

const btnSearch = document.getElementById("breed-search-btn");
const searchInput = document.getElementById("breed-search-input");
const table = document.getElementById("breed-search-results");

// It displays the table with all the breeds names that match with the typed name (by the user)

const getBreed = async (value) => {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds`);
    const data = await response.json();
    let breeds = data.filter(element => (element.name.toLowerCase()).includes(value.toLowerCase()))

    //it includes an onclick function which redirects the page to the Breeds Tab-page.
    table.innerHTML = breeds.reduce((acc, cat) => {

        return acc + `
        <tr>
        <td class="td" onclick="goToBreedsPage('${cat.name}')">${cat.name}</td>
        </tr>
        `
    }, "")


};

// shows all the names that match while the user is typing.
searchInput.addEventListener('keyup', () => {
    getBreed(searchInput.value)

});


// Onclick function - redirection to Breeds Page with all the detailed information about the breed that the user chose.  

const goToBreedsPage = (name) => {
    console.log(name)
    // console.log(apiInfo);

    const menuBreeds = document.getElementById("breeds");

    let result = apiInfo.filter(cat => {

        return (cat.name).toLowerCase() === name.toLowerCase();

    })

    //updating the information and img
    document.getElementById(`${result[0].id}-option`).selected = 'selected';
    updateCardImg();
    updateCardInfo();

    //changing the tab-section
    displayTab(menuBreeds);
    displaySection(menuBreeds.children[0]);

}




// Part 5 -> Breed finder with filters tab.

let breedsWithImg;
const result = document.getElementById("breed-results")

const getInfo = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds`);
    const data = await response.json();

    let img = [];
    for (let item of data) {

        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${item.id}`);
        const data = await response.json();
        img.push(data[0].url)

    }

    // console.log(img)
    //getting a new obj with info and img
    breedsWithImg = data.map((breed, index) => {
        // console.log(img, index, img[index])
        return { ...breed, img: img[index] }
    })
}

const initBreedsWithFilters = async () => {
    await getInfo();
    // console.log(breedsWithImg)
    createCards(breedsWithImg);
}

const createCards = async (breeds) => {

    const cards = breeds.reduce((acc, cat) => {
        return acc += `
    <div class="column is-6">
        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="${cat.img}"/>
            </figure>
        </div>
        <div class="card-content">
            <p class="title is-5">${cat.name}</p>
        </div>
        </div>
    </div>
    `
    }, '')

    result.innerHTML = cards
}


// Enabling filter options from the last tab/page:

const filters = document.querySelectorAll(".breed-filter")

let arrCards = [];

filters.forEach(filter => {
    filter.addEventListener("click", (event) => {
        const { value, checked } = event.target;

        if (checked) {
            arrCards.push(value)
        } else {
            let index = arrCards.indexOf(value);
            arrCards.splice(index, 1)
        }
        console.log(arrCards)

        let filteredBreeds = [...breedsWithImg]

        for (const filter of arrCards) {
            filteredBreeds = filteredBreeds.filter(breed => breed[filter])
        }
        // console.log(filteredBreeds)
        createCards(filteredBreeds)


        const breedResultsCount = document.getElementById("breed-results-count");

        const number = filteredBreeds.length
        console.log(number)
        breedResultsCount.textContent = `${number} resultado(s)`
    })
})




// Functions calls
getApiInfo()
    .then(showOptions)
    .then(updateCardImg)
    .then(updateCardInfo)
    .then(initBreedsWithFilters)

// getApiInfo()
//     .then(getInfo)
//     .then(goToBreedsPage)
//     .then(showOptions)
//     .then(updateCardImg)
//     .then(updateCardInfo)
//     .then(initBreedsWithFilters)


