// DOM Elements
const modal = document.querySelector(".contact");
const btnCloseModal = document.querySelector(".contact__content__close");

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function displayModal() {
    modal.style.display = "block";
    disableScroll();
}

function closeModal() {
    modal.style.display = "none";
    enableScroll();
}

btnCloseModal.addEventListener("click", closeModal);

