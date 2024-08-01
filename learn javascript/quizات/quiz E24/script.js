let date = new Date();
let birth = new Date("April 11, 2009")
let dateDiff = date - birth;

console.log(`${Math.round(dateDiff / 1000)} Seconds`)
console.log(`${Math.round(dateDiff / 1000 / 60)} Minutes`)
console.log(`${Math.round(dateDiff / 1000 / 60 / 60)} Hours`)
console.log(`${Math.round(dateDiff / 1000 / 60 / 60 / 24)} Days`)
console.log(`${Math.round(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months`)
console.log(`${Math.round(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`)

console.log("#".repeat(30))

let myDate =new Date();

myDate.setTime(0)
myDate.setFullYear(1980)
myDate.setHours(0)
myDate.setSeconds(1)

console.log(myDate)

console.log("#".repeat(30))

let Months = ["January", "February", "March", "April", "May", "June", "Julay", "August", "September","October", "November", "Desember"]
let dateNow = new Date()

console.log(dateNow)

dateNow.setDate(0)
console.log(`Previous Month Is ${Months[dateNow.getMonth()]} And Last Day Is ${dateNow.getDate()}`)

console.log("#".repeat(30))

let methodOne = new Date("April 11 2009")
console.log(methodOne)
let methodTwo = new Date("April/11/2009")
console.log(methodTwo)
let methodThree = new Date("April-11-2009")
console.log(methodThree)

console.log("#".repeat(30))

// const t0 = performance.now();
// for(let i = 0; i < 10000; i++){
//     console.log(i)
// }
// const t1 = performance.now();
// console.log(`Loop Took ${(t1 - t0).toFixed(0)} Milliseconds.`)

console.log("#".repeat(30))

function* gen() {
    let index = 14;
    let num = 140;
    let result = index + num
    while(true) {
        yield result;
        result += num += 200
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("#".repeat(30))

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
    yield* new Set(genNumbers())
    yield* new Set(genLetters())
}

let generator2 = genAll();

console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next()); // {value: 2, done: false}
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: 4, done: false}
console.log(generator2.next()); // {value: 5, done: false}
console.log(generator2.next()); // {value: "A", done: false}
console.log(generator2.next()); // {value: "B", done: false}
console.log(generator2.next()); // {value: "C", done: false}
console.log(generator2.next()); // {value: "D", done: false}
