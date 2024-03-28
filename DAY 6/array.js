


let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);

// Access elements
console.log(fruits[2]);
console.log(fruits[7]); // undefined


// Length of the Index
console.log(fruits.length);

// Update elements
fruits[1] = 'Avocado';
console.log(fruits);

// Adding elements
// Add element at the end of the array.
fruits.push("Dewberry");
console.log(fruits);


// Add element at the beginning of the array.
fruits.unshift("Banana");
console.log(fruits)

// Deleting elements
// Delete element at the end of the array.
fruits.pop();
console.log(fruits);

// Delete element at the beginning of the array.
fruits.shift();
console.log(fruits);

// Alphabetically
fruits.sort();
console.log(fruits)

// Reverse
fruits.reverse();
console.log(fruits);


// Searching
// indexOf Method
let index = fruits.indexOf('Avocado');
console.log("Index:", index);

// Includes Method
console.log("Is Apple in fruits: ", fruits.includes("Apple"));

// Joining
// Join Method
console.log("Joined fruits:", fruits.join("-"));

// Slice Method
let sliced_fruits = fruits.slice(1, 3);
console.log(sliced_fruits);

// Looping through the elements
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

// For Loop
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


// Reverse For Loop
// for (let i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);
// }

// For Of Loop
for (fruit of fruits){
    console.log(fruit);
}