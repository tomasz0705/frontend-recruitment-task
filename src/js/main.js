const btn = document.querySelector(".button__primary");
const popUp = document.querySelector(".popup");
const closeBtn = document.querySelector(".closer");
const resetBtn = document.querySelector(".resetButton");
const counter = document.getElementById("clicks");

const saveToLocalStorage = (key, value) => localStorage.setItem(key, value);

const getItemFromLocalStorage = (key) => localStorage.getItem(key);

const NUMBER_OF_CLICKS_LS_KEY = "number-of-clicks";

const getClicksCounterFromLocalStorage = () =>
  Number(getItemFromLocalStorage(NUMBER_OF_CLICKS_LS_KEY)) || 0;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  popUp.style.display = "flex";

  const currentClick = getClicksCounterFromLocalStorage() + 1;

  localStorage.setItem(NUMBER_OF_CLICKS_LS_KEY, currentClick);

  counter.innerHTML = currentClick;

  if (currentClick > 5) {
    resetBtn.style.display = "flex";

    resetBtn.addEventListener("click", (event) => {
        event.preventDefault();
      saveToLocalStorage(NUMBER_OF_CLICKS_LS_KEY, null);
      counter.innerHTML = 0;
    });
  }
});

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  popUp.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target.id === "popup") {
    popUp.style.display = "none";
  }
});
