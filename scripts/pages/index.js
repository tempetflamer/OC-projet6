async function init() {
    const data = await dataFetch();
    const photographersSection = document.querySelector(".photographer");

    data.photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

init();