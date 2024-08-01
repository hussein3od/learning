// // let myNumbers = [1, 2, 3, 4, 5];

// // let [a, , , ,e] = myNumbers

// // console.log(a * e); // 5


// // let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // let [a2, b2, c2, [d2, e2 ,[f2, g2]]] = mySkills

// // console.log(`My Skills: ${a2}, ${b2}, ${c2}, ${d2}, ${e2}, ${f2}, ${g2}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let [, a, b, c] = arr3.concat(arr1);

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
// };

// let {age: a, working: w, country: c, hobbies: [h1, , h3]} = member

// console.log(`My Age Is ${a} And Iam${w === false ? " Not":""} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
    },
    Origin: "30 USD",
    },
};

let {title: t} = game
let {developer: d} = game
let {Origin: or} = game

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD