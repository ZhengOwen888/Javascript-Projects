"use strict";

/*************************************
    Enhanced Objects Literals ES6
**************************************/
const category = "reptiles";
const animals = ["alligator", "bullsnake", "crocodile", "dolphin"];
const baseZoo = { zooName: "Whispering Pines Zoo", location: "Florida" };

const zoo = {
    // Object Spreading - copies all property from another object
    ...baseZoo,

    // shorthand property name for animals: animals
    animals,

    // computed property names
    [`${category}`]: ["Alligator", "Bullsnake", "Crocodile"],

    // Method definition no function keyword needed
    list() {
        return this.animals.join(", ");
    },

    openingHours: {
        mon: {
            open: 10,
            close: 18,
        },

        wed: {
            open: 10,
            close: 18,
        },

        fri: {
            open: 10,
            close: 20,
        },

        sun: {
            open: 10,
            close: 20,
        },
    },
};

/***************************
    Optional Chaining
***************************/
// Optional Chaining(?) - Check if this property exist. If it's
// null or undefined, stop and return undefined instead of crashing

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
    const open = zoo.openingHours[day]?.open ?? "closed";
    if (open === "closed") {
        console.log(`On ${day}, we are closed.`);
    } else {
        console.log(`On ${day}, we open at ${open}`);
    }
}
// Optional Chaining - Methods
console.log(zoo.donate?.(1000) ?? "Method does not exist");

// Optional Chaining - Arrays
const firstAnimal = zoo.animals?.[0] ?? "No animals";
console.log(firstAnimal);

/***********************************************************
    Looping Objects: Objects Keys, Values, and Entries
***********************************************************/
// Property NAMES
const properties = Object.keys(zoo.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(zoo.openingHours);
console.log(values);

// Entry Object
const entries = Object.entries(zoo.openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/********************
        Sets
********************/
const fruitSet = new Set(["apple", "apple", "banana", "banana"]);
console.log(fruitSet); // {"apple", "banana"}
console.log(fruitSet.size); // check set size
console.log(fruitSet.has("apple")); // check if element in set
fruitSet.add("citrus"); // add new element
fruitSet.delete("banana"); // delete element
// fruitSet.clear();

for (const fruit of fruitSet) {
    console.log(fruit);
}

// Destructuring Sets
const nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
const numsUnique = [...new Set(nums)];
console.log(numsUnique);

// Set methods
const italianFoods = new Set([
    "pasta",
    "gnocchi",
    "tomatoes",
    "olive oil",
    "garlic",
    "basil",
]);

const mexicanFoods = new Set([
    "tortillas",
    "beans",
    "rice",
    "tomatoes",
    "avocado",
    "garlic",
]);

// Intersection - common elements from both sets
const commonFoods = italianFoods.intersection(mexicanFoods);

// Union - all elements from both sets into one set
const uniqueFusion1 = italianFoods.union(mexicanFoods);
const uniqueFusion2 = [new Set([...italianFoods, ...mexicanFoods])];

// Difference - all unique element in first set not in second set
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);

// Symmetric Differece - all unique elements from both sets, excluding the common elements
const uniqueItalianAndMexicanFoods =
    italianFoods.symmetricDifference(mexicanFoods);

/********************
        Maps
********************/
const rest = new Map();

// Set key : value to map
rest.set("name", "Classico Italiano"); // returns the updated map
rest.set(1, "Firenze, Italy");

// Allows chaining
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "we are open :D")
    .set(false, "we are closed :(");

// Gett values from keys
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

// Has
console.log(rest.has("categories"));

// delete element with key
rest.delete(1);
// rest.clear()
rest.size; // size of map, number of elements

// Iterations
const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct!!!"],
    [false, "Incorrect Try Again"],
]);

// Converting object to map
const hoursMap = new Map(Object.entries(zoo.openingHours));

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}
// const answer = Number(prompt("Your answer")); // works with browsers
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries()); // same as above
console.log([...question.keys()]);
console.log([...question.values()]);

/***********************
        Strings
***********************/

const airline = "TAP Air Portugal";
const plane = "A3201";
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0

console.log(plane.length); // 5

console.log(airline.indexOf("r")); // first occurrence
console.log(airline.lastIndexOf("r")); // last occurrence
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(" "))); // TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portugal

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === "B" || s === "E") {
        console.log("You got the middle seat");
    } else {
        console.log("You got lucky");
    }
};

checkMiddleSeat("11B"); // You got the middle seat
checkMiddleSeat("23C"); // You got lucky
checkMiddleSeat("3E"); // You got the middle seat

// String Methods

// toLowerCase, toUpperCase and trim method
console.log(airline.toLowerCase()); // "tab Air Portugal"
console.log(airline.toUpperCase()); // "TAP AIR PORTUGAL"

const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.IO";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // removes white space
console.log(trimmedEmail); // hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@jonas.io

// replacing method
const priceCN = "288,97¥";
const priceUS = priceCN.replace("¥", "$").replace(",", ".");
console.log(priceUS); // 288.97$

const announcement =
    "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate")); // using regular expression instead of replaceAll

// Booleans Methods
const airplane = "Airbus A32neo";

// includes method
console.log(airplane.includes("A320")); // true
console.log(airplane.includes("Boeing")); // false

// startsWith and endsWith method
if (airplane.startsWith("Airbus") && airplane.endsWith("neo")) {
    console.log("Parts of the NEW Airbus family");
}

const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("kinfe") || baggage.includes("gun")) {
        console.log("You are NOT allowed on board");
    } else {
        console.log("Welcome aboard!");
    }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snaks and a gun for protection");

// split and join method
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName].join(" ");

const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
};
capitalizeName("Jessaca ann smith davis");
capitalizeName("jonas schmedtmann");

// padding method
// padStart - add specified character to start of string until specified length
// padEnd - add specified character to end of string until specified length
const message = "Go to gate 23!";
console.log("Hello".padStart(10, "+").padEnd(20, "+")); // +++++Hello++++++++++

const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
};

console.log(maskCreditCard(234120981048312)); // ***********8312

// repeat method
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
