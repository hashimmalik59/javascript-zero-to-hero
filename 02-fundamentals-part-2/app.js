// Strict mode

// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// const interface = 123;
// const private = "name"
// console.log(private);

// Function
// function logger() {
//     console.log("MY name is Hashim");
// }
// logger();
// logger();
// logger();

// function fruitProcessors(apple, orange) {
//     console.log(apple, orange);
//     const juice = `Juice with ${apple} apples and ${orange} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessors(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessors(2, 4));

// Task 1: The Bio Data Machine
//     Ek function banao describeMySelf jo 3 inputs (parameters) le: name, age, aur city.
//     Wo function ye string return kare: "Mera naam [name] hai, meri umar [age] saal hai aur main [city] mein rehta hoon."
//     Is function ko 2 alag-alag data ke saath call karo aur results ko console mein dikhao.

// function describeMySelf(name, age, city) {
//     const myDescription = `Mera naame ${name} hai, meri umar ${age} saal hai aur mein ${city} mein rehta hun.`;
//     return myDescription;
// }
// const myData = describeMySelf("Hashim", 23, "Peshawar");
// console.log(myData);

// Task 2: Calculator Machine
//     Ek function banao calcAge jo birthYear le.
//     Wo aaj ke saal (2026) se birthYear ko minus karke umar (age) return kare.
//     Bonus: Ek aur function banao yearsUntilRetirement jo birthYear le, pehle wala calcAge function use karke age nikale, aur phir bataye ke 65 saal ki retirement mein kitne saal baaki hain.
// function calcAge(birthYear) {
//     const currentYear = 2026;
//     const myAge = currentYear - birthYear;
//     return myAge;
// }
// const age = calcAge(2002);
// console.log(age);

// Task 3: Simple Math
//     Ek function banao multiplyNumbers jo do numbers le aur unka product (zarab) return kare.
// function multiplyNumbers(num1, num2) {
//     return num1 * num2;
// }
// let result = multiplyNumbers(3, 5);
// console.log(result);

// function decalaration vs function expression

// function decalaration
// let userAge1 = calcAge1(2002); // invoking propperly
// function calcAge1(birthYear) {
//     const age = 2026 - birthYear;
//     return age;
// }
// let userAge1 = calcAge1(2002);
// console.log(userAge1);

// function expression
// let userAge2 = calcAge2(2001); // ReferenceError: Cannot access 'calcAge2' before initialization
// const calcAge2 = function (birthYear) {
//     const age = 2026 - birthYear;
//     return age;
// }
// let userAge2 = calcAge2(2001); // ReferenceError: Cannot access 'calcAge2' before initialization
// console.log(userAge2);

// Task 1: Salary Calculator(Declaration)
//     Aik Function Declaration banao calcSalary jo monthlyIncome le aur usay 12 se multiply karke return kare.
//     Isay function likhne se oper(top par) call karke dekho ke kya result aata hai.
// console.log(calcSalary(50000));
// function calcSalary(monthlyIncome) {
//     const salaryPerAnum = monthlyIncome * 12;
//     return salaryPerAnum;
// }

// Task 2: Movie Ticket(Expression)
//     Aik Function Expression banao getTicketPrice jo age le.
//     Agar age 18 se zyada ho toh return kare "$20", warna "$10".
//     Isay function banane se neeche call karo.
// const getTicketPrice1 = function (userAge) {
//     const ticketPrice = userAge >= 18 ? "20$" : "10$";
//     return ticketPrice;
// }
// const result1 = getTicketPrice1(23);
// console.log(result1);

// Task 3: Brain Test(The Error Challenge)
//     Task 2 wale function ko banane se PEHLE call karne ki koshish karo.
//     Console mein dekho kya error aata hai ? (Ye error hi aapko expression aur declaration ka asli farq samjhaye ga).
// const result2 = getTicketPrice2(23); // ReferenceError: Cannot access 'getTicketPrice' before initialization
// const getTicketPrice2 = function (userAge) {
//     const ticketPrice = userAge >= 18 ? "20$" : "10$";
//     return ticketPrice;
// }
// console.log(result2);

// Arrow function
// const calcAge3 = birthYear => 2026 - birthYear; // explicit return
// console.log(calcAge3(2002));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirementAge = 60;
//     const yearsLeftForRetirement = retirementAge - age;
//     return `My name is ${firstName} and ${yearsLeftForRetirement} years left for my retirement!`;
// }

// console.log(yearsUntilRetirement(2002, "Hashim"));
// console.log(yearsUntilRetirement(2007, "Hamza"));

// Task 1: Temperature Converter
//     Ek arrow function banao celsiusToFahrenheit jo celsius value le.
//     Formula: (celsius * 9/5) + 32.
//     Isay sirf ek hi line mein likhne ki koshish karo (no curly braces, no return keyword).
// const celsiusToFahrenheit = celcius => (celcius * 9 / 5) + 32;
// console.log(celsiusToFahrenheit(10));

// Task 2: Power Calculator
//     Ek arrow function banao calcPower jo voltage aur current le.
//     Dono ko multiply karke result return kare.
//     Isay brackets ke saath likho kyunki 2 parameters hain.
// const calcPower = (voltage, current) => voltage * current;
// console.log(calcPower(20, 40));

// Task 3: Username Generator=
// Ek arrow function banao createUsername jo user ka firstName aur lastName le.
// Dono ko mila kar lowercase mein ek username return kare.
// Example: createUsername("Ali", "Hamza") should return "alihamza".
// (Tip: .toLowerCase() use kar sakte ho).
// const createUsername = (firstName, lastName) => {
//     const randmNumber = Math.floor(Math.random() * 100);
//     const username = firstName + lastName;
//     return username.toLowerCase() + randmNumber;
// }
// console.log(createUsername("Hashim", "Malik"));

// Function calling another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}
cutFruitPieces();

function fruitProcessors(apple, orange) {
    const applePiece = cutFruitPieces(apple);
    const orangePiece = cutFruitPieces(orange);
    const juice = `Juice with ${applePiece} apples and juice with ${orangePiece} oranges`;
    return juice;
}
// console.log(fruitProcessors(2, 3));

// Task: Retirement with Age Calculation Aapne do functions banane hain:
//     Function 1(calcAge): Ye sirf birthYear le aur 2026 - birthYear return kare. (Ise arrow function banayein).
//     Function 2(yearsUntilRetirement): Ye birthYear aur name le.
//         Iske andar pehle wale calcAge function ko call karein aur age nikaalein.
//         Retirement check karein(65 - age).
//         Return karein: "[name] retires in [retirementYears] years".

// const calcAge = birthYear => 2026 - birthYear;

// function yearsUntilRetirement(firstName, birthYear) {
//     const age = calcAge(birthYear);
//     const retirement = 60;
//     const yearsLeftForRetirement = retirement - age;
//     if (yearsLeftForRetirement < 0) {
//         return `${firstName} is already retired from years`;
//     } else if (yearsLeftForRetirement === 0) {
//         return `${firstName} is retired just now`;
//     } else {
//         return `${firstName} is retired after ${yearsLeftForRetirement} years`;
//     }
// }
// console.log(yearsUntilRetirement("Hashim", 1946));

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).
// A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!

// Your tasks:
// Create an arrow function calcAverage
//  to calculate the average of 3 scores.This function should have three 
// parameters and return a single number(the average score).
// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them(you will need to call this function, and pass scores as arguments).
// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above.Example: Koalas win(30 vs. 13)(use avgDolphins and avgKoalas instead of hard - coded values).
// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// Ignore draws this time.Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

// Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);

// Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(27, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);