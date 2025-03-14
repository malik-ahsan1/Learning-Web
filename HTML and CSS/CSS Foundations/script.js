const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hide");
  close.classList.add("close--visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menu.classList.remove("menu--hide");
  close.classList.remove("close--visible");
});
