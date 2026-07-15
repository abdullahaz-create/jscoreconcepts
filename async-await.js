document.addEventListener("DOMContentLoaded", () => {

    const asyncBtn = document.getElementById("asyncBtn");
    const output = document.getElementById("output");

    async function getData() {

        output.textContent = "Loading...";

        // Wait for 2 seconds
        await new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });

        output.textContent = "Data Loaded Successfully!";
    }

    asyncBtn.addEventListener("click", getData);

});