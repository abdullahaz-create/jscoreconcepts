// Wait until the HTML is loaded
document.addEventListener("DOMContentLoaded", () => {

    const output = document.getElementById("output");

    function print(text = "") {
        output.innerHTML += text + "<br>";
    }

    function clearOutput() {
        output.innerHTML = "";
    }

    // ---------------- HOISTING ----------------

    window.showHoisting = function () {

        clearOutput();

        print("===== HOISTING =====");
        print("");

        print("Before declaration:");
        print(x);

        var x = 10;

        print("");

        print("After declaration:");
        print(x);

        print("");
        print("Explanation:");
        print("var declarations are hoisted.");
        print("Only the declaration moves to the top.");
        print("The value is assigned later.");
    };

    // ---------------- EXECUTION CONTEXT ----------------

    function second() {
        print("Entered Second Function");
    }

    function first() {
        print("Entered First Function");

        second();

        print("First Function Finished");
    }

    window.showExecutionContext = function () {

        clearOutput();

        print("===== EXECUTION CONTEXT =====");
        print("");

        print("Global Execution Starts");

        first();

        print("Global Execution Ends");
    };

    // ---------------- CLOSURE ----------------

    function createCounter() {

        let count = 0;

        return function () {

            count++;

            print("Counter Value: " + count);

        };

    }

    const counter = createCounter();

    window.showClosure = function () {

        clearOutput();

        print("===== CLOSURE =====");
        print("");

        counter();
        counter();
        counter();

        print("");
        print("The inner function remembers 'count'");
        print("even after createCounter() has finished.");
    };

    // ---------------- THIS ----------------

    const student = {

        name: "Abdullah",

        age: 19,

        introduce: function () {

            print("Normal Function");
            print("Name : " + this.name);
            print("Age  : " + this.age);

        },

        arrowIntro: () => {

            print("Arrow Function");
            print("Name : " + this.name);

        }

    };

    window.showThis = function () {

        clearOutput();

        print("===== THIS KEYWORD =====");
        print("");

        student.introduce();

        print("");

        student.arrowIntro();

        print("");

        print("Explanation:");
        print("Normal function -> this refers to student object.");
        print("Arrow function -> this comes from outer scope.");
        print("Therefore this.name is undefined.");

    };

});