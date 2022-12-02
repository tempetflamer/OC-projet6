// DOM Elements
const modal = document.querySelector(".contact");
const btnCloseModal = document.querySelector(".contact__content__close");
const inputFirstname = document.getElementById("prenom");
const inputLastname = document.getElementById("nom"); //non utilisé
const inputEmail = document.getElementById("email"); //non utilisé
const inputMessage = document.getElementById("message"); //non utilisé
const submitForm = document.getElementById("submit-btn"); //non utilisé

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function displayModal() {
    modal.style.display = "flex";
    inputFirstname.focus()
    disableScroll();
    trapFocusContact();
}

function closeModal() {
    modal.style.display = "none";
    enableScroll();
}

btnCloseModal.addEventListener("click", closeModal);



// Check form

function getCheckName(element, value) {

    // variables
    const parent = element.parentNode;
    let isValid = false;

    //debug
    console.log(parent);
    console.log(element.id)

    if ((value.length < 3 || !value.match(/^[A-Za-z\é\è\ê\-]+$/gm))) {
        const error = document.createElement('span');
        error.classList.add("error");
        error.textContent = "Le " + (element.id).replace('e','é') + " doit être composé de 3 lettres minimum";
        parent.appendChild(error);
    }
    else {
        isValid = true;
    }

}

function getCheckMail(element, value) {

    // variables
    const parent = element.parentNode;
    let isValid = false;

    //debug
    console.log(parent);
    console.log(element.id)



    if (!value.match(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,9}/mg)) {
        const error = document.createElement('span');
        error.classList.add("error");
        error.textContent = "L\'adresse email entrée n\'est pas valide";
        parent.appendChild(error);
    }
    else {
        isValid = true;
    }

}

function getCheckMessage(element, value) {

    // variables
    const parent = element.parentNode;
    let isValid = false;

    //debug
    console.log(parent);
    console.log(element.id)



    if (!value) {
        const error = document.createElement('span');
        error.classList.add("error");
        error.textContent = "Le message est vide";
        parent.appendChild(error);
    }
    else {
        isValid = true;
    }

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


    getCheckName(inputFirstname, setFirstname);
    getCheckName(inputLastname, setLastname);
    getCheckMail(inputEmail, setEmail);
    getCheckMessage(inputMessage, setMessage);

}

submitForm.addEventListener("click", (e) => submitContact(e));