//import dataReader from "./../../data/photographers.json"

//or use URLSearchParams
const searchURL = window.location.search;
const idUrl = searchURL.slice(4)


async function init() {

    const data = await dataFetch();

    const photographerSection = document.querySelector(".photographer");
    const GallerySection = document.querySelector(".gallery__list");
    const StatsDiv = document.querySelector(".stats");

    let totaLikeStats = 0;

    data.photographers.forEach((photographer) => {
        if (photographer.id == idUrl) {

            document.querySelector('meta[name="description"]').setAttribute("content", "FishEye, page du photographe " + photographer.name);

            const photographerModel = photographerFactory(photographer);
            const userInfo = photographerModel.getUserInfo();
            const userContact = photographerModel.getUserContact();
            const userPicture = photographerModel.getUserPicture();
            photographerSection.appendChild(userInfo);
            photographerSection.appendChild(userContact);
            photographerSection.appendChild(userPicture);
        }
    });

    data.medias.forEach((photographer) => {
        if (photographer.photographerId == idUrl) {
            const photographerModel = mediasFactory(photographer, data.photographers);
            const userCardDOM = photographerModel.getGalleryCardDOM();
            GallerySection.appendChild(userCardDOM);

            totaLikeStats = totaLikeStats + photographer.likes;
        }
    });

    // Display stats
    const likesStats = document.createElement('div')
    likesStats.classList.add("stats__likes");
    const likesStatsNumber = document.createElement('p')
    likesStatsNumber.textContent = totaLikeStats;
    likesStatsNumber.classList.add("stats__likes__number");
    const iconLikeStats = document.createElement('i')
    iconLikeStats.classList.add("fa-solid");
    iconLikeStats.classList.add("fa-heart");
    iconLikeStats.classList.add("fa-lg");
    iconLikeStats.ariaLabel = "likes";

    const arrayPricePhotographer = data.photographers.find(photographer => photographer.id == idUrl);
    const pricePhotographer = arrayPricePhotographer.price;
    const priceStats = document.createElement('p')
    priceStats.textContent = pricePhotographer + "€/jour";
    priceStats.classList.add("stats__price");

    likesStats.appendChild(likesStatsNumber);
    likesStats.appendChild(iconLikeStats);
    StatsDiv.appendChild(likesStats);
    StatsDiv.appendChild(priceStats);

};

init();

