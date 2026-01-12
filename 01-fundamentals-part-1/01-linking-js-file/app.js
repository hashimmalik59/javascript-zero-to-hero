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
console.log(name);

// Varaibles & Values

// 1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
let country = "Pakistan";
let continent = "Asia";
let population = "250M";

// 2. Log their values to the console.
console.log(country);
console.log(continent);
console.log(population);

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
// myBirthYear = myBirthYear + 1;
console.log(myBirthYear); // TypeError: Assignment to constant variable.

// Combine name and country into sentence: "My name is ___ and I live in ___"
console.log("My name is " + myName + " and my country is " + myCountry);

// Create variables: length, width
// Calculate area = length * width
// Print result in console
let length = 10;
let width = 5;
let area = length * width;
console.log(area);

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
console.log(totalMarks);
console.log(averageMarks);
console.log("Your total is " + totalMarks + " and your average is " + averageMarks);

// Create a variable for today’s temperature in Celsius
// Convert it to Fahrenheit and log it
let todayTemperatureInCelsius = 3;
let temperatureInFehrenhiet = todayTemperatureInCelsius / 32;
console.log(temperatureInFehrenhiet);


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
console.log(totalPriceOfItems);
console.log("Total price after discount is " + newPrice);

// Create variables using descriptive names for 3 of your daily habits
// Make a sentence using template literals: "I ___, then I ___, and finally I ___"
let morningHabit = "Misvak";
let afternoonHabit = "Coding";
let nightHabit = "Journaling";
console.log(`At morning i wake up and do '${morningHabit}, at afternoon i'm doing pracitce of ${afternoonHabit}, and at night before sleep i'm doing a great habit ${nightHabit}`);