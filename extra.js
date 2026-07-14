const output = document.getElementById("output");

function print(message) {
    output.textContent += message + "\n";
}

function clearOutput() {
    output.textContent = "";
}