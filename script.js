const hamburgerMenu = document.querySelector(".toggle-btn");
const sideBar = document.querySelector("#sidebar");
const sideBarItem = document.querySelectorAll(".sidebar-item");
const sideBarFooter = document.querySelectorAll(".sidebar-footer");
const logo = document.querySelector(".logo");
const toggleButton = document.querySelector(".toggle-btn");
const sideBarHover = document.querySelectorAll("[data-hover]");

hamburgerMenu.addEventListener("click", function () {
  sideBar.classList.toggle("expand");
  logo.classList.toggle("expand");
  toggleButton.classList.toggle("expand");
  for (i = 0; i < sideBarHover.length; i++) {
    sideBarHover[i].classList.toggle("expand");
  }
  for (i = 0; i < sideBarItem.length; i++) {
    sideBarItem[i].classList.toggle("expand");
  }
  for (i = 0; i < sideBarFooter.length; i++) {
    sideBarFooter[i].classList.toggle("expand");
  }
});
