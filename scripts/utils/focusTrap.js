/**
 * Function for focus trap inside contact form and lightbox
 * @param {string} value - from & for which
 */
function trapFocus(value) {
  let element;
  let focusableEls;
  let firstFocusableEl;
  let lastFocusableEl;
  if (value == "contact") {
    element = contactModal;
    focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
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
        focusableEls = element.querySelectorAll('div:not([disabled])');
        firstFocusableEl = focusableEls[0];
        lastFocusableEl = focusableEls[focusableEls.length - 1];
      }
    }
  }

  element.addEventListener('keydown', function (e) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === 9 || e.keyCode === 27);

    if (!isTabPressed) {
      return;
    }
    if (e.keyCode === 27) /* ESC */ {
      if (value == "contact") { closeModal(); }
      if (value == "lightbox") { closeLightboxModal(); }
      if (value == "filter") { stateListbox(); }
    }
    else {
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
    }

  });
}
