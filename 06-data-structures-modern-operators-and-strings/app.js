"use strict";

// Destructuring Arrays

// const restaurant = {
//     name: "Classic Italiano",
//     location: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],

//     order: function (startIndex, menuIndex) {
//         return [this.starterMenu[startIndex], this.mainMenu[menuIndex]];
//     }
// };

// Old way of getting individual values
// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];
// const fruit4 = fruits[3];
// console.log(fruit1, fruit2, fruit3, fruit4);

// const nums = [1, 2, 3];

// destructuring
// const [num1, num2, num3] = nums;
// console.log(num1, num2, num3);

// Here second element is skip
// let [category1, , category3,] = restaurant.categories;
// console.log(category1, category3);

// Switching variables
// [category3, category1] = [category1, category3];
// console.log(category3, category1);

// console.log(restaurant.order(0, 0));

// Destructuring with function
// const [starter, main] = restaurant.order(0, 0);
// console.log(starter, main);

// const nestedArr = [1, 2, [3, 4]];

// Destructure nested array, destructure inside destructure
// const [first, , [third, fourth]] = nestedArr;
// console.log(first, third, fourth);

// const [a, b, c] = [7, 3];
// console.log(a); // 7
// console.log(b); // 3
// console.log(c); // undeifned

// Default values
// const [x = 0, y = 2, z = 6] = [4, 8,];
// console.log(x); // 4
// console.log(y); // 8
// console.log(z); // 4
// Note: if there is no value destructure array then it will goes into default value, main array priority is higher

// Destructuring Objects

// const restaurant1 = {
//     name: "Classic Italiano",
//     location: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // open 24 hours
//             close: 24,
//         },
//     },

//     order: function (starterIndex, menuIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
//     },

//     orderDelivery: function (starterIndex, mainIndex, time, address) {
//         console.log(`Order time ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`)
//     },

//     orderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here are your deliciious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     }
// };

// Destructure object
// const { name, openingHours, categories } = restaurant1;

// Destructure Alias
// const { name: restaurantName, openingHours: hours, categories: type } = restaurant1;

// console.log(restaurantName);
// console.log(hours);
// categories: type (if alias is then use alias)
// console.log(categories);
// console.log(type);

// const { menu = [], starterMenu: start = [] } = restaurant1;
// console.log(menu);
// console.log(start);

// const { thu } = hours;
// console.log(thu);

// restaurant1.orderDelivery({
//     time: "22:00",
//     address: "Via del loge",
//     starterIndex: 1,
//     menuIndex: 1,
// });

// const user = {
//     id: 101,
//     profile: {
//         username: 'hashim99',
//         details: {
//             city: 'Karachi',
//             zip: 75500
//         }
//     }
// };

// const { id, profile: { username, details: { city: town, zip } } } = user;
// console.log(id);
// console.log(username);
// console.log(town);
// console.log(zip);

// const laptop = { brand: 'Dell', specs: { ram: '16GB' } };
// ISKO AIK LINE MEIN DESTRUCTURE KARKE 'ram' KO 'memory' VARIABLE MEIN NIKAAL KAR DIKHAO.
// const { specs: { ram: memory } } = laptop;
// console.log(memory);

// Spread Operator
// const arr = [7, 8, 9];
// const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(newBadArr);

// Spread Operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant1.mainMenu, "Peproni", "Carizon"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...newMenu];
// console.log(mainMenuCopy);

// Join 2 arrays
// const wholeMenu = [...restaurant1.starterMenu, ...restaurant1.mainMenu];
// console.log(wholeMenu);

// const str = "Hashim";
// const letters = [...str, " ", "M",];
// console.log(letters);
// console.log(...str);
// console.log(...letters);

// const ingredients = [
//     prompt("Enter ingredient 1!"),
//     prompt("Ingredient 2!"),
//     prompt("Ingredient 3!"),
// ];
// console.log(ingredients);

