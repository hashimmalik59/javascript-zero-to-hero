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

// Task 1(Sum): Aik array banao[5, 10, 15, 20] aur reduce se iska total sum nikal kar dikhao.
//     Task 2(Maximum Value): Isi array[5, 10, 15, 20] par reduce chalao aur dhoondo ke sabse Bara(Max) number konsa hai.
//         Hint: acc ko check karo, agar cur > acc toh cur return karo, warna acc return karo.

const number = [5, 10, 15, 20];

const newNumbers = number.reduce((acc, cur) => acc + cur, 0);

// console.log(number);
// console.log(newNumbers);

const maxVal = number.reduce((acc, cur) => acc > cur ? acc : cur, 0);

// console.log(number);
// console.log(maxVal)

// find method

// 🟢 Level 1: The First Occurrence
// Task: Tumhare paas grades ka ek array hai. find use karke wo pehla grade dhoondo jo fail ho (yani 50 se kam ho).
//     Input: const grades = [85, 92, 44, 78, 30, 95];
//     Goal: 44 (Halaanke 30 bhi fail hai, lekin 44 pehle aaya hai).
//     Hint: grade < 50 return karo.

const grades = [85, 92, 44, 78, 30, 95];

const newGrade = grades.find((item) => item < 50);

// console.log(grades);
// console.log(newGrade);

// 🟡 Level 2: Finding a Specific Object(Important!)
// Task: Tumhare paas users ka array hai.Wo user dhoondo jis ka username "malik123" hai.
//     Input:
// JavaScript
// const users = [
//     { id: 1, username: 'hashim_pro' },
//     { id: 2, username: 'sara_dev' },
//     { id: 3, username: 'malik123' }
// ];
// Goal: { id: 3, username: 'malik123' }
// Hint: user.username === 'malik123' check karo.

const users = [
    { id: 1, username: 'hashim_pro' },
    { id: 2, username: 'sara_dev' },
    { id: 3, username: 'malik123' }
];

const newUser = users.find((item) => item.username === "malik123");

// console.log(users);
// console.log(newUser);

// 🔴 Level 3: The "Not Found" Case
// Task: Ek array mein se wo number dhoondo jo 100 se bara ho.Agar array mein aisa koi number na ho, toh console par check karo ke find kya return karta hai.
//     Input: const points = [10, 25, 50, 80];
// Goal: Dekho ke output undefined aata hai ya nahi.
//     Hint: point > 100

const points = [10, 25, 50, 80];

const newPoint = points.find(item => item > 100);

// console.log(points);
// console.log(newPoint); // undefined

// 🟢 Level 1: Pehla fail grade (< 50)
const grade = [85, 92, 44, 78, 30, 95];
const firstFail = grade.find((item) => item < 50);
// console.log(firstFail); // 44

// 🟡 Level 2: 'malik123' wala user dhoondo
const user = [
    { id: 1, username: 'hashim_pro' },
    { id: 2, username: 'sara_dev' },
    { id: 3, username: 'malik123' }
];
const newUsers = user.find(item => item.username === "malik123");
// console.log(newUsers); // { id:3, username: "malik123" }

// 🔴 Level 3: 100 se bara number dhoondo
const point = [10, 25, 50, 80];
const notFound = point.find((item) => item > 100);
// console.log(notFound); // undefined

// findIndex method

// 🟢 Level 1: The "Where is it?" Task
// Scenario: Tumhare paas prices ka array hai.Tumne dhoondna hai ke wo pehli price kis position(index) par hai jo exactly 100 hai.
//     Input: const prices = [50, 80, 100, 150, 200];
// Goal: Result 2 aana chahiye.
//     Hint: price === 100 use karo.

const price = [50, 80, 100, 150, 200];
const thirdIndex = price.findIndex(item => item === 100);

// console.log(price);
// console.log(thirdIndex); // 2

// 🟡 Level 2: Finding a Specific User ID
// Scenario: Tum ek admin ho aur tumhe ek user ko block karna hai jiski ID 502 hai. Pehle tumhe uska index dhoondna hoga.
//     Input:
//     JavaScript
//     const users = [
//       { id: 101, name: 'Ali' },
//       { id: 502, name: 'Zain' },
//       { id: 305, name: 'Sara' }
//     ];
//     Goal: Result 1 aana chahiye.
//     Hint: u.id === 502 check karo.

