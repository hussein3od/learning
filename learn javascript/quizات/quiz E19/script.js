let font = document.querySelector("#fonts")
let color = document.querySelector("#colors")
let size = document.querySelector("#sizes")

font.onchange = function(){
    window.localStorage.setItem("font", font.value)
    document.body.style.fontFamily = font.value
}
color.onchange = function(){
    window.localStorage.setItem("color", color.value)
    document.body.style.color = color.value
}
size.onchange = function(){
    window.localStorage.setItem("size", size.value)
    document.body.style.fontSize = size.value
}
document.body.style.fontFamily = window.localStorage.getItem("font")
document.body.style.color = window.localStorage.getItem("color")
document.body.style.fontSize = window.localStorage.getItem("size")

font.value = window.localStorage.getItem("font")
color.value = window.localStorage.getItem("color")
size.value = window.localStorage.getItem("size")

let Name = document.querySelector(".name")

Name.onblur = function () {
    window.localStorage.setItem("input-name", this.value)
    Name.value = window.localStorage.getItem("input-name")
}
