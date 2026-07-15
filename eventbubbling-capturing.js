document.addEventListener("DOMContentLoaded", () => {

    const eventOutput = document.getElementById("output");
    const parent = document.getElementById("parent");
    const child = document.getElementById("child");

    // Parent - Capturing Phase
    parent.addEventListener("click", () => {
        eventOutput.innerHTML += "Parent Clicked (Capturing)<br>";
    }, true);

    // Child
    child.addEventListener("click", () => {
        eventOutput.innerHTML += "Button Clicked<br>";
    });

    // Parent - Bubbling Phase
    parent.addEventListener("click", () => {
        eventOutput.innerHTML += "Parent Clicked (Bubbling)<br>";
    });

});