// restaurant1.orderPasta(...ingredients);

// Rest Pattern and Parameters

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5, 6];
// console.log(newNums);

const [num1, num2, ...otherNums] = [1, 2, 3, 4, 5, 6];
// console.log(num1, num2, otherNums);
otherNums.push(7);
// console.log(otherNums);

// const restaurant = {
//     name: "Classic Italiano",
//     location: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // open 24 hours
//             close: 24,
//         },
//     },

//     order: function (starterIndex, menuIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
//     },

//     orderDelivery: function (starterIndex, mainIndex, time, address) {
//         console.log(`Order time ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`)
//     },

//     orderPasta: function (ing1, ing2, ing3) {
//         console.log(`Here are your deliciious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//     },

//     orderPizza: function (mainIngredients, ...otherIngredients) {
//         console.log(mainIngredients);
//         console.log(otherIngredients);
//     }
// };

// restaurant.orderPizza("Chicken", "Olives", "Cheese", "Bread");


// Array
// const [pizza, , risotto, otherMenu] = [
//     ...restaurant.starterMenu,
//     ...restaurant.mainMenu,
// ]
// console.log(pizza, risotto, otherMenu);

// Object
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays);

// const add = function (...num) {
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
// sum += num[i];
// }
// console.log(sum);
// }
// add(1);
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5);
// const x = [7, 5, 9];
// add(...x);

// Short Circuting (&& and ||)

// console.log("------ OR -------");

// USe any datatype, return any datatype, short circuting
// console.log(4 || "Hashim");
// console.log("" || "Malik");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null || undefined);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 23
// console.log(guest2);

// console.log("------ AND -------");
// console.log("Hashim" && "");
// console.log(false && 0);
// console.log(undefined && null);
// console.log("Hello" && 23 && "Hashim" && null && "Malik");

// if (restaurant.orderPizza) {
// restaurant.orderPizza("Mushroom", "Cheese", "Olives");
// }

// Agar pehli value Truthy hai, toh doosri check hi nahi hogi
// console.log(3 || 'Hashim'); // 3
// console.log('' || 'Guest'); // 'Guest' (Kyunki empty string falsy hai)
// console.log(true || 0);     // true

// const guests = 0;
// const guestCount = guests || 10;
// console.log(guestCount); // 10 (Lekin yahan ek bug hai, 0 ko bhi falsy maana gaya)

// Agar pehli value Falsy hai, toh aage nahi jayega
// console.log(0 && 'Hashim'); // 0
// console.log(7 && 'Ali');    // 'Ali' (Kyunki 7 truthy hai, toh aage check kiya)

// Real world use:
// const user = { name: 'Hashim', loggedIn: true };

// Agar loggedIn true hai, tabhi aage wala kaam karo
// user.loggedIn && console.log('Welcome User!');

// Nuliish Coalscing Operator

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// Nullish values: null & undefined
// const guest2 = restaurant.numGuests ?? 23
// console.log(guest2);

// console.log(null ?? undefined);
// console.log(undefined ?? null);

// console.log(0 ?? "");
// console.log("" ?? 0);
// console.log(10 ?? 0);
// console.log("" ?? 10);
// console.log("Hashim" || 0);
// console.log("Hashim" || "");
// console.log(true ?? false);
// console.log(false ?? true);

// let speed = 0;

// OR (||) operator use kiya
// let check1 = speed || 50; 
// console.log(check1); // Output: 50 
// (Ghalti! Speed 0 thi, lekin isne 50 kar di kyunki iske liye 0 kachra hai)

// Nullish (??) operator use kiya
// let check2 = speed ?? 50;
// console.log(check2); // Output: 0 
// (Sahi! Isne 0 ko izzat di aur usay change nahi kiya)

// Looping Ojbect, Object keys, values, and entries

// const myData = {
//     firstName: "Hashim",
//     lastName: "Malik",
//     age: 23,
//     isStudent: true,
//     profession: "Developer"
// };

