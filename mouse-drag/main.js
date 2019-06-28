window.onload = function () {
    // 浏览器视口宽高
    clientWidth = document.documentElement.clientWidth;
    clientHeight = document.documentElement.clientHeight;
    // 蒙版
    mask = document.getElementById("mask");
    mask.style.width = clientWidth + "px";
    mask.style.height = clientHeight + "px";
    // 盒子垂直水平居中
    box.style.left = clientWidth / 2 - box.offsetWidth / 2 + "px";
    box.style.top = clientHeight / 2 - box.offsetHeight / 2 + "px";

    box = document.getElementById("box");
    boxHeader = document.getElementById("box-header");
    boxHeader.onmousedown = function (event) {
        event = event || window.event;
        // 鼠标在盒子内部的偏移量
        mouseOffsetX = event.pageX - box.offsetLeft;
        mouseOffsetY = event.pageY - box.offsetTop;
        document.onmousemove = function (event) {
            event = event || window.event;
            moveX = event.pageX - mouseOffsetX;
            moveY = event.pageY - mouseOffsetY;
            // 限制盒子移动范围
            maxX = clientWidth - box.offsetWidth;
            maxY = clientHeight - box.offsetHeight;
            box.style.top = moveY + "px";
            box.style.left = moveX + "px";
            if (moveX < 0) {
                box.style.left = 0 + "px";
            }
            if (moveX > maxX) {
                box.style.left = maxX + "px";
            }
            if (moveY < 0) {
                box.style.top = 0 + "px";
            }
            if (moveY > maxY) {
                box.style.top = maxY + "px";
            }
        }
    };
    document.onmouseup = function () {
        document.onmousemove = null;
    };
};