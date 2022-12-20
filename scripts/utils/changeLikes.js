/**
 * Function to add or remove a like
 * @param {HTMLElement} icon 
 * @param {HTMLElement} number 
 * @param {Boolean} mediaNum 
 */
function changelikes(icon, number, mediaNum) {
    console.log(mediaNum);
    const totaLikes = document.querySelector(".stats__likes__number");
    let indexMediaArray;
    if (icon.classList.contains("heart--empty")){
        number.textContent = parseInt(number.textContent) + 1; 
        totaLikes.textContent = parseInt(totaLikes.textContent) + 1;
        icon.classList.remove("heart--empty");
        icon.classList.remove("fa-regular");
        icon.classList.add("heart--filled");
        icon.classList.add("fa-solid");   
        //console.log(arrayMedia.indexOf(2));
        //indexMediaArray = arrayMedia.find(media => media.index == mediaNum ? media.liked = true : media.liked = false)
        indexMediaArray = arrayMedia.find(function(media) {if (media.index === mediaNum) { media.liked = true} })
        console.log(indexMediaArray)
        console.log(arrayMedia)
        //

    }
    else {
        number.textContent = parseInt(number.textContent) - 1;
        totaLikes.textContent = parseInt(totaLikes.textContent) - 1;
        icon.classList.remove("heart--filled");
        icon.classList.remove("fa-solid");
        icon.classList.add("heart--empty");  
        icon.classList.add("fa-regular");
        // je comprend pas mais a chaque fois le passage du coeur empty marche, mais l'autre prend le index a 1 ???
        //indexMediaArray = arrayMedia.find(media => media.index == mediaNum ? media.liked = false : media.liked = true);
        indexMediaArray = arrayMedia.find(function(media) {if (media.index === mediaNum) { media.liked = false} })
        console.log(indexMediaArray)
        console.log(arrayMedia)
    }

}