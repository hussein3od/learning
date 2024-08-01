let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let string = mix.filter(function (ele) {
    return isNaN(parseInt(ele))
}).join("")

console.log(string)

// Elzero

let myString = "EElllzzzzzzzeroo";

let elzero = myString.split("").filter(function (ele, index) {
    return myString.indexOf(ele) === index
}).join("")

console.log(elzero)
// Elzero

let myArray = ["E", "l", "z","e", "r", "o"];

let elzero2 = myArray.reduce(function (first, second) {
    return first + second
})

console.log(elzero2)

// Elzero

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let jusNums = numsAndStrings.filter(function (ele) {
    return ! isNaN(parseInt(ele))
}).map(function (lel) {
    return -lel
})

console.log(jusNums)

// [-1, -10, 10, 20, -5, -3]

let nums = [2, 12, 11, 5, 10, 1, 99];

let mynums = nums.reduce(function (acc, current) {
    return current % 2 !== 0 ? acc + current : acc * current
})

console.log(mynums)

// 500