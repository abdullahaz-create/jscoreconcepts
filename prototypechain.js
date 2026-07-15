document.addEventListener("DOMContentLoaded", () => {

    const prototypeBtn = document.getElementById("prototypeBtn");
    const output = document.getElementById("output");

    const person = {
        name: "Ali"
    };

    prototypeBtn.addEventListener("click", () => {

        output.textContent =
`Person Name: ${person.name}

person.toString():
${person.toString()}

The 'toString()' method is not inside the person object.
JavaScript finds it in Object.prototype using the Prototype Chain.`;

    });

});