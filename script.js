const output = document.getElementById("output");
function print(text) {
    output.innerHTML += text + "<br>";
}

function clearOutput() {
    output.innerHTML = "";
}
// Hoisting
function showHoisting() {
    clearOutput();
    print("Hoisting Implementation");
    print("");

    print("Before variable declaration:");
    print(x);   // undefined because of hoisting
    var x = 10;
    print("");
    print("After variable declaration:");
    print(x);
}
 //execution context
function first() {

    print("Entered First Function");

    second();

    print("First Function Finished");

}
function second() {

    print("Entered Second Function");

}
function showExecutionContext() {
   clearOutput();

    print("Execution Context");
    print("");

    print("Global Execution Starts");

    first();

    print("Global Execution Ends");

}
// Closure k functions
function createCounter() {
    let count = 0;
    return function () {
        count++;
        print("Counter Value: " + count);

    };

}
const counter = createCounter();
function showClosure() {

    clearOutput();

    print(" Closure Implementation");
    print("");

    print("Calling counter three times...");

    counter();
    counter();
    counter();

    print("");
    print("The inner function remembers the value of 'count'.");
}
// this implemntion
const student = {
    name: "Abdullah",
    age: 19,
    introduce: function () {

        print("Inside Normal Function");
        print("Name: " + this.name);
        print("Age: " + this.age);

    },
    arrowIntro: () => {

        print("Inside Arrow Function");
        print("Name: " + this.name);

    }

};
function showThis() {
    clearOutput();
    print("'this' Implementation");
    print("");
    student.introduce();
    print("");
    student.arrowIntro();
    print("");
    print("Explanation:");
    print("Normal functions have their own 'this',");
    print("so 'this' refers to the student object.");
    print("");
    print("Arrow functions do not have their own 'this'.");
    print("They inherit 'this' from the surrounding scope,");
    print("so this.name becomes undefined.");
}