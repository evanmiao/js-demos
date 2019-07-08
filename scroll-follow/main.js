window.onload = function () {
    var ad1 = document.getElementById("ad1"),
        ad2 = document.getElementById("ad2"),
        adTop = ad1.offsetTop,
        position = 0,
        target = 0,
        timer;
    window.onscroll = function () {
        // 把最新的 scrolltop 给  target
        target = scroll().top + adTop;
        // 防止定时器叠加
        clearInterval(timer);
        timer = setInterval(function () {
            // 缓动公式
            position += (target - position) / 10;
            // 处理小数赋值
            if (Math.abs(target - position) < 1) {
                position = target;
            }
            ad1.style.top = position + "px";
            ad2.style.top = position + "px";
            if (position === target) {
                // 到达目标位置 清除定时器
                clearInterval(timer);
            }
        }, 30);
    };
};