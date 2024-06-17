"use strict";

const headerLinks = Array.from(document.querySelectorAll(".header__link"));
const mainSections = document.querySelectorAll("section");

const setCurrentLink = () => {
  if (window.screen.width > 1279) {
    window.addEventListener("scroll", event => {
      const fromTop = window.scrollY + 150;

      headerLinks.forEach((link, i) => {

        if (i !== 4 && i !== 5) {
          const hash = link.href.split('/').slice(-1)[0].slice(1);

          const section = document.getElementById(hash);

          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("header__link--current");
          } else {
            link.classList.remove("header__link--current");
          }
        }
      });
    });
  }
}

setCurrentLink();

window.addEventListener('resize', setCurrentLink);
