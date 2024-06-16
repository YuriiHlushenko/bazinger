"use strict";

window.onload = function () {
  document
    .getElementById("form")
    .addEventListener("submit", stopDefAction, false);
};

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

const navDots = document.querySelectorAll(".slider__nav-dot");
const slider = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider__line");
const prev = document.querySelector(".slider__arrow--prev");
const next = document.querySelector(".slider__arrow--next");
const transform = [0, 33.3, 66.6];
const video = document.getElementById("video");

let current = 0;

function checkActiveButton() {
  current > 0
    ? prev.classList.add("slider__arrow--active")
    : prev.classList.remove("slider__arrow--active");

  current < 2
    ? next.classList.add("slider__arrow--active")
    : next.classList.remove("slider__arrow--active");
}

function checkActiveDot() {
  navDots.forEach((dot, i) =>
    i === current
      ? dot.classList.add("slider__nav-dot--active")
      : dot.classList.remove("slider__nav-dot--active")
  );
}

function scroll() {
  sliderLine.style.transform = `translateX(-${transform[current]}%)`;
}

const nextSlide = () => {
  if (current < 2) {
    current++;

    checkActiveButton();
    checkActiveDot();
    scroll();
  }
}

const prevSlide = () => {
  if (current > 0) {
    current--;

    checkActiveButton();
    checkActiveDot();
    scroll();
  }
}

navDots.forEach((dot, i) =>
  dot.addEventListener("click", () => {
    sliderLine.style.transform = `translateX(-${transform[i]}%)`;
    current = i;

    checkActiveDot();
    checkActiveButton();
  })
);

prev.addEventListener("click", prevSlide);

let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  } else if (yDiff > 0) {
    return;
  }

  xDown = null;
  yDown = null;
}

next.addEventListener("click", nextSlide);

slider.addEventListener("touchstart", handleTouchStart, { passive: true });
slider.addEventListener("touchmove", handleTouchMove, { passive: true });

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#menu") {
    document.body.classList.add("page__body--with-menu");
  } else {
    document.body.classList.remove("page__body--with-menu");
  }
});
