const navbarToggle = document.getElementById("js-navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", function() {
  navbarMenu.classList.toggle("active");
});
