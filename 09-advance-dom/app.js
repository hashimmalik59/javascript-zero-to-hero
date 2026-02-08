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

// 🟢 Practice Exercises(Types of Events & Handling)

// Scenario 1: Input Mirror Ek input field hai.Jab user usmein kuch type kare (input event), toh console mein uska text print ho.
//     JavaScript

const input = document.querySelector(".test-input");

input.addEventListener("input", (event) => {
    console.log("User is typing:", event.target.value)
})

// Scenario 2: Background Changer Ek button par click event lagao jo poori body ka background color "yellow" kar de.
//     JavaScript

const chnageBGBtn = document.querySelector("button");
chnageBGBtn.addEventListener("click", () => {
    document.body.style.background = "blue";
})

// Scenario 3: Double Click Alert Ek image par dblclick event lagao jo alert dikhaye: "Image zoomed!".
//     JavaScript

const profile = document.querySelector("img");

profile.addEventListener("dblclick", () => {
    alert("Image Zoomed!");
})