let menu = document.querySelector("header nav");
let menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    menu.classList.toggle("show-menu");
    menuToggle.classList.toggle("active");
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 375 && window.innerWidth < 720 && menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        menuToggle.classList.remove("active");
    }
});