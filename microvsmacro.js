function runMicroVsMacro() {

    clearOutput();

    print("========== Microtask vs Macrotask ==========\n");

    print("1. Script Start");

    setTimeout(() => {
        print("5. Macrotask → setTimeout Callback");
    }, 0);

    Promise.resolve().then(() => {
        print("3. Microtask → Promise.then()");
    });

    queueMicrotask(() => {
        print("4. Microtask → queueMicrotask()");
    });

    print("2. Script End");
}