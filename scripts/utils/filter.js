const containerListbox = document.querySelector(".gallery__listbox-container");
const optionListbox = document.querySelector(".gallery__listbox-container__options");
const optionAllListbox = document.querySelectorAll(".gallery__listbox-container__options > div");
const containerListboxState = document.querySelector(".gallery__listbox-container--state");
const select = document.querySelector(".gallery__listbox-container__listbox");
const galeryList = document.querySelector(".gallery__list");


/**
 * Remove all children in Gallery
 * @param {*} parent - galeryList
 */
function clearGallery(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function swapStateListbox() {
  optionListbox.classList.toggle("hidden");
  if (select.dataset.selected == "popularité") {
    optionListbox.children[0].style.display = "none";
    optionListbox.children[1].style.display = "none";

    optionListbox.children[2].style.display = "block";
    optionListbox.children[3].style.display = "block";
    optionListbox.children[4].style.display = "block";
    optionListbox.children[5].style.display = "block";
  }
  else if (select.dataset.selected == "date") {
    optionListbox.children[2].style.display = "none";
    optionListbox.children[3].style.display = "none";

    optionListbox.children[0].style.display = "block";
    optionListbox.children[1].style.display = "block";
    optionListbox.children[4].style.display = "block";
    optionListbox.children[5].style.display = "block";
  }
  else if (select.dataset.selected == "titre") {
    optionListbox.children[0].style.display = "block";
    optionListbox.children[1].style.display = "block";
    optionListbox.children[2].style.display = "block";
    optionListbox.children[3].style.display = "block";

    optionListbox.children[4].style.display = "none";
    optionListbox.children[5].style.display = "none";
  }
  swapArrow();
}

function stateListbox() {
  swapStateListbox();
  containerListboxState.classList.toggle("listbox-close");
}

function swapArrow() {
  const arrowUp = document.querySelector(".fa-chevron-up");
  const arrowDown = document.querySelector(".fa-chevron-down");
  arrowUp.classList.toggle("hidden");
  arrowDown.classList.toggle("hidden");

}

function filterBy(e) {
  let filter = '';
  try {
    filter = e.currentTarget.dataset.option; // click

  } catch {
    filter = e.dataset.option; // key
  }

  let arrayStart = arrayMedia;
  let arrayEnd;
  let i = 0;
  swapStateListbox();


  switch (filter) {
    case "popularité":
      // Changer value selected
      select.dataset.selected = "popularité";
      select.textContent = "Popularité";

      clearGallery(galeryList);
      i = 0;
      arrayEnd = arrayStart.sort((a, b) => b.likes - a.likes);
      arrayEnd.forEach((element) => {
        element.index = i;
        let mediaModel = mediasFactory(element, '', false, element.liked);
        let galleryCardDOM = mediaModel.getGalleryCardDOM();
        galeryList.appendChild(galleryCardDOM);
        i++
      });

      optionListbox.children[1].setAttribute("disabled", "disabled");
      optionListbox.children[3].removeAttribute("disabled");
      optionListbox.children[5].removeAttribute("disabled");
      trapFocus("filter");
      break;

    case "date":
      // Changer value selected
      select.dataset.selected = "date";
      select.textContent = "Date";

      clearGallery(galeryList);
      i = 0;
      arrayEnd = arrayStart.sort((a, b) => new Date(b.date) - new Date(a.date));
      arrayEnd.forEach((element) => {
        element.index = i;
        let mediaModel = mediasFactory(element, '', false, element.liked);
        let galleryCardDOM = mediaModel.getGalleryCardDOM();
        galeryList.appendChild(galleryCardDOM);
        i++
      });

      optionListbox.children[1].removeAttribute("disabled");
      optionListbox.children[3].setAttribute("disabled", "disabled");
      optionListbox.children[5].removeAttribute("disabled");
      trapFocus("filter");
      break;

    case "titre":
      // Changer value selected
      select.dataset.selected = "titre";
      select.textContent = "Titre";

      clearGallery(galeryList);
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
        element.index = i;
        let mediaModel = mediasFactory(element, '', false, element.liked);
        let galleryCardDOM = mediaModel.getGalleryCardDOM();
        galeryList.appendChild(galleryCardDOM);
        i++
      });

      optionListbox.children[1].removeAttribute("disabled");
      optionListbox.children[3].removeAttribute("disabled");
      optionListbox.children[5].setAttribute("disabled", "disabled");
      trapFocus("filter");
      break;

    default:
      break;
  }
  optionListbox.classList.toggle("hidden");

}

// Open or close listbox
containerListboxState.addEventListener("click", stateListbox); // il faut rendre toute la zone cliquable avec containerListboxState a la place de select
containerListboxState.addEventListener("keydown", (e) => {
  if (e.code === "Enter") { stateListbox(); }
});
// Each element from listbox can launch the function filterby to sort the gallery
optionAllListbox.forEach((e) => e.addEventListener("click", filterBy));
optionAllListbox.forEach((e) => e.addEventListener("keydown", (k) => {
  if (k.code === "Enter") { filterBy(e); }
}));

// Allow to block focus inside listbox open
trapFocus("filter");