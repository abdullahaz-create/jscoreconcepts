const list = document.getElementById("list");
const result = document.getElementById("result");

list.addEventListener("click", function(event){

    result.textContent =
    "You clicked: " +
    event.target.textContent;

});