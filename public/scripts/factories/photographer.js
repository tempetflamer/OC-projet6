
function photographerFactory(data) {
    //const { name, portrait } = data;
    const { name, id, city, country, tagline, price, portrait } = data;


    //const picture = `./src/assets/images/${name}/${portrait}`; // finalement les photos sont dans un dossier appelé 
    const picture = `./assets/images/avatar/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer__data');
        const imageLink = document.createElement('a');
        //on part de index.html
        imageLink.href = './photographer.html?id=' + id; // `../../../photographer.html?id=${id}`; marche pas ça memene sur la page http://localhost:8080/photographer.html?id=930 au lieu de public/
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        img.classList.add('photographer__data__img');
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.classList.add("photographer__data__name");
        const pCity = document.createElement('p');
        pCity.textContent = city + ', ' + country;
        pCity.classList.add("photographer__data__location");
        const pTagline = document.createElement('p');
        pTagline.textContent = tagline;
        pTagline.classList.add('photographer__data__tagline');
        const pPrice = document.createElement('p');
        pPrice.textContent = price + '€/jour';
        pPrice.classList.add('photographer__data__price');
        article.appendChild(imageLink);
        imageLink.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pCity);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}


function photographerPage(data) {
    //const { name, portrait } = data;
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/images/avatar/${portrait}`;

    /*     function getUserSection() {
            const divPhotographerModifier = document.createElement( 'div' );
            divPhotographerModifier.classList.add('photographer--container');
    
            const divPhotographerinfo = document.createElement( 'div' );
            const divPhotographerContact = document.createElement( 'div' );
            const divPhotographerPhoto = document.createElement( 'div' );
            divPhotographerinfo.classList.add('photographer__data');
            divPhotographerContact.classList.add('photographer__contact');
            divPhotographerPhoto.classList.add('photographer__picture');
    
            const namePhotographer = document.createElement( 'h1' );
            namePhotographer.textContent = name;
            namePhotographer.classList.add("photographer__data__name");
            const cityPhotographer = document.createElement( 'p' );
            cityPhotographer.textContent = city+', '+country;
            cityPhotographer.classList.add("photographer__data__location");
            const taglinePhotographer = document.createElement( 'p' );
            taglinePhotographer.textContent = tagline;
            taglinePhotographer.classList.add('photographer__data__tagline');
            divPhotographerinfo.appendChild(namePhotographer);
            divPhotographerinfo.appendChild(cityPhotographer);
            divPhotographerinfo.appendChild(taglinePhotographer);
    
            const contactPhotographer = document.createElement( 'img' );
            contactPhotographer.setAttribute("src", picture)
            contactPhotographer.setAttribute("alt", name)
            contactPhotographer.classList.add('photographer__data__img');
            divPhotographerPhoto.appendChild(contactPhotographer);  
    
            const conatctPhotographer = document.createElement( 'button' );
            conatctPhotographer.href = '';
            conatctPhotographer.classList.add('photographer__contact__button')
            divPhotographerContact.appendChild(conatctPhotographer);
    
            divPhotographerModifier.appendChild(divPhotographerinfo);
            divPhotographerModifier.appendChild(divPhotographerContact);
            divPhotographerModifier.appendChild(divPhotographerPhoto);
    
            return (divPhotographerModifier);
        } */

    function getUserInfo() {

        const divPhotographerinfo = document.createElement('div');
        divPhotographerinfo.classList.add('photographer__data');

        const namePhotographer = document.createElement('h1');
        namePhotographer.textContent = name;
        namePhotographer.classList.add("photographer__data__name");
        const cityPhotographer = document.createElement('p');
        cityPhotographer.textContent = city + ', ' + country;
        cityPhotographer.classList.add("photographer__data__location");
        const taglinePhotographer = document.createElement('p');
        taglinePhotographer.textContent = tagline;
        taglinePhotographer.classList.add('photographer__data__tagline');
        divPhotographerinfo.appendChild(namePhotographer);
        divPhotographerinfo.appendChild(cityPhotographer);
        divPhotographerinfo.appendChild(taglinePhotographer);

        return (divPhotographerinfo);
    }

    function getUserContact() {

        const divPhotographerContact = document.createElement('div');
        divPhotographerContact.classList.add('photographer__contact');

        const contactPhotographer = document.createElement('button');
        contactPhotographer.href = '';
        contactPhotographer.textContent = 'Contactez-moi';
        // contactPhotographer.classList.add('photographer__contact__button')
        divPhotographerContact.appendChild(contactPhotographer);

        return (divPhotographerContact);
    }

    function getUserPicture() {

        const divPhotographerPhoto = document.createElement('div');
        divPhotographerPhoto.classList.add('photographer__picture');

        const contactPhotographer = document.createElement('img');
        contactPhotographer.setAttribute("src", picture)
        contactPhotographer.setAttribute("alt", name)
        contactPhotographer.classList.add('photographer__data__img');
        divPhotographerPhoto.appendChild(contactPhotographer);

        return (divPhotographerPhoto);
    }
    return { name, picture, getUserInfo, getUserContact, getUserPicture }
}

