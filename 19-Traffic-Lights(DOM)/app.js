// Hacer un semáforo que vayan cambiando por su cuenta de color.

const circle = document.querySelectorAll(".circle");

let activeLight = 0;

const changeLight = () => {
    circle[activeLight].className = "circle";
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = circle[activeLight];

    currentLight.classList.add(currentLight.getAttribute("color"));
};

setInterval(changeLight, 1000);