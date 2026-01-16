// Linking a JS file

// Always link a JS file just before body closing tag

/////////////////////////////

// Variables & Values

// Variables & Values

// Variable => Box
// Values => Item


// name => Box
// Hashim => Item

// let name = "Hashim";
// console.log(name);

// Varaibles & Values

// 1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
let country = "Pakistan";
let continent = "Asia";
let population = "250M";

// 2. Log their values to the console.
// console.log(country);
// console.log(continent);
// console.log(population);

// 1. Apna name store karo
// 2. Apni age store karo
// 3. Apni country store karo

let myName = "Hashim";
let myAge = 23;
let myCountry = "Pakistan";

// Apni age variable increment karo
// Apni country ko change karo

myAge = ++myAge;
myCountry = "USA";

// Create a constant for birth year
// Try to change it (should give error)

const myBirthYear = 2002;
// myBirthYear = myBirthYear + 1; // TypeError: Assignment to constant variable.
// console.log(myBirthYear);

// Combine name and country into sentence: "My name is ___ and I live in ___"
// console.log("My name is " + myName + " and my country is " + myCountry);

// Create variables: length, width
// Calculate area = length * width
// Print result in console
let length = 10;
let width = 5;
let area = length * width;
// console.log(area);

// Store your marks in 5 subjects
// Calculate total and average marks
// Print: "Your total is ___ and average is ___"
let physics = 90;
let biology = 85;
let chemistry = 99;
let maths = 89;
let programming = 76;
let totalMarks = physics + biology + chemistry + maths + programming;
let averageMarks = totalMarks / 5;
// console.log(totalMarks);
// console.log(averageMarks);
// console.log("Your total is " + totalMarks + " and your average is " + averageMarks);

// Create a variable for today’s temperature in Celsius
// Convert it to Fahrenheit and log it
let todayTemperatureInCelsius = 3;
let temperatureInFehrenhiet = todayTemperatureInCelsius / 32;
// console.log(temperatureInFehrenhiet);

// Create variables: item1Price, item2Price, item3Price
// Add them to get total
// Apply discount (20%) and store in new variable
// Print: "Total after discount is"
let itemPrice = 400;
let item2Price = 600;
let item3Price = 800;
let totalPriceOfItems = itemPrice + item2Price + item3Price;
// let discount = totalPriceOfItems * 20 / 100;
// let newPrice = totalPriceOfItems - discount;
// console.log(totalPriceOfItems);
// console.log("Total price after discount is " + newPrice);

// Create variables using descriptive names for 3 of your daily habits
// Make a sentence using template literals: "I ___, then I ___, and finally I ___"
let morningHabit = "Misvak";
let afternoonHabit = "Coding";
let nightHabit = "Journaling";
// console.log(`At morning i wake up and do '${morningHabit}, at afternoon i'm doing pracitce of ${afternoonHabit}, and at night before sleep i'm doing a great habit ${nightHabit}`);

//////////////////////////////////

// Datatypes
let fullName = "Hashim Malik";
// let age = 23;
let isStudent = true;
let deathDate;
let spouseName = null;
let myID = Symbol("1234567890");
let bigNum = 12345678910111213n

// age ko increment karo
// isStudent ko false karo
// car ko "Toyota" assign karo
// ++age;
isStudent = false;
spouseName = "xyz";

// Variables: firstName = "Hash", lastName = "Imran"
// Create a sentence using + and template literals: "My name is Hash Imran."
// let firstName = "Hashim";
// let lastName = "Malik";
// console.log(`My name is ${firstName + " " + lastName}`);

// Create a variable for Celsius
// Convert to Fahrenheit
// Convert back to Celsius
let temp = 10;
let feh = temp * 9 / 32;
let cel = feh * 2 / 4;
// console.log(cel);

// Prices: item1 = 200, item2 = 300, item3 = 150
// Calculate total
// Apply 15% discount
// Log: "Total after discount is ___"
let item1 = 200;
let item2 = 300;
let item3 = 150;
let totalPrice = item1 + item2 + item3;
let discountedPrice = totalPrice * .85;
// console.log(discountedPrice);

