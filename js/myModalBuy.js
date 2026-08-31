const buyBtn = document.querySelectorAll(".brand__cards-btn--buy");

const basketBtn = document.querySelector(".header__menu-basket");

const modal = document.querySelector(".modal-second");

const page = document.querySelector(".page");

const modalWindowBasket = document.querySelector(".modal__window-basket");

let basketArr = JSON.parse(localStorage.getItem("basket")) || [];

const updateBasketBtn = () => {
  basketBtn.classList.toggle("basket-btn", basketArr.length > 0);
};

const saveBasket = () => {
  localStorage.setItem("basket", JSON.stringify(basketArr));
  updateBasketBtn();
};

updateBasketBtn();

buyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".brand__cards");
    let product = {
      title: card
        .querySelector(".brand__cards-footer-title")
        .textContent.trim(),
      price: Number(card.querySelector(".price").textContent),
      img: card.querySelector(".brand__cards-img").src,
      id: card.dataset.id,
      amount: 1,
    };
    const existingProduct = basketArr.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      basketArr.push(product);
    }
    saveBasket();
  });
});

basketBtn.addEventListener("click", () => {
  modal.classList.remove("close");
  page.classList.add("body__lock");
  renderBasket();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("close");
    page.classList.remove("body__lock");
  }
});

function renderBasket() {
  if (basketArr.length === 0) {
    modalWindowBasket.innerHTML = `<div class="modal__window-header">
          <button class="modal__close modal__close-basket" type="button" aria-label="Закрыть корзину">
            <svg class="modal__close-icon" aria-hidden="true">
              <use class="modal__close-cross" href="./icons/cross.svg"></use>
            </svg>
          </button>
          <div class="modal__window-basket__empty">
      <svg width="60px" height="60px" aria-hidden="true">
        <use class="modal__window-basket__empty-icon" href="./icons/sprite.svg#card"></use>
      </svg>
      <p class="modal__window-basket__empty-title">Корзина пустая</p>
      <p class="modal__window-basket__empty-text">Добавьте товары, чтобы оформить заказ</p>
      <a class="modal__window-basket__empty-btn" href="#new-arrivals">В каталог</a>
    </div>`;

    const empty = modalWindowBasket.querySelector(
      ".modal__window-basket__empty",
    );
    const closeBtnBasketCross = modalWindowBasket.querySelector(
      ".modal__close-basket",
    );

    const closeBtnBasket = modalWindowBasket.querySelector(
      ".modal__window-basket__empty-btn",
    );
    closeBtnBasket.addEventListener("click", () => {
      modal.classList.add("close");
      page.classList.remove("body__lock");
    });

    closeBtnBasketCross.addEventListener("click", () => {
      modal.classList.add("close");
      page.classList.remove("body__lock");
    });

    empty.classList.add("empty__basket");
    return;
  }
  const sum = basketArr.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  modalWindowBasket.innerHTML = `<div class="modal__window-basket--wrapper modal__window-basket--full">
          <div class="modal__window-basket--header">
            <p class="modal__window-basket-title">КОРЗИНА</p>
            <button class="modal__window-basket--full-btn" type="button" aria-label="Закрыть корзину">
              <svg class="modal__close-icon" aria-hidden="true">
                <use class="modal__close-cross" href="./icons/cross.svg"></use>
              </svg>
            </button>
          </div>
          <div class="modal__window-basket-main">
            <div class="modal__window-basket--list"></div>
            <div class="modal__window-basket--footer">
              <div class="modal__window-basket--footer-total">
                <span class="modal__window-basket-title modal-title">К оплате</span>
                <span class="modal__window-card--title-accente-price modal-title">₽${sum}</span>
              </div>
              <div class="modal__window-basket--footer-buy">
                <button class="modal__window-basket--footer-btn" type="button">
                  ОФОРМИТЬ ЗАКАЗ
                </button>
              </div>
            </div>
          </div>
        </div>`;
  const cardList = document.querySelector(".modal__window-basket--list");
  cardList.innerHTML = basketArr
    .map(
      (
        product,
      ) => `<div class="modal__window-basket--card" data-id="${product.id}">
                <div class="modal__window-basket-card--wrapper">
                  <div class="modal__window-card--img">
                    <img
                      class="modal__window-card--pic"
                      src="${product.img}"
                      alt="${product.title}"
                    />
                  </div>
                  <div class="modal__window-card--title">
                    <span class="modal__window-card--title-accente"
                      >${product.title}</span
                    >
                    <span>${product.amount} шт.</span>
                  </div>
                </div>
                <div class="modal__window-card--price">
                  <span class="modal__window-card--title-accente-price"
                    >₽${product.price * product.amount}</span
                  >
                </div>
                <div class="modal__window-card--delete">
                  <button class="modal__window-card--delete-btn" type="button" aria-label="Удалить ${product.title} из корзины">
                    <svg class="modal__window-card--delete-btn-icon" aria-hidden="true"><use href="./icons/bin.svg"></use></svg>
                  </button>
                </div>
              </div>`,
    )
    .join("");
  const closeBtnFull = modalWindowBasket.querySelector(
    ".modal__window-basket--full-btn",
  );
  const buyBtnFull = modalWindowBasket.querySelector(
    ".modal__window-basket--footer-btn",
  );
  closeBtnFull.addEventListener("click", () => {
    modal.classList.add("close");
    page.classList.remove("body__lock");
  });
  buyBtnFull.addEventListener("click", () => {
    modal.classList.add("close");
    page.classList.remove("body__lock");
  });
  const btnBin = modalWindowBasket.querySelectorAll(
    ".modal__window-card--delete-btn",
  );

  btnBin.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cardBin = btn.closest(".modal__window-basket--card");
      const id = cardBin.dataset.id;

      basketArr = basketArr.filter((item) => item.id !== id);
      saveBasket();
      renderBasket();
    });
  });
}
