let arrayMedia = [];
let indexMedia = 0;

/**
 * Filter array initialization 
 * @param {string} title - media title
 * @param {number} likes - number of like for media
 * @param {string} date - media date
 * @param {string} type - media type (video or picture)
 * @param {string} media - media link
 * @param {number} indexMedia - media index given at init
 * @param {Boolean} liked - state of media, if liked or not
 */
function initArrayMedia(title, likes, date, type, media, index, liked) {
    arrayMedia.push({ 'title': title, 'likes': likes, 'date': date, 'type': type, 'media': media, 'index': index, 'liked': liked });
    console.log(title, likes, date, type, media, index, liked);
    indexMedia = indexMedia + 1;
  }