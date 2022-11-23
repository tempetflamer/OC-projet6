    /*
    const path = require('path');
const https = require("https");
let http = require('http');
let fs = require('fs');
    */
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        /* const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]}) */ // pk les 3 petites points avant
            fetch('../../data/photographers.json')
                .then(res => res.json())
                .then(data => {
                    displayData(data);
           /*          data.forEach(post => {

                    }); */
                });
    }

    async function displayData(photographers) {
        //const photographersSection = document.querySelector(".photographer_section");
        const photographersSection = document.querySelector(".photographer");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userSection = photographerModel.getUserSection();
            photographersSection.appendChild(userSection);
        });
    };

    // error Blocage d’une requête multiorigine (Cross-Origin Request) : la politique « Same Origin » ne permet pas de consulter la ressource distante &
    // Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.
    async function init() {
        // Récupère les datas des photographes
        //const { photographers } = await getPhotographers();
        //displayData(photographers);
        //fetch('../../data/photographers.json')
        fetch('/public/src/data/photographers.json'/*'../../data/photographers.json'*/, { mode: 'no-cors'}) //fetch(myURL, { mode: 'no-cors'})
        /*        .then(res => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return res.json();
        })
        */
        .then(res => res.json())
        .then(data => {
            //displayData(data);
   /*          data.forEach(post => {

            }); */
            //var res = JSON.parse({data}); //var res = JSON.parse([data]); //test
            //data = JSON.parse(data); // error => Uncaught (in promise) SyntaxError: JSON.parse: unexpected character at line 1 column 2 of the JSON data
            //data = JSON.stringify(data); // Donc c'était bien celle d'avant Uncaught (in promise) TypeError: data.forEach is not a function
            console.log(data);
            //data = getJSON(data);
            try {
                JSON.parse(data);
                //JSON.parse(data{['photographers']});
                //String.parse(data); // mais pareil c'est pas uen fonction du coup
            }
            catch (error) {
                console.log('Error parsing JSON:', error, data);
            }

            const dataPhotographers = [...data.photographers];
            const dataMedias = [...data.media];


            //const photographersSection = document.querySelector(".photographer_section");
            const photographersSection = document.querySelector(".photographer");

            dataPhotographers.forEach((photographer) => {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
            });
            
            
        });

/*         fetch('/public/src/data/photographers.json')
        .then(res => res.json())
        .then(data => displayData(Json.parse(data))); */



    };
    
    init();
    