const usersID = [
    { id: 101, name: 'Ali' },
    { id: 502, name: 'Zain' },
    { id: 305, name: 'Sara' }
];

const blockID = usersID.findIndex((item) => item.id === 502);

// console.log(usersID);
// console.log(blockID); // 1

// 🔴 Level 3: The "Out of Stock" Case
// Scenario: Tum ek item dhoond rahe ho jo array mein hai hi nahi.Dekho findIndex kya jawab deta hai.
//     Input: const stock = ['Apple', 'Orange', 'Mango'];
// Goal: Banana ka index dhoondo.
//     Expected Result: -1
// Hint: item === 'Banana'

const stock = ['Apple', 'Orange', 'Mango'];

const noStock = stock.findIndex((item) => item === "banana");

// console.log(stock);
// console.log(noStock); // -1

// some method

// Bhai, mere paas ek shopping cart hai: const cart = [500, 1200, 2100, 450];
//     Code likho jo check kare ke: "Kya cart mein koi aisi item hai jiski price 2000 سے zyada hai?"
//     Code likho jo check kare ke: "Kya cart mein koi aisi item hai jiski price exactly 100 hai?"(Dono some se karo).

const cart = [500, 1200, 2100, 450];

const priceAbove2000 = cart.some((item) => item > 2000);

// console.log(cart);
// console.log(priceAbove2000); // true

const price1000 = cart.some(item => item === 100);

// console.log(cart);
// console.log(price1000); // false

// Bhai, socho mere paas ek khali array hai: const empty = [];
//     empty.some(x => x > 0) ka result kya hoga?
//     empty.every(x => x > 0) ka result kya hoga?

const empty = [];

const newEmpty = empty.some(x => x > 0);

// console.log(empty);
// console.log(newEmpty);

// 🟢 Level 1: Exam Results
// Scenario: Ek student ke grades ka array hai. Aapne do cheezein check karni hain.
//     Input: const grades = [60, 75, 45, 90, 82];
//     Task A: Check karo kya kam az kam ek subject mein student fail hai (Fail < 50).
//     Task B: Check karo kya student saare subjects mein pass hai (Pass >= 50).

const score = [60, 75, 45, 90, 82];

const newScore = score.some((subject) => subject < 50);

// console.log(score);
// console.log(newScore);

// 🟡 Level 2: Password Validator
// Scenario: Ek array mein password ki requirements hain (e.g., length, special characters, numbers). Maan lo hum sirf length check kar rahe hain.
//     Input: const passwords = ['abc123', 'password', 'secure786', 'hi'];
//     Task: Check karo kya saare passwords 3 characters se zyada baray hain?
//     Goal: Result false aana chahiye kyunki 'hi' sirf 2 characters ka hai.

const passwords = ['abc123', 'password', 'secure786', 'hi'];

const passLength = passwords.some((item) => item > 3);

// console.log(passwords);
// console.log(passLength);

// 🔴 Level 3: Grocery Store (The Mix)
// Scenario: Aap ek store chala rahe ho. Aapke paas products ke objects hain.
// JavaScript
// const fruits = [
//   { name: 'Apple', stock: 10 },
//   { name: 'Orange', stock: 0 },
//   { name: 'Mango', stock: 5 }
// ];
//     Task A: Kya store mein kuch fruits out of stock hain? (stock === 0)
//     Task B: Kya store mein saare fruits ka stock 0 se zyada hai?

const fruitsObj = [
    { name: 'Apple', stock: 10 },
    { name: 'Orange', stock: 0 },
    { name: 'Mango', stock: 5 }
];

const stocks = fruitsObj.some((item) => item.stock === 0);

const newStocks = fruitsObj.some((item) => item.stock < 0);

// console.log(fruitsObj);
// console.log(stocks);
// console.log(newStocks);

// every method

// Level 1: Aapke paas ages hain: [18, 21, 25, 30, 19].Check karo kya sab ke sab adults(>= 18) hain ?
//     Level 2: Aapke paas temperatures hain: [32, 35, 39, 41, 25].Check karo kya saare din mausam thanda tha ? (Thanda < 30).
//         Level 3(Object): ```javascript const users = [ { name: 'Ali', hasPaid: true }, { name: 'Sana', hasPaid: true }, { name: 'Zain', hasPaid: false } ];
// Check karo kya **sab users** ne fees pay kar di hai?

