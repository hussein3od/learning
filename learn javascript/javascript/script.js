'use strict'
window.document.title = "JavaScript"
// window.alert("welcome");
document.write("<h1>hello</h1>");
console.log("%chahaha", "color: green");
console.error("hahaha");
let firstName = "hussein";
let secondName = "abbas";
console.log(firstName +" "+ secondName);

//challenge

let theTitle = "Elzero"
let theDescription = "Elzero Web School"
let theDate = `25/10`;
let card = `
    <div>
        <h3>Hello ${theTitle}</h3>
        <p>${theDescription}</p>
        <span>${theDate}</span>
    </div>`;

document.write(card.repeat(4))
console.log(+"-100")
console.log(-"100");
document.write(`<hr>`)
//challenge 

let a = "10";
let b = 20;
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/*
    [++a] [+] [+] [b++] [++a] [+] [++a] [+]
    [++a]
    value: 11
    explain: preincrement
    [+]
    explain: addoperator
    [+]
    explain: unary plus
    [b++]
    value: 20
    explain: psotincrement
    [+]
    explain: addoperator
    [+]
    explain: unary plus
    [c++]
    value: 80
    explain: preincrement
    [-]
    explain: minus operator
    [+]
    explain: unary plus
    [a++]
    value: 10
    explain: postincrement
*/

let d = "-100"
let e = "20"
let f = 30
let g = true;

console.log(-d * +e);
console.log(++g * ++e + ++f + -d);

console.log((100).toString())
console.log((100.55555).toFixed(2));
console.log(parseInt("100.500 hussein"));
console.log(parseFloat("100.500 hussein"));
console.log(Math.round(99.4));
console.log(Math.round(99.5));
console.log(Math.ceil(99.2));
console.log(Math.floor(99.8));
console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));
//Returns the integral part
console.log(Math.trunc(99.5))

//chalenge

let a2 = 1_00
let b2 = 2_00.5
let c2 = 1e2
let d2 = 2.4

console.log(Math.trunc(Math.min(a2, b2, c2, d2)));
console.log(Math.pow(a2, Math.trunc(d2)));
console.log(Math.trunc(d2));
console.log(Math.floor(d2));
console.log(Math.round(d2));
console.log(parseInt(d2));
console.log((Math.trunc(b2) / Math.ceil(d2)).toFixed(2))
console.log(Number(Math.round(Math.floor(b2) / Math.ceil(d2)).toFixed(0)));

let string = "  Elzero Web School  ";

console.log(string.trim());
console.log(string.length);
console.log(string.charAt(4).toUpperCase());
console.log(string.indexOf("S"));
console.log(string.slice(4, 8));
console.log(string.substring(8, 4));
console.log(string.substr(13, 6))
console.log(string.split(" ", 3))
console.log(string.includes("School", 10))
console.log(string.startsWith("z", 4))

//chalenge

let Elzero = "Elzero web school";

console.log(Elzero.charAt(2).toUpperCase() + Elzero.slice(3, 6));
console.log(Elzero.charAt(13).toUpperCase().repeat(8))
console.log(Elzero.split(" ", 1))
console.log(Elzero.substr(0, 7) + Elzero.substr(11))
console.log(Elzero.charAt(0).toLowerCase() + Elzero.slice(1, length - 1).toUpperCase() + Elzero.charAt(Elzero.length - 1).toLowerCase())

let number = 1189

let res = 0

while(number > 0) {
    res += number % 10 
    number = Math.floor(number / 10)
}
console.log(res)

let price = 100;
let discount = true;
let country = "egypt";

if (discount === true && country === "iraq") {
    price -= 30
} else if (country === "egypt"){
    price -= 40
}else {
    price -= 10
}

console.log(price);

let theName = "hussein";
let theGender = "male"

let result = theGender === "male" ? "Mr" : "Mrs"

console.log(`Hello ${result} ${theName}`)

//chalenge

let x = 10;

x < 10 
? console.log(10)
: x >= 10 && x <= 40
? console.log ("10 To 40")
: x > 40
? console.log(">40")
:console.log("Unkown")

let st = "Elzero Web School"

