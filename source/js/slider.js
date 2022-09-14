const slider = document.querySelector(".slider__list"),
  before = document.querySelector(".slider__item--before"),
  after = document.querySelector(".slider__item--after"),
  toggleRange = document.querySelector(".slider__range"),
  btnBefore = document.querySelector(".slider__button--before"),
  btnAfter = document.querySelector(".slider__button--after");
toggleRange.addEventListener("input", () => {
  before.style.width = `${100-toggleRange.value}%`, console.log("before.style.width: " + before.style.width), after.style.width = `${toggleRange.value}%`, console.log("after.style.width: " + after.style.width)
}), btnBefore.addEventListener("click", () => {
  before.style.width = "100%", after.style.width = "0%", toggleRange.value = 0
}), btnAfter.addEventListener("click", () => {
  before.style.width = "0%", after.style.width = "100%", toggleRange.value = 100
}), document.body.clientWidth < 768 ? toggleRange.value = 0 : toggleRange.value = 50;
