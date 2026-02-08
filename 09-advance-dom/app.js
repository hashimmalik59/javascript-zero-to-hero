"use strict";

// Tyoes of Events and Event Handlers

const h1 = document.querySelector("h1");

function alertH1() {
    console.log("Hello Body!");

    // It will remove the event after once
    // h1.removeEventListener("mouseenter", alertH1);
}

// h1.addEventlistener("click", alertH1);

// h1.addEventListener("mouseenter", alertH1);

// After 5 seconds it will remove the event
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 5000);

// Practice Task for You:
// Ek button banao aur us par mouseenter ka event lagao. Task ye hai ke jab mouse button ke upar aaye, toh button ka background color red ho jaye!

const div = document.querySelector(".bg-changer");

// div.addEventListener("mouseenter", () => {
//     div.style.background = "red";
//     console.log("Backgeound color is 'red'");
// });

// 🟢 Practice Exercises(Types of Events & Handling)

// Scenario 1: Input Mirror Ek input field hai.Jab user usmein kuch type kare (input event), toh console mein uska text print ho.
//     JavaScript

const input = document.querySelector(".test-input");

// input.addEventListener("input", (event) => {
//     console.log("User is typing:", event.target.value)
// })

// Scenario 2: Background Changer Ek button par click event lagao jo poori body ka background color "yellow" kar de.
//     JavaScript

const chnageBGBtn = document.querySelector("button");
// chnageBGBtn.addEventListener("click", () => {
//     document.body.style.background = "blue";
// })

// Scenario 3: Double Click Alert Ek image par dblclick event lagao jo alert dikhaye: "Image zoomed!".
//     JavaScript

const profile = document.querySelector("img");

// profile.addEventListener("dblclick", () => {
//     alert("Image Zoomed!");
// });

// Event Propagation Bubbling and Capturing

// Practice Exercise(Try it!)
// Bhai, ye scenario socho: Aapne ek div banaya hai aur uske andar ek button.Aapne div par bhi click event lagaya hai aur button par bhi.
//     Baghair kisi extra code ke button click karo.Kya dono console logs chalenge ?
//     Ab button ke handler mein e.stopPropagation() likho.Kya ab bhi dono chalenge ?

const box = document.querySelector(".propagate");

const boxBtn = document.querySelector(".propagate button");

const message = function (e) {
    e.stopPropagation();
    console.log("Box wale button pe click hua!");
}

// box.addEventListener("click", message);
// boxBtn.addEventListener("click", message);

// 🟢 Level 1: The Bubbling Chain
// Scenario: Aapke paas teen nested elements hain: Global(div) -> Wrapper(div) -> Button.
//     Task: Teeno par click event lagao jo apna naam console mein print karein.
//         Goal: Button par click karke dekho ke console mein order kya aata hai ? Kya pehle Button aata hai ya Global ?

const grandprent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const message2 = function () {
    console.log("div pe click hua");
}

// grandprent.addEventListener("click", message2);
// parent.addEventListener("click", message2);
// child.addEventListener("click", message2);

// 🟡 Level 2: Stop the Spread
// Scenario: Maan lo aapne ek "Modal" (popup box) banaya hai. Jab user modal ke andar click kare toh kuch na ho, lekin jab modal ke bahar (overlay par) click kare toh modal band ho jaye.
//     Task: Button par click event lagao aur e.stopPropagation() use karo.
//     Check: Dekho ke kya button click karne par parent (overlay) ka "Close" wala function chalta hai ya nahi?

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-button");

// overlay.addEventListener("click", () => {
//     modal.classList.add("hide");
//     overlay.classList.add("hide");
//     console.log("modal pop-up and overlay is removed!");
// });

// closeButton.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Close button is clicked!");
// });

// 🔴 Level 3: The Capturing Switch
// Scenario: Wahi teen nested elements(Global -> Wrapper -> Button).
//     Task: Global element ke addEventListener mein teesra parameter true pass karo.Baqi dono ko default (false) rehne do.
//         Goal: Ab Button par click karo.Console mein order check karo.Kya Global ab sabse pehle print ho raha hai ?

// grandprent.addEventListener("click", message2);
// parent.addEventListener("click", message2, false);
// child.addEventListener("click", message2, false);

// grandprent.addEventListener("click", message2);
// parent.addEventListener("click", message2);
// child.addEventListener("click", message2);

// 🏆 Final Challenge(Interception Test)
// Bhai, ab ye code run karke dekho aur mujhe hairat - angez result batao:
//     grandparent par click listener lagao aur teesra parameter true rakho.
//     child par click listener lagao aur us mein e.stopPropagation() likho.
//     Ab child par click karo.

// grandprent.addEventListener("click", message2, true);
// parent.addEventListener("click", message2,);
// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("div pe click hua");
// });