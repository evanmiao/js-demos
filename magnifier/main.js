window.onload = function () {
    var box = document.getElementById("box");
    smallBox = box.children[0];
    mask = smallBox.children[0];
    bigBox = box.children[1];
    bigImg = bigBox.children[0];

    smallBox.onmousemove = function (event) {
        event = event || window.event;
        bigBox.style.display = "block";
        mask.style.display = "block";
        var left = event.clientX - smallBox.offsetLeft - mask.offsetWidth / 2;
        var top = event.clientY - smallBox.offsetTop - mask.offsetHeight / 2;
        if (left < 0) {
            left = 0;
        }
        else if (left > smallBox.offsetWidth - mask.offsetWidth) {
            left = smallBox.offsetWidth - mask.offsetWidth;
        }
        if (top < 0) {
            top = 0;
        }
        else if (top > smallBox.offsetHeight - mask.offsetHeight) {
            top = smallBox.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = left + "px";
        mask.style.top = top + "px";

        bigImg.style.left = -left * bigBox.offsetWidth / mask.offsetWidth + "px";
        bigImg.style.top = -top * bigBox.offsetHeight / mask.offsetHeight + "px";
    };

    smallBox.onmouseout = function () {
        mask.style.display = "none";
        bigBox.style.display = "none";
    }
};