// let age = 17;
// Log "Adult" if age >= 18, else "Not Adult"
let userAge = 23;
if (userAge >= 18) {
    // console.log("Adult!");
} else {
    // console.log("Not Adult!");
}

// console.log("5" + 3);     // "53"
// console.log("5" - 3);     // 2
// console.log("10" * "2");  // 20
// console.log("10" / "2");  // 5
// console.log("10" - "2");  // 8
// console.log("10" + true); // 10tue
// console.log("10" - false);// 9

// let x = "100";
// Convert x to number and add 50
// let y = 200; Convert to string and concatenate with "50"


// let x = "100";
// x = Number("100");
// x = x + 50;
// console.log(x);
// let y = 200;
// y = String(y);
// console.log(y + "50");

// weight in kg, height in meter
// let weight = 70, height = 1.75
// BMI = weight / (height*height)
// Log BMI and its type
let weight = 40;
let height = 5.6;
let BMI = weight / (height * height);
// console.log(BMI);

// Create object: person = {name: "Hash", age: 23, city: "Karachi"}
// Create array: numbers = [1,2,3,4,5]
// Add new property to person and push new number in array


let person = {
    name: "Hashim",
    age: 23,
    city: "Peshawar"
}
const numbers = [1, 2, 3, 4, 5];

// console.log(person);
// console.log(numbers);

person.isStudent = true;
numbers.push(6);

// console.log(person);
// console.log(numbers);

/////////////////////////////////////

// let, var, and const 

// var, let, const use karke 3 variables banao
// teeno ko console.log karo

// var a = 1;
// let b = 2;
// const c = 3;
// console.log(a);
// console.log(b);
// console.log(c);

// let variable banao aur uski value change karo
// const variable banao aur change karne ki koshish karo (error dekho)

let goodName = "abc";
goodName = "Hashim";
// console.log(goodName);

const caste = "Malik";
// caste = "Awan"; // Uncaught TypeError: Invalid assignment to const 'caste'
// console.log(caste);

const username = "Hashim";
let userage = 23;
let userCity = "Peshawar";
// console.log(username, userage, userCity);

userage = userage + 1;
userCity = "Islamabad";
// console.log(username, userage, userCity);

// let count = 0;
// count ko 3 dafa increase karo
// final value log karo
let count = 0;
// console.log(count);
count = count + 1;
count = count + 1;
count = count + 1;
// console.log(count);


// const API_KEY = "abc123";
// try to change it and observe error
const API_KEY = "abc123";
// API_KEY = "xyz123"; // Uncaught TypeError: invalid assignment to const 'API_KEY'
// console.log(API_KEY);

const arr = [1, 2, 3];
// push new value
// reassign array
// console.log(arr);
arr.push(4);
// console.log(arr);

// Use const where possible
// Use let where value changes
// Avoid var completely

// Create:
// userName
// score
// isLoggedIn
// Update score
// Log final message using template literal
const userObj = {
    username: "Hashim",
    score: 99,
    isLoggedIn: true,
}
// console.log(userObj);
userObj.score = 100;
// console.log(userObj);
// console.log(`Username is ${userObj.username}, also his score is ${userObj.score}, and right now our user ${userObj.username} is log in.`);

// Basic Operators

const currentYear = 2026
const ageHashim = currentYear - 2002;
const ageAbdullah = currentYear - 2003;
// console.log(ageHashim, ageAbdullah);

const firstName = "Hashim";
const lastName = "Malik";
// console.log(firstName + " " + lastName);

// Assigment Operators
let z = 10 + 5; // 15
z += 10; // z = z + 10 = 25
z++; //  z = z + 1
z--; //  z = z - 1
// console.log(z); // 25

// Comparison Operators
// console.log(ageHashim > ageAbdullah); // 24 > 23 = true
// console.log(ageHashim >= 30); // 24 >= 30
// console.log(ageHashim < 30); // 24 < 30
// console.log(ageHashim <= 30); // 24 <= 30

// console.log(currentYear - ageHashim > currentYear - ageAbdullah); // first mathematical operation and then comparison => false

