window.onload = function () {
    var imgList = document.getElementById("imgList");
    var imgArr = document.getElementsByTagName("img");
    var imgWidth = imgList.children[0].offsetWidth;

    // 复制第一张图片所在的li 添加到ul的最后面
    var newLi = document.createElement("li");
    newLi.innerHTML = imgList.children[0].innerHTML;
    imgList.appendChild(newLi);

    imgList.style.width = imgWidth * imgArr.length + "px";

    // 鼠标放到ol的li上切换图片
    var btnList = document.getElementById("outer").children[1];
    var btns = btnList.getElementsByTagName("li");
    for (i = 0; i < btns.length; i++) {
        // 把索引值绑定到元素的index属性上
        btns[i].index = i;
        btns[i].onmouseover = function () {
            // 排他思想
            for (j = 0; j < btns.length; j++) {
                btns[j].className = "";
            }
            this.className = "color";
            move(imgList, "left", -this.index * imgWidth, 100);
        };
    }
    
    // 添加自动切换定时器
    var index = 0;
    var timer = setInterval(auto, 2000);

    var outer = document.getElementById("outer");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    // 鼠标移入显示左右切换按钮 清除自动切换定时器
    outer.onmouseover = function () {
        left.style.display = "block";
        right.style.display = "block";
        clearInterval(timer);
    };
    // 鼠标移出隐藏左右切换按钮 并开启自动切换定时器
    outer.onmouseout = function () {
        left.style.display = "none";
        right.style.display = "none";
        timer = setInterval(auto, 2000);
    };
    // 向左切换按钮
    left.onclick = function () {
        index--;
        if (index < 0) {
            index = imgArr.length - 2;
        }
        var target = -imgWidth * index;
        move(imgList, "left", target, 100)
        for (i = 0; i < btns.length; i++) {
            btns[i].className = "";
        }
        btns[index].className = "color";
    };
    right.onclick = function () {
        // 向右切换与自动切换一样 直接调用
        auto();
    }

    // 自动切换函数
    function auto() {
        index++;
        if (index > imgArr.length - 1) {
            // 图片滑动到最后一张时，跳转到第一张，然后再滑动到第二张
            imgList.style.left = 0;
            index = 1;
        }
        move(imgList, "left", - index * imgWidth, 100)
        for (i = 0; i < btns.length; i++) {
            btns[i].className = "";
        }
        btns[index % 4].className = "color";
    }

};