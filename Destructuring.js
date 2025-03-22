// Object destructuring
const person = { pname: "Alice", age: 25, city: "New York" };
const { pname, age, city } = person;
console.log(pname, age, city);   // Alice 25 New York


// Array destructuring
const color = ["red", "green", "blue", "yellow"];
const [first, second, third, fifth] = color;
console.log(first, second, third);     // red green blue

// Default values
const [a=1, b=2, c = 3] = [10, 20];
console.log(a, b, c);       // 10 20 3