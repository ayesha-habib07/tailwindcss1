let menu = document.getElementById("menu");
let menuIcon = document.getElementById("menu-icon");

function onToggleMenu(e) {
    menu.classList.toggle("hidden");
    // Toggle between menu and close icons
    if (menu.classList.contains("hidden")) {
        menuIcon.classList.remove("fa-solid", "fa-x");
        menuIcon.classList.add("fa-solid", "fa-bars");
    } else {
        menuIcon.classList.remove("fa-solid", "fa-bars");
        menuIcon.classList.add("fa-solid", "fa-x");
    }
}