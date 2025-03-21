let fruits = ["apple", "banana", "mango", "kiwi", "orange"];

// print array
console.log("Original array\n",fruits);

// Adding elements
fruits.push("watermelon");      // Adding element at the end
fruits.unshift("Guava");        // Adding element at the begining

// print array using loop
console.log("Print array using loop");

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}


// Removing elements
console.log("Pop() and Shift()");
fruits.pop();       // Removes last element (end)
fruits.shift();     // Removes firsts element (beginning)
console.log(fruits);

// Iterating array using for each loop
console.log("Iterating array using foreach loop");
fruits.forEach((fruit, index) => 
    console.log(fruit)
)

// Map, Filter, Reduce
let numbers = [1, 2, 3, 4, 5];

// Map -> Transforms each element

console.log("Map() function: ");
let squared = numbers.map(num => num ** 2);
console.log(squared);

// Filter -> Selects elements based on condition
console.log("Filter() function: ");
let even = numbers.filter(num => num % 2 === 0);
console.log(even);

// Reduce -> Aggregate to a single vale
console.log("Reduce() function: ");
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


