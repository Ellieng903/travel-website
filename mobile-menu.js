const navBtn = document.getElementById("mobile-menu-toggle");
const navList = document.getElementById("nav-links");

navBtn.addEventListener("click", () =>  {
    navList.classList.toggle("active");
});