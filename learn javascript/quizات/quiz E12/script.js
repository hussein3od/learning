function sayHello(theName, theGender = "") {
        if (theGender === "Male"){
            console.log(`Hello Mr ${theName}`)
        }else if(theGender === "Female"){
            console.log(`Hello Miss ${theName}`)
        }else {
            console.log(`Hello ${theName}`)
        }
    }

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined){
        console.log(`Second Number Not Found`)
    }
    if (typeof firstNum === "number" && typeof secondNum === "number" && operation === undefined){
        console.log(firstNum + secondNum)
    }
    if(typeof firstNum === "number" && typeof secondNum === "number" && operation === "add"){
        console.log(firstNum + secondNum)
    }else if(typeof firstNum === "number" && typeof secondNum === "number" && operation === "subtract"){
        console.log(firstNum - secondNum)
    }else if(typeof firstNum === "number" && typeof secondNum === "number" && operation === "multiply"){
        console.log(firstNum * secondNum)
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100){
        console.log("Age Out Of Range")
    }else{
        console.log(`Your age Is ${theAge}`)
        console.log(`The Months ${theAge * 12}`)
        console.log(`The Weeks ${theAge * 12 * 4}`)
        console.log(`The Days ${theAge * 12 * 4 * 7}`)
        console.log(`The Hours ${theAge * 12 * 4 * 7 * 24}`)
        console.log(`The minutes ${theAge * 12 * 4 * 7 * 24 * 60}`)
        console.log(`The secounds ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`)
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for(let i = startYear; i <= endYear; i++){
        document.write(`<option value = "${i}">${i}</option>`)
    }
    document.write(`</select>`)
    }
createSelectBox(2000, 2021);

function multiply(...nums){
    let result = 0
    for(let j = 0; j < nums.length; j++){
        if(typeof nums[j] === "string"){
            continue;
        }else{
            result = parseInt(nums[j - 1]) * parseInt(nums[j])
        }
    }
    return result
}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000