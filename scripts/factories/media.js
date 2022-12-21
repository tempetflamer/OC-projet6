/**
 * Media creation factory
 * @param {Json} dataMedia
 * @param {Json} dataPhotographers
 * @param {Boolean} firstLoad 
 * @param {Boolean} liked - state of media, if liked or not 
 * @returns getGalleryCardDOM
 */
function mediasFactory(dataMedia, dataPhotographers, firstLoad, liked) {
    const { id, photographerId, title, image, video, likes, date, price } = dataMedia;

    function getGalleryCardDOM() {
        let namePhotographer;
        let namePhotographerArray;
        let chemin;
        let dataNum;

        if (firstLoad === true) {
            namePhotographer = dataPhotographers.find(photographer => photographer.id === photographerId);
            namePhotographerArray = namePhotographer.name.split(" ");
            chemin = namePhotographerArray[0].replace('-', ' ');

            dataNum = indexMedia;
        }
        else {
            dataNum = dataMedia.index;
        }

        const article = document.createElement('article');
        article.classList.add('gallery__list__data');
        if (dataMedia.video || dataMedia.type == "video") {
            const video = document.createElement('video');
            if (firstLoad === true) { video.src = `./assets/images/gallery/small/${chemin}/${dataMedia.video}`; } else { video.src = dataMedia.media; }
            video.alt = title;
            video.type = "video/mp4";
            video.role = "link";
            video.classList.add('gallery__list__data__img');
            video.tabIndex = 0;
            video.dataset.num = dataNum
            article.appendChild(video);

            if (firstLoad === true) { initArrayMedia(title, dataMedia.likes, dataMedia.date, 'video', video.src, indexMedia, liked); }

            video.addEventListener("click", (e) => { displayLightboxModal(e.target.dataset.num, "video", video.src, title); });
            video.addEventListener("keydown", (e) => {
                if (e.code === "Enter") { displayLightboxModal(e.target.dataset.num, "video", video.src, title); }
            });
        }
        else {
            const img = document.createElement('img');
            if (firstLoad === true) { img.src = `./assets/images/gallery/small/${chemin}/${image}`; } else { img.src = dataMedia.media; }

            img.alt = title;
            img.role = "link";
            img.classList.add('gallery__list__data__img');
            img.tabIndex = 0;
            img.dataset.num = dataNum
            article.appendChild(img);

            if (firstLoad === true) { initArrayMedia(title, dataMedia.likes, dataMedia.date, 'img', img.src, indexMedia, liked); }

            img.addEventListener("click", (e) => { displayLightboxModal(e.target.dataset.num, "img", img.src, title); });
            img.addEventListener("keydown", (e) => {
                if (e.code === "Enter") { displayLightboxModal(e.target.dataset.num, "img", img.src, title); }
            });

        }

        const desc = document.createElement('div')
        desc.classList.add("gallery__list__data__description");
        const titlePhotographer = document.createElement('p')
        titlePhotographer.textContent = title;
        titlePhotographer.classList.add("gallery__list__data__description__title");
        titlePhotographer.alt = title.textContent
        const like = document.createElement('div')
        like.classList.add("gallery__list__data__description__likes");
        const numberLike = document.createElement('p')
        if (liked === false) { numberLike.textContent = likes; } else {numberLike.textContent = parseInt(likes) + 1;}
        numberLike.classList.add("gallery__list__data__description__likes__number");
        const iconLike = document.createElement('i')
        if (liked === false) {
            iconLike.classList.add("fa-regular");
            iconLike.classList.add("fa-heart");
            iconLike.classList.add("fa-lg");
            iconLike.classList.add("heart--empty");
        }
        else {
            iconLike.classList.add("fa-solid");
            iconLike.classList.add("fa-heart");
            iconLike.classList.add("fa-lg");
            iconLike.classList.add("heart--filled");
        }
        iconLike.ariaLabel = "likes";
        iconLike.tabIndex = 0;

        desc.appendChild(titlePhotographer);
        desc.appendChild(like);
        like.appendChild(numberLike);
        like.appendChild(iconLike);
        article.appendChild(desc);

        //Add or remove medias liked
        iconLike.addEventListener("click", () => { changelikes(iconLike, numberLike, dataNum); });
        iconLike.addEventListener("keydown", (e) => {
            if (e.code === "Enter") { changelikes(iconLike, numberLike, dataNum); }
        });

        return (article);
    }

    return { getGalleryCardDOM }
}