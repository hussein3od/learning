function getDetails(zName, zAge, zCountry) {
    return `Hello ${zName.slice(0, zName.indexOf(" ") + 1) + zName.slice(zName.indexOf(" ") +1, zName.indexOf(" ") +2).toUpperCase() + "."}, Your Age Is ${parseFloat(zAge)}, You Live In ${zCountry.slice(0,2).toUpperCase()}`
    function namePattern(zName) {
        return namePattern()
    }
    function ageWithMessage(zAge) {
        age = zAge;
        return zAge
    }
    function countryTwoLetters(zCountry) {
        country = zCountry
    }
    function fullDetails() {
        namePattern() + ageWithMessage() + countryTwoLetters()
    }
        return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

itsMe = () => `Iam A Normal Function`

console.log(itsMe()); // Iam A Normal Function

let urlCreate= (protocol, web, tld) => `${protocol}://www.${web}.${tld}`
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

function specialMix(...data) {
    let res = 0
    for(let i = 0; i < data.length; i++){
        if(isNaN(parseInt(data[i])) === false){
            res += parseInt(data[i])
        }
    }
    if (res === 0){
        return `All Is Strings`
    }
    return res
}

console.log(specialMix(10, 20, 30))
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings