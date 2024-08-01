let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end; i += start){
    if(i === exclude){
        continue;
    }
    console.log(i)
}

/* Output
10
20
30
50
60
70
80
90
100
*/
let start2 = 10;
let end2 = 0;
let stop = 3;

for(let j = start2; j > end2; j--){
    if (j >= 10){
        console.log(`${j}`)
    }
    if (j < start2){
        console.log(`0${j}`)
    }
    if (j === stop){
        break;
    }
}

/* Output
10
09
08
07
06
05
04
03
*/

let start3 = 1;
let end3 = 6;
let breaker = 2;

for(let k = start3; k <= end3; k++){
    console.log(k)
    for(let l = breaker; l < end3; l += breaker){
        console.log(`--${l}`)
    }
}

/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

let index = 10;
let jump = 2;

for (let m = 10; m > 2; m -= 2) {
    console.log(m)
}

// Output
10
8
6
4

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let x = 0; x < friends.length; x++){
    if (friends[x].startsWith(letter.toUpperCase())){
        continue;
    }
    console.log(`${x} => ${friends[x]}`)
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

let start4 = 0;
let swappedName = "elZerO";
let res = ""

for(let b = start4; b < swappedName.length; b++){
    if(swappedName[b] === swappedName[b].toUpperCase()){
        res += swappedName[b].toLowerCase()
    }else{
        res += swappedName[b].toUpperCase()
    }
}
console.log(res)

// Output
"ELzERo"

let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let v = start5; v < mix.length; v++){
    if (mix[v] === mix.indexOf(2)){
        continue;
    }
    if(typeof mix[v] === "string"){
        continue;
    }
    console.log(mix[v])
}

// Output
2
3
4