// Create two variables a = 10, b = 5
// Perform +, -, *, /, %
// Log all results

const num1 = 10;
const num2 = 5;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

let num = 10;
// Pre-increment
// Post-increment
// Pre-decrement
// Post-decrement
// Log after each operation
// console.log(num);
++num;
// console.log(num);
num++;
// console.log(num);
--num;
// console.log(num);
num--;
// console.log(num);

let val = 4;
// val ka square
// val ka cube
// Math.sqrt(val)
val **= 2; // val = val ** 2
// console.log(val);
val **= 3; // val = val ** 3
// console.log(val);
// console.log(Math.sqrt(val));

let value = 10;
// value += 5
// value -= 3
// value *= 2
// value /= 4
// Log after each operation
// console.log(value);
value += 10;
// console.log(value);
value -= 3;
// console.log(value);
value *= 2;
// console.log(value);
value /= 4;
// console.log(value);

let data = 20;
data += 5; // 25
// console.log(data);
data *= 2; // 50
// console.log(data);
data -= 10; // 40
// console.log(data); // Predict before running

let val1 = 10;
let val2 = 20;
// console.log(val1 > val2); // false
// console.log(val1 < val2); // true
// console.log(val1 >= 10); // true
// console.log(val1 <= val2); // true
// console.log(val1 == "10"); //s true
// console.log(val1 === "10"); // false // Strict equality
// console.log(val1 != val2); // true
// console.log(val1 !== "10"); // true // Strict inequality

// console.log("5" == 5);   // true
// console.log("5" === 5);  // false
// console.log(0 == false); // true
// console.log(0 === false);// false
// console.log(null == undefined); // true
// console.log(null === undefined);// false

// Operator Precedence

let abc, xyz;
abc = xyz = 20 - 10 - 5;
// console.log(abc, xyz);

// console.log(5 + 3 * 2); // 11
// console.log((5 + 3) * 2); // 16
// console.log((10 - 4) / 2); // 3
// console.log(5 + 5 > 9); // true

// console.log(5 + 3 == "8"); // true
// console.log(5 + 3 === "8"); // false

let newVal = 10;
newVal += 5 * 2;
// console.log(newVal);

// JavaScript Fundamentals – Part 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI(Body Mass Index), which is
// calculated using the formula:
//     BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// m tall

let johnHeight = 1.95;
let markHeight = 1.69;
let johnWeight = 92;
let markWeight = 78;

const johnBMI = johnWeight / (johnHeight * johnHeight);
const markBMI = markWeight / (markHeight * markHeight);

// console.log("John BMI " + johnBMI);
// console.log("Mark BMI " + markBMI);

const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);


// String and Template Literals
let myname = "Hashim";
let myage = 23;
let job = "Developer";

let myData = "I'm " + myname + ", also my age is " + myage + " years old, and i'm a " + job;
// console.log(myData);

let myNewData = `I'm ${myname}, also my age is ${myage} years old, and i'm a ${job}`;
// console.log(myNewData);

let name = "Hash";
// let age = 23;

// Output:
// My name is Hash and I am 23 years old.
// console.log(`My name is ${name} and I am ${age} years old.`);

let city = "Karachi";
let mycountry = "Pakistan";

// Output:
// I live in Karachi, Pakistan.
// console.log(`I live in ${city}, ${mycountry}`);

// let a = 5;
// let b = 10;

// Output:
// The sum of 5 and 10 is 15.
// console.log(`The sum of ${a} and ${b} is ${a + b}`);

let x = 8;
let y = 3;

// Output:
// 8 * 3 = 24
// console.log(`${x} * ${y} = ${x * y}`);

let birthYear = 2002;
// console.log(`You are ${currentYear - birthYear} years old!`);

// let price = 500;
let discount = 20;

// Output:
// Final price after discount is 400
// console.log(`Final price after discount is ${price * .8}`);

// Use template literals to print:
// Hello Hash,
// Welcome to JavaScript.
// Happy Coding!

// console.log(`Hello Hashim
//     Welcom to JavaScript.
//     Happy Coding!`);

let product = "Laptop";
// let price = 120000;

