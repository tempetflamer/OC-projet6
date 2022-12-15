let arrayMedia = [];
let indexMedia = 0;

/**
 * Filter array initialization 
 * @param {*} title - media title
 * @param {number} likes - number of like for media
 * @param {*} date - media date
 * @param {*} type - media type (video or picture)
 * @param {*} media - media link
 * @param {number} indexMedia - media index given at init
 */
function initArrayMedia(title, likes, date, type, media, index) {
    arrayMedia.push({ 'title': title, 'likes': likes, 'date': date, 'type': type, 'media': media, 'index': index });
    console.log(title, likes, date, type, media, index);
    indexMedia = indexMedia + 1;
  }