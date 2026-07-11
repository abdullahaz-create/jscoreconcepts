function showEventLoop() {

    const output = document.getElementById("output");
    output.innerHTML = "";

    function print(text) {
        output.innerHTML += text + "<br>";
    }

    print("<h2>Event Loop Implementation</h2>");
    print("Check the browser console (F12 → Console) to see the execution order.");
    print("");

    console.clear();

    console.log("Script Start");
    print("Script Start");

    setTimeout(() => {
        console.log("setTimeout Callback");
        print("setTimeout Callback (Macrotask)");
    }, 0);

    Promise.resolve().then(() => {
        console.log("Promise Callback");
        print("Promise Callback (Microtask)");
    });

    console.log("Script End");
    print("Script End");
}