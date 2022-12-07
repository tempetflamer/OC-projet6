const select = document.querySelector(".listbox");
const galeryListData = document.querySelector(".gallery__list__data");

let arrayFilter = [];
let indexFilter = 0;

/**
 * Filter array initialization 
 * @param {*} title - media title
 * @param {*} likes - number of like for media
 * @param {*} date - media date
 * @param {*} indexFilter - media index given at init
 */
function initArrayLFilter(title, likes, date, indexFilter) {
  arrayFilter.push({ 'title': title, 'likes': likes, 'date': date, 'index': indexFilter });
  indexFilter = indexFilter + 1;
}

function filterBy(e) {
  const filter = e.currentTarget.value;
  let arrayStart = arrayFilter;
  let arrayEnd;
  let i = 0;

  switch (filter) {
    case "popularité":
      i = 0;
      arrayEnd = arrayStart.sort((a, b) => b.likes - a.likes);
      arrayEnd.forEach((element) => {
        const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
        document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
        i = i + 1;
      });
      break;

    case "date":
      i = 0;
      arrayEnd = arrayStart.sort((a, b) => new Date(b.date) - new Date(a.date));
      arrayEnd.forEach((element) => {
        const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
        document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
        i = i + 1;
      });
      break;

    case "titre":
      i = 0;
      arrayEnd = arrayStart.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });

      arrayEnd.forEach((element) => {
        const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
        childData.style.order = i + 1;
        i = i + 1;
      });
      break;

    default:
      break;
  }


}

//Gallery filter event listener
select.addEventListener("change", filterBy);