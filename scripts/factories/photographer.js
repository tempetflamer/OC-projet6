/**
 * Photographers creation factory
 * @param {Json} data
 * @returns getUserCardDOM, getUserInfo, getUserContact, getUserPicture
 */
function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/images/avatar/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer__data');
        const imageLink = document.createElement('a');
        imageLink.href = './photographer.html?search&id=' + id;
        imageLink.tabIndex = "0";
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
        imageLink.appendChild(h2);
        article.appendChild(pCity);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }

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
    
        // Init contact form title 
        const modalTitle = document.querySelector(".contact__content__title");
        modalTitle.innerHTML = " Contactez-moi<br>"+name;
    
        return (divPhotographerinfo);
    }
    
    function getUserContact() {
    
        const divPhotographerContact = document.createElement('div');
        divPhotographerContact.classList.add('photographer__contact');
    
        const contactPhotographer = document.createElement('button');
        contactPhotographer.href = '';
        contactPhotographer.textContent = 'Contactez-moi';
        contactPhotographer.tabIndex = "0";
        contactPhotographer.type = "button" //accessibility
        contactPhotographer.classList.add('photographer__contact__btn'); // ça restera peut être pas mais c'est pour tester
        contactPhotographer.addEventListener("click", displayModal);
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
    return { getUserCardDOM, getUserInfo, getUserContact, getUserPicture }
}