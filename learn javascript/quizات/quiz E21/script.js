// Needed Output
let setOfNumbers = new Set([10])

setOfNumbers.add(20).add(setOfNumbers.size)

console.log(setOfNumbers)
console.log(setOfNumbers.size-1)

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set (myFriends.sort()))
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map()
myMap.set("username", "Osama")
myMap.set("role", "Admin")
myMap.set('country', 'Egypt')
console.log(myMap)
console.log(myMap.size)
console.log(myMap.has("role"))
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().join(""))
// Needed Output
123

let theName = "Elzero";

console.log([...theName])
console.log(new Set(theName));
console.log(theName.split(""))
console.log(Array.from(theName))
console.log(Object.assign([], theName))

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// chars.sort()
// chars.copyWithin(0, 3, 6)
// console.log(chars)
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// chars.sort();
// chars.copyWithin(0,4,8)
// console.log(chars)
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

chars.copyWithin(2)
console.log(chars)

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo])
console.log(numsOne.concat(numsTwo))
numsOne.push(...numsTwo)
console.log(numsOne)
// Needed Output
// [1, 2, 3, 4, 5, 6]

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1) * [...n1, ...n2].length))

// Needed Output
210