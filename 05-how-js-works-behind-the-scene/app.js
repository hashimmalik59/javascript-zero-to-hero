"use strict";

// Scope Chain

const a = "Hashim";
// first();

function first() {
    const b = "Hello";
    second();

    function second() {
        const c = "Hi";
        third();
    }
}

function third() {
    const d = "Hey";
    // console.log(d + c + b + a); // c and b is not defined becacuse they are not accessbile due function scope third() is outside first()
}

function calcAge(birthYear) {
    let age = 2026 - birthYear;
    console.log(firstName);

    function printAge() {
        const output = `${firstName}, age is ${age}, and also his birth year is ${birthYear}`;
        console.log(output);
        age = 2026 - 2001;

        if (birthYear >= 2002 && birthYear <= 2026) {
            var millenial = true;
            const firstName = "Malik"; // this firstName is the nearest according to scope chain(lookup)
            const str = `${firstName}, Oh you are above 18, your age is ${age}`;

            console.log(str);
        }

        console.log(millenial); // true (var is function scope)

        function add(a, b) {
            return a + b;
        }
    }
    console.log(age);
    // add(2, 3); // add() invokation is outside of add() body

    printAge();

    return age;
}
const firstName = "Hashim";
// calcAge(2002);
// console.log(age); // ReferenceError (because 'age' is function scope)

// Hositng & Temporal Dead Zone

// Variables hoisting

// console.log(name); // undefined (hosits)
// console.log(age); // ReferenceError (TDZ woh area jahan yeh variable accessible nahi hai)
// console.log(job); // ReferenceError (TDZ woh area jahan yeh variable accessible nahi hai)

// var name = "Hashim";
let age = 23;
const job = "developer";

// Function hoisting

// console.log(addDecl(2, 3)); // Only function is used before declaration is function declaration
// console.log(addExpress(4, 5)); // ReferenceError (TDZ due to const)
// console.log(addArrow(1, 2)); // ReferenceError (TDZ due to let)

function addDecl(a, b) {
    return a + b;
}
const addExpress = function (a, b) {
    return a + b;
}
let addArrow = (a, b) => a + b;
// var addArrow = (a, b) => a + b; // var hoist but undefined, but undefined cannot be invoked
// TypeError: addArrow is not a function

if (!numOfProducts) deleteShoppingCart(); // here numOfProducts = undefined, due to hoist undefined is a falsy value it so !false into true => then deleteShoppingCart() invoke

var numOfProducts = 10;

function deleteShoppingCart() {
    // console.log("Delete all products!")
}

// Note: Always avoid 'var' because it's produce errors

var x = 1; // 'var' is window object
let y = 2;
const z = 3;

// console.log(x === window.x); // true(due to 'var' is a part of window object)
// console.log(y === window.y);
// console.log(z === window.z);
// let & const is not a part of window object

// 'this' keyword

// console.log(this); // Browser mein window object

function checkThis() {
    console.log(this); // undefined
}
// checkThis();

const hashim = {
    name: "Hashim",
    greet: function () {
        console.log(`Salaam, main hoon ${this.name}`);
    }
};
// hashim.greet(); // Output: "Salaam, main hoon Hashim" (yahan this = hashim object)

let myFirstName = "Ahmad";

const obj = {
    myFirstName: "Hashim",
    normal: function () { console.log("Normal:", this.myFirstName); },
    arrow: () => { console.log("Arrow:", this.myFirstName); }
};

// obj.normal(); // Output: Hashim (Kyunki normal function ne call karne wale ko dekha)
// obj.arrow();  // Output: undefined (Kyunki arrow function ne bahar Global scope ko dekha)

function calcAgeDecl(birthYear) {
    console.log(2026 - birthYear);
    console.log(this);
}
// calcAgeDecl(2002);


const calcAgeArr = (birthYear) => {
    console.log(2026 - birthYear);
    console.log(this);
}
// calcAgeArr(2002);

// Regular vs Arrow function

var name = "Malik";

const myData = {
    name: "Hashim",
    birthYear: 2002,
    calcAge: function () {
        console.log(this);
        console.log(2026 - this.birthYear);
        const isMillenial = () => {
            console.log(this);
            console.log(this.birthYear >= 2002 && this.birthYear <= 2026);
        }
        isMillenial();
    },


    greet: function () {
        console.log(this);
        console.log(`Hey ${this.name}`);
    }
}
// myData.calcAge();
// myData.greet(); // arrow function doesn't have its own 'this' ketword, it used its parent/lexical this

// Note: Always avoid arrow function as a method

const addExpre = function (a, b) {
    console.log(arguments);
    return a + b;
}
// console.log(addExpre(4, 5));

const addArr = () => {
    console.log(arguments);
    return a + b;
}
// addArr(); in arrow function argumenst keyword is not defined

// Object references in shallow and deep copy

const userData = {
    firstName: "Hashim",
    lastName: "Malik",
    age: 2026 - 2002,
}

const newData = userData;

newData.lastName = "Ahmad";

function changeName(objName, newName) {
    objName.lastName = newName;
    return objName;
}
changeName(newData, "Khan");

// console.log("Before", userData);
// console.log("After", newData);

const friendData = {
    firstName: "Ali",
    lastName: "Khan",
    age: 20,
    location: {
        country: "Pakistan",
        city: "Peshawar",
        area: "Tehsil gor khatri",
    },
    skills: ["HTML", "CSS", "JS"],
}

// Shallow copy(avoiding copy on surface level)
const newFriendData = { ...friendData };

newFriendData.firstName = "Muhammad";
newFriendData.location.city = "Islamabad"; // because spread operator allows copying references on nested level
newFriendData.skills.push("ReactJS");
newFriendData.skills.push("TailwindCSS");

// console.log("-----------Shallow Copy-----------");
// console.log(friendData);
// console.log(newFriendData);

// Deep copy, can clone/copy also nested on deep level
const friendClone = structuredClone(friendData);

// console.log("------------Deep Copy----------");
// console.log(friendData);
// console.log(newFriendData);

friendClone.firstName = "Umar";
friendClone.location.city = "Karachi";
friendClone.skills.push("TailwindCSS");

// console.log("friendData", friendData);
// console.log("newFriendData", newFriendData);
// console.log("friendClone", friendClone);

const obj1 = {
    firstName: "Zia",
    lastName: "Bob",
    friendNames: ["Sam", "Jordan", "Roy"],
}
const obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

obj2.firstName = "John";

// console.log(obj1);

const obj3 = { ...obj1 };

obj3.firstName = "Chris";

// console.log(obj1);
// console.log(obj3);

const obj4 = structuredClone(obj1);

obj4.firstName = "Starc";
obj4.friendNames.push("Smith");

// console.log(obj1);
// console.log(obj4);