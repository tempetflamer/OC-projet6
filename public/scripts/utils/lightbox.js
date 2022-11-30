// DOM Elements
const titlePictureLightbox = document.querySelector(".lightbox-modal__content__slides__title");
const btnCloseLightbox = document.querySelector(".lightbox-modal__content__close");
const lightboxModal = document.querySelector(".lightbox-modal");
const lightboxModalSlides = document.querySelector(".lightbox-modal__content__slides");
const btnPrevLightbox = document.getElementById("prev");
const btnNextLightbox = document.getElementById("next");

let arrayLightbox = new Map();
let indexLightbox = 0;


//tester ça marche
function initArrayLightbox(value, media, title) {
    arrayLightbox.set(indexLightbox, [title, media, value]);
    console.log("Test de déclaration du tableau de lightbox : " + arrayLightbox.get(indexLightbox)[0]); // doit renvoyer le titre de la ligne ajouté
    indexLightbox = indexLightbox + 1; // maybe, il faudra l'incrémenter dans la fonction display // non c'est bon j'ai changé le mode de fonctionneemnt
}

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
    createLlightboxModalMedia.tabIndex = 1;
    createLlightboxModalMedia.dataset.num = e
    lightboxModalSlides.appendChild(createLlightboxModalMedia);

    //Create image title on <p> balise
    const createtitlePictureLightbox = document.createElement('p');
    createtitlePictureLightbox.textContent = title;
    createtitlePictureLightbox.classList.add('lightbox-modal__content__slides__title');
    createtitlePictureLightbox.tabIndex = 2;
    lightboxModalSlides.appendChild(createtitlePictureLightbox);
}

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
    createLlightboxModalMedia.tabIndex = 1;
    createLlightboxModalMedia.dataset.num = indexMedia;
    lightboxModalSlides.appendChild(createLlightboxModalMedia);

    //Create image title on <p> balise
    const createtitlePictureLightbox = document.createElement('p');
    createtitlePictureLightbox.textContent = arrayLightbox.get(indexMedia)[0];
    createtitlePictureLightbox.classList.add('lightbox-modal__content__slides__title');
    createtitlePictureLightbox.tabIndex = 2;
    lightboxModalSlides.appendChild(createtitlePictureLightbox);
    console.log("test de passage ici"); // vu que ej tarnsfert le smême données images c'est évident que ce sera toujours la même image qui sera affiché
}

/**
 * 
 * @param {*} value //text value for video or img
 * @param {*} img // image source
 */
function displayLightboxModal(e, value, img, title) {
    lightboxModal.style.display = "block";
    disableScroll();
    displayLightboxMedia(e, value, img, title); //e évènement permettant de récupérer la source de l'image
    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    console.log("vous passez ici combien de fois"); // on y passe qu'un seul fois on part de la fonction après être allé sur le btn prev et next

    //je n'ai même pas besoin de metrtes les datanum sur els flèche voire sur l'image agrandie
    btnPrevLightbox.addEventListener("click", (event) => { prevPictureLightboxModal(parseInt(e)-1, value, img, title); });
    btnPrevLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { prevPictureLightboxModal(parseInt(e)-1, value, img, title); }
    });

    btnNextLightbox.addEventListener("click", (event) => { nextPictureLightboxModal(parseInt(e)+1, value, img, title); });
    btnNextLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { nextPictureLightboxModal(parseInt(e)+1, value, img, title); }
    });

}

function closeLightboxModal() {
    lightboxModal.style.display = "none";
    enableScroll();
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();
}

// ne pas oublier de mettre un blocage pour la première est dernière
function prevPictureLightboxModal(e, value, img, title) {
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    swapLightboxMedia(parseInt(e)-1, value, img, title);

    //Faire une fonction controller

    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    console.log("vous passez ici combien de fois"); // on y passe qu'un seul fois on part de la fonction après être allé sur le btn prev et next

    //je n'ai même pas besoin de metrtes les datanum sur els flèche voire sur l'image agrandie
    btnPrevLightbox.addEventListener("click", (event) => { prevPictureLightboxModal(parseInt(e)-1, value, img, title); });
    btnPrevLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { prevPictureLightboxModal(parseInt(e)-1, value, img, title); }
    });

    btnNextLightbox.addEventListener("click", (event) => { nextPictureLightboxModal(parseInt(e)+1, value, img, title); });
    btnNextLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { nextPictureLightboxModal(parseInt(e)+1, value, img, title); }
    });
}

function nextPictureLightboxModal(e, value, img, title) {
    // remove the created elements in lightbox
    document.querySelector(".lightbox-modal__content__slides__media").remove();
    document.querySelector(".lightbox-modal__content__slides__title").remove();

    swapLightboxMedia(parseInt(e), value, img, title);

    btnCloseLightbox.addEventListener("click", closeLightboxModal);

    console.log("vous passez ici combien de fois"); // on y passe qu'un seul fois on part de la fonction après être allé sur le btn prev et next

    //je n'ai même pas besoin de metrtes les datanum sur els flèche voire sur l'image agrandie
    btnPrevLightbox.addEventListener("click", (event) => { prevPictureLightboxModal(parseInt(e)-1, value, img, title); });
    btnPrevLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { prevPictureLightboxModal(parseInt(e)-1, value, img, title); }
    });

    btnNextLightbox.addEventListener("click", (event) => { nextPictureLightboxModal(parseInt(e)+1, value, img, title); });
    btnNextLightbox.addEventListener("keydown", (event) => {
        if (event.code === "Enter") { nextPictureLightboxModal(parseInt(e)+1, value, img, title); }
    });


}