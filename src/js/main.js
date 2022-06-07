const btn = document.querySelector(".button__primary");
const popUp = document.querySelector(".popup");
const closeBtn = document.querySelector(".closer");
const resetBtn = document.querySelector(".resetButton");
const counter = document.getElementById("clicks");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    popUp.style.display = "flex";
});

closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    popUp.style.display = "none";
});

window.addEventListener("click", (event) => {
    if(event.target.id === "popup") {
        popUp.style.display = "none";
    }
});