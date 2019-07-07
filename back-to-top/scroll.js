function scroll() {
    // ie9+ 高版本浏览器
    // window.pageYOffset 默认为0 需要进行判断
    if (window.pageYOffset !== undefined) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    // 已声明DTD
    } else if (document.compatMode === "CSS1Compat") {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    // 未声明DTD 
    // document.compatMode === "BackCompat"
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}