if((st.length + st.length).toString() === "34") {
    console.log("Good")
}
if (st.charAt(st.indexOf("W")) === ("W")){
    console.log("Good")
}
if (st.length !== "string"){
    console.log("Good")
}
if (st.slice(0, 6).repeat(2) === "ElzeroElzero"){
    console.log("Good")
}

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
    break;
    case 2:
        console.log("Tusday")
    break;
    case 3:
        console.log("Wednesday")
    break;
    case 4:
        console.log("Thrusday")
    break;
    case 5:
        console.log("Friday")
    break;
    case 6:
        console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
    break;
    default:
        console.log("Unknown Day")
}

//challenge

let job = "Manager"
let salary = 0

switch (job){
    case "Manager":
        salary = 8000;
    break;
    case "IT":
    case "Support":
        salary = 6000;
    break;
    case "Developer":
    case "Designer":
        salary = 7000;
    break;
    default:
        salary = 4000
}

console.log(salary)

let holidays = 0;
let mony = 0;

if (holidays === 0){
    mony = 5000
}else if (holidays === 1 || holidays === 2){
    mony = 3000
}else if (holidays === 3){
    mony = 2000
}else if (holidays === 4){
    mony = 1000
}else if (holidays === 5){
    mony = 0;
}else {
    mony = 0
}
console.log(`Mu Mony Is ${mony}`);

let myfrinds = ["hussein","karar","sajad","mohamed"]

myfrinds[myfrinds.length] = "ahamed"
console.log(myfrinds)
myfrinds.length = 3
console.log(myfrinds)
myfrinds.unshift("Ali", "osama");
myfrinds.push("sara", "eman")
console.log(myfrinds)
let first = myfrinds.shift()
console.log(`the first name is ${first}`)
let last = myfrinds.pop()
console.log(`the last name is ${last}`)
console.log(myfrinds.includes("hussein"))
console.log(myfrinds.join("|"))
myfrinds[2] = ["karar", "hussam"]
console.log(myfrinds)

//challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"]

my.push("Osama");
my = my.reverse()
my = my.slice(counter)

console.log(my)

my.slice(zero, counter)
my.shift()
my.pop()
console.log(my)

my.shift()
my.pop();
my.unshift("Elzero")
console.log(my)

console.log(my[zero].slice(my[zero].indexOf("r"),my[zero].indexOf("o")) + my[zero].slice(my[zero].indexOf("o")).toUpperCase())

let testarry = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", "Ali", "Sara", 5, 6];
let onlyNames = []
let onlyNumbers = []

console.log(testarry)

for(let i = 0; i < testarry.length; i++){
    if(typeof testarry[i] === "string"){
        onlyNames.push(testarry[i])
    }
    if(testarry[i] === "Sayed"){
        break;
    }
}
console.log(onlyNames)

for(let i = 0; i < testarry.length; i++){
    if(typeof testarry[i] === "number"){
        onlyNumbers.push(testarry[i])
    }
}
console.log(onlyNumbers)

//challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
let coun = 0
let rot = 0;
let gg = 1

for (rot = 0; rot < myAdmins.length; rot++){
    if (myAdmins[rot] === "Stop"){
        break;
    }
}
document.write(`We Have ${rot} Admins <hr>`)
for(let c = 0; c < myAdmins.length; c ++){
    if (myAdmins[c] === "Stop"){
        break;
    }
    document.write(`<p>The Admin For Team ${c + 1} Is ${myAdmins[c]}</p>`)
    document.write(`<h3>Team Members:</h3>`)
    for(let coun = 0; coun < myEmployees.length; coun++)
        if(myEmployees[coun].charAt(0) === myAdmins[c].charAt(0)){
            document.write(`<p>- ${gg++} ${myEmployees[coun]}</p>`)
        }
        gg = 1
        document.write(`<hr>`)
    }
function sayHello (userName = "Unknown", age = "Unknown"){
    if (age < 20){
        console.error(`Hello ${userName} You Can't See The Content Because Your Age Is Under 20`)
    }else{
        console.log(`Hello ${userName} Your Age Is ${age}`)
    }
}
sayHello("Hussein", 30)
sayHello("Ahmed", 29)
sayHello("Osama", 28)
sayHello("Mohamed", 19)
sayHello("Hussam", 18)

function Years (start, end){
    for(let k = start; k <= end; k++){
        console.log(k)
        if(k === 2020){
            return `Interruptting`
        }
    }
}
Years(2000, 2024)

