const tamagochi = (input) => {
   
    switch (input) {
    case 'ALIMENTAR':
        result = feed(happiness, energy, health, cleanliness);
        break;
    case 'JUGAR':
        result = play(happiness, energy, health, cleanliness);
        break;
    case 'DORMIR':
        result = sleep(happiness, energy, health, cleanliness);
        break;
    case 'VACUNAR':
        result = vaccinate(happiness, energy, health, cleanliness);
        break;
    case 'BAÑAR':
        result = bath(happiness, energy, health, cleanliness);
        break;
    case 'RETAR':
        result = scold(happiness, energy, health, cleanliness);
        break;
    case 'ACARICIAR':
        result = stroke(happiness, energy, health, cleanliness);
        break;   
    default:
        result = 'Error';     
    };

    return result;
};

const feed = (happiness, energy, health, cleanliness) => {
   happiness += 2;
   energy += 3;
   return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);

};

const play = (happiness, energy, health, cleanliness) => {
    happiness += 2;
    energy -= 2;
    cleanliness -= 1;
    return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
};

const sleep = (happiness, energy, health, cleanliness) => {
    energy += 5;
    health += 2;
    cleanliness -= 2;
    return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
};

const vaccinate = (happiness, energy, health, cleanliness) => {
    health += 5;
    happiness -= 6;
    return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
};

const bath = (happiness, energy, health, cleanliness) => {
    health += 3;
    return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
};

const scold = (happiness, energy, health, cleanliness) => {
    happiness -= 3;
    return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
};

const stroke = (happiness, energy, health, cleanliness) => {
    happiness += 4;
    return alert(`Estado ACTUALIZADO de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
};

let health = 10;
let happiness = 10;
let cleanliness = 10;
let energy = 10;
let result;
while (health > 0) {
    alert('Hola! Soy Foxy! ≧◠ᴥ◠≦');
    alert(`Estado de Foxy ≧◠ᴥ◠≦: Salud: ${health}, Felicidad: ${happiness}, Limpieza: ${cleanliness} & Energía: ${energy}`);
    const inputOwner = prompt('Hey, ingresá una opción: ALIMENTAR, JUGAR, DORMIR, VACUNAR, BAÑAR, RETAR o ACARICIAR');
    const game = tamagochi(inputOwner, health, happiness, cleanliness, energy);
};