const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("show-menu");
});




const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




