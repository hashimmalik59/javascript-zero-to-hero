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

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// function checkWinner(avgDolphins, avgKoalas) {

//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphin win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }

// // Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// checkWinner(scoreDolphins, scoreKoalas);

// // Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(27, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

// Array

// const friend1 = "Hashim";
// const friend2 = "Ahmad";
// const friend3 = "Malik";

// let friends = ["Hahsim", "Ahmad", "Malik"];
// console.log(friends);

// const familyMemberBirthYear = new Array(1946, 1974, 2001, 2002, 2007);
// console.log(familyMemberBirthYear);

// console.log(friends[friends.length - 1]);

// friends[2] = "Khan";
// console.log(friends);

// friends = ["Ali", "Umar", "Abu Bakar", "Usman"];
// console.log(friends);

// const firstName = "Hashim"
// const hashim = [firstName, "Malik", 2026 - 2002, "Developer", friends];
// console.log(hashim);
// console.log(hashim.length);

// Exercise
// const calcAge = function (birthYear) {
//     return 2026 - birthYear;
// }
// const years = [2001, 2002, 2007];
// console.log(calcAge(years[years.length - years.length]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[years.length - 1]));

// const siblingAges = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(siblingAges);

// Task 1: Favorite Fruits
//     Ek array banao fruits jisme 5 fruits ke naam hon.
//     Console mein 2nd aur 4th fruit ko print karo.
//     3rd fruit ka naam badal kar "Mango" kar do aur poori array print karo.
// const fruits = ["Apple", "Banana", "Orange", "Guava", "Grapes"];
// console.log(fruits[1], fruits[3]);
// fruits[2] = "Mango";
// console.log(fruits);

// Task 2: The Family List
//     Ek array banao familyNames.
//     Ek sentence print karo template literal use karke: "Meri family mein [number] log hain aur sabse bada member [name] hai."
//     (Tip: [number] ke liye .length use karein aur [name] ke liye index 0).

// const familyNames = ["Ali", "Sara", "Junaid", "Uzair", "Nimra"];
// console.log(`Meri family mein ${familyNames.length} log hain aur sabse bada member ${familyNames[0]} hai.`);

// Task 3: Simple Math with Arrays
//     Ek array banao numbers jisme koi bhi 3 numbers hon.
//     Ek naya variable banao totalSum jo un teeno numbers ko jama(add) kare array index use karte hue.
//     Example: numbers[0] + numbers[1]...
// const numbers = [4, 23, 59];
// const totalSum = numbers[0] + numbers[1] + numbers[2];
// console.log(numbers);
// console.log(totalSum);

// Basic Array Operations
// const friends = ["Hashim", "Ahmad", "Malik"];
// console.log(friends);

// friends.push("Khan"); // Add => End
// console.log(friends);

// friends.unshift("Ali"); // Add => Start
// console.log(friends);

// friends.pop(); // Remove => End
// console.log(friends);

// friends.shift(); // Remove => Start
// console.log(friends);

// Note:
// push return karta hai array ki Nayi Length.
// pop return karta hai wo Element jo remove hua hai.

// console.log(friends.indexOf("Malik")); // Finding index
// console.log(friends.indexOf("Chacha")); // -1

// console.log(friends.includes("Hashim")); // true
// console.log(friends.includes("Chacha")); // false

// if (friends.includes("Hashim")) {
//     console.log("In friends list there is 'Hashim'");
// }

// Task 1: Classroom Register
//     Ek array banao students = ['Ahmed', 'Sara', 'Zain'].
//         Aik naya student 'Danish' aakhir mein add karo.
//         Aik naya student 'Amna' shuru mein add karo.
//         Register se aakhri student ka naam nikaal do.
//         Ab check karo ke kya 'Zain' abhi bhi list mein hai ? (console.log mein true / false dikhao).
// const students = ["Hashim", "Sara", "Ali", "Zain"];
// console.log(students);
// students.push("Danish");
// students.unshift("Amna");
// students.pop();
// console.log(students);

// Task 3: Strict Search (Thinking Task)
//     Ek array banao mixedData = ['Apple', 10, 'Banana'].
//     Check karo: console.log(mixedData.includes(10)) aur console.log(mixedData.includes('10')).
//     Dono ka result kya aaya aur kyun? (Ye aapka concept clear karega).
// const mixedData = ["Apple", 10, "Banana"];
// console.log(mixedData.includes(10)); // true
// console.log(mixedData.includes("10")); // false

// CHALLENGE #2

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
//     Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

//     And now let's use arrays! So, create an array called bills containing the test data below.

//     Create an array called tips containing the tip value for each bill, calculated from the function you created before.

//     BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// Step 1
// function calcTip(bill) {
// Step 2
// const tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
// return tip;
// }
// Step 3
// console.log(calcTip(100));

// Step 4
// const bills = [125, 555, 44];

// Step 5
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Step 6
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// Object

// const myArr = ["Hashim", "Malik", 2026 - 2002, "Developer", ["Ali", "Khan", "Usman"]];
// console.log(myArr);

// const myObj = {
//     firstName: "Hashim",
//     lastName: "Malik",
//     age: 2026 - 2002,
//     job: "Developer",
//     friends: ["Ali", "Khan", "Usman"],
// };
// console.log(myObj);

