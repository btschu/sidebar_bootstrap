const hamburgerMenu = document.querySelector(".toggle-btn");
const sideBar = document.querySelector("#sidebar");
const logo = document.querySelector(".logo");
const sideBarHover = document.querySelectorAll("[data-hover]");

hamburgerMenu.addEventListener("click", function () {
  sideBar.classList.toggle("expand"); // expands sidebar menu
  logo.classList.toggle("expand"); // hides logo in main and adds it to the sidebar
  for (i = 0; i < sideBarHover.length; i++) {
    console.log(sideBarHover[i]);
    sideBarHover[i].classList.toggle("expand");
  }
});
