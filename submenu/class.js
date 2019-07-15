// 判断obj是否含有className
function hasClass(obj, cn) {
    // 创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");
    // 返回检查结果
    return reg.test(obj.className);
}

// 向obj中添加className
function addClass(obj, cn) {
    // 检查obj是否已含有className
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

// 删除obj中的className
function removeClass(obj, cn) {
    // 正则
    var reg = new RegExp("\\b" + cn + "\\b");
    // 把className替换成空串
    obj.className = obj.className.replace(reg, "");
    obj.className = obj.className.replace(/ $/, "");
}

// 切换
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}