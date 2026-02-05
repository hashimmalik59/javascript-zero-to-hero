"use strict";

// map method

// const nums = [1, 2, 3, 4, 5];
// 
// const newNums = [];
// 
// for (let i = 0; i < nums.length; i++) {
// let num = 2;
// newNums.push(num * nums[i]);
// }
// 
// console.log(newNums);

// const numbers = [10, 20, 30];

// const num = numbers.map(item => item * 2);

// console.log("number", numbers);
// console.log("num", num);

// 🟢 Level 1: The Basics(Simple Transformation)
// Task: Tumhare paas prices ka ek array hai.In prices par 10 % discount lagao aur ek naya array banao jis mein discounted prices hon.
//     Input: const prices = [100, 500
// , 1200, 2000];
// Goal: [90, 450, 1080, 1800]
// Hint: price * 0.9 use karo.

const prices = [100, 500, 1200, 2000];
const discountedPrice = prices.map(disc => disc * .9);

// console.log(prices);
// console.log(discountedPrice);

// 🟡 Level 2: The Logic (Using Index)
// Task: Tumhare paas students ke names ka array hai. map use karo aur har name ke sath uski position (index) joro taake list aisi dikhe: "1. Hashim", "2. Malik".
//     Input: const students = ['Hashim', 'Malik', 'Sara'];
//     Goal: ["1. Hashim", "2. Malik", "3. Sara"]
//     Hint: Yaad rakho index 0 se shuru hota hai, toh tumhe index + 1 karna parega.

const students = ["Hashim", "Sara", "Malik"];

const newStudents = students.map(function (student, index) {
    return `${index + 1}. ${student}`;
});

// console.log(students);
// console.log(newStudents);

// 🔴 Level 3: The Real World (Working with Objects)
// Task: Ye sabse important hai. Tumhare paas "Products" ka ek array hai (Objects). Tumne sirf un products ke Names nikaal kar ek alag array mein rakhne hain (Isay data extraction kehte hain).
//     Input: ```javascript const products = [ { id: 1, name: 'Laptop', price: 50000 }, { id: 2, name: 'Mouse', price: 2000 }, { id: 3, name: 'Keyboard', price: 5000 } ];
//     Goal: ["Laptop", "Mouse", "Keyboard"]
//     Hint: product.name ko return karo.

const products = [{ id: 1, name: 'Laptop', price: 50000 }, { id: 2, name: 'Mouse', price: 2000 }, { id: 3, name: 'Keyboard', price: 5000 }];

const productsNames = products.map((item) => {
    return item.name;
});

// console.log(products);
// console.log(productsNames);

const newPrice = products.map((item) => (item.price * .2) + item.price);

// console.log(products);
// console.log(newPrice);

const num = [1, 2, 3];

const checkNum = num.map(n => n > 1);

// console.log(checkNum);


// Ek array banao numbers = [2, 4, 6, 8].

// map use karke unka Square(n * n) nikal kar naye array mein store karo.

const numbers = [2, 4, 6, 8];

const square = numbers.map(double => double * double);

// console.log(square);

// Ek array banao strings ka['apple', 'banana'] aur map se unhe Uppercase mein convert karo.

const fruits = ["apple", "banana", "orange"];

const newFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
});

// console.log(fruits);
// console.log(newFruits);