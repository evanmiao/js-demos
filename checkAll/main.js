window.onload = function () {
    item = document.getElementsByName("item");
    // 全选/取消全选
    checkOrCancelAll = document.getElementById("checkOrCancelAll");
    checkOrCancelAll.onclick = function () {
        if (this.checked) {
            for (i = 0; i < item.length; i++) {
                item[i].checked = true;
            }
        } else {
            for (i = 0; i < item.length; i++) {
                item[i].checked = false;
            }
        }
    };
    // 给每个item绑定一个单击响应函数
    for (var i = 0; i < item.length; i++) {
        item[i].onclick = function () {
            checkOrCancelAll.checked = true;
            for (var i = 0; i < item.length; i++) {
                if (!item[i].checked) {
                    checkOrCancelAll.checked = false;
                    break;
                }
            }
        };
    }
    // 全选
    checkAll = document.getElementById("checkAll");
    checkAll.onclick = function () {
        for (i = 0; i < item.length; i++) {
            item[i].checked = true;
        }
        checkOrCancelAll.checked = true;
    };
    // 重置
    reset = document.getElementById("reset");
    reset.onclick = function () {
        for (i = 0; i < item.length; i++) {
            item[i].checked = false;
        }
        checkOrCancelAll.checked = false;
    };
    // 反选
    invert = document.getElementById("invert");
    invert.onclick = function () {
        for (i = 0; i < item.length; i++) {
            if (item[i].checked) {
                item[i].checked = false;
            } else {
                item[i].checked = true;
            }
        }
        checkOrCancelAll.checked = false;
    };
};