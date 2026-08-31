const btn = document.querySelector(".header__advertising-massage-cross");

const menu = document.querySelector(".header__advertising-background");

btn.addEventListener("click", () => {
  menu.classList.toggle("close");
});