// for (const myValues of Object.entries(myData)) {
// console.log(myValues);
// }

// const entry = Object.entries(restaurant.openingHours);

// for (const [day, { open, close }] of entry) {
// console.log(`On ${day}, open at ${open} and close at ${close}. `);
// }

// Optional Chaninig

// const myData = {
// firstName: "Hashim",
// lastName: "Malik",
// age: 23,
// isStudent: true,
// skill: {
// profession: "Frontend Developer",
// framework: ["TaiwlwindCSS", "ReactJS"],
// }
// };

// console.log(myData.skill?.framework);
// console.log(myData.skill.framework);

// console.log(myData.city.location);
// console.log(myData.city?.location);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// const days = [
//     "mon",
//     "tue",
//     "wed",
//     "thur",
//     "fri",
//     "sat",
//     "sun"
// ]

// for (const day of days) {
// const open = restaurant.openingHours[day]?.open ?? "Closed";
// console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order(0, 1) ?? "Method does not exist");

// console.log(restaurant.orderBiryani?.(0, 1) ?? "Method does not exist");

// const userData = [{
//     name: "Hashim",
//     age: 23
// }];

// const userData = [];

// console.log(userData[0]?.name ?? "Name is empty");

// if (userData.length > 0) console.log(userData[0].name);
// else console.log("Name is empty");

// Enhanced Object Literals

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [`day_${2 + 4}`]: {
        open: 0, // open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: "Classic Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // Ehanced Object Literals
    openingHours,

    // Enhanced Object Literals function
    order(starterIndex, menuIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
    },

    // Enhanced Object Literals function
    orderDelivery(starterIndex, mainIndex, time, address) {
        console.log(`Order time ${this.openingHours[time]} ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`)
    },

    // Enhanced Object Literals function
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here are your deliciious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    },

    // Enhanced Object Literals function
    orderPizza(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
};

// console.log(restaurant);
// console.log(restaurant.openingHours);
// console.log(openingHours);

// String Part 1

// const airplane = 'TAP air Pakistan';
// const plane = "A786";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log("PAK"[0]);

// Finding the length of string
// console.log(plane.length);
// console.log("Pak".length);

// console.log(airplane.indexOf("s"));
// console.log(airplane.lastIndexOf("s"));
// console.log(airplane.indexOf("pakistan"));

// last index is exclusive
// console.log(airplane.slice(8, 11));
// console.log(airplane.slice(0, airplane.indexOf(" ")));
// console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));

// console.log(airplane.slice(0, -5));

// const checkMiddleSeat = function (seat) {
// B and E seats are middle seats
//     const seatPlace = seat.slice(-1);
//     if (seatPlace === "B" || seatPlace === "E")
//         console.log("You are sit on middle");
//     else console.log("You are not sit on middle");
// }
// checkMiddleSeat("11A");
// checkMiddleSeat("20E");
// checkMiddleSeat("15C");
// checkMiddleSeat("18B");

// Because of 'new' keyword its moved to object
// console.log(new String("Hashim"));
// console.log(typeof new String("Hashim"));

// console.log(typeof new String("Hashim").slice(-1));

// String Part 2

const airplane = 'TAP air Pakistan';
const plane = "A786";

// console.log(airplane.toLowerCase());
// console.log(airplane.toUpperCase());

// console.log("Hashim".toLowerCase());

// Fixing name case-sensitivity
const checkPassengerName = function (name) {
    // console.log(`Before ${name}`);
    const passengerLower = name.toLowerCase();
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
    return passengerCorrect;
}
// const correctName = checkPassengerName("haShIm");
// console.log(`After ${correctName}`);

// Comparing email

