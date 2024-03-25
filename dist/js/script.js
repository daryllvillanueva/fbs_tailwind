const navBurger = document.querySelector(".burger__menu");
const headNav = document.querySelector(".header__nav");

navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("open");
  headNav.classList.toggle("open");
});