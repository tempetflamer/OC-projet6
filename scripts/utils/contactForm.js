// DOM Elements
const contactModal = document.querySelector(".contact");
const contactContentModal = document.querySelector(".contact__content");
const btnCloseContactModal = document.querySelector(".contact__content__close");
const contactForm = document.getElementById("contact-form");
const submitContactForm = document.getElementById("submit-btn");

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function displayModal() {
    // Display
    contactModal.style.display = "flex";
    contactModal.style.animation = "fadein 0.5s ease-in-out";
    contactContentModal.style.animation = "modalopen 0.5s ease-in-out";

    document.getElementById("prenom").focus()
    disableScroll();

    // Change accessibility focus
    sectionPhotographer.ariaHidden = true;
    sectionStats.ariaHidden = true;
    sectionGallery.ariaHidden = true;
    partHeader.ariaHidden = true;
}

function closeModal() {
    contactModal.style.animation = "fadeout 0.5s ease-in-out";
    setTimeout(function() {
        contactModal.style.display = "none";
        enableScroll();
    }, 480);
    document.querySelector(".photographer__contact__btn").focus();

    // Change accessibility focus
    sectionPhotographer.ariaHidden = false;
    sectionStats.ariaHidden = false;
    sectionGallery.ariaHidden = false;
    partHeader.ariaHidden = false;
}

btnCloseContactModal.addEventListener("click", closeModal);

/**
 *  Function check firstname and lastname fields
 * @param {HTMLElement} element - lastname or firstname field
 * @param {string} value - field value
 * @returns - Bool value
 */
function getCheckName(element, value) {

    // variables
    const parent = element.parentNode;
    let isValid = false;

    if ((value.length < 3 || !value.match(/^[A-Za-z\é\è\ê\-]+$/gm))) {
        const error = document.createElement('span');
        error.classList.add("error");
        error.textContent = "Le " + (element.id).replace('e', 'é') + " doit être composé de 3 lettres minimum";
        parent.appendChild(error);
    }
    else {
        isValid = true;
    }

    return isValid;
}

/**
 * Function check email field
 * @param {HTMLElement} element - email field
 * @param {string} value - field value
 * @returns - Bool value
 */
function getCheckMail(element, value) {

    // variables
    const parent = element.parentNode;
    let isValid = false;

    if (!value.match(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,9}/mg)) {
        const error = document.createElement('span');
        error.classList.add("error");
        error.textContent = "L\'adresse email entrée n\'est pas valide";
        parent.appendChild(error);
    }
    else {
        isValid = true;
    }

    return isValid;
}

/**
 *  Function check message field
 * @param {HTMLElement} element - message field
 * @param {string} value - field value
 * @returns - Bool value
 */
function getCheckMessage(element, value) {

    // variables
    const parent = element.parentNode;
    let isValid = false;

    if (!value) {
        const error = document.createElement('span');
        error.classList.add("error");
        error.textContent = "Le message est vide";
        parent.appendChild(error);
    }
    else {
        isValid = true;
    }

    return isValid;
}

function submitContact(e) {
    e.preventDefault();

    // delete each error existing before processing
    document.querySelectorAll(".error").forEach((e) => e.remove());

    // DOM elements
    const inputFirstname = document.getElementById("prenom");
    const inputLastname = document.getElementById("nom");
    const inputEmail = document.getElementById("email");
    const inputMessage = document.getElementById("message");

    // DOM elements value
    const setFirstname = document.getElementById("prenom").value;
    const setLastname = document.getElementById("nom").value;
    const setEmail = document.getElementById("email").value;
    const setMessage = document.getElementById("message").value;


    const firstnameChecker = getCheckName(inputFirstname, setFirstname);
    const lastnameChecker = getCheckName(inputLastname, setLastname);
    const emailChecker = getCheckMail(inputEmail, setEmail);
    const messageChecker = getCheckMessage(inputMessage, setMessage);

    if (firstnameChecker && lastnameChecker && emailChecker && messageChecker) {
        console.log("Prénom : " + setFirstname);
        console.log("Nom : " + setLastname);
        console.log("Email : " + setEmail);
        console.log("Message : " + setMessage);
        closeModal();
        contactForm.reset();
    }

}

submitContactForm.addEventListener("click", (e) => submitContact(e));
trapFocus("contact");