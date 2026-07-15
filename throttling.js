let canClick = true;

const throttleButton = document.getElementById("throttleBtn");
const throttleOutput = document.getElementById("output");

throttleButton.addEventListener("click", () => {

    if (!canClick) return;

    canClick = false;

    throttleOutput.textContent = "Button Clicked!";

    setTimeout(() => {
        canClick = true;
    }, 2000);

});