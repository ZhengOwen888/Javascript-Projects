"use strict";

// Get property 
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// Open modal
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}
// Close modal
btnCloseModal.addEventListener("click", closeModal); // closeModal() is incorrect because it will call the function immediately
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
