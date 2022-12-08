function mediasFactory(dataMedia, dataPhotographers) { // ajouter les medias
    const { id, photographerId, title, image, likes, date, price } = dataMedia; //image or video

    function getGalleryCardDOM() {
        const namePhotographer = dataPhotographers.find(photographer => photographer.id === photographerId);
        const namePhotographerArray = namePhotographer.name.split(" ");
        const chemin = namePhotographerArray[0].replace('-', ' '); // dans l'architecture des dossiers, nous en mettons pas de tiret mais des espaces pour les noms composé

        const article = document.createElement('article');
        article.classList.add('gallery__list__data');
        if (dataMedia.video) {
            const video = document.createElement('video');
            video.src = `./assets/images/${chemin}/${dataMedia.video}`;
            video.alt = title;
            video.type = "video/mp4";
            video.role = "link";
            video.classList.add('gallery__list__data__img');
            video.tabIndex = 0;
            video.dataset.num = indexLightbox; // number used to init the array for the lightbox and controllers (prev, next) 
            article.appendChild(video);

            //initArrayLightbox("video", video.src, title); // un seul tableau pour lightbox et trie
            initArrayLightbox("video", video.src, title);
            initArrayLFilter(title, dataMedia.likes, dataMedia.date, indexLightbox);

            const valueTypeLightbox = "video";
            video.addEventListener("click", (e) =>  { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, video.src, title);});
            video.addEventListener("keydown", (e) => {
                if (e.code === "Enter") { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, video.src, title); }
            });
        }
        else {
            const img = document.createElement('img');
            img.src = `./assets/images/${chemin}/${image}`;
            img.alt = title;
            img.role = "link";
            img.classList.add('gallery__list__data__img');
            img.tabIndex = 0;
            img.dataset.num = indexLightbox; // number used to init the array for the lightbox and controllers (prev, next)             
            article.appendChild(img);

            //initArrayLightbox("img", img.src, title); // un seul tableau pour lightbox et trie
            initArrayLightbox("img", img.src, title);
            initArrayLFilter(title, dataMedia.likes, dataMedia.date, indexLightbox);

            const valueTypeLightbox = "img";
            const pictureURLightbox = img.src;
            img.addEventListener("click", (e) =>  { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, img.src, title);});
            img.addEventListener("keydown", (e) => {
                if (e.code === "Enter") { displayLightboxModal(e.target.dataset.num, valueTypeLightbox, img.src, title); }
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
        numberLike.textContent = likes;
        numberLike.classList.add("gallery__list__data__description__likes__number");
        const iconLike = document.createElement('i')
        iconLike.classList.add("fa-regular");
        iconLike.classList.add("fa-heart");
        iconLike.classList.add("fa-lg");
        iconLike.classList.add("heart--empty");
        iconLike.ariaLabel = "likes";
        iconLike.tabIndex = 0; 

        desc.appendChild(titlePhotographer);
        desc.appendChild(like);
        like.appendChild(numberLike);
        like.appendChild(iconLike);
        article.appendChild(desc);

        //Add or remove medias liked
        iconLike.addEventListener("click", (e) =>  { changelikes(e, iconLike, numberLike);});
        iconLike.addEventListener("keydown", (e) => {
            if (e.code === "Enter") { changelikes(e, iconLike, numberLike); }
        });

        return (article);
    }

    return { getGalleryCardDOM }
}