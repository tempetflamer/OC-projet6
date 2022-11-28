// DOM Elements
const modal = document.querySelector(".contact");
const btnCloseModal = document.querySelector(".contact__content__close");
const titlePictureLightbox = document.querySelector(".lightbox-modal__content__slides__title");
const btnCloseLightbox = document.querySelector(".lightbox-modal__content__close");

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


//pour l'instant je met dans contact form amis apres je recrér un fichier js nommé lightbox
const lightboxModal = document.querySelector(".lightbox-modal");
const lightboxModalSlides = document.querySelector(".lightbox-modal__content__slides");

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
    createLlightboxModalMedia.alt = title;
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
    lightboxModal.style.display = "block";
    disableScroll();
    displayLightboxMedia(value, img, title);
    btnCloseLightbox.addEventListener("click", closeLightboxModal);
}

function closeLightboxModal() {
    lightboxModal.style.display = "none";
    enableScroll();
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();
}

