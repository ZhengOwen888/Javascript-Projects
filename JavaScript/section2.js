"use strict";

/***********************
    Logical Operators
************************/
// Logical OR
let a = 0;
let b = 10;
a ||= b; // a = a || b

// Logical AND
a = 1;
b = 10;
a &&= b; // a = a && b

// Nullish (??) - replaces the value if value is null or undefined
a = 2;
b = 10;
a ??= b; // a = a ?? b

/**********************
        Copying
***********************/
const cart = {
    quantity: 23,
    weight: 25,
    items: ["apple", "banana", "citrus"],
};
// Shallow copy - only copies one level deep,
// nested objects/arrays are still shared by reference
const cartCopy = { ...cart };

// Deep Copy - copies all levels including nested objects/arrays
const cartClone = structuredClone(cart);

/****************************
        Destructuring
*****************************/
// Spread Operator - on the right of the = operator,
// which allows you to expand an iterable or object
// into individual elements or properties
const mammals = ["antelope", "bear", "cat"];
const reptiles = ["alligator", "boa", "crocodile"];
const animals = [...mammals, ...reptiles]; // combine array with spread
console.log(animals); // [ 'antelope', 'bear', 'cat', 'alligator', 'boa', 'crocodile' ]

// Rest Operator - on the left of the = operator,
// which allows you to collect elements and put it
// in an array or objec, they must be the last element
// of an array or objector, or the last parameter of
// a function
const schedule = ["english", "math", "science", "history"];
const [firstClass, secondClass, ...remainingClass] = schedule;
console.log(firstClass, secondClass, remainingClass); // english math ["science", "history"]

// Array destructuring - Assign multiple array elements to variables
const nums = [1, 2, 3];
const [n1, n2, n3] = nums;
console.log(n1, n2, n3); // 1 2 3

// Nested array destructuring
const trees = ["ash", "birch", "cedar", ["dogwood", "elm"]];
const [tree1, , , [tree2, tree3]] = trees;
console.log(tree1, tree2, tree3); // ash dogwood elm

// Object destructuring
const restaurant = {
    restaurantName: "Golden Wok",
    openingHours: {
        weekday: {
            open: 10,
            close: 9,
        },
        weekend: {
            open: 11,
            close: 10,
        },
    },
    cuisine: "chinese",
    starterMenu: ["Scallion Pancake", "Fried Peanuts", "Pork Dumplings"],
    mainMenu: ["Peking Duck", "Fried Rice", "Ma Po Tofu", "Hot Pot"],
};
const { restaurantName, openingHours, cuisine } = restaurant;
console.log(restaurantName, openingHours, cuisine);
// if you name something that is not in the object
// it will be undefined unless given a default value
const { ownerName = [] } = restaurant;

/*********************************
        For Loop Another Way
**********************************/
// Another way to write a for loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
    console.log(item);
}
// Using .entries returns an array iterator of [index, value] pairs
for (const [index, value] of menu.entries()) {
    console.log(`Item ${index + 1}: ${value}`);
}

/*************************************
    Default Paramaters with Rest OP
**************************************/
function sumAll(...nums) {
    let sum = 0;
    for (const i of nums) {
        sum += nums[i];
    }
    return sum;
}
const randomNums = [1, 2, 3, 4, 5];
const sumN = sumAll(...randomNums); // 15

function greet(name = "World") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, World!
console.log(greet("Ash")); // Hello, Ash!
