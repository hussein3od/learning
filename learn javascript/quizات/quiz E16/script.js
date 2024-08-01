// // document.querySelectorAll("#elzero")[0]
// // document.body.childNodes[1]
// // document.getElementsByName("js")
// // document.body.firstElementChild
// // document.body.children[0]
// // document.querySelector("#elzero")
// // document.querySelector(".element")
// // document.querySelectorAll("div")
// // document.getElementsByTagName("div")
// // document.getElementById("elzero")
// // document.getElementsByClassName("element")
// // document.querySelector("#elzero")
// // document.querySelector(".element")
// // document.querySelector("[name='js']")
// // document.querySelector("div")

// let myImages = document.images;

// for(let i = 0; i < myImages.length; i++){
//     myImages[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myImages[i].alt = "Elzero"
// }

// let input = document.querySelector("input");
// let result = document.getElementsByClassName("result")[0];

// input.oninput = function() {
//     result.innerHTML = `${input.value} USD Dollar = ${(input.value *15.6).toFixed(2)} Egyption Pound`
// }

// let eleOne = document.querySelector(".one")
// let eleTwo = document.querySelector(".two")

// eleOne.title = eleOne.className
// eleTwo.title = eleTwo.className


// eleOne.textContent = eleOne.className
// eleTwo.textContent = `${eleTwo.className} ${eleTwo.attributes.length}`

// let images = document.querySelectorAll("img");

// for(let j = 0; j < images.length; j++){
//     if(images[j].hasAttribute("alt")){
//         images[j].alt = "old"
//     }else{
//         images[j].alt = "Elzero"
//     }
// }
let submit = document.querySelector("[name = 'create']")
let numberValue = document.querySelector("[name = 'elements']")
let textValue = document.querySelector("[name = 'texts']")
let selectValue = document.querySelector("[name = 'type']")
let result = document.getElementsByClassName("results")[0]

submit.onclick = function (event) {
    event.preventDefault()
    for(let j = 0; j < numberValue.value; j++){
        console.log(result)
        result.innerHTML += `<${selectValue.value}>${textValue.value}</${selectValue.value}>`
    }
}