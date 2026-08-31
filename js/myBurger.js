const body = document.querySelector("body");

const burgerBtn = document.querySelector(".header__burger");

const burgerNav = document.querySelector(".header__menu");

const navLink = document.querySelectorAll(".header__menu-item");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger--open");
  const isOpen = burgerNav.classList.toggle("header__menu--open");
  body.classList.toggle("body__lock", isOpen);
  burgerBtn.setAttribute("aria-expanded", isOpen);
});

const closeMenu = () => {
  burgerBtn.classList.remove("burger--open");
  burgerNav.classList.remove("header__menu--open");
  body.classList.remove("body__lock");
  burgerBtn.setAttribute("aria-expanded", false);
};

body.addEventListener("click", (event) => {
  if (!burgerNav.contains(event.target) && !burgerBtn.contains(event.target)) {
    closeMenu();
  }
});

navLink.forEach((link) => link.addEventListener("click", closeMenu));