function calc(...numbers){
    let reso = 0;
    for(let z = 0; z < numbers.length; z++){
        reso += numbers[z]
    }
    return reso
}
calc(10, 20, 30)
console.log(calc(10, 20, 30))

let names = ""
let age = ""
let Status = ""

function showDetails (a, b, c){
    if(typeof a === "string"){
        names = a
    }else if(typeof b === "string"){
        names = b
    }else if(typeof c === "string"){
        names = c
    }
    if(typeof a === "number"){
        age = a
    }else if(typeof b === "number"){
        age = b
    }else if(typeof c === "number"){
        age = c
    }
    if (typeof a === "boolean"){
        Status = a
    }else if(typeof b === "boolean"){
        Status = b
    }else if(typeof c === "boolean"){
        Status = c
    }
    if (Status === true){
        console.log(`Hello ${names}, Your Age Is ${age}, You Are Available For Hire`)
    }else{
        console.log(`Hello ${names}, Your Age Is ${age}, You Are Not Available For Hire`)
    }
}
showDetails("Osama", 38, true)
showDetails(38, "Osama", true)
showDetails(true, 38, "Osama")
showDetails(false, "Osama", 38)

let mynames = (...nams) => `String [${nams.join("][")}] => Done !`
console.log(mynames("Osama", "Mohamed", "Ali", "Ibrahim"));

let myNumbers = [20, 50, 10, 60]
let coco = (one, two, ...three) => one + two + +three

console.log(coco(10, 20, 50))

let map = "el12ze34ro";
let filter = [11, 2, 5, 20, 16, 13]

let justString = map.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : ""
}).join("")

console.log(justString)

let evenNumbers = filter.filter(function (ele) {
    return ele % 2 === 0
})

console.log(evenNumbers)

let mix = "A13BS2ZX"

let mixed = mix.split("").map(function (ele){
    return !isNaN(parseInt(ele)) ? ele * ele : ""
}).join("")
console.log(mixed)

// chalenge

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";

let solution = myString.split(",").filter(function (ele) {
    return isNaN(parseInt(ele))
}).map(function (ele) {
    return ele === "_" ? " " : ele
}).join("")

console.log(solution)

let myVar = "Age"

let user = {
    SayHello: function () {
        return `Hello`
    },
    "The Name": "Hussein",
    Age: 25
}
console.log(user.SayHello())
console.log(user["The Name"])
console.log(user[myVar])

let myObject = new Object({
    Name: "Hussein",
    age: 20,
    sayHello: function() {
        return `Hello`
    }
})

console.log(myObject.sayHello())
console.log(myObject.Name)
console.log(myObject.age)

let obj = {
    age: 20,
    doubleAge: function () {
        return this.age * 2
    }
}
console.log(obj.doubleAge())

let copyObj = Object.create(obj)

copyObj.age = 30;

console.log(copyObj.doubleAge())

let button = document.querySelector(".click");

button.onclick = function () {
    button.classList.add("special");
    button.textContent = "ههههههههه"
    return button
}
button.onblur = function () {
    button.style.transition = "1s"
    button.classList.remove("special");
}
button.oncontextmenu = function () {
    button.textContent = "oncontextmenu"
}
button.onmouseenter = function () {
    console.log("onmouseenter")
}
button.onmouseleave = function () {
    console.log("onmouseleave")
}
for(let i = 0; i < 10; i++){
let myDiv = document.createElement("Div");
let myHiddeing = document.createElement("h3");
let myParagraph = document.createElement("p");


let myHiddeingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

myHiddeing.appendChild(myHiddeingText)
myParagraph.appendChild(myParagraphText)
myDiv.appendChild(myHiddeing)
myDiv.appendChild(myParagraph)
myDiv.className = "Product";
document.body.appendChild(myDiv);
console.log(myDiv)
}
// window.onscroll = function () {
//     console.log("Scroll")
// }

let userInput = document.querySelector("[name='username']")
let ageInput = document.querySelector("[name='agename']")

document.forms[0].onsubmit = function (event) {
    let userValid = false;
    let ageValid = false;
    if(userInput.value.length <= 10 && userInput.value === ""){
        userValid = true;
    }
    if(userInput.value === ""){
        ageValid = true;
    }
    if (userValid === false || ageValid === false){
        event.preventDefault()
    }
}

