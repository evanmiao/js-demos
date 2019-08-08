window.onload = function () {
    var upload = document.getElementById("uploadList").children,
        multiple = document.getElementById("multiple"),
        mask = document.getElementsByClassName("mask");

    for (i = 0; i < upload.length; i++) {
        // 单张图片上传
        upload[i].children[1].onchange = function (event) {
            event = event || window.event;
            var file = this.files[0];
            var target = event.target.parentElement;
            showUploadFile(file, target);
        }

        upload[i].ondragover = function (event) {
            event.preventDefault();
            if (this.children.length == 4) {
                this.children[2].className = "hide";
                this.children[3].className = "";
            }
        }

        upload[i].ondragleave = function () {
            if (this.children.length == 4) {
                this.children[2].className = "";
                this.children[3].className = "hide";
            }
        }

        // 拖放上传
        upload[i].ondrop = function (event) {
            event.preventDefault();
            var files = event.dataTransfer.files;
            var _this = this;
            if (files.length == 1) {
                // 单张
                showUploadFile(files[0], _this);
            } else {
                // 批量
                for (var i = 0; i < files.length; i++) {
                    showUploadFiles(files[i]);
                }
            }
        }
    }

    // 批量上传按钮
    multiple.onchange = function () {
        for (i = 0; i < this.files.length; i++) {
            // 获取到每一个文件
            var file = this.files[i];
            showUploadFiles(file);
        }
    };

    // 删除图片
    for (i = 0; i < mask.length; i++) {
        mask[i].onclick = function () {
            this.nextElementSibling.value = null;
            this.parentElement.removeChild(this.previousElementSibling);
            this.parentElement.children[2].className = "";
        };
    }

    function showUploadFile(file, target) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var img = document.createElement("img");
            img.src = this.result;
            target.children[2].className = "hide";
            target.children[3].className = "hide";
            target.insertBefore(img, target.children[0]);
        }
    }

    function showUploadFiles(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            for (i = 0; i < upload.length; i++) {
                if (upload[i].children.length == 4) {
                    var img = document.createElement("img");
                    img.src = this.result;
                    upload[i].children[2].className = "hide";
                    upload[i].children[3].className = "hide";
                    upload[i].insertBefore(img, upload[i].children[0]);
                    break;
                }
            }
        }
    }
};