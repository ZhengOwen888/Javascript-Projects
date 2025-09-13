// Tells the engine to run in strict mode,
// less "forgiving" and more predictable
"use strict";

/************************
        Variables
*************************/
//var max = 10 This is a global variable
let x = 1;
let y = "Hello, World!";
let z;
const noEdit = "noEdit"; // constant variable can not be edited

/********************
        Types
*********************/
console.log(typeof 10); // number
console.log(typeof "Hi"); // string
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/************************
        Functions
*************************/
function foo1(n) {
    // Function declaration
    // Can be called anywhere
    return n + 10;
}

const foo2 = function (n) {
    // Function expression
    // Can only call after declaring function expression
    return n + 20;
};

const foo3 = (n) => {
    // Arrow function
    // Can only call after declaring arrow function
    return n + 30;
};

/***************************
        Control Flow
****************************/
const condition1 = false;
const condition2 = false;

if (condition1) {
    console.log("condition1 is true.");
} else if (condition2) {
    console.log("condition2 is true.");
} else {
    console.log("No conditions are true.");
}

/***********************
        Switch
************************/
let day = "Sunday";
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Today is a weekday almost there!!!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Today is the weekend, have a good rest you earned it!!!");
        break;
    default:
        console.log(`Sorry bruh, ${day} is not a valid day`);
        break;
}

/************************
        Operators
*************************/
let a = 10;
let b = 2;

console.log(a + b); // addition operator
console.log(a - b); // subtraction operator
console.log(a * b); // multiplication operator
console.log(a / b); // division operator
console.log(a % b); // modulus or remainder operator
console.log(a ** b); // power operator

console.log(a > b); // greater than operator
console.log(a < b); // less than operator
console.log(a >= b); // greater than equal operator
console.log(a <= b); // less than equal operator
console.log(a === b); // strict equality (type coercion not allowed) - highly recommended
console.log(a !== b); // strict unequality check
console.log(a == b); // loose equality (type coercion allowed)
console.log(a != b); // loose inequality

console.log(a && b); // and operator
console.log(a || b); // or operator

// Important Notes on return value of operators:
// For && (AND)
// - Returns the first falsy value, or the last value if all are truthy
console.log(0 && "hello"); // 0 - false
console.log(5 && "hello"); // "hello" - true
// For || (OR)
// - Returns the first truthy value, or the last value if all are falsy
console.log("hello", 0); // "hello" - true
console.log("" || 0); // 0 - false

/*****************************
        Type Coercion
*****************************/
// String coercion when using "+"
console.log("5" + 1); // "51"
console.log(true + "x"); // "truex"

// Number coercion when using "-", "*", "/", "%", "**" or comparing with "<", ">", "<=", ">="
console.log("5" - 1); // 4
console.log("10" * 2); // 20
console.log(true + 1); // 2
console.log(false * 5); // 0

// Boolean coercion in logical contexts(if, while, &&, ||, !)
// Falsy values - false, 0, 0, 0n, "", null, undefined, NaN
if ("") console.log("won't run");
if ("hello") console.log("runs");

/***********************
    Ternary Operator
************************/
let ternaryCondition = a > b ? a : b;

// same logic as above
if (a > b) {
    ternaryCondition = a;
} else {
    ternaryCondition = b;
}

// For/While Loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++; // or counter += 1
}

/**********************
        Arrays
***********************/
const fruits = ["apple", "banana", "citrus"];

fruits.push("dragon fruit"); // add element to end of array
fruits.unshift("apricot"); // add elememt to start of array

fruits.pop(); // remove last element in array
fruits.shift(); // remove first element in array

fruits.length; // length of array
fruits.indexOf("apple"); // index of element
fruits.includes("banana"); // check if array includes the element

/**********************
        Objects
***********************/
let curYear = 2025;
const person = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1999,
    friends: ["Alex", "Joe"],
    calcAge: function () {
        return curYear - this.birthYear;
    },
};

// Dot Notation - recommended
console.log(person.firstName);
console.log(person.lastName);
person.contact = "johnsmith@gmail.com"; // declare a contact property

// Bracket Notation
console.log(person["firstName"]);
console.log(person["lastName"]);
person["contact"] = "johnsmith@gmail.com"; // declare a contact property