// Task 1: Laptop Object
//     Ek object banao myLaptop.
//     Isme ye properties rakho: brand, model, ram(e.g., 16), aur isSSD(true / false).
//     Console mein laptop ka brand aur ram print karo Dot Notation use karke.
// const myLaptop = {
//     brand: "Lenovo",
//     model: 2015,
//     ram: "4GB",
//     isSSD: false,
// };
// console.log(myLaptop);
// console.log(myLaptop.ram);

// Task 2: Value Update Karna
//     Task 1 wale object mein laptop ka model badal kar koi naya naam de do.
//     Ek nayi property color bhi add karo(Hint: objectName.newKey = 'value').
//     Poora object console mein print karke dekho.
// myLaptop.model = 2026;
// myLaptop.color = "Black";
// console.log(myLaptop);

// Task 3: Social Media Profile (Critical Thinking)
//     Ek object banao profile jisme username, postsCount, aur followers (array of names) hon.
//     Template literal use karke ye sentence print karo: "[username] has [postsCount] posts. His first follower is [followerName]."
//     (Tip: followerName nikalne ke liye array indexing use karo jo object ke andar hai).
// const profile = {
//     username: "hashimmalik59",
//     postsCount: 79,
//     followers: ["Virat Kohli", "Cristiano Ronaldo", "Mr Beast", "Shah Rukh Khan"],
// };
// console.log(`${profile.username} has ${profile.postsCount} posts. His first follower is ${profile.followers[0]}.`);

// Dot vs Bracket Notation
// const myData = {
//     firstName: "Hashim",
//     lastName: "Malik",
//     age: 2026 - 2002,
//     job: "Developer",
//     friends: ["Abdullah", "Dayan", "Liaqat"]
// }
// console.log(myData.firstName); // Dot Notation
// console.log(myData["firstName"]); // Bracket Notation

// const nameKey = "Name";
// console.log(myData["first" + nameKey]);
// console.log(myData["last" + nameKey]);

// const myDataKey = prompt("Enter the myData obj keys to find its value and Choose between firstName, lastName, age, job");
// console.log(myData[myDataKey]);

// const city = "Peshawar";
// console.log(myData[city]);
// console.log(myData);

// myData.country = "Pakistan";
// myData.github = "github.com/hashimmalik59";

// console.log(`${myData.firstName} has ${myData.friends.length} friends and his best friend is ${myData.friends[0]}`);

// Task 1: The Variable Challenge
//     Ek object banao fruitData jisme apple: 5 aur orange: 10 ho.
//     User se(ya khud ek variable banao) const choice = 'apple'.
//     Ab choice variable ko use karke fruitData se apple ki value print karo.
//     Challenge: Kya tum dot notation se ye kar sakte ho ? (Try karke dekho aur result dekho).
// const fruitData = {
//     apple: 5,
//     orange: 10,
// };
// console.log(fruitData);

// const choice = "apple";

// console.log(fruitData.apple);
// console.log(fruitData[choice]);

// console.log(fruitData);

// Task 2: Space in Keys
//     Ek object banao jisme property ka naam space ke sath ho, maslan: 'Home Address': 'Peshawar'.
//     Is property ko console mein print karo. (Yaad rahe, dot notation yahan error degi).
// const userAddress = {
//     "Home Address": "Peshawar"
// };
// console.log(userAddress["Home Address"]);

// Task 3: Dynamic Greeting
//     Ek object banao person jisme name aur age ho.
//     Ek function banao getProperty jo do cheezein le: (object, propertyName).
//     Wo function us object se wo property return kare bracket notation use karke.
//     Example: getProperty(person, 'name') should return "Hashim".
// const person = {
//     name: "Hashim",
//     age: 23,
//     getProperty: function () {
//         return `My name is ${person["name"]} and my age is ${person["age"]}`;
//     }
// };
// console.log(person.getProperty());

// Task 1: The Secret Key(Variable Power)
//     Ek object banao clubMember jisme name, membershipType, aur status ho.
//     Ek variable banao const interestedIn = 'membershipType'.
//     Ab interestedIn variable ko use karke object se value nikal kar console mein dikhao.
//     Check karo: Agar tum clubMember.interestedIn likhte ho toh kya aata hai?
// const clubMember = {
//     name: "Hashim",
//     membershipType: "abc",
//     status: "VIP"
// };
// const interestedIn = "membershipType";
// console.log(clubMember.membershipType);
// console.log(clubMember["membershipType"]);

// Task 2: Illegal Names (The Bracket Hero)
//     Ek object banao jiske keys "standard" nahi hain, jaise: const data = { 'first-name': 'Hashim', 'current age': 25 };
//     In dono values ko console mein print karo. (Tip: Dot notation yahan fail ho jayegi).
// const userData = {
//     "first-name": "Hashim",
//     "current-age": 23,
// };
// console.log(userData["first-name"]);
// console.log(userData["current-age"]);

// Task 3: Dynamic Search Function
//     Ek function banao showDetail(obj, key).
//     Ye function object aur koi bhi key le, aur bracket notation ke zariye uski value return kare.
//     Test: Ek car object banao aur is function ke zariye uska model print karwao.

const car = {
    brand: "Toyota",
    color: "White",
    showDetail: function (model) {
        const key = model;
        return key;
    }
};
console.log(car.showDetail(2026));
console.log(car);