let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/

console.log(ipRe.test(ip))

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /(\bOs\d*?O\b)/ig;
console.log(specialNames.match(specialNamesRe))
// Output
// ['Os10O', 'OsO', 'Os100O']

let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g
console.log(phoneRe.test(phone))

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/* ? => s Exists Or Not */
/* \/\/ => scape to // */
/* (?:[-\w]+\.) => www Exists Or Not*/
/*([-\w]+)\.\w+ => word.word */
/* \w+ => to get word */

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dataRe = /\d{2}(\s|\/)(-\s)?\d{2}(\/|\s-\s|\s)\d{2,4}/g

console.log(date1.match(dataRe)); // "25/10/1982"
console.log(date2.match(dataRe)); // "25 - 10 - 1982"
console.log(date3.match(dataRe)); // "25 10 1982"
console.log(date4.match(dataRe)); // "25 10 82"

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let urlRe = /(https?)?(:)?(\/\/)?(www.)?(.)?\w+.\w+(:\d+\/\w+.*)?/ig

console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));