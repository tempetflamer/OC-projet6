// Fetch Data from photographers.json
async function dataFetch() {
    let data = await (await fetch('./data/photographers.json')).json();

    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];
    const datas = [...data.photographers, ...data.media];

    return {
        'photographers': dataPhotographers,
        'medias': dataMedias
    };
}