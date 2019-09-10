window.onload = function () {
    var box = document.getElementById("box"),
        stars = box.getElementsByTagName("li"),
        tips = box.getElementsByTagName("p")[0],
        arr = ['1分', '2分', '3分', '4分', '5分'],
        num = 0,
        flag = false;

    for (var i = 0; i < stars.length; i++) {
        stars[i].index = i;
        stars[i].onmouseover = function () {
            cancel();
            num = this.index;
            rate();
        };

        stars[i].onclick = function () {
            rate();
            flag = true;
            alert('评分完毕，您的评分是 ' + (num + 1) + ' 分。');
        };

        stars[i].onmouseout = function () {
            if (flag) {
                flag = false;
            } else {
                cancel();
            }
        };
    }

    function rate() {
        for (var i = 0; i <= num; i++) {
            stars[i].className = 'active';
        }
        tips.innerHTML = arr[num];
    }

    function cancel() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].className = "";
        }
        tips.innerHTML = "点击星星评分";
    }
}