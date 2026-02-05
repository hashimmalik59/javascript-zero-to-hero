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

// filter method

// 🟢 Level 1: The Basic Filter (Selection)
// Task: Tumhare paas numbers ka ek array hai. filter use karo aur sirf wo numbers nikaalo jo Even (Juft) hain.
//     Input: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     Goal: [2, 4, 6, 8, 10]
//     Hint: num % 2 === 0 check karo.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = nums.filter(num => num % 2 === 0);

// console.log(nums);
// console.log(evenNums);

// 🟡 Level 2: Real-World Inventory (Data Cleaning)
// Task: Ek e-commerce site ke liye products filter karo. Sirf wo products dikhao jo "In Stock" hain (yani jin ki quantity 0 se zyada hai).
//     Input:
//     JavaScript
// const inventory = [
//   { name: 'iPhone', quantity: 5 },
//   { name: 'Macbook', quantity: 0 },
//   { name: 'Airpods', quantity: 12 },
//   { name: 'Charger', quantity: 0 }
// ];
// Goal: [{ name: 'iPhone', quantity: 5 }, { name: 'Airpods', quantity: 12 }]
// Hint: item.quantity > 0 return karo.

const inventory = [
    { name: 'iPhone', quantity: 5 },
    { name: 'Macbook', quantity: 0 },
    { name: 'Airpods', quantity: 12 },
    { name: 'Charger', quantity: 0 }
];

const newStock = inventory.filter((item) => {
    return item.quantity > 0;
});

// console.log(inventory.quantity);
// console.log(newStock);

// 🔴 Level 3: The Search Logic(String Matching)
// Task: Socho tum ek search bar bana rahe ho.Tumhare paas names ki list hai.Sirf wo names filter karo jin mein letter "a" aata ho.
//     Input: const friends = ['Hashim', 'Bilal', 'Zayn', 'John', 'Musa'];
// Goal: ['Hashim', 'Bilal', 'Zayn', 'Musa'](John nikal jayega kyunki usmein 'a' nahi hai).
//     Hint: .includes('a') ya.toLowerCase().includes('a') use karo.

const friends = ['Hashim', 'Bilal', 'Zayn', 'John', 'Musa'];

const letterA = friends.filter(function (a) {
    return a.includes("a");
});

// console.log(friends);
// console.log(letterA);

// 📝 Pro Challenge (Map + Filter Combo!) 🚀
// Challenge: Ye real project wala sawal hai. Tumhare paas bank transactions hain.
//     Pehle sirf Deposits (positive numbers) filter karo.
//     Phir un deposits par Interest (5%) add karke unhe badal (map) do.
//     Input: const transactions = [-200, 500, -100, 1000, 3000, -50];
//     Final Output: [525, 1050, 3150]
//     Hint: Pehle .filter() lagao, phir uske foran baad .map() jorr do (Chaining).

const transactions = [-200, 500, -100, 1000, 3000, -50];

const newTransactions = transactions.filter(value => value > 0).map(value => (value * .05) + value);

// console.log(transactions);
// console.log(newTransactions);

// Array: const ages = [12, 18, 22, 15, 30, 45, 10];
// Task: Ek naya array banao adults jo sirf un logon ko rakhe jin ki age 18 ya 18 se zyada hai.
// Advanced Task: Ek array lo ['apple', 'banana', 'apricot', 'orange'] aur sirf wo fruits filter karo jo 'a' se shuru hote hain (Hint: str.startsWith('a')).

const ages = [12, 18, 22, 15, 30, 45, 10];

const adults = ages.filter((age) => age >= 18);

// console.log(ages);
// console.log(adults);

const fruit = ["apple", "banana", "apricot", "orange"];

const fruitA = fruit.filter((a) => a[0] === "a");

// console.log(fruit);
// console.log(fruitA);

// reduce method

// 🟢 Task 1: Total Expenses
// Tumhare paas mahine ke kharchon (expenses) ka array hai. Unka total nikalo.
//     Input: const expenses = [500, 1200, 300, 4500];
//     Initial Value: 0
//     Expected Output: 6500

const expenses = [500, 1200, 300, 4500];

const total = expenses.reduce((acc, currVal) => acc + currVal, 0);

// console.log(expenses);
// console.log(total);

// 🟡 Task 2: Maximum Value(Dimaag lagao!)
// reduce ko use karke array mein se sabse bara number dhoondo.
//     Input: const scores = [45, 89, 23, 98, 55];
// Hint: Accumulator mein wo number rakho jo ab tak "Sabse Bara" mila hai.Har step par check karo: acc > cur ? acc : cur.
//     Initial Value: scores[0](Pehla number).

const scores = [45, 89, 23, 98, 55];

const maximumValue = scores.reduce((acc, currVal) => acc > currVal ? acc : currVal, 0);

// console.log(scores);
// console.log(maximumValue);