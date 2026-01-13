// Linking a JS file

// Always link a JS file just before body closing tag

/////////////////////////////

// Variables & Values

// Variables & Values

// Variable => Box
// Values => Item


// name => Box
// Hashim => Item

let name = "Hashim";
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
let discount = totalPriceOfItems * 20 / 100;
let newPrice = totalPriceOfItems - discount;
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
let age = 23;
let isStudent = true;
let deathDate;
let spouseName = null;
let myID = Symbol("1234567890");
let bigNum = 12345678910111213n

// age ko increment karo
// isStudent ko false karo
// car ko "Toyota" assign karo
++age;
isStudent = false;
spouseName = "xyz";

// Variables: firstName = "Hash", lastName = "Imran"
// Create a sentence using + and template literals: "My name is Hash Imran."
let firstName = "Hashim";
let lastName = "Malik";
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


let x = "100";
x = Number("100");
x = x + 50;
// console.log(x);
let y = 200;
y = String(y);
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

var a = 1;
let b = 2;
const c = 3;
console.log(a);
console.log(b);
console.log(c);

// let variable banao aur uski value change karo
// const variable banao aur change karne ki koshish karo (error dekho)

let goodName = "abc";
goodName = "Hashim";
console.log(goodName);

const caste = "Malik";
// caste = "Awan"; // Uncaught TypeError: Invalid assignment to const 'caste'
console.log(caste);

const username = "Hashim";
let userage = 23;
let userCity = "Peshawar";
console.log(username, userage, userCity);

userage = userage + 1;
userCity = "Islamabad";
console.log(username, userage, userCity);

// let count = 0;
// count ko 3 dafa increase karo
// final value log karo
let count = 0;
console.log(count);
count = count + 1;
count = count + 1;
count = count + 1;
console.log(count);


// const API_KEY = "abc123";
// try to change it and observe error
const API_KEY = "abc123";
// API_KEY = "xyz123"; // Uncaught TypeError: invalid assignment to const 'API_KEY'
console.log(API_KEY);

const arr = [1, 2, 3];
// push new value
// reassign array
console.log(arr);
arr.push(4);
console.log(arr);


const userObj = {
    username: "Hashim",
    score: 99,
    isLoggedIn: true,
}
console.log(userObj);
userObj.score = 100;
console.log(userObj);