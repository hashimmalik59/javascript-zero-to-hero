"use strict";

// Destructuring Arrays

const restaurant = {
    name: "Classic Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (startIndex, menuIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[menuIndex]];
    }
};

// Old way of getting individual values
// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];
// const fruit4 = fruits[3];
// console.log(fruit1, fruit2, fruit3, fruit4);

const nums = [1, 2, 3];

// destructuring
const [num1, num2, num3] = nums;
// console.log(num1, num2, num3);

// Here second element is skip
let [category1, , category3,] = restaurant.categories;
// console.log(category1, category3);

// Switching variables
[category3, category1] = [category1, category3];
// console.log(category3, category1);

// console.log(restaurant.order(0, 0));

// Destructuring with function
const [starter, main] = restaurant.order(0, 0);
// console.log(starter, main);

const nestedArr = [1, 2, [3, 4]];

// Destructure nested array, destructure inside destructure
const [first, , [third, fourth]] = nestedArr;
// console.log(first, third, fourth);

const [a, b, c] = [7, 3];
// console.log(a); // 7
// console.log(b); // 3
// console.log(c); // undeifned

// Default values
const [x = 0, y = 2, z = 6] = [4, 8,];
// console.log(x); // 4
// console.log(y); // 8
// console.log(z); // 4
// Note: if there is no value destructure array then it will goes into default value, main array priority is higher

// Destructuring Objects

const restaurant1 = {
    name: "Classic Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, menuIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
    },

    orderDelivery: function (starterIndex, mainIndex, time, address) {
        console.log(`Order time ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`)
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here are your deliciious pasta with ${ing1}, ${ing2}, and ${ing3}`);
    }
};

// Destructure object
// const { name, openingHours, categories } = restaurant1;

// Destructure Alias
const { name: restaurantName, openingHours: hours, categories: type } = restaurant1;

// console.log(restaurantName);
// console.log(hours);
// categories: type (if alias is then use alias)
// console.log(categories);
// console.log(type);

const { menu = [], starterMenu: start = [] } = restaurant1;
// console.log(menu);
// console.log(start);

const { thu } = hours;
// console.log(thu);

// restaurant1.orderDelivery({
//     time: "22:00",
//     address: "Via del loge",
//     starterIndex: 1,
//     menuIndex: 1,
// });

const user = {
    id: 101,
    profile: {
        username: 'hashim99',
        details: {
            city: 'Karachi',
            zip: 75500
        }
    }
};

const { id, profile: { username, details: { city: town, zip } } } = user;
// console.log(id);
// console.log(username);
// console.log(town);
// console.log(zip);

const laptop = { brand: 'Dell', specs: { ram: '16GB' } };
// ISKO AIK LINE MEIN DESTRUCTURE KARKE 'ram' KO 'memory' VARIABLE MEIN NIKAAL KAR DIKHAO.
const { specs: { ram: memory } } = laptop;
// console.log(memory);

// Spread Operator
const arr = [7, 8, 9];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

// Spread Operator
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant1.mainMenu, "Peproni", "Carizon"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...newMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const wholeMenu = [...restaurant1.starterMenu, ...restaurant1.mainMenu];
console.log(wholeMenu);

const str = "Hashim";
const letters = [...str, " ", "M",];
console.log(letters);
console.log(...str);
console.log(...letters);

// const ingredients = [
//     prompt("Enter ingredient 1!"),
//     prompt("Ingredient 2!"),
//     prompt("Ingredient 3!"),
// ];
// console.log(ingredients);

// restaurant1.orderPasta(...ingredients);