const getRandom = () => {
    return Math.ceil(Math.random() * 10);
};

let health = getRandom();
let happiness = getRandom();
let cleanliness = getRandom();
let energy = getRandom();

const healthSpan = document.getElementById("healthSpan");
const happinessSpan = document.getElementById("happinessSpan");
const cleanlinessSpan = document.getElementById("cleanlinessSpan");
const energySpan = document.getElementById("energySpan");

const updateSpan = () => {
  healthSpan.innerHTML = health;
  happinessSpan.innerHTML = happiness;
  cleanlinessSpan.innerHTML = cleanliness;
  energySpan.innerHTML = energy;
};
updateSpan();


const tamagochi = (input) => {
   
    switch (input) {
    case 'ALIMENTAR':
        feed();
        break;
    case 'JUGAR':
        play();
        break;
    case 'DORMIR':
        sleep();
        break;
    case 'VACUNAR':
        vaccinate();
        break;
    case 'BAÑAR':
        bath();
        break;
    case 'RETAR':
        scold();
        break;
    case 'ACARICIAR':
        stroke();
        break;   
    default:
        alert('Error');     
    };

    updateSpan();
};

const feed = () => {
   happiness += 2;
   energy += 3;
};

const play = () => {
    happiness += 2;
    energy -= 2;
    cleanliness -= 1;
};

const sleep = () => {
    energy += 5;
    health += 2;
    cleanliness -= 2;
};

const vaccinate = () => {
    health += 5;
    happiness -= 6;
};

const bath = () => {
    health += 3;
};

const scold = () => {
    happiness -= 3;
};

const stroke = () => {
    happiness += 4;
};

// while (health > 0) {
//     alert('Hola! Soy Foxy! ≧◠ᴥ◠≦');
//     alert(`Estado de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
//     const inputOwner = prompt('Hey, ingresá una opción: ALIMENTAR, JUGAR, DORMIR, VACUNAR, BAÑAR, RETAR o ACARICIAR');
//     const game = tamagochi(inputOwner);
// };


// const acariciarButton = document.getElementById("acariciar");
// acariciarButton.addEventListener("click", () => tamagochi("ACARICIAR"));
