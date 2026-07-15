document.addEventListener("DOMContentLoaded", () => {

    const copyBtn = document.getElementById("copyBtn");
    const output = document.getElementById("output");

    copyBtn.addEventListener("click", () => {

        const original = {
            name: "Ali"
        };

        // Shallow Copy
        const shallow = original;

        // Deep Copy
        const deep = structuredClone(original);

        // Modify copies
        shallow.name = "Ahmed";
        deep.name = "Usman";

        output.textContent =
`Original : ${original.name}

Shallow Copy : ${shallow.name}

Deep Copy : ${deep.name}`;
    });

});