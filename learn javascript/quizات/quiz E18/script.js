let popup = document.querySelector("[class='popup']")
setTimeout(function () {
    popup.style.display = "block"
}, 5000);

let close = document.querySelector("[class='close']")
close.onclick = function () {
    popup.style.display = "none"
}

let counter = document.querySelector("[class='counter']")

function counting(){
    counter.innerHTML -= 1
    
    if(counter.innerHTML === "5"){
        window.open("https://www.google.com/","_blank","width=500, height=500")
    }
    if(counter.innerHTML === "0"){
        clearInterval(countdown);
        window.open("https://www.google.com/")
    }
}
let countdown = setInterval(counting, 1000)