// DOM Elements
const btnCloseLightbox = document.querySelector(".lightbox-modal__content__close");
const lightboxModal = document.querySelector(".lightbox-modal");
const lightboxModalSlides = document.querySelector(".lightbox-modal__content__slides");
const btnPrevLightbox = document.getElementById("prev");
const btnNextLightbox = document.getElementById("next");
// Used to change accessibility focus
const sectionPhotographer = document.querySelector(".photographer");
const sectionStats = document.querySelector(".stats");
const sectionGallery = document.querySelector(".gallery");
const partHeader = document.querySelector("header");

let setIndexMedia = 0;

/**
 * Function to display the media (picture or video) in lightbox
 * @param {number} index - numéro du média
 * @param {string} value - media type (video or picture)
 * @param {string} media - media link
 * @param {string} title - media name
 * @param {Boolean} firstOpen - true display media, false swap media
 */
function displayLightboxMedia(index, value, media, title, firstOpen) {
    let createLlightboxModalMedia = "";
    // If lightbox already open (false), then swap media
    if (firstOpen == false) {
        media = arrayMedia[index].media
        title = arrayMedia[index].title
        value = arrayMedia[index].type
    }
    // Display medium size media
    media = media.replace('/small/', '/medium/');

    if (value == "video") {
        createLlightboxModalMedia = document.createElement('video');
        createLlightboxModalMedia.src = media;
        createLlightboxModalMedia.type = "video/mp4";
        createLlightboxModalMedia.controls = true;
        createLlightboxModalMedia.title = title;
        createLlightboxModalMedia.tabIndex = "2";
    }
    else {
        createLlightboxModalMedia = document.createElement('img');
        createLlightboxModalMedia.src = media;
        createLlightboxModalMedia.alt = title;
    }
    createLlightboxModalMedia.classList.add('lightbox-modal__content__slides__media');
    createLlightboxModalMedia.dataset.num = index;
    lightboxModalSlides.appendChild(createLlightboxModalMedia);

    const createtitlePictureLightbox = document.createElement('p');
    createtitlePictureLightbox.textContent = title;
    createtitlePictureLightbox.classList.add('lightbox-modal__content__slides__title');
    lightboxModalSlides.appendChild(createtitlePictureLightbox);
}

// Function previous and next arrows listening events stored in variables
const prevPicturelisten = function (value, img, title) { prevPictureLightboxModal(value, img, title); }
const nextPicturelisten = function (value, img, title) { nextPictureLightboxModal(value, img, title); }
let picturelistenKey = function (e, value, img, title) {
    if (e.keyCode === 39) /* right arrow */ {
        e.preventDefault();
        btnNextLightbox.focus()
        nextPictureLightboxModal(value, img, title);
    }
    else {
        if (e.keyCode === 37) /* left arrow */ {
            e.preventDefault();
            btnPrevLightbox.focus()
            prevPictureLightboxModal(value, img, title);
        }
    }

}

/**
 * @param {number} index - numéro du média
 * @param {string} value - media type (video or picture)
 * @param {string} img - media link
 * @param {string} title - media name
 */
function displayLightboxModal(index, value, img, title) {
    // Change accessibility focus
    sectionPhotographer.ariaHidden = true;
    sectionStats.ariaHidden = true;
    sectionGallery.ariaHidden = true;
    partHeader.ariaHidden = true;

    lightboxModal.style.display = "block";
    lightboxModal.style.animation = "modalopen 0.5s ease-in-out";
    btnPrevLightbox.focus()
    disableScroll();
    displayLightboxMedia(index, value, img, title, true);
    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    var lightboxModalMedia = document.querySelector(".lightbox-modal__content__slides__media");
    setIndexMedia = parseInt(lightboxModalMedia.dataset.num);

    // Add the previous and next arrows listening events & key listening event
    btnPrevLightbox.addEventListener("click", prevPicturelisten);
    btnNextLightbox.addEventListener("click", nextPicturelisten);
    lightboxModal.addEventListener('keydown', picturelistenKey);

}

function closeLightboxModal() {
    lightboxModal.style.animation = "modalclose 0.5s ease-in-out";
    setTimeout(function () {
        lightboxModal.style.display = "none";
        enableScroll();

        // Remove the created elements in lightbox
        document.querySelector(".lightbox-modal__content__slides__media").remove();
        document.querySelector(".lightbox-modal__content__slides__title").remove();
    }, 480);

    // Remove the previous and next arrows listening events when closing the lightbox
    btnPrevLightbox.removeEventListener("click", prevPicturelisten);
    btnNextLightbox.removeEventListener("click", nextPicturelisten);
    lightboxModal.removeEventListener('keydown', picturelistenKey);

    // Change accessibility focus
    sectionPhotographer.ariaHidden = false;
    sectionStats.ariaHidden = false;
    sectionGallery.ariaHidden = false;
    partHeader.ariaHidden = false;

    document.querySelector('[data-num="' + setIndexMedia + '"]').focus();
}

/**
 * @param {string} value - media type (video or picture)
 * @param {string} img - media link
 * @param {string} title - media name
 */
function prevPictureLightboxModal(value, img, title) {
    // Remove the picture and title elements created in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    // If first image, go to the last one, otherwise to the previous one
    if (setIndexMedia == 0) {
        setIndexMedia = indexMedia - 1;
    }
    else {
        setIndexMedia = setIndexMedia - 1;
    }
    displayLightboxMedia(parseInt(setIndexMedia), value, img, title, false);
}

/**
 * @param {string} value - media type (video or picture)
 * @param {string} img - media link
 * @param {string} title - media name
 */
function nextPictureLightboxModal(value, img, title) {
    // Remove the picture and title elements created in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    // If last image, go to the first one, otherwise to the next one
    if (setIndexMedia === indexMedia - 1) {
        setIndexMedia = 0;
    }
    else {
        setIndexMedia = setIndexMedia + 1;
    }
    displayLightboxMedia(parseInt(setIndexMedia), value, img, title, false);
}

trapFocus("lightbox");