function getNamePhotographer(id) { // en passant la fonction en async, j'obtient test : [object Promise] mais j'ai toujours le message console.log('avant echec des données')
    var namePhotographer = '';
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

            // Faut que je change le modèle de lecture il attend pas la fin du foreah avant d'envoyer la reponse
            const dataPhotographers = [...data.photographers];

            //.find
           namePhotographer =  dataPhotographers.find(photographer => photographer.id === "id");
           namePhotographer = namePhotographer.name;
           console.log("find name photographers : " + namePhotographer);
/*             dataPhotographers.forEach((photographer) => {
                console.log("photographer.id", photographer.id);
                console.log("id", id);
                if (parseInt(photographer.id) === parseInt(id)) {
                    console.log(photographer.id);
                    console.log(photographer.name);
                    namePhotographer = photographer.name;
                    console.log(namePhotographer);
                    return namePhotographer;
                }
            }); */
        });
        // si j'enlève cetet artie là il me retorune undefined, il attend pas le reste
        console.log('avant echec des données');
        if ( namePhotographer == '' || namePhotographer == undefined)
        return "echec de chargement des données";
        else
        return namePhotographer;

        // ça marche toujours pas mais tester en le ajoutant un deuxieme parametre directement dans la fonction originale
}

function photographerGallery(dataMedia, dataPhotographers) { // ajouter les medias
    //const { name, portrait } = data;
    const { id, photographerId, title, image, likes, date, price } = dataMedia; //image or video
    // Dans le cadre d'une video, montrer une miniature

    //const { namePhotographers, idPhotographers} = dataPhotographers
    


    function getGalleryCardDOM() {

        // theoriquement je peux juste le faire en supprimant les espaces, les tirets, etc... sinon on refait une fnction pour // le rpobleme c'est que tous mes console serve a rien vu comment j'appelle la fonction utilisation de jsfiddle pour debugger
        //const namePhotographer = getNamePhotographer(photographerId);
        //console.log(idPhotographers, photographerId) // retourne undefined and 243
        console.log(dataPhotographers.find(photographer => photographer.id === photographerId)); // .find me retourne Object { name: "Mimi Keel", id: 243, city: "London", country: "UK", tagline: "Voir le beau dans le quotidien", price: 400, portrait: "MimiKeel.jpg" }...
        const namePhotographer =  dataPhotographers.find(photographer => photographer.id === photographerId);
        console.log("find name photographers : " + namePhotographer.name);
        //namePhotographer = namePhotographer.name; //Uncaught (in promise) TypeError: namePhotographer is undefined
        const namePhotographerArray = namePhotographer.name.split(" ");
        console.log(namePhotographerArray[0])
        const chemin = namePhotographerArray[0].replace('-', ' '); // dans l'architecture des dossiers, nous en mettons pas de tiret mais des espaces pour les noms composé
        console.log(chemin);

        const article = document.createElement('article');
        article.classList.add('gallery__list__data');
        //const img = document.createElement('img');
        if (dataMedia.video) { //"video" in dataMedia
            const video = document.createElement('video');
            console.log("ceci est le log de data video = ","src", `./assets/images/${chemin}/${dataMedia.video}`);
            video.src = `./assets/images/${chemin}/${dataMedia.video}`;
            video.alt = title;
            video.type= "video/mp4";
            video.role = "link";
            video.classList.add('gallery__list__data__img');
            article.appendChild(video);
        }
        else{
            const img = document.createElement('img');
            console.log("src", `./assets/images/${chemin}/${image}`);
            img.src = `./assets/images/${chemin}/${image}`;
            img.alt = title;
            img.role = "link";
            img.classList.add('gallery__list__data__img');
            article.appendChild(img);
        }
        //img.setAttribute("src", `./src/assets/images/${chemin}/${image}`);
        //img.alt = title; //Uncaught (in promise) ReferenceError: can't access lexical declaration 'title' before initialization
        //console.log(title);
        //img.setAttribute("alt", title);
        //img.classList.add('gallery__list__data__img'); // ne restera probablement pas

        const desc = document.createElement('div')
        desc.classList.add("gallery__list__data__description");
        const titlePhotographer = document.createElement('p')
        console.log(title);
        titlePhotographer.textContent = title ; // erreur [object HTMLDivElement] // String(title) //titlePhotographer.innerHTML = title.textContent;
        titlePhotographer.classList.add("gallery__list__data__description__title");
        titlePhotographer.alt = title.textContent 
        const like = document.createElement('div')
        like.classList.add("gallery__list__data__description__likes");
        const numberLike = document.createElement('p')
        console.log(likes);
        like.textContent = likes;
        numberLike.classList.add("gallery__list__data__description__likes__number");
        const iconLike = document.createElement('i')
        iconLike.classList.add("fa-solid");
        iconLike.classList.add("fa-heart");
        iconLike.classList.add("fa-lg");

        desc.appendChild(titlePhotographer);
        desc.appendChild(like);
        like.appendChild(numberLike);
        like.appendChild(iconLike);

        // article.appendChild(img);
        article.appendChild(desc);
        return (article);
    }
    
    return { getGalleryCardDOM }
}