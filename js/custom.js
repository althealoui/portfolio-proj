const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 10) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
});