let close = document.querySelector("[class= 'close']")

close.onclick = function () {
    let confirmMsg = confirm("Are You Sure?")
    if(confirmMsg === true){
        close.parentElement.remove()
    }else{
        close.parentElement.add()
    }
}

// chalenge

let header = document.createElement("header")
header.style.cssText = "display: flex; justify-content: space-between; padding: 15px"
document.body.appendChild(header)

let logo = document.createElement("h2");
logo.innerHTML = "Elzero"
logo.style.color = "green"
header.append(logo)

let list = document.createElement("ul")
list.style.cssText = "list-style: none; display: flex; padding: 10px; gap: 15px; font-size: 18px"
header.append(list)

let points = ["Home", "About", "sirvice", "Contact"]

for(let v = 0; v < points.length; v++){
    let li = document.createElement("li")
    li.innerHTML = `${points[v]}`
    list.append(li)
}

let content = document.createElement("div")
content.style.cssText = "display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background-color: #ddd; padding: 20px"
content.classList.add("content")
document.body.append(content)

for(let m = 1; m <= 15; m++){
    let Product = document.createElement("div");
    let numberProduct = document.createElement("p")
    let nodeProduct = document.createElement("p")
    nodeProduct.innerHTML = "Product";
    nodeProduct.style.cssText = "color: #8d91a3; margin-top: 0"
    Product.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #fff; border-radius: 5px; padding: 25px";
    numberProduct.style.cssText = "box-sizing: border-box; font-weight: bold; font-size: 20px; margin-bottom: 0";
    numberProduct.innerHTML = `${m}`
    Product.append(numberProduct)
    Product.append(nodeProduct)
    content.append(Product)
}

let footer = document.createElement("footer");
document.body.append(footer)
footer.innerHTML = "CopyRight 2021";
footer.style.cssText = "color: white; background-color: #135d3c; padding: 20px 0; text-align: center; font-size: 24px"

let div = document.createElement("div");
div.innerHTML = "5"
document.body.appendChild(div)

function countdown () {
    div.innerHTML -= 1;
    if(div.innerHTML === "0"){
        clearInterval(counting)
    }
}
let counting = setInterval(countdown, 1000)

// let myWindow = window.open("https://www.google.com/","_blank","width=500, height=500")
// setTimeout(function () {
//     myWindow
// }, 2000)
// setTimeout(function () {
//     myWindow.close()
// }, 3000)

let Previous = document.querySelector("[class='Previous']")

Previous.onclick = function () {
    history.go(-1)
}

window.localStorage.setItem("backgroundColor", "white")

document.body.style.backgroundColor = window.localStorage.getItem("backgroundColor")

//chalenge

let input = document.querySelector(".input")
let submit = document.querySelector(".add")
let tasksDiv = document.querySelector(".tasks")
let arrayOfTasks = []

if(localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}

getDataFromLocalStrage()

submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value = ""
    }
};

tasksDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains("del")) {
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"))
        e.target.parentElement.remove()
    }
})

function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    arrayOfTasks.push(task);
    addElementsToPageFrom(arrayOfTasks)
    addDataToLoacalStorageFrom(arrayOfTasks)
}
function addElementsToPageFrom(arrayOfTasks){
    tasksDiv.innerHTML = "";
    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        if(task.completed) {
            div.className = "task done"
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span);
        tasksDiv.appendChild(div)
    });
}

function addDataToLoacalStorageFrom(arrayOfTasks){
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks))
}

function getDataFromLocalStrage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks)
    }
}

function deleteTaskWith(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLoacalStorageFrom(arrayOfTasks)
}
let destrouction = ["Ahmed", "Sayed", "Ali", "Maysa"];

let [ab, bb,, db, eb = "Hussein"] = destrouction;

console.log(ab)
console.log(bb)
console.log(db)
console.log(eb)

let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] }
];

