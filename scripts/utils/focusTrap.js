/**
 * Function for focus trap inside contact form and lightbox
 * @param {string} value - from & for which
 */
function trapFocus(value) {
  let element;
  let focusableEls;
  let firstFocusableEl;
  let lastFocusableEl;

  function focuslisten(e) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === 9 || e.keyCode === 27);

    if (value == "filter") {
      if (optionListbox.children[5].style.display == "none") { lastFocusableEl = focusableEls[focusableEls.length - 2]; }
      else { lastFocusableEl = focusableEls[focusableEls.length - 1]; }
    }

    if (!isTabPressed) {
      return;
    }

    if (e.keyCode === 27) {
      if (value == "contact") { closeModal(); }
      if (value == "lightbox") { closeLightboxModal(); }
      if (value == "filter") { stateListbox(); }
    }
    else {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    }

    if ((document.activeElement == document.querySelector('.listbox-close')) && (e.shiftKey)) {
      (document.querySelector('.photographer__contact__btn')).focus();
      e.preventDefault();
    }
  }

  if (value == "contact") {
    element = contactModal;
    focusableEls = element.querySelectorAll('button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled])');
    firstFocusableEl = focusableEls[0];
    lastFocusableEl = focusableEls[focusableEls.length - 1];
  }
  else {
    if (value == "lightbox") {
      element = lightboxModal;
      firstFocusableEl = btnPrevLightbox;
      lastFocusableEl = btnCloseLightbox;
    }
    else {
      if (value == "filter") {
        element = containerListbox;
        focusableEls = element.querySelectorAll('div[tabindex="0"]');
        firstFocusableEl = focusableEls[0];
        lastFocusableEl = focusableEls[focusableEls.length - 1];
      }
    }
  }

  element.addEventListener('keydown', function (e) {
    focuslisten(e)
  });

}
