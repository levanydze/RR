var modalBtn = document.querySelector(".res-button");
var modalBg = document.querySelector(".reservation-modal-bg");
var modalClose = document.querySelector(".res-close-btn");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("res-modal-bg-active");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("res-modal-bg-active");
});

