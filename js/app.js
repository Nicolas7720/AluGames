const itens = document.querySelectorAll(".dashboard__items__item");
itens.forEach((item) => {
  const img = item.querySelector(".dashboard__item__img");
  const btn = item.querySelector(".dashboard__item__button");
  btn.addEventListener("click", () => {
    if (btn.classList.contains("dashboard__item__button--return")) {
      btn.classList.remove("dashboard__item__button--return");
      btn.textContent = "Alugar";
      img.classList.remove("dashboard__item__img--rented");
    } else {
      btn.classList.add("dashboard__item__button--return");
      btn.textContent = "Devolver";
      img.classList.add("dashboard__item__img--rented");
    }
  });
});
