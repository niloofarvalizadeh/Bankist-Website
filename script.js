"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Page Navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Scrolling
const btnScroll = document.querySelector(".btn--scroll-to");
const sectionScroll = document.querySelector("#section--1");
btnScroll.addEventListener("click", function () {
  sectionScroll.scrollIntoView({ behavior: "smooth" });
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');

// Guard clause
if (!clicked) return; 

// Remove active classes
tabs.forEach(t => t.classList.remove('.operations__content--active'));
tabsContent.forEach(c => c.classList.remove('operations__content--active'));

// Activate tab
clicked.classList.add('operations__tab--active');

// Activate content area
document.querySelector(`.operations__content--${clicked.dataset.tab}`)
.classList.add('operations__content--active');
});

