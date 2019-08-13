window.onload = function () {

    load();

    window.onresize = window.onscroll = function () {
        // 节流
        var timer = null;
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            load();
            timer = null;
        }, 250);
    };

    function load() {
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight, // 可视区域高度
            scrollHeight = document.documentElement.scrollTop || document.body.scrollTop, // 被卷去部分高度
            imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            var imgHeight = imgs[i].offsetTop; // 图片距离顶部高度
            if (imgHeight < clientHeight + scrollHeight) {
                imgs[i].src = imgs[i].getAttribute('data-src');
            }
        }
    }
    
};