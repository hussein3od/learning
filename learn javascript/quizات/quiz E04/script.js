// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(Math.trunc(100000.55)); // 100000
console.log(Math.floor(100000.55)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(parseInt(100000)); // 100000
console.log((100000.44).toFixed(0)); // 100000
console.log(Math.round(100000.44)); // 100000
console.log(50000 + 50000); // 100000
console.log(10 ** 5); // 100000
console.log((100000).toString()); // 100000
console.log(-Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER + Number.MIN_SAFE_INTEGER)

let myVar = "100.56789 Views";

console.log(parseInt(myVar));
console.log(parseFloat(myVar));

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log((flt).toFixed(0)); // 10
console.log(parseInt(flt)); // 10

console.log(Math.floor(Math.random() * 5))
console.log(Math.ceil(Math.log10(Number.MAX_SAFE_INTEGER)))