// Multiline invoice using template literals
// console.log(`User purachse ${product}
// and its price is ${price}`);

let age = 17;
// Output:
// You are an adult.
// OR
// You are not an adult.
// console.log(`${age >= 18 ? "You are an adult!" : "You are not adult!"}`);

let score = 82;

// Output:
// You passed the exam.
// OR
// You failed the exam.
// console.log(`${score >= 50 ? "You passed the exam!" : "You failed the exam!"}`);

let item = "Shoes";
let quantity = 2;
let price = 3000;

// Output:
// You bought 2 Shoes for a total of 6000 PKR.
// console.log(`You bought ${quantity} ${item} for a total of ${price} PKR.`);

// Taking Decisions: if / else statements

const USER_AGE = 12;
const isOldEnough = USER_AGE >= 18;
if (isOldEnough) {
    console.log("Hashim now you can drive!");
} else {
    const yearsLeft = 18 - USER_AGE;
    // console.log(`Hashim you are so young ${yearsLeft} years left for drive`);
}

const userBirthYear = 2000;
let century;
if (userBirthYear >= 2000) {
    century = 21;
} else {
    century = 20;
}
// console.log(century);

let my_age = 23;
// agar age >= 18
// print: "You can vote"
// warna: "You cannot vote"
if (my_age >= 18) {
    // console.log(`You can Vote!`);
} else {
    console.log(`You cannot Vote!`);
}

let temperature = 35;

// agar temperature > 30
// print: "It's hot"
// warna: "It's normal"

if (temperature > 30) {
    // console.log("It's hot");
} else {
    console.log("It's normal");
}

let number = 2;

