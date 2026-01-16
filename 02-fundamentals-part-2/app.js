// Strict mode

// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// const interface = 123;
// const private = "name"
// console.log(private);

// Function
function logger() {
    console.log("MY name is Hashim");
}
logger();
logger();
logger();

function fruitProcessors(apple, orange) {
    console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}
const appleJuice = fruitProcessors(5, 0);
console.log(appleJuice);
console.log(fruitProcessors(2, 4));

// Task 1: The Bio Data Machine
//     Ek function banao describeMySelf jo 3 inputs (parameters) le: name, age, aur city.
//     Wo function ye string return kare: "Mera naam [name] hai, meri umar [age] saal hai aur main [city] mein rehta hoon."
//     Is function ko 2 alag-alag data ke saath call karo aur results ko console mein dikhao.

function describeMySelf(name, age, city) {
    const myDescription = `Mera naame ${name} hai, meri umar ${age} saal hai aur mein ${city} mein rehta hun.`;
    return myDescription;
}
const myData = describeMySelf("Hashim", 23, "Peshawar");
console.log(myData);

// Task 2: Calculator Machine
//     Ek function banao calcAge jo birthYear le.
//     Wo aaj ke saal (2026) se birthYear ko minus karke umar (age) return kare.
//     Bonus: Ek aur function banao yearsUntilRetirement jo birthYear le, pehle wala calcAge function use karke age nikale, aur phir bataye ke 65 saal ki retirement mein kitne saal baaki hain.
function calcAge(birthYear) {
    const currentYear = 2026;
    const myAge = currentYear - birthYear;
    return myAge;
}
const age = calcAge(2002);
console.log(age);

// Task 3: Simple Math
//     Ek function banao multiplyNumbers jo do numbers le aur unka product (zarab) return kare.
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
let result = multiplyNumbers(3, 5);
console.log(result);