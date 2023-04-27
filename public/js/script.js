"use strict";

// Banner Slider
const mySlide = document.querySelectorAll(".myslide");
let counter = 1;
slideFun(counter);

let timer = setInterval(autoSlide, 4500);
function autoSlide() {
  counter += 1;
  slideFun(counter);
}
function plusSlides(n) {
  counter += n;
  slideFun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slideFun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 4500);
}

function slideFun(n) {
  let i;
  for (i = 0; i < mySlide.length; i++) {
    mySlide[i].style.display = "none";
  }
  if (n > mySlide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = mySlide.length;
  }
  mySlide[counter - 1].style.display = "block";
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// filter js
const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".aktual-product");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    // console.log(filter);

    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}

// sertificate modal
/* const overlay = document.querySelector("#overlay");

document.querySelector("#show-modal-btn").addEventListener("click", () => {
  overlay.style.display = "block";
});

document.querySelector("#close-modal-btn").addEventListener("click", () => {
  overlay.style.display = "none";
}); */
