let num = 9;

if(num < 10){
    console.log(`00${num}`)
}else if(num < 100 && num >= 10){
    console.log(`0${num}`)
}else{
    console.log(num)
}
let num1 = 9
let str = "9"
let str2 = "20"

if (num1 == str){
    console.log(`{num1} is The Same Value As {str}`)
}else{
    console.log(`{num1} is not The Same Value As {str}`)
}
if (num1 == str && num1 !== str){
    console.log(`{num1} is The Same Value As {str} But Nut The Same Type`)
}
if (num1 != str2 && num1 !== str2){
    console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`)
}
if (str != str2 && typeof str == typeof str2){
    console.log(`{str} Is The Same Type As {str2} Bot Not The Same Value`)
}

let num2 = 10;
let num3 = 30;
let num4 = "30"

if (num4 > num2 && num4 !== num3){
    console.log(`"30" Is Larger Than 10 And Type string Not The Same Type As number`)
}else if (num4 > num2 && num4 == num3 && num4 !== num3){
    console.log(`"30" Is Lareger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number`)
}else if(num4 != num2 && num4 !== num2 && num4 != num3 && num4 !== num3){
    console.log(`"{num3} Value And Type Is Not The same As {num1} And Type Is Not The Same As {num2}"`)
}
