// DOM Elements
const titlePictureLightbox = document.querySelector(".lightbox-modal__content__slides__title");
const btnCloseLightbox = document.querySelector(".lightbox-modal__content__close");
const lightboxModal = document.querySelector(".lightbox-modal");
const lightboxModalSlides = document.querySelector(".lightbox-modal__content__slides");
const btnPrevLightbox = document.getElementById("prev");
const btnNextLightbox = document.getElementById("next");

/* const lightboxModalMedia = document.querySelector(".lightbox-modal__content__slides__media");
const mediaDataset = parseInt(lightboxModalMedia.dataset.num) */
let setIndexMedia = 0;

const sectionPhotographer = document.querySelector(".photographer");
const sectionStats = document.querySelector(".stats");
const sectionGallery = document.querySelector(".gallery");
const partHeader = document.querySelector("header");

let arrayLightbox = new Map();
let indexLightbox = 0;

/**
 * Function to init an array of all media
 * @param {*} value - media type (video or picture)
 * @param {*} media - media link
 * @param {*} title - media name
 */
function initArrayLightbox(value, media, title) {
    arrayLightbox.set(indexLightbox, [title, media, value]);
    indexLightbox = indexLightbox + 1;
}

/**
 * @param {*} e - numéro du média
 * @param {*} value - media type (video or picture)
 * @param {*} img - media link
 * @param {*} title - media name
 */
function displayLightboxMedia(e, value, img, title) {
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
    createLlightboxModalMedia.classList.add('lightbox-modal__content__slides__media');
    createLlightboxModalMedia.dataset.num = e
    lightboxModalSlides.appendChild(createLlightboxModalMedia);

    //Create image title on <p> balise
    const createtitlePictureLightbox = document.createElement('p');
    createtitlePictureLightbox.textContent = title;
    createtitlePictureLightbox.classList.add('lightbox-modal__content__slides__title');
    lightboxModalSlides.appendChild(createtitlePictureLightbox);
}

/**
 * @param {*} indexMedia - numéro du média
 * @param {*} value - media type (video or picture)
 * @param {*} img - media link
 * @param {*} title - media name
 */
function swapLightboxMedia(indexMedia, value, img, title) {
    let createLlightboxModalMedia = "";

    if (arrayLightbox.get(indexMedia)[2] == "video") {
        createLlightboxModalMedia = document.createElement('video');
        createLlightboxModalMedia.src = arrayLightbox.get(indexMedia)[1];
        createLlightboxModalMedia.type = "video/mp4";
        createLlightboxModalMedia.controls = true;
    }
    else {
        createLlightboxModalMedia = document.createElement('img');
        createLlightboxModalMedia.src = arrayLightbox.get(indexMedia)[1];

    }
    createLlightboxModalMedia.alt = arrayLightbox.get(indexMedia)[0];
    createLlightboxModalMedia.classList.add('lightbox-modal__content__slides__media');
    createLlightboxModalMedia.dataset.num = indexMedia;
    lightboxModalSlides.appendChild(createLlightboxModalMedia);

    //Create image title on <p> balise
    const createtitlePictureLightbox = document.createElement('p');
    createtitlePictureLightbox.textContent = arrayLightbox.get(indexMedia)[0];
    createtitlePictureLightbox.classList.add('lightbox-modal__content__slides__title');
    lightboxModalSlides.appendChild(createtitlePictureLightbox);
}

/**
 * @param {*} e - numéro du média
 * @param {*} value - media type (video or picture)
 * @param {*} img - media link
 * @param {*} title - media name
 */
function displayLightboxModal(e, value, img, title) {
    //change accessibility focus
    sectionPhotographer.ariaHidden = true;
    sectionStats.ariaHidden = true;
    sectionGallery.ariaHidden = true;
    partHeader.ariaHidden = true;

    lightboxModal.style.display = "block";
    btnPrevLightbox.focus()
    disableScroll();
    displayLightboxMedia(e, value, img, title);
    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    var lightboxModalMedia = document.querySelector(".lightbox-modal__content__slides__media");
    setIndexMedia = parseInt(lightboxModalMedia.dataset.num);

    btnPrevLightbox.addEventListener("click", (event) => { prevPictureLightboxModal(setIndexMedia, value, img, title); });
    btnNextLightbox.addEventListener("click", (event) => { nextPictureLightboxModal(setIndexMedia, value, img, title); });
    trapFocusLightbox();
}

function closeLightboxModal() {
    lightboxModal.style.display = "none";
    enableScroll();
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    //change accessibility focus
    sectionPhotographer.ariaHidden = false;
    sectionStats.ariaHidden = false;
    sectionGallery.ariaHidden = false;
    partHeader.ariaHidden = false;
}

/**
 * @param {*} e - numéro du média
 * @param {*} value - media type (video or picture)
 * @param {*} img - media link
 * @param {*} title - media name
 */
function prevPictureLightboxModal(indexMedia, value, img, title) {
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    if (setIndexMedia == 0) {
        setIndexMedia = arrayLightbox.size - 1;
    }
    else{
        setIndexMedia = setIndexMedia - 1;
    }
    swapLightboxMedia(parseInt(setIndexMedia), value, img, title);
}

/**
 * @param {*} e - numéro du média
 * @param {*} value - media type (video or picture)
 * @param {*} img - media link
 * @param {*} title - media name
 */
function nextPictureLightboxModal(mediaDataset, value, img, title) {
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    if (setIndexMedia === arrayLightbox.size - 1) {
        setIndexMedia = 0;
     }
     else{
        setIndexMedia = setIndexMedia + 1;
     }
    swapLightboxMedia(parseInt(setIndexMedia), value, img, title);
}