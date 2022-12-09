const containerListbox = document.querySelector(".gallery__listbox-container");
const containerListboxState = document.querySelector(".gallery__listbox-container--state");
const select = document.querySelector(".gallery__listbox-container__listbox");
const galeryListData = document.querySelector(".gallery__list__data");

let arrayFilter = [];
let indexFilter = 0;

//By defaut, order by popularity, so popularity option id hidden
select.children[0].style.display = "none";

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

function swapArrow() {
  const arrowUp = document.querySelector(".fa-chevron-up");
  const arrowDown = document.querySelector(".fa-chevron-down");
  arrowUp.classList.toggle("hidden");
  arrowDown.classList.toggle("hidden");

  let listboxOptionsDesign = document.createElement("div");
  listboxOptionsDesign.classList.add("gallery__listbox-container__options-design");
  listboxOptionsDesign.style.marginLeft = '6.75rem'
  listboxOptionsDesign.style.marginTop = '-1rem'
  listboxOptionsDesign.style.zIndex = 5;
  listboxOptionsDesign.style.position= "absolute";
  containerListbox.after(listboxOptionsDesign);
  let div = document.createElement("div");
  div.style.background="#901C1C";
  div.style.width="9.92rem";
  div.style.height="7rem";
  div.style.overflow="hidden"
  div.style.borderRadius = "0 0 5px 5px"
  listboxOptionsDesign.appendChild(div);
  containerListboxState.style.borderRadius = "5px 5px 0 0";
  // // le border radius est laissé sur select uniquement pour que l'encadré s'affiche bien après accès avec tab ou clique (accssibilité) // en faite on va le mettre en outline none donc on va s'en foutre de l'encadré normalement à tester
  select.style.outline = "none";

  //aafficher des div à la place des option et les rendres cliquables
  console.log();
}

function filterBy(e) {
  const filter = e.currentTarget.value;
  let arrayStart = arrayFilter;
  let arrayEnd;
  let i = 0;

  switch (filter) {
    case "popularité":
      select.children[0].style.display = "none";
      select.children[1].style.display = "block";
      select.children[2].style.display = "block";
      i = 0;
      arrayEnd = arrayStart.sort((a, b) => b.likes - a.likes);
      arrayEnd.forEach((element) => {
        const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
        document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
        i = i + 1;
      });
      break;

    case "date":
      select.children[0].style.display = "block";
      select.children[1].style.display = "none";
      select.children[2].style.display = "block";
      i = 0;
      arrayEnd = arrayStart.sort((a, b) => new Date(b.date) - new Date(a.date));
      arrayEnd.forEach((element) => {
        const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
        document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
        i = i + 1;
      });
      break;

    case "titre":
      select.children[0].style.display = "block";
      select.children[1].style.display = "block";
      select.children[2].style.display = "none";
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
//style="display: none;"
//Gallery filter event listener
select.addEventListener("change", filterBy);
select.addEventListener("click", swapArrow);