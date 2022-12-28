/**
 * Function to add or remove a like
 * @param {HTMLElement} icon 
 * @param {HTMLElement} number 
 * @param {Boolean} mediaNum 
 */
function changelikes(icon, number, mediaNum) {
    const totaLikes = document.querySelector(".stats__likes__number");
    if (icon.classList.contains("heart--empty")) {
        number.textContent = parseInt(number.textContent) + 1;
        totaLikes.textContent = parseInt(totaLikes.textContent) + 1;
        icon.classList.remove("heart--empty");
        icon.classList.remove("fa-regular");
        icon.classList.add("heart--filled");
        icon.classList.add("fa-solid");
        arrayMedia = arrayMedia.map(function (media) {
            if (media.index === mediaNum) { 
                return { ...media, liked: true } 
            } 
            else { 
                return media 
            } 
        })
    }
    else {
        number.textContent = parseInt(number.textContent) - 1;
        totaLikes.textContent = parseInt(totaLikes.textContent) - 1;
        icon.classList.remove("heart--filled");
        icon.classList.remove("fa-solid");
        icon.classList.add("heart--empty");
        icon.classList.add("fa-regular");
        arrayMedia = arrayMedia.map(function (media) {
            if (media.index === mediaNum) { 
                return { ...media, liked: false } 
            } 
            else { 
                return media 
            } 
        })
    }

}