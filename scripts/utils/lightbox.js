// DOM Elements
const titlePictureLightbox = document.querySelector(".lightbox-modal__content__slides__title");
const btnCloseLightbox = document.querySelector(".lightbox-modal__content__close");
const lightboxModal = document.querySelector(".lightbox-modal");
const lightboxModalSlides = document.querySelector(".lightbox-modal__content__slides");
const btnPrevLightbox = document.getElementById("prev");
const btnNextLightbox = document.getElementById("next");

const sectionPhotographer = document.querySelector(".photographer");
const sectionStats = document.querySelector(".stats");
const sectionGallery = document.querySelector(".gallery");
const partHeader = document.querySelector("header");

let arrayLightbox = new Map();
let indexLightbox = 0;

initArrayLightbox("video", video.src, title);
/**
 * Function to init an array of all media
 * @param {*} value - media type (video or picture)
 * @param {*} media - media link
 * @param {*} title - media name
 */
function initArrayLightbox(value, media, title) {
    arrayLightbox.set(indexLightbox, [title, media, value]);
    console.log("Test de déclaration du tableau de lightbox : " + arrayLightbox.get(indexLightbox)[0]); // doit renvoyer le titre de la ligne ajouté
    indexLightbox = indexLightbox + 1; // maybe, il faudra l'incrémenter dans la fonction display // non c'est bon j'ai changé le mode de fonctionneemnt
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
    //video.role = "link";
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
    //arrayLightbox.set(indexLightbox, [title, media, value]);
    console.log("Test de déclaration du tableau de lightbox : " + arrayLightbox.get(indexMedia)[1]);

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
    //video.role = "link";
    createLlightboxModalMedia.classList.add('lightbox-modal__content__slides__media');
    createLlightboxModalMedia.dataset.num = indexMedia;
    lightboxModalSlides.appendChild(createLlightboxModalMedia);

    //Create image title on <p> balise
    const createtitlePictureLightbox = document.createElement('p');
    createtitlePictureLightbox.textContent = arrayLightbox.get(indexMedia)[0];
    createtitlePictureLightbox.classList.add('lightbox-modal__content__slides__title');
    lightboxModalSlides.appendChild(createtitlePictureLightbox);
    console.log("test de passage ici"); // vu que ej tarnsfert le smême données images c'est évident que ce sera toujours la même image qui sera affiché
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
    //partGallerylist.ariaHidden = true;
    partHeader.ariaHidden = true;

    lightboxModal.style.display = "block";
    // lightboxModal.showModal();
    btnPrevLightbox.focus()
    disableScroll();
    displayLightboxMedia(e, value, img, title); //e évènement permettant de récupérer la source de l'image
    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    //remove gray class controller button
    btnPrevLightbox.classList.remove("lightbox-modal__content__btn--gray")
    btnNextLightbox.classList.remove("lightbox-modal__content__btn--gray")

    console.log("vous passez ici combien de fois"); // on y passe qu'un seul fois on part de la fonction après être allé sur le btn prev et next

    //trapFocus(activeFocus);

    if (e == 0) {
        btnPrevLightbox.classList.add("lightbox-modal__content__btn--gray")

    }
    else {
        btnPrevLightbox.addEventListener("click", (event) => { prevPictureLightboxModal(parseInt(e) - 1, value, img, title); });
        btnPrevLightbox.addEventListener("keydown", (event) => {
            if (event.code === "Enter") { prevPictureLightboxModal(parseInt(e) - 1, value, img, title); }
        });
    }

    if (e == arrayLightbox.size - 1) {
        btnNextLightbox.classList.add("lightbox-modal__content__btn--gray")
    }
    else {
        btnNextLightbox.addEventListener("click", (event) => { nextPictureLightboxModal(parseInt(e) + 1, value, img, title); });
        btnNextLightbox.addEventListener("keydown", (event) => {
            if (event.code === "Enter") { nextPictureLightboxModal(parseInt(e) + 1, value, img, title); }
        });
    }

    trapFocusLightbox();//j'ai l'impression que j'ai aps besoin de le mettre sur l'image suivante et précédente


    //trapfocus
/*     btnlisten.addEventListener('click', (e) => {
        console.log("test")
        modalisten.style.display = "block";
          trapFocus(e);
        }); */

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
        //partGallerylist.ariaHidden = false; galelrie list est une partie de section gallerie
        partHeader.ariaHidden = false;
}

// je comprend pas ce qui provoque ces bugs de multiple parcours à certains moments
/**
 * @param {*} e - numéro du média
 * @param {*} value - media type (video or picture)
 * @param {*} img - media link
 * @param {*} title - media name
 */
function prevPictureLightboxModal(e, value, img, title) {
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    swapLightboxMedia(parseInt(e), value, img, title);

    //remove gray class controller button
    btnPrevLightbox.classList.remove("lightbox-modal__content__btn--gray")
    btnNextLightbox.classList.remove("lightbox-modal__content__btn--gray")

    //Faire une fonction controller

    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    console.log("vous passez ici combien de fois"); // on y passe qu'un seul fois on part de la fonction après être allé sur le btn prev et next

    //je n'ai même pas besoin de metrtes les datanum sur els flèche voire sur l'image agrandie
    btnNextLightbox.addEventListener("click", (event) => { nextPictureLightboxModal(parseInt(e) + 1, value, img, title); });
    btnNextLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { nextPictureLightboxModal(parseInt(e) + 1, value, img, title); }
    });

    if (e == 0) {
        btnPrevLightbox.classList.add("lightbox-modal__content__btn--gray")

    }
    else {
        btnPrevLightbox.addEventListener("click", (event) => { prevPictureLightboxModal(parseInt(e) - 1, value, img, title); });
        btnPrevLightbox.addEventListener("keydown", (event) => {
            if (event.code === "Enter") { prevPictureLightboxModal(parseInt(e) - 1, value, img, title); }
        });
    }
}

/**
 * @param {*} e - numéro du média
 * @param {*} value - media type (video or picture)
 * @param {*} img - media link
 * @param {*} title - media name
 */
function nextPictureLightboxModal(e, value, img, title) {
    //faut que je remette tous ça dans l'élément d'après vérification sinon il refait à chaque fois toutes la manip
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    swapLightboxMedia(parseInt(e), value, img, title);

    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    //remove gray class controller button
    btnPrevLightbox.classList.remove("lightbox-modal__content__btn--gray") // on a aps d'erreur si la classe existe pas
    btnNextLightbox.classList.remove("lightbox-modal__content__btn--gray")

    console.log("vous passez ici combien de fois"); // on y passe qu'un seul fois on part de la fonction après être allé sur le btn prev et next

    //je n'ai même pas besoin de metrtes les datanum sur els flèche voire sur l'image agrandie
    btnPrevLightbox.addEventListener("click", (event) => { prevPictureLightboxModal(parseInt(e) - 1, value, img, title); });
    btnPrevLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { prevPictureLightboxModal(parseInt(e) - 1, value, img, title); }
    });

    if (e == arrayLightbox.size - 1) {
        btnNextLightbox.classList.add("lightbox-modal__content__btn--gray")
    }
    else {
        btnNextLightbox.addEventListener("click", (event) => { nextPictureLightboxModal(parseInt(e) + 1, value, img, title); });
        btnNextLightbox.addEventListener("keydown", (event) => {
            if (event.code === "Enter") { nextPictureLightboxModal(parseInt(e) + 1, value, img, title); }
        });
    }


}