if(chosen === 1){
    let {title: t1, age: a1, available: v1, skills: [, Css]} = myFriends[0]
    console.log(t1)
    console.log(a1)
        if(v1 === true){
            console.log("Avalibale")
        }else{
            console.log("Not Avalibale")
        }
    console.log(Css)
    }
    if(chosen === 2){
    let {title: t1, age: a1, available: v1, skills: [, Css]} = myFriends[1]
    console.log(t1)
    console.log(a1)
        if(v1 === true){
            console.log("Avalibale")
        }else{
            console.log("Not Avalibale")
        }
    console.log(Css)
    }
    if(chosen === 3){
    let {title: t1, age: a1, available: v1, skills: [, Css]} = myFriends[2]
    console.log(t1)
    console.log(a1)
        if(v1 === true){
            console.log("Avalibale")
        }else{
            console.log("Not Avalibale")
        }
    console.log(Css)
}

let myUniqueData = new Set([1,1,1,2,3,4])
myUniqueData.delete(2)
myUniqueData.add(5)

console.log(myUniqueData)

let myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(1, -2,-1)

console.log(myArray)

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let range = {
    min: 10,
    max: 20
}

let checkRange = nums.some(function (e) {
    return e >= this.min && e <= this.max
}, range)

console.log(checkRange)

let str = "Hello Elzero Web Shool I Love elzero"

let ragex = /(elzero|web)/ig

console.log(str.match(ragex))

let numbers = "12345678910"
let numsRe = /[0-3]/g;
console.log(numbers.match(numsRe))

let notNumbers = "12345678910"
let notNumsRe = /[^0-3]/g;
console.log(notNumbers.match(notNumsRe))

let emales = "O@@@s.com Os@s.com m@e.org n@os.net d@f.net O@s.net"

let emalesRe = /\w@\w.(com|net)/ig

console.log(emales.match(emalesRe))

let sapmNames = "Spam1 spam3 testSpam nmeSpamtest 22spam";
let re = /\bspam|spam\b/ig;
console.log(sapmNames.match(re))

let url = "https://google.com http://www.website.net"
let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/ig
console.log(url.match(urlRe))

document.getElementById("register").onsubmit = function() {
    let text = document.getElementById("phone").value;
    let re = /\(\d{4}\)\s\d{3}-\d{4}/
    let validationResult = re.test(text)
    if(validationResult === false){
        return false
    }
    return true
}

class User {
    static count = 0;
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary + 1000;
        User.count++
    }
    static members() {
        return `${this.count} Members`
    }
}

class Admin extends User {
    constructor(id, username, salary, permission){
        super(id, username, salary)
        this.p = permission
    }
}

let userOne = new User(100, "Elzero", 5000)
let userTwo = new User(101, "Hassan", 6000)
let userThree = new User(102, "Sayed", 7000)
let AdminOne = new Admin(103, "Hussein", 8000, 2)

console.log(userOne.i)
console.log(userOne.u)
console.log(userOne.s)

console.log(userTwo.i)
console.log(userTwo.u)
console.log(userTwo.s)

console.log(userThree.i)
console.log(userThree.u)
console.log(userThree.s)

console.log(AdminOne.i)
console.log(AdminOne.u)
console.log(AdminOne.s)
console.log(AdminOne.p)
console.log(User.members())

let dateNow = new Date();

console.log(dateNow)

let mlSecound = Date.now()
console.log(`${mlSecound.toFixed(1)} ML Secound`)

let secound = mlSecound / 1000
console.log(`${secound.toFixed(1)} Secound`)

let minute = secound / 60
console.log(`${minute.toFixed(1)} minute`)

let hour = minute / 60
console.log(`${hour.toFixed(1)} Hour`)

let Day = hour / 24
console.log(`${Day.toFixed(1)} Day`)

let year = Day / 365
console.log(`${year.toFixed(1)} year`)

function* generateNums(){
    yield 1
    yield 2
    yield 3
}
function* generateLetters(){
    yield "A"
    yield "B"
    yield "C"
}
function* generateAll(){
    yield* generateNums()
    yield* generateLetters()
    yield* [4, 5, 6]
}

let generator = generateAll()

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}'
console.log(typeof myJsonObjectFromServer)
console.log(myJsonObjectFromServer)

let myJsObject = JSON.parse(myJsonObjectFromServer);

myJsObject["Username"] = "Elzero";
myJsObject["Age"] =  40;

let myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(myJsonObjectToServer)

let myPromise = new Promise((resolve, reject) => {
    let connect = true;
    if(connect){
        resolve("Connection Established");
    }else{
        reject(Error("Connection Failled"))
    }
})

console.log(myPromise);

myPromise.then(
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
)