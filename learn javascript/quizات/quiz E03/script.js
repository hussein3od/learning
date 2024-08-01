console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num - true + num + true); // 6

// Soultion Three
console.log(num * num / num + num); // 6

// Soultion Four
console.log(++num * --num / --num); // 6

// Solution Five
console.log(num + num + num); // 6

// Solution Six
console.log(++num + num); // 6

let numTwo = 10;

// Solution One
console.log(numTwo + numTwo); // 20

// Solution Two
console.log(numTwo * numTwo / numTwo + numTwo); // 20

// Soultion Three
console.log(numTwo + --numTwo + numTwo - --numTwo); // 20

// Soultion Four
console.log(++numTwo + ++numTwo + ++numTwo - --numTwo); // 20

let points = 10;

// Write Your Code Here

console.log(points + points / points + points / points + points / points); // 13

// Write Your Code Here

console.log(points - points / points - points / points); // 8;