const userEmail = "hashimmalik59@gmail.com";
const emailCorrector = function (email) {
    console.log("Before", email);
    const lowerEmail = email.toLowerCase();
    const noSpaceEmail = lowerEmail.trim();
    return noSpaceEmail;
}
// const correctEmail = emailCorrector("     hasHiMmalik59@GmaIL.coM");
// console.log("After", correctEmail);

// console.log(userEmail === correctEmail); // true

// Repalcing Method
const pricePKR = "999,9PKR";;

// replace(), replace only(one) first element
const priceUS = pricePKR.replace("PKR", "US").replace(",", ".")
// console.log(priceUS);

const announcement = "All passengers come to boarding  door 23. Boarding door 23!";

// console.log(announcement.replace("door", "gate"));

// replaceAll(), replace all elements 
// console.log(announcement.replaceAll("door", "gate"));

// g/ => means g => global
// console.log(announcement.replace(/door/g, "gate"));

const planeNumber = "Air A320neo";

// console.log(planeNumber.includes("A320"));
// console.log(planeNumber.includes("Apple"));
// console.log(planeNumber.includes(" "));

// console.log(planeNumber.startsWith("Air"));
// console.log(planeNumber.startsWith("AiA"));

if (planeNumber.startsWith("Air") && planeNumber.endsWith("neo")) {
    // console.log("The plane is Air & Neo family");
} else {
    console.log("The plane is not Air & Neo family");
}


const checkAllowed = function (item) {
    const userItem = item.toLowerCase();
    if (userItem.includes("knife") || userItem.includes("gun")) {
        console.log(`Not allowed because of weapon!`);
    } else {
        console.log(`Welcome on Board!`);
    }
}
// checkAllowed("I have a Gun for protection");
// checkAllowed("Socks for wearing because too cold");
// checkAllowed("I have a Knife for muder");

// console.log("My+name+is+hashim".split("+"));
// console.log("Hashim Ahmad Malik".split(" "));

const [firstName, middleName, lastName] = "Hashim Ahmad Malik".split(" ");

// console.log(firstName);
// console.log(lastName);
// console.log(middleName);

// console.log(["Mr.", firstName, lastName.toUpperCase()].join(" "));


// Capitalized Name
const capitalizedName = function (name) {
    const names = name.split(" ");
    const upperNames = [];
    for (const naam of names) {
        // upperNames.push(naam[0].toUpperCase() + naam.slice(1));
        upperNames.push(naam.replace(naam[0], naam[0].toUpperCase()));
    }
    console.log(upperNames);
}
// capitalizedName("hashim ahmad malik");
// capitalizedName("ali khan zia");

const message = "Go to gate 23";

// console.log(message.padStart(20, "!"));
// console.log(message.padEnd(20, "!"));
// console.log(message.padStart(20, "!").padEnd("5", "!"));

const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}
// console.log(maskCreditCard(6452589));
// console.log(maskCreditCard(645295789846));
// console.log(maskCreditCard(6452589089089046));

// Repeat method
const message2 = "Delayed...Bad Weather...";
// console.log(message2.repeat(2));

const message3 = "...Aloo le lo...";
// console.log(message3.repeat(3));


const planesInLine = function (numberOfPlanes) {
    console.log(`${numberOfPlanes} plane is in the line.`)
}
// planesInLine(5);

// Challenge # 4

const camelCase = function (text) {
    console.log("Before", text);
    // Text into lower case
    let lowerText = text.toLowerCase();
    // Removing white spaces
    let trimText = lowerText.trim();
    if (trimText.includes("_")) {
        // Dividing text into an array
        let textArr = trimText.split("_");
        // Getting first word
        let firstWord = textArr[0];
        // Getting second word
        let secondWord = textArr[1];
        // Second word first letter in to upper case
        let firstLetter = secondWord[0].toUpperCase();
        // Final text
        let correctText = firstWord + firstLetter + secondWord.slice(1);
        return correctText;
    }
}
const result = camelCase("underscore_case\n first_name\nSome_Variable");
console.log("After", result);