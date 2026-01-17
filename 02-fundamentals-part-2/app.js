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