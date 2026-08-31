const btnAdd = document.querySelector(".brand__btn-add");

const btnAddSecond = document.querySelector(".brand__btn-add--second");

const wrapperBrand = document.querySelectorAll(".brand__wrapper");

const extraBrand = document.querySelector(".brand__wrapper-extra");

const extraBrandSecond = document.querySelector(
  ".brand__wrapper-extra--second",
);

btnAdd.addEventListener("click", () => {
  if (btnAdd.textContent === "Скрыть все") {
    extraBrand.classList.remove("brand__wrapper--open");
    extraBrand.classList.add("brand__wrapper--close");
    btnAdd.textContent = "Посмотреть всё";
  } else {
    extraBrand.classList.add("brand__wrapper--open");
    extraBrand.classList.remove("brand__wrapper--close");
    btnAdd.textContent = "Скрыть все";
    wrapperBrand.forEach((brand) => {
      brand.style.marginBottom = "clamp(0.625rem, 0.366rem + 1.1vw, 1.25rem)";
    });
  }
});

btnAddSecond.addEventListener("click", () => {
  if (btnAddSecond.textContent === "Скрыть все") {
    extraBrandSecond.classList.remove("brand__wrapper--open");
    extraBrandSecond.classList.add("brand__wrapper--close");
    btnAddSecond.textContent = "Посмотреть всё";
  } else {
    extraBrandSecond.classList.add("brand__wrapper--open");
    extraBrandSecond.classList.remove("brand__wrapper--close");
    btnAddSecond.textContent = "Скрыть все";
  }
});
