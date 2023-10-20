function hamburgerMenu() {
    let menuOpenBtn = document.getElementById("hamburger");
    let menuClose = document.getElementById("closeMenu");
    let sideMenu = document.getElementById("sideMenu");

    menuOpenBtn.addEventListener("click", open);
    menuClose.addEventListener("click", close);

    function open() {
        sideMenu.style.left = 0 + "px";
    }
    function close() {
        sideMenu.style.left = "-" + 400 + "px";
    }


}

hamburgerMenu();