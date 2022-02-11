const popupToggles = document.querySelectorAll(".popup-toggle");
const popupContent = document.querySelectorAll(".popup-content");
const overlay = document.querySelector(".overlay");

popupToggles.forEach((el, i) => {
  el.addEventListener("click", () => {
    console.log(popupContent[i].classList);

    popupContent[i].classList.toggle("hidden");

    overlay.classList.toggle("hidden");

    // if ([...popupContent[i].classList].includes("hidden")) {
    //   console.log("True");
    //   overlay.classList.add("hidden");
    // } else {
    //   console.log("False");
    //   overlay.classList.remove("hidden");
    // }
  });
});

overlay.addEventListener("click", () => {
  popupContent.forEach((el) => el.classList.add("hidden"));
  overlay.classList.add("hidden");
});
