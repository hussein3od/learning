console.log(100 == "100")
console.log(typeof 100 == typeof 1000)
console.log(typeof 110 + 100 != typeof 10 + 20)
console.log(-10 == "-10")
console.log(+ -50 !== +"-40")
console.log(+ 10 !== -"-40")
console.log(+ "10" == 10)
console.log(+ 20 !== false)

let num1 = 10;
let num2 = 20;

console.log(typeof num1 == typeof num2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.log(typeof num1.toString != typeof num2);
console.log(num2 !== false);
console.log(-num1 != num2);

let a = 20;
let b = 30;
let c = 10;

console.log(a == b && a !== c || a != b);
console.log(a != b != a != c );
console.log(!(a == b) && !(a == b) && !(a == c) && !(a == c))