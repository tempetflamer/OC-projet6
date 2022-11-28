// DOM Elements
//const btnContact = document.querySelector(".photographer__contact__btn");

//const btnContact = document.querySelector(".photographer");
//const btnContact = window.screen.querySelector(".photographer__contact__btn"); // essayer aevc BOM mais ça marche pas mieux
//console.log(btnContact)

const modal = document.querySelector(".contact");
const btnCloseModal = document.querySelector(".contact__content__close");
const titlePictureLightbox = document.querySelector(".lightbox-modal__content__slides__title");
const btnCloseLightbox = document.querySelector(".lightbox-modal__content__close");

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
const lightboxModalSlides = document.querySelector(".lightbox-modal__content__slides");

// Création d'une seul fonction
/* function displayLightboxPicture(value){
    const createLlightboxModalPicture = document.createElement('img');
    createLlightboxModalPicture.src = `./assets/images/${chemin}/${dataMedia.video}`;
    createLlightboxModalPicture.alt = title;
    //createLlightboxModalPicture.type = "video/mp4";
    //video.role = "link";
    createLlightboxModalPicture.classList.add('lightbox-modal__slides__img');
    lightboxModalSlides.appendChild(createLlightboxModalPicture);
}

function displayLightboxVideo(){
    const createLlightboxModalVideo = document.createElement('video');
    createLlightboxModalVideo.src = `./assets/images/${chemin}/${dataMedia.video}`;
    createLlightboxModalVideo.alt = title;
    createLlightboxModalVideo.type = "video/mp4";
    //video.role = "link";
    createLlightboxModalVideo.classList.add('lightbox-modal__slides__img');
    lightboxModalSlides.appendChild(createLlightboxModalVideo);
} */

function displayLightboxMedia(value, img, title) {
    let createLlightboxModalMedia = "";

    if (value == "video") {
        createLlightboxModalMedia = document.createElement('video');
        createLlightboxModalMedia.src = img;
        createLlightboxModalMedia.type = "video/mp4";
        createLlightboxModalMedia.controls = true;
    }
    else {
        createLlightboxModalMedia = document.createElement('img');
        createLlightboxModalMedia.src = img;

    }
    createLlightboxModalMedia.alt = title; //tabindex="0"
    //video.role = "link";
    createLlightboxModalMedia.classList.add('lightbox-modal__content__slides__media');
    createLlightboxModalMedia.tabIndex = 1;
    lightboxModalSlides.appendChild(createLlightboxModalMedia);

    //Create image title on <p> balise
    const createtitlePictureLightbox = document.createElement('p');
    createtitlePictureLightbox.textContent = title;
    createtitlePictureLightbox.classList.add('lightbox-modal__content__slides__title');
    createtitlePictureLightbox.tabIndex = 2;
    lightboxModalSlides.appendChild(createtitlePictureLightbox);
}

/**
 * 
 * @param {*} value //text value for video or img
 * @param {*} img // image source
 */
function displayLightboxModal(value, img, title) {
    //const modal = document.getElementById("contact");
    lightboxModal.style.display = "block";
    disableScroll();
    displayLightboxMedia(value, img, title);
    btnCloseLightbox.addEventListener("click", closeLightboxModal);
}

function closeLightboxModal() {
    //const modal = document.getElementById("contact");
    lightboxModal.style.display = "none";
    enableScroll();
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

}

