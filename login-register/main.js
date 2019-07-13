window.onload = function () {
    var loginLink = document.getElementById("loginLink"),
        registerLink = document.getElementById("registerLink"),
        loginLayer = document.getElementById("loginLayer"),
        registerLayer = document.getElementById("registerLayer"),
        loginSubmit = document.getElementById("loginSubmit"),
        registerSubmit = document.getElementById("registerSubmit"),
        loginError = document.getElementById("loginError"),
        registerError = document.getElementById("registerError"),
        loginUsername = document.getElementById("loginUsername"),
        loginPassword = document.getElementById("loginPassword"),
        registerUsername = document.getElementById("registerUsername"),
        registerPassword = document.getElementById("registerPassword"),
        repeatPsd = document.getElementById("repeatPsd");
        mask = document.getElementById("mask"),
        close = document.getElementsByClassName("close"),

    // 登陆链接事件
    loginLink.onclick = function () {
        // 显示遮罩层
        mask.style.display = "block";
        // 显示登陆弹出层
        loginLayer.style.display = "block";
    };

    // 注册链接事件
    registerLink.onclick = function () {
        // 显示遮罩层
        mask.style.display = "block";
        // 显示注册弹出层
        registerLayer.style.display = "block";
    };

    // 登陆提交按钮事件
    loginSubmit.onclick = function () {
        if (loginUsername.value === 'admin' && loginPassword.value === '123456') {
            closeLayer();
            alert("登录成功");
        } else {
            loginError.innerHTML = "账号或密码输入错误";
        }
    };

    // 注册提交按钮事件
    registerSubmit.onclick = function () {
        // 正则
        var pattern = /^[\w_]{6,16}$/;
        if (!pattern.test(registerUsername.value)) {
            registerError.innerHTML = "请输入6-16位用户名，可以包含字母、数字、下划线。";
        } else if (!pattern.test(registerPassword.value)) {
            registerError.innerHTML = "请输入6-16位密码，可以包含字母、数字、下划线。";
        } else if (registerPassword.value != repeatPsd.value) {
            registerError.innerHTML = "两次输入密码不一致";
        } else {
            closeLayer();
            alert("注册成功");
        }
    };

    // 关闭按钮事件
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            closeLayer();
        }
    }

    function closeLayer() {
        // 隐藏遮罩层
        mask.style.display = "none";
        // 隐藏弹出层
        loginLayer.style.display = "none";
        registerLayer.style.display = "none";
        // 清空错误信息
        loginError.innerHTML = "";
        registerError.innerHTML = "";
    }
};