const age = [18, 21, 25, 30, 19];

const adult = ages.every((item) => item >= 18);

// console.log(age);
// console.log(adult);

const temperature = [32, 35, 39, 41, 25];

const cool = temperature.every(item => item < 30);

// console.log(temperature);
// console.log(cool);

const userData = [{ name: 'Ali', hasPaid: true }, { name: 'Sana', hasPaid: true }, { name: 'Zain', hasPaid: true }];

const userFee = userData.every(student => student.hasPaid);

// console.log(userData);
// console.log(userFee);

// 🟢 Level 1: Age Verification
// Scenario: Ek club mein entry ke liye zaroori hai ke saare dost 18 saal ya us se baray hon.
//     Input: const groupAges = [18, 21, 25, 30, 19];
//     Task: Check karo kya sab ke sab adults hain?
//     Expected Result: true

const groupAges = [18, 21, 25, 30, 19];

const checkAdults = groupAges.every((age) => age >= 18);

// console.log(groupAges);
// console.log(checkAdults);

// 🟡 Level 2: Weather Check
// Scenario: Aapne check karna hai ke kya pura hafta mausam thanda raha ? (Thanda < 30).
//     Input : const temps = [32, 35, 39, 41, 25];
// Task: Check karo kya saare temperatures 30 se kam hain ?
//     Expected Result: false(Kyunki sirf aakhri wala 30 se kam hai).

const temps = [32, 35, 39, 41, 55];

const isCold = temps.every((item) => item < 30);

// console.log(temps);
// console.log(isCold);

// 🔴 Level 3: Fees Payment (The Object Task)
// Scenario: Aap aik teacher ho aur aapne check karna hai ke kya poori class ne fees jama karwa di hai?
// JavaScript
// const students = [
//   { name: 'Ali', hasPaid: true },
//   { name: 'Sana', hasPaid: true },
//   { name: 'Zain', hasPaid: false }
// ];
//     Task: Check karo kya hasPaid saare students ke liye true hai?
//     Expected Result: false (Kyunki Zain ne pay nahi ki).

const studentsObj = [
    { name: 'Ali', hasPaid: true },
    { name: 'Sana', hasPaid: true },
    { name: 'Zain', hasPaid: false }
];

const studentsPay = studentsObj.every((item) => item.hasPaid === true);

// console.log(studentsObj);
// console.log(studentsPay);

// flat method

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10]]]];

// console.log(arr);
// console.log(arr.flat(1));
// console.log(arr.flat(2));
// console.log(arr.flat(3));
// console.log(arr.flat(Infinity));

// 🟢 Level 1: The Simple Merge
// Scenario: Aapke paas do mukhtalif cities ki sales ka data hai jo alag alag arrays mein hai. Inhein aik hi list mein convert karo.
//     Input: const sales = [[150, 200], [300, 450], [100, 500]];
//     Task: Isay flat karo taake humein total sales ki aik hi array mil jaye.
//     Expected Result: [150, 200, 300, 450, 100, 500]

const sales = [[150, 200], [300, 450], [100, 500]];

// console.log(sales);
// console.log(sales.flat(1));

// 🟡 Level 2: The Depth Challenge
// Scenario: Aapke paas aik categories ka array hai jis mein sub-categories mazeed arrays ke andar hain.
//     Input: const categories = ['Electronics', ['Mobile', ['iPhone', 'Samsung']], 'Clothing', ['Shirts', 'Jeans']];
//     Task 1: Isay flat(1) kar ke dekho kya result aata hai.
//     Task 2: Isay flat(2) kar ke dekho taake iPhone aur Samsung bhi bahar aa jayein.

const categories = ['Electronics', ['Mobile', ['iPhone', 'Samsung']], 'Clothing', ['Shirts', 'Jeans']];

// console.log(categories);
// console.log(categories.flat(1));
// console.log(categories.flat(2));

// 🔴 Level 3: Cleanup the Empty Mess
// Scenario: Kabhi kabhi array mein khali slots (empty items) reh jati hain. flat unhein khud hi saaf kar deta hai.
//     Input: const messyArray = [1, 2, , 4, [5, , 6]];
//     Task: Isay flat karo aur dekho kya empty slots gayab hoti hain?
//     Hint: Bas .flat() use karo, ye khali jagahon ko bypass kar deta hai.

