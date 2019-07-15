window.onload = function () {
    var menuSpan = document.getElementsByTagName("span"),
        openedUl = menuSpan[0].nextElementSibling;

    // 为span绑定单击响应函数
    for (i = 0; i < menuSpan.length; i++) {
        menuSpan[i].onclick = function () {
            // 获取当前span相邻的ul
            var menuUl = this.nextElementSibling;
            // 打开/关闭菜单
            toggleMenu(menuUl);
            // 关闭上一次打开的菜单
            if (openedUl != menuUl && !hasClass(openedUl, "collapsed")) {
                // hasClass判断条件防止toggleClass删除类
                toggleMenu(openedUl);
            }
            // 修改openedUl为当前打开的菜单
            openedUl = menuUl;
        };
    }

    function toggleMenu(obj) {
        // 切换类之前获取对象高度
        var begin = obj.offsetHeight;
        // 切换类
        toggleClass(obj, "collapsed");
        // 切换类之后获取对象高度
        var end = obj.offsetHeight;
        // 将对象高度重置为begin
        obj.style.height = begin + "px";
        // 执行动画
        move(obj, "height", end, 20, function () {
            // 动画执行完毕 清除内联样式
            obj.style.height = "";
        });
    }
};