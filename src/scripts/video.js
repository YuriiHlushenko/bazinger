"use strict";

const modal = document.querySelector(".video__modal");
const modalBtn = document.querySelector(".video__play");

modalBtn.addEventListener("click", () => {
  modal.innerHTML = `
  <div class ="video__modal-content">
  <button class="button video__close">close</button>
  <iframe
    width="1106"
    height="632"
    src="https://www.youtube.com/embed/G1QYS12bB58?list=PLy_eQOYJ5fx6USHVDEaAe173v1SkiwZtp"
    title="Incredible iPhone X Mockups &amp; promo Video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
  </div>
  `
  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.opacity = "1"
  }, 50)
});

modal.addEventListener('click', () => {
  modal.innerHTML = '';
  modal.style.opacity = "0";

  setTimeout(() => {
    modal.style.display = "none";
  }, 450);
})
