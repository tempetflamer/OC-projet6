function trapFocusContact() {
  const element = contactModal;
  const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableEl = focusableEls[0]; // par defaut il est sur prenom le focus mais on peut aussi mettre le premier élément focusable sur 1 est le dernier sur 0
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;

  element.addEventListener('keydown', function (e) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  });
}

function trapFocusLightbox() {
  const element = lightboxModal;
  const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const nextFocusableEl = focusableEls[0 + 1];
  const prevFocusableEl = focusableEls[0 - 1];
  const KEYCODE_TAB = 9;

  element.addEventListener('keydown', function (e) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) /* shift + tab */ {
      if (document.activeElement === btnPrevLightbox) {
        btnCloseLightbox.focus();
        e.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === btnCloseLightbox) {
        btnPrevLightbox.focus();
        e.preventDefault();
      }
    }
  });
}

function trapFocusFilter() {
  const element = containerListbox;
  const focusableEls = element.querySelectorAll('div:not([disabled])');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const nextFocusableEl = focusableEls[0 + 1];
  const prevFocusableEl = focusableEls[0 - 1];
  const KEYCODE_TAB = 9;
  let boolClose = false;


  element.addEventListener('keydown', function (e) {
    // 37 = left arrow & 39 = right arrow & 27 = esc key & 38 = up arrow & 40 = down arrow
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27/*  || e.keyCode === 38 || e.keyCode === 40 */);

    if (!isTabPressed) {
      return;
    }
    // left, right arrow and esc key
    if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27) { // duplication d'entrée de listbox
      console.log("entrée dans esc key");
      if (boolClose === false){
        closeListbox();
        //e.preventDefault();
        boolClose = true;
      }
    }
    else {
      if (e.shiftKey/*  || e.keyCode === 38 */) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (e.key === 'Tab'/*  || e.keyCode === 40 */) {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      }
    }

    /*     const isArrowPressed = (e.key === 'ArrowDown' || e.key === 'ArrowUp');
    
        if (!isArrowPressed) {
          return;
        }
    
        if (e.key === 'ArrowUp') {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (e.key === 'ArrowDown') {
            if (document.activeElement === lastFocusableEl) {
              firstFocusableEl.focus();
              e.preventDefault();
            }
          }
        } */

    /*     const isArrowPressedCode = (e.keyCode === 38 || e.keyCode === 40);
    
        if (!isArrowPressedCode) {
          return;
        }
    
        if (e.keyCode === 38) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (e.keyCode === 40) {
            if (document.activeElement === lastFocusableEl) {
              firstFocusableEl.focus();
              e.preventDefault();
            }
          }
        } */

    /* 
        const isArrowPressedCode = (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27); // left, right arrow and esc key
    
        if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27) {
          console.log('test')
          closeListbox();
        }
    
     */

  });
}

function trapFocusFilter2() {
  //faut que je trouve un moyen d'enlever les div qui sont pas utile de l'équation
  const element = containerListbox;
  const focusableEls = element.querySelectorAll('div[tabindex="0"]:not([disabled])' );
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const nextFocusableEl = focusableEls[0 + 1];
  const prevFocusableEl = focusableEls[0 - 1];
  const KEYCODE_TAB = 9;
  let actuelFocus = 0;

  element.addEventListener('keydown', function (e) {
    // 37 = left arrow & 39 = right arrow & 27 = esc key & 38 = up arrow & 40 = down arrow
    const isTabPressed = (e.keyCode === 38 || e.keyCode === 40);

    if (!isTabPressed) {
      return;
    }

    
// if (e.keyCode === 38) /* shift + tab */ {
    if (e.keyCode === 38) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        actuelFocus = focusableEls.length - 1;
        lastFocusableEl.focus();
        e.preventDefault();
      }
      else {
        actuelFocus = actuelFocus - 1;
        focusableEls[actuelFocus].focus();
      }
    } else /* tab */ {
      if (e.keyCode === 40) {
        if (document.activeElement === lastFocusableEl) {
          actuelFocus = 0
          firstFocusableEl.focus();
          e.preventDefault();
        }
        else {
          actuelFocus = actuelFocus + 1;
          focusableEls[actuelFocus].focus();
        }
      }
    }


    /*     const isArrowPressed = (e.key === 'ArrowDown' || e.key === 'ArrowUp');
    
        if (!isArrowPressed) {
          return;
        }
    
        if (e.key === 'ArrowUp') {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (e.key === 'ArrowDown') {
            if (document.activeElement === lastFocusableEl) {
              firstFocusableEl.focus();
              e.preventDefault();
            }
          }
        } */

    /*     const isArrowPressedCode = (e.keyCode === 38 || e.keyCode === 40);
    
        if (!isArrowPressedCode) {
          return;
        }
    
        if (e.keyCode === 38) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (e.keyCode === 40) {
            if (document.activeElement === lastFocusableEl) {
              firstFocusableEl.focus();
              e.preventDefault();
            }
          }
        } */

    /* 
        const isArrowPressedCode = (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27); // left, right arrow and esc key
    
        if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27) {
          console.log('test')
          closeListbox();
        }
    
     */

  });
}

/* function escTrapFocusFilter() {
  const element2 = containerListbox;

  element2.addEventListener('keydown', function (e) {
    // left, right arrow and esc key
    if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 27) {
      closeListbox();
    }
  });
} */
