"use strict";

// Default Parameters

const booking = [];

const createBooking = function (flight = "LH123", numberOfPassengers = 3, price = 150 * numberOfPassengers) {
    // numberOfPassengers = numberOfPassengers || 10;
    // price = price || 999;
    const bookings = {
        flight,
        numberOfPassengers,
        price,
    }
    console.log(booking);
    booking.push(bookings);
}
// createBooking();
// createBooking("ABC123");
// createBooking("ABC123", 40);
// createBooking("ABC123", 50, 200);

// Passing arguments works, Value vs Reference

const flight = "LH123";

const hashim = {
    name: "Hashim Malik",
    passport: 5435235357,
}

const checkIn = function (flightNum, passenger) {
    flightNum = flight;
    passenger.name = "Mr " + passenger.name;

    if (hashim.passport === 5435235357) {
        alert("Check In");
    } else {
        alert("Wrong passport!");
    }
}

// checkIn(flight, hashim.passenger);

// console.log(flight);
// console.log(passenger);

const flightNum = flight;
const passenger = hashim;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}
// newPassport(hashim);
// checkIn(flight, hashim);

let passportName = "Hashim Malik";

const checkPassport = function (name) {
    name = "Mr. " + name; // Humne yahan 'name' ko badla
    console.log("Function ke andar:", name);
};

// checkPassport(passportName); // "Mr. Hashim Malik"

// console.log("Function ke bahar asli variable:", passportName);
// Output: "Hashim Malik" (Asli wala nahi badla!)

// Functions accepting callback functions

const oneWord = function (str) {
    console.log("Before", str);
    return str.replace(/ /g, "").toLowerCase();
}

// const result = oneWord(" HashiM   ");
// console.log("After", result);

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

// Higher-order function
const transformer = function (str, func) {
    console.log("Original String", str);
    console.log("Transformed String", func(str));
    console.log("Transformed by", func.name);
}
// transformer("JavaScript is a Fun", upperFirstWord);
// transformer("JavaScript is a Fun", oneWord);

// Callback function
const high5 = function () {
    console.log("Hi");
};

document.body.addEventListener('click', high5);
// ["Hashim", "Ahmad", "Malik"].forEach(high5);

// Function retruning function

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeting = greet("Hi");
greeting("Hashim");
greeting("Malik");

// const greet2 = greeting => {
// return name => console.log(`${greeting} ${name}`);
// }
// greet2("Hi")("Hashim");

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// const greeting2 = greet2("Hi");
// greeting2("Hashim");
// greeting2("Malik");

// Closures

// const secureBooking = function () {
//     let passenger = 0;
// 
//     return function () {
//         passenger++;
//         console.log(passenger);
//     };
// };
// secureBooking();
// Note: the inner function is never run, due to it is not stored in a variable

const secureBooking = function () {
    let passenger = 0;

    return function () {
        passenger++;
        console.log(passenger);
    }
}

const booker = secureBooking();

booker();
booker();
booker();