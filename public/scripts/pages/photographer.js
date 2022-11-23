//Mettre le code JavaScript lié à la page photographer.html
//import dataReader from "./../../data/photographers.json"

//or use URLSearchParams
const searchURL = window.location.search;
console.log(searchURL);
const idUrl = searchURL.slice(4)
console.log(idUrl);

async function init() {

    fetch('/public/data/photographers.json'/*'../../data/photographers.json'*/, { mode: 'no-cors' }) //fetch(myURL, { mode: 'no-cors'})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            try {
                JSON.parse(data);
            }
            catch (error) {
                console.log('Error parsing JSON:', error, data);
            }

            const dataPhotographers = [...data.photographers];
            const dataMedias = [...data.media];

            const photographerSection = document.querySelector(".photographer");
            const GallerySection = document.querySelector(".gallery__list");

            dataPhotographers.forEach((photographer) => {
                if (photographer.id == idUrl){
                    console.log('test photographe reussie');
                    const photographerModel = photographerPage(photographer);
                    const userInfo = photographerModel.getUserInfo();
                    const userContact = photographerModel.getUserContact();
                    const userPicture = photographerModel.getUserPicture();
                    photographerSection.appendChild(userInfo);
                    photographerSection.appendChild(userContact);
                    photographerSection.appendChild(userPicture);
                }
            });

            dataMedias.forEach((photographer) => {
                if (photographer.photographerId == idUrl){
                    console.log('test reussie');
                    const photographerModel = photographerGallery(photographer, dataPhotographers);
                    const userCardDOM = photographerModel.getGalleryCardDOM();
                    console.log('esque je rentre dedans', userCardDOM);
                    GallerySection.appendChild(userCardDOM);
                }
            });


            /*         const photographersSection = document.querySelector(".photographer");
            
                    dataPhotographers.forEach((photographer) => {
                        const photographerModel = photographerFactory(photographer);
                        const userCardDOM = photographerModel.getUserCardDOM();
                        photographersSection.appendChild(userCardDOM);
                    }); */


        });

};

init();