const messyArray = [1, 2, , 4, [5, , 6]];

// console.log(messyArray);
// console.log(messyArray.flat(1));

// flatMap method

const accounts = [
    { movements: [200, 450, -400] },
    { movements: [500, 700, -100] }
];

const allMovesNested = accounts.map(acc => acc.movements);

const allMovesFlat = allMovesNested.flat();

// console.log(accounts);
// console.log(allMovesNested);
// console.log(allMovesFlat);

const orders = [
    { id: 1, items: ['Pizza', 'Burger'] },
    { id: 2, items: ['Coke', 'Fries'] },
    { id: 3, items: ['Cake'] }
];

// Task: flatMap use karke saare items ki aik single array banao.
// Goal: ['Pizza', 'Burger', 'Coke', 'Fries', 'Cake']

// Code likho aur batao: Kya flatMap use karte waqt hum depth bata sakte hain(jaise flat(2)) ?

const itemArr = orders.map((item) => item.items);
const itemArr2 = orders.flatMap((item) => item.items);

// console.log(orders);
// console.log(itemArr);
// console.log(itemArr2);

// Scenario: Aapke paas aik school ki classes ka data hai. Har class mein students ke naam ka array hai.
// JavaScript
// const school = [
//   { class: 'A', students: ['Ali', 'Sana'] },
//   { class: 'B', students: ['Zain', 'Abbas'] }
// ];
// Task: flatMap use karke saare students ki ek hi array banao.

const school = [
    { class: 'A', students: ['Ali', 'Sana'] },
    { class: 'B', students: ['Zain', 'Abbas'] }
];

const newSchool = school.flatMap((item) => item.students);

// console.log(school);
// console.log(newSchool);

// 🟢 Level 1: Tag Cloud
// Scenario: Aap ek blog website bana rahe ho. Har post ke apne tags hain. Aapne saare tags ki aik single list banani hai taake "Trending Tags" dikha saken.
//     Input:
//     JavaScript
// const posts = [
//   { title: 'JS Tips', tags: ['coding', 'javascript'] },
//   { title: 'Travel', tags: ['mountains', 'nature'] }
// ];
// Task: flatMap use kar ke saare tags ko ek hi array mein lao.
// Expected Result: ['coding', 'javascript', 'mountains', 'nature']

const posts = [
    { title: "JS Tip", tags: ["coding", "javascript"] },
    { title: "Travel", tags: ["mountains", "nature"] },
]

const trendingTags = posts.flatMap((item) => item.tags);

// console.log(posts);
// console.log(trendingTags);

// 🟡 Level 2: Number Doubler(The Creative Way)
// Scenario: flatMap sirf objects ke liye nahi hai.Ye array ka size badhane ke liye bhi use ho sakta hai.Agar aap aik number ke badle aik array return karein, toh flatMap usay khol dega.
//     Input: const numbers = [1, 2, 3];
// Task: numbers.flatMap(num => [num, num * 2]) likho aur dekho kya hota hai.
//     Logic: Har number ke liye hum aik array return kar rahe hain[number, uska double].
// Goal: Result aana chahiye[1, 2, 2, 4, 3, 6].

const numArr = [1, 2, 3];

const newNumArr = numArr.flatMap((item) => [item, item * 2]);

// console.log(numArr);
// console.log(newNumArr);

// 🔴 Level 3: Inventory Management
// Scenario: Ek store mein different boxes hain, aur har box mein items ki list hai.
//     Input:
//     JavaScript
// const warehouse = [
//   { boxId: 'A1', items: ['Laptop', 'Mouse'] },
//   { boxId: 'B2', items: ['Keyboard', 'Monitor'] },
//   { boxId: 'C3', items: [] } // Khali box
// ];
// Task: flatMap se saare items ki ek clean list banao.
// Note: Dekho flatMap khali array [] ke sath kya karta hai (Spoiler: Wo usay gayab kar dega!).

const warehouse = [
    { boxId: 'A1', items: ['Laptop', 'Mouse'] },
    { boxId: 'B2', items: ['Keyboard', 'Monitor'] },
    { boxId: 'C3', items: [] } // Khali box
];

const newWarehouse = warehouse.flatMap((item) => {
    return item.items;
});

// console.log(warehouse);
// console.log(newWarehouse);