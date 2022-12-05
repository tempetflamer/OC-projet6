/* async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userSection = photographerModel.getUserSection();
        photographersSection.appendChild(userSection);
    });
}; */

async function init() {
    fetch('./data/photographers.json', { mode: 'no-cors' })
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

            const photographersSection = document.querySelector(".photographer");

            dataPhotographers.forEach((photographer) => {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
            });

        });

};

init();