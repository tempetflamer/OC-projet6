// DOM Elements
//const btnContact = document.querySelector(".photographer__contact__btn");

//const btnContact = document.querySelector(".photographer");
//const btnContact = window.screen.querySelector(".photographer__contact__btn"); // essayer aevc BOM mais ça marche pas mieux
//console.log(btnContact)

const modal = document.querySelector(".contact");
const btnCloseModal = document.querySelector(".contact__content__close");
//console.log(modal)

//il ne trouve aps les informations et je me demande si le fait que je créer les élément à partir du js 'empêche de les récupérer à partir de document
// si je prend juste la section photographer ça marche, donc oui, c'est bien un problème avec le fait de le créer avec js dans le dom et non le fichier html
// Soit je fais la création directement au meême encdroit que le javascript ou je créer cette partie en html 
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function displayModal() {
    //const modal = document.getElementById("contact");
    modal.style.display = "block";
    disableScroll();
}

function closeModal() {
    //const modal = document.getElementById("contact");
    modal.style.display = "none";
    enableScroll();
}

//btnContact.addEventListener("click", displayModal);

btnCloseModal.addEventListener("click", closeModal);


//pour l'instant je met dans contact form amis apres je recrér un fichier js nommé lightbox
const lightboxModal = document.querySelector(".lightbox-modal");

function displayLightboxModal() {
    //const modal = document.getElementById("contact");
    lightboxModal.style.display = "block";
    disableScroll();
}

function closeLightboxModal() {
    //const modal = document.getElementById("contact");
    lightboxModal.style.display = "none";
    enableScroll();
}