// Regular function
function greet() {
    console.log("Hello world")
}

// function with parameters and return statement
function sum(num1, num2) {
    return num1 + num2
}

// Arrow function
const greetArrow = (name) => {
    console.log("Hello", name);

}

// function call
greet();
console.log("Sum is: ", sum(2, 5));
greetArrow("Alice");

// function as a parameter
function process(func, value) {
    func(value);
}

console.log("Function as a parameter");

process(greet, "Alice");