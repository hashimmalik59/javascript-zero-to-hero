"use strict";

// Tyoes of Events and Event Handlers

const h1 = document.querySelector("h1");
console.log(h1);

function alertH1() {
    console.log("Hello Body!");

    // It will remove the event after once
    // h1.removeEventListener("mouseenter", alertH1);
}

// h1.addEventlistener("click", alertH1);

h1.addEventListener("mouseenter", alertH1);

// After 5 seconds it will remove the event
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 5000);

// Practice Task for You:
// Ek button banao aur us par mouseenter ka event lagao. Task ye hai ke jab mouse button ke upar aaye, toh button ka background color red ho jaye!

const div = document.querySelector("div");



div.addEventListener("mouseenter", () => {
    div.style.background = "red";
    console.log("Backgeound color is 'red'");
});