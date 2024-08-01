let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice(0, 3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(arrOne.concat(arrTwo).sort().reverse())

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words[words[0].indexOf("o")].indexOf("c")][0].slice(words[words[0].indexOf("o")].indexOf("c")).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(haystack.includes("JS")){
    console.log("Fond")
}
if(haystack[1] === "JS"){
    console.log("Fond")
}
if(haystack[haystack.indexOf("JS")] === "JS"){
    console.log("Fond")
}