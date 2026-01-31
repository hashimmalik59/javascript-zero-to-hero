"use strict";

// Destructuring Arrays

const restaurant = {
    name: "Classic Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categroies: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
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
let [category1, , category3,] = restaurant.categroies;
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
console.log(x); // 4
console.log(y); // 8
console.log(z); // 4
// Note: if there is no value destructure array then it will goes into default value, main array priority is higher