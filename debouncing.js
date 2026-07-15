let timer;

document.getElementById("search").addEventListener("input", function(){

clearTimeout(timer);

timer = setTimeout(() => {

document.getElementById("output").textContent =
"Searching: " + this.value;

},1000);

});