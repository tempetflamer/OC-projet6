/* Fonction simple */
async function dataFetch() {
            let data = await (await fetch('./data/photographers.json')).json();

            const dataPhotographers = [...data.photographers];
            const dataMedias = [...data.media];
            const datas = [...data.photographers, ...data.media];

           return {
            'photographers': dataPhotographers,
            'medias': dataMedias
        };
};

/* Fonction test json undefined */
//var data;
//console.log("let data", data);
/* if (data === undefined) { var data;}
async function dataFetch() {

    if (data === undefined) {
        data = await (await fetch('./data/photographers.json')).json();
        console.log(data);

        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];
        const datas = [...data.photographers, ...data.media];
        console.log("chargement des données");

       return {
        'photographers': dataPhotographers,
        'medias': dataMedias
    };
        
    }
    else{
        console.log("données dejà chargé");
        return {
            'photographers': dataPhotographers,
            'medias': dataMedias
        };
    }


};
 */
 