// agar number positive
// print: "Positive"
// warna: "Negative"
if (number > 0) {
    // console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

let userScore = 99;
let grade;
// >= 90 → "A grade"
// >= 70 → "B grade"
// >= 50 → "C grade"
// warna → "Fail"
if (userScore >= 90) {
    grade = "A";
} else if (userScore >= 70) {
    grade = "B";
} else if (userScore >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}
// console.log(grade);

let bmi = 14;

// < 18.5 → "Underweight"
// 18.5 - 24.9 → "Normal"
// 25 - 29.9 → "Overweight"
// >= 30 → "Obese"
if (bmi < 18.5) {
    // console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    // console.log("Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    // console.log("Overweight");
} else {
    // console.log("Obese");
}

let my$age = 23;
let hasID = true;

// age >= 18 AND hasID
// → "Entry allowed"
// warna → "Entry denied"
if (my$age >= 18 && hasID) {
    // console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}

let isLoggedIn = true;
let isAdmin = false;

// agar logged in YA admin
// → "Access granted"
// warna → "Access denied"
if (isLoggedIn && isAdmin) {
    // console.log("Acces Granted");
} else {
    // console.log("Acces Denied");
}

let userValue = "10";

// agar value == 10
// print something
// agar value === 10
// print something else

let my_score = "75";
// console.log(my_score);

// pehle number mein convert karo
// phir pass/fail decision lo (>= 50 pass)

my_score = Number("99");
// console.log(my_score);

if (my_score >= 50) {
    // console.log("pass");
} else {
    // console.log("fail");
}

// CHALLENGE #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

if (markBMI > johnBMI) {
    // console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    // console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

// Type Conversion & Coercion

const inputYear = "2002"; // string
// console.log(Number(inputYear) + 4); // number(type converison)
// console.log(inputYear + 4); // string(type coercion)
// console.log(Number("Hashim")); // NaN => Not a number
// console.log(typeof NaN);

// console.log(String(23), 23);

// console.log("I'm " + 23 + " years old!");
// console.log("23" - 2);
// console.log("23" / 2);

// let n = "10" + 1;
// console.log(n); // "101"
// n = n - 1;
// console.log(n); // 100

let str = "100";
let nums = Number(str); // convert to number
// console.log(nums + 50); // 150

let n = 0;
// console.log(Boolean(n)); // false

let $value = 123;
// console.log(String($value) + " is a number"); // "123 is a number"

// console.log("10" + 5);  // "105"
// console.log("10" - 5);  // 5
// console.log("10" * "2"); // 20
// console.log("10" / "2"); // 10

// console.log(true + 1);  // 2
// console.log(false + 10); // 10
// console.log("5" - true); // 4

// console.log("Hello" + true); // "Hellotrue"
// console.log("5" * false);   // 0

// console.log("5" == 5); // true
// console.log("5" === 5); // false
// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false

let $age = "23"; // string
// Convert to number
// if age >= 18 → "Adult" else "Not Adult"
// console.log($age);
$age = Number($age);
// console.log($age);
if ($age >= 18) {
    // console.log("Adult");
} else {
    console.log("Not Adult!");
}

let price1 = "1000";
let price2 = 200;
let total = price1 + price2; // What happens?
// Fix it using explicit conversion
// console.log(total);
// console.log(price1);
price1 = Number(price1);
// console.log(price1);
total = price1 + price2;
// console.log(total);

let userInput = "";
if (userInput) {
    console.log("Input provided");
} else {
    // console.log("Input empty"); // Input empty
}

// Predict outputs first, then run
// console.log("1" + 1);  // "11"
// console.log("1" - 1);  // 0
// console.log("2" * "3"); // 6
// console.log("4" / "2"); // 2
// console.log("5" + true); // "5true"
// console.log("5" - true); // 4
// console.log(false + 10); // 10
// console.log(false - 1); // -1
// console.log(!""); // true
// console.log(!!"Hello"); // true

// console.log("10" - "4" - 3 + "2"); // "32"
// console.log("10" + 4 - 3);         // 13

// console.log("5" + 2 + 3); // "523"
// console.log(2 + 3 + "5"); // "55"
// console.log("5" - "2" + 1); // 4
// console.log("5" + 2 - 1); // 51
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN

// Truthy & Falsy values

// false
// 0
// ""
// null
// undefined
// NaN
// Except these values are all truthy values

if ("") console.log("run");     // ❌
// if ("hello") console.log("run"); // ✅

if ("0") { } // ✅ true
if ([]) { } // ✅ true
if ({}) { } // ✅ true

if (0) console.log("A");
// else console.log("B"); // "B"

if ("") console.log("Yes");
// else console.log("No"); // "No"

// if ("0") console.log("True"); // "True"

let $x = [];
// if ($x) console.log("Array is truthy"); // Array is truthy

let $y = null;
// if (!$y) console.log("Falsy"); // "Falsy"

// 🧠 Mini Tasks
// User input lo → agar empty ho to "Enter value"
// Score variable → agar 0 ho to "No score"
// Check karo variable assigned hai ya nahi (truthy check)
let userVal = ".";
if (userVal) {
    // console.log();
} else {
    console.log("Enter value");
}

let myScore = 0;
if (myScore <= 0) {
    // console.log("No Score");
} else {
    console.log("Score");
}

let userData;
if (userData === undefined) {
    // console.log("Enter your data");
} else {
    console.log();
}

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Jonas")); // true
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true
// console.log(Boolean("")); // false

const balance = 0;
if (balance) {
    console.log("Hello sir!");
} else {
    // console.log("Your balance is insufficient!");
}


let userWeight = 0;
if (userWeight) {
    console.log(`Your weight is ${userWeight}`);
} else {
    // console.log(`Your weight is UNDEFINED`);
}

// Equality Operator == vs ===

const user_age = "18";
if (user_age === 18) {
    console.log("Adult (strict)");
}
if (user_age == 18) {
    // console.log("Adult (loose)");
}

// Note: Always use strict eqaulity operator for less bugs

// let luckyNumber = +prompt("My lucky number");
// console.log(luckyNumber);
// console.log(typeof luckyNumber);

// if (luckyNumber === 4) {
// console.log(`My lucky number is ${luckyNumber}`);
// } else {
// console.log(`${luckyNumber} is not my lucky number`);
// }

// Ek variable banao numNeighbors.User se prompt ke zariye number lo.

//     Agar numNeighbors === 1 hai, toh print karo: "Sirf 1 padosi hai!"

// Task 1: The "Simple Logic" Ek variable banao numNeighbors. User se prompt ke zariye number lo.
// Agar aap prompt se value le rahe ho, toh yaad rakhna prompt hamesha string deta hai.Aapko usey pehle number mein convert karna hoga(Number(prompt(...))) taaki === kaam kare.
// let numNeighbors = +prompt("Enter how much neighbors");
// if (numNeighbors === 1) {
//     console.log("Sirf 1 Padosi");
// }

// Task 2: Guess the Result Inka result socho aur phir console mein check karo:
// '10' == 10(True ya False ?)
// '10' === 10(True ya False ?)
// 15 != '15'(True ya False ?)
// 15 !== '15'(True ya False ?)

// console.log("10" == 10); // true
// console.log("10" === 10); // false
// console.log("15" != 15); // false
// console.log("15" !== 15); // true

// Task 3: Challenge Problem Ek program likho:
//     Variable favouriteNumber banao.
//     User se uska favourite number pucho.
//     Agar number 23 hai (strictly), toh print karo: "23 ek cool number hai!"
//     Agar 23 nahi hai, toh print karo: "Wese 23 zyada behtar tha."
// let favouriteNumber = +prompt("Enter your favourite number!");
// if (favouriteNumber === 23) {
//     console.log(`${favouriteNumber} is cool number!`);
// } else {
//     console.log(`Waise ${favouriteNumber} aik behtar number hai!`);
// }git

// <<Boolean Logic

const a = true;
const b = false;
const c = (a && b); // false
const d = (a || b); // true
const e = !a;       // false
const f = (a && !b); // true

// console.log(c); // false
// console.log(d); // true
// console.log(e); // false
// console.log(f); // true

let isJavaScript = true;
let isDesgree = false;
let isThreeYearsExperience = true;

if (isJavaScript && (isDesgree || isThreeYearsExperience)) {
    // console.log("Hired");
} else {
    console.log("Put some more effort");
}

let candidateAge = 23;
let isMembershipCard = false;
let isVIPList = true;
let isBanned = false;

if (!isBanned && candidateAge >= 18 && (isMembershipCard || isVIPList)) {
    // console.log("Welcome on Event");
} else {
    console.log("Better luck next time!");
}

// Logical Operators

const hasDrivingLicense = false;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision); // false
console.log(hasDrivingLicense || hasGoodVision); // true
console.log(!hasDrivingLicense); // true
console.log(!hasGoodVision); // false

let shouldDrive = hasDrivingLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Now can DRIVE");
} else {
    console.log("Now you cannot DRIVE");
}

const isTired = true;

if (isTired && hasDrivingLicense && hasGoodVision) {
    console.log("You can drive");
}

// Task 1: Logi-Guess (Dimag ghumao) Inka output guess karo aur phir console mein check karo:

console.log(true && false || true); // true
console.log(true && (false || true)); // true
console.log(!true || !false); // true

// Task 2: The "Admission" Logic Ek student ko university mein admission tabhi milega jab:
// Uske marks 80 se zyada hon.
// AUR uske paas sports ka certificate ho YA wo alumni ka bacha ho.
// LEKIN uska koi disciplinary record (bad behavior) na ho.
const studentMarks = 90;
const isSportsCertificate = true;
const isAlumni = false;
const isDiscipline = true;

if (studentMarks >= 80 && (isSportsCertificate || isAlumni) && isDiscipline) {
    console.log("Admission Granted!");
} else {
    console.log("Admission Denined!");
}

// Task 3: Weather & Mood App Ek program likho jo batao ke kya aaj bahar jana chahiye?
// Conditions: Bahar tabhi jao agar isRaining false ho AUR temperature 20 se 30 ke beech mein ho.
// Bonus: Agar isRaining true hai lekin aapke paas hasUmbrella true hai, tab bhi aap ja sakte ho (provided temperature sahi ho).
let isRaining = false;
let tempe = 25;
let hasUmbrella = false;
if ((!isRaining || hasUmbrella) && (tempe >= 20 && tempe <= 30)) {
    console.log("Enjoying Outing!");
} else {
    console.log("It's Ok go tommorow!");
}