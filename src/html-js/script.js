const buttons = document.querySelectorAll(".button-container button");
const screenElement = document.querySelector(".screen");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screenElement.textContent = button.textContent;
  });
});
