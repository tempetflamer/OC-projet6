const containerListbox = document.querySelector(".gallery__listbox-container");
const optionListbox = document.querySelector(".gallery__listbox-options");
const optionAllListbox = document.querySelectorAll(".gallery__listbox-options > div");
const containerListboxState = document.querySelector(".gallery__listbox-container--state");
const select = document.querySelector(".gallery__listbox-container__listbox");
const galeryListData = document.querySelector(".gallery__list__data");
const galeryList = document.querySelector(".gallery__list");

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

function resetListbox() {
  console.log("entére dans resetlistbox");
// un try catch ne sert à rien car il faut bien les enlever normalement
  document.querySelector(".listbox-close").removeEventListener("click", resetListbox);
  document.querySelector(".listbox-close").removeEventListener("keydown", resetListboxKey);
  //document.querySelector("main").removeEventListener("click", resetListbox);
/*   document.querySelector(".listbox-close").removeEventListener("keydown", (e) => {
    if (e.code === "Enter") { resetListbox(); }
  }); */
  containerListboxState.classList.remove("listbox-close");
  galeryList.style.marginTop = "0";
}

function resetListboxKey(domCloseListbox) {
  console.log("resetListboxKey");
  if ( domCloseListbox.code === "Enter") { 
    console.log("resetListboxKey2"); 
    resetListbox(); 
  }
}

function closeListbox() {
  resetListbox();
  optionListbox.classList.toggle("hidden");
  swapArrow();
}
function closeListbox2() {
  resetListbox();
  optionListbox.classList.toggle("hidden");
  swapArrow();
}

function openListbox() {
  optionListbox.classList.toggle("hidden");
  if (select.dataset.selected == "popularité") {
    console.log("test")
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
  //escTrapFocusFilter();
  //mettre al box en display absolute
  galeryList.style.marginTop = "-6.95rem"
  containerListboxState.classList.add("listbox-close");
  const domCloseListbox = document.querySelector(".listbox-close");
  //document.querySelector("main").addEventListener("click", closeListbox); // ça marche pas j'arrive pas le remove et ça me fais chiez
  domCloseListbox.addEventListener("click", resetListbox);
  domCloseListbox.addEventListener("keydown", resetListboxKey);
  document.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
 
  trapFocusFilter();
/*   document.querySelector(".listbox-close").addEventListener("keydown", (e) => {
    if (e.code === "Enter") { resetListbox(); }
  }); */
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

  let arrayStart = arrayFilter;
  let arrayEnd;
  let i = 0;
  closeListbox();



  switch (filter) {
    case "popularité":
      // Changer value selected
      select.dataset.selected = "popularité";
      select.textContent = "Popularité";

      i = 0;
      arrayEnd = arrayStart.sort((a, b) => b.likes - a.likes);
      arrayEnd.forEach((element) => {
        const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
        document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
        i = i + 1;
      });
      break;

    case "date":
      // Changer value selected
      select.dataset.selected = "date";
      select.textContent = "Date";

      i = 0;
      arrayEnd = arrayStart.sort((a, b) => new Date(b.date) - new Date(a.date));
      arrayEnd.forEach((element) => {
        const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
        document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
        i = i + 1;
      });
      break;

    case "titre":
      // Changer value selected
      select.dataset.selected = "titre";
      select.textContent = "Titre";

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
        //if (i ==0) {childData.focus();}        
        i = i + 1;
      });
      break;

      default:
      break;
  }


}

function filterByK(e) {
  const focusElement = document.activeElement;
    console.log("enter in filter", focusElement.dataset.option)
    //e.dataset.option;
    const filter = focusElement.currentTarget.dataset.option;
    let arrayStart = arrayFilter;
    let arrayEnd;
    let i = 0;
    //console.log(select.dataset.selected);
    closeListbox();
  
  
  
    switch (filter) {
      case "popularité":
        // Display or hide value selected and separator // pas sur d'avori besoin de metrte ça surement juste besoin de changer data-selected et textcontent comme à=ça se lit à l'ouvertur =e de la modale
  /*       // Popularity
        optionListbox.children[0].style.display = "none";
        optionListbox.children[1].style.display = "none";
        // Date
        optionListbox.children[2].style.display = "block";
        optionListbox.children[3].style.display = "block";
        //Title
        optionListbox.children[4].style.display = "block";
        optionListbox.children[5].style.display = "block"; */
  
        // Changer value selected
        select.dataset.selected = "popularité";
        select.textContent = "Popularité";
  
        i = 0;
        arrayEnd = arrayStart.sort((a, b) => b.likes - a.likes);
        arrayEnd.forEach((element) => {
          const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
          document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
          i = i + 1;
        });
        break;
  
      case "date":
        // Changer value selected
        select.dataset.selected = "date";
        select.textContent = "Date";
  
        i = 0;
        arrayEnd = arrayStart.sort((a, b) => new Date(b.date) - new Date(a.date));
        arrayEnd.forEach((element) => {
          const childData = document.querySelector('.gallery__list__data:nth-child(' + element.index + ')');
          document.querySelector('.gallery__list__data:nth-child(' + element.index + ')').style.order = i + 1;
          i = i + 1;
        });
        break;
  
      case "titre":
        // Changer value selected
        select.dataset.selected = "titre";
        select.textContent = "Titre";
  
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
//select.addEventListener("change", filterBy);
containerListboxState.addEventListener("click", openListbox); // il faut rendre toute la zone cliquable avec containerListboxState a la place de select
//changer le tab index au parent pour permettre la navigation
containerListboxState.addEventListener("keydown", (e) => {
  if (e.code === "Enter") { openListbox(); }
});
optionAllListbox.forEach((e) => e.addEventListener("click", filterBy));
/* optionAllListbox.forEach((e) => e.addEventListener("keydown", (k, e) => {
  if (k.code === "Enter") { filterByK(e); }
})); */
//optionAllListbox.forEach((e) => e.addEventListener("keydown", filterByK));
optionAllListbox.forEach((e) => e.addEventListener("keydown", (k) => {
  if (k.code === "Enter") { filterBy(e); }
}));