window.onload = function () {
    var goTop = document.getElementById("goTop"),
        position = 0,
        target = 0,
        timer;
    window.onscroll = function () {
        // 网页被卷去高度大于300时显示按钮
        if (scroll().top > 300) {
            goTop.style.display = "block";
        } else {
            goTop.style.display = "none";
        }
    }
    goTop.onclick = function () {
        // 获取初始位置
        position = scroll().top;
        // 防止定时器叠加
        clearInterval(timer);
        timer = setInterval(function () {
            target = 0;
            // 缓动公式
            position += (target - position) / 10;
            if (position < 10) {
                position = target;
            }
            window.scrollTo(0, position);
            if (position == target) {
                clearInterval(timer);
            }
        }, 20)
    }
};