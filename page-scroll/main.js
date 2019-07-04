window.onload = function () {
    // 屏幕可视高度
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var page = document.getElementById("page");
    var btns = document.getElementsByTagName("li");
    var godown = document.getElementById("godown");
    var index = 0;
    var max = page.children.length - 1;
    var canMove = true;

    function resize() {
        for (i = 0; i < page.children.length; i++) {
            page.children[i].style.height = pageHeight + "px";
        }
    }
    resize();
    window.onresize = resize();

    // 右侧导航按钮
    for (i = 0; i < btns.length; i++) {
        btns[i].index = i;
        btns[i].onclick = function () {
            canMove = false;
            index = this.index;
            startMove();
        };
    }

    // 下一页按钮
    godown.onclick = function () {
        canMove = false;
        index++;
        if (index > max) {
            index = max;
        }
        startMove();
    }

    // 鼠标滚轮切换页面
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        // 防止一次滚动触发多次事件
        if (canMove) {
            canMove = false;
            var event = event || window.event;
            // IE、chrome监听wheelDelta，向上滚动150，向下滚动-150
            if (event.wheelDelta) {
                var delta = event.wheelDelta / 150;
            }
            // FireFox监听detail，向上滚动-3，向下滚动3
            else if (event.detail) {
                // 取负数，以保证符号相同
                delta = - event.detail / 3;
            }
            if (delta < 0) {
                index++;
                if (index > max) {
                    index = max;
                }
            } else {
                index--;
                if (index < 0) {
                    index = 0;
                }
            }
            startMove();
        }
    }

    // 键盘上下键切换页面
    document.onkeydown = function (event) {
        if (canMove) {
            canMove = false;
            var event = event || window.event;
            if (event.keyCode == 40) {
                index++;
                if (index > max) {
                    index = max;
                }
            } else if (event.keyCode == 38) {
                index--;
                if (index < 0) {
                    index = 0;
                }
            }
            startMove();
        }
    }

    function startMove() {
        move(page, "top", - index * pageHeight, function () { canMove = true });
        for (i = 0; i < btns.length; i++) {
            btns[i].className = "";
        }
        btns[index].className = "current";
    }
};