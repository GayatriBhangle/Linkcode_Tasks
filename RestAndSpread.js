// spread operator (...): Expands an array into individual elements
const num = [1, 2, 3, 4];
console.log(...num);

// combine arrays
const newArray = [4, 5, 6];
const combined = [...num, ...newArray];    // merging array
console.log(combined);

// Spreading strings
const str = "Hello";
const letters = [...str];
console.log(letters);

// Spreading objects
const obj1 = {name: "Gayatri", age:20, city: "Pune"};
const obj2 = {Country : "India"};
const mergeObj = {...obj1, ...obj2};

console.log(mergeObj);

// -----------------------------------------------------------------------------------------


// Rest operator: Rest operator fathers multiple items into a simgle collectoin

// Gathering function arguments
function add(...numbers) {
    console.log(numbers);
}

add(1, 2, 3, 4);
add(3, 4, 5);


// Rest in array destructing
const nums = [1, 2, 3, 4, 5];
const [one, two, ...rest] = nums;

console.log(one);
console.log(two);
console.log(rest);


// rest in object destructuring
const person = { name: "Alice", age: 25, city: "Pune" };
const { name, ...details } = person;

console.log(name);       // Alice
console.log(details);    // { age: 25, city: "Pune" } (gathers remaining properties)


