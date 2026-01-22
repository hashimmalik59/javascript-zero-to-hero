// Accessing Elements
const modalButton = document.querySelector(".button-parent");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close");

modalButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log("Modal opened!")
});

closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    console.log("Modal Closed!");
});