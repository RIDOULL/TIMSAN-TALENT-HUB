const collapse = document.querySelector("ul");
const navToggle = document.querySelector(".hamburger");

const NavBar = () => {
  collapse.classList.toggle("active");
};
navToggle.addEventListener("click", NavBar);