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
createBooking();
createBooking("ABC123");
createBooking("ABC123", 40);
createBooking("ABC123", 50, 200);