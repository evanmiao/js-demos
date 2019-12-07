window.onload = function () {
    var sideMenu = document.getElementById("sideMenu"),
        showSideMenu = document.getElementById("showSideMenu"),
        hideSideMenu = document.getElementById("hideSideMenu");

    showSideMenu.onclick = openSideMenu
    hideSideMenu.onclick = closeSideMenu

    function openSideMenu() {
        sideMenu.className = "menu";
        var openTimer = setInterval(function () {
            sideMenu.style.right = parseInt(sideMenu.style.right) + 5 + "%";
            if (parseInt(sideMenu.style.right) >= 0) {
                sideMenu.style.right = 0;
                clearInterval(openTimer)
            }
        }, 10);
    }

    function closeSideMenu() {
        var closeTimer = setInterval(function () {
            sideMenu.style.right = parseInt(sideMenu.style.right) - 5 + "%";
            if (parseInt(sideMenu.style.right) < -100) {
                sideMenu.style.right = -100 + "%";
                sideMenu.className = "menu hide";
                clearInterval(closeTimer)
            }
        }, 10);
    }
}