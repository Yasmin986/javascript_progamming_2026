// alert("Hi Shagufta");

// console.log("Hello World");

let firstName = "Shagufta";
console.log(firstName);

const PI = 3.1415
console.log(PI);

// use $ before reserved word to use it as variable name
let $var = 34;
console.log($var)

let fun = true;
console.log(fun)
console.log(typeof fun)

let year = 2026
console.log(year)
console.log(typeof year)
console.log(typeof null)

/* 7 Data Types in JavaScript
1. number (floating point, decimal)
2. string
3. boolean 
4.undefined (variable declared but has no value)
5. null - empty value
6.symbol
7.bigint
*/

/**
 Basic Operators﻿

If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
 */
let continent = "Asia";
let country = "India";
let language = "mandarin"
let population = 130;
console.log(population / 2);

population++;
console.log(population)

let FinlandPopulation = 6;
console.log(population > FinlandPopulation);

let avgPopulation = 33;
console.log(population < avgPopulation);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description)

/** Statements﻿
If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.*/

if (population > avgPopulation) {
    let diff = population - avgPopulation
    console.log(`${country}'s population is ${diff} million above average`)
} else {
    diff = avgPopulation - population
    console.log(`${country}'s population is ${diff} million below average`)
}

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// 5 falsy values are : 0 , '', undefined , null, NaN

// Equality Operators: == vs. ===

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No Borders")
// }

const isIsland = false

if (!isIsland && population < 50 && language === "English") {
    console.log("Sarah wants to live here!");
} else {
    console.log("Sarah does not like this country!")
}

switch (language) {
    case "chinese":
    case "mandarin":
        console.log('MOST number of native speakers!');
        break;
    case "spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "english":
        console.log('3rd place');
        break;
    case "hindi":
        console.log('Number 4');
        break;
    case "arabic":
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

const ternery = (population > 33) ? console.log("India's population is above average") : console.log("India's population is below average");