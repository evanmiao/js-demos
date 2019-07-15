function getStyle(obj, name) {
    if (window.getComputedStyle) {
        //用[]传入参数 .name只能得到name属性
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

function move(obj, attr, target, speed, callback) {
    // 判断运动方向
    if (parseInt(getStyle(obj, attr)) > target) {
        speed = - speed;
    }
    // 用之前先清除 防止定时器叠加
    clearInterval(obj.timer);
    // 向执行动画的对象中添加timer属性用来保存定时器的标识 这样不会和其他对象出现定时器冲突
    obj.timer = setInterval(function () {
        position = parseInt(getStyle(obj, attr)) + speed;
        // 防止越界
        if ((speed > 0 && position > target) || (speed < 0 && position < target)) {
            position = target;
        }
        obj.style[attr] = position + "px";
        if (position === target) {
            // 到达目标位置 清除定时器
            clearInterval(obj.timer);
            // 调用回调函数 有这个参数才调用
            callback && callback();
        }
    }, 30);
}