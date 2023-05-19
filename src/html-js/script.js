const buttonElements = document.querySelectorAll(".button-container button");
const screenElement = document.querySelector(".screen");

buttonElements.forEach(buttonElement => {
  buttonElement.addEventListener("click", () => {
    screenElement.textContent = buttonElement.textContent;
  });
});
