window.onload = function () {

    var provinces = document.getElementById("provinces"),
        cities = document.getElementById("cities"),
        areas = document.getElementById("areas"),
        provincesArr = [],
        citiesArr = [],
        areasArr = [];

    // 遍历 data 对象的所有 key 值推入省数组
    for (key in data) {
        provincesArr.push(key);
    }

    // 为省下拉框填充数据
    for (i = 0; i < provincesArr.length; i++) {
        var newOption = document.createElement("option");
        newOption.innerHTML = provincesArr[i];
        provinces.appendChild(newOption);
    }

    provinces.onchange = function () {
        // 重置市数组
        citiesArr = [];
        // 清空市下拉框，留默认选项
        cities.length = 1;

        // 省下拉框 value 值作为 data 的 key 值，对应的 value 值中所有 key 值推入市数组
        for (key in data[this.value]) {
            citiesArr.push(key);
        }

        for (i = 0; i < citiesArr.length; i++) {
            var newOption = document.createElement("option");
            newOption.innerHTML = citiesArr[i];
            cities.appendChild(newOption);
        }
    }

    cities.onchange = function () {
        areasArr = [];
        areas.length = 1;

        // 市 key 值对应的 value 值是数组，调用 concat 拼入区数组
        areasArr = areasArr.concat(data[provinces.value][this.value]);

        for (i = 0; i < areasArr.length; i++) {
            var newOption = document.createElement("option");
            newOption.innerHTML = areasArr[i];
            areas.appendChild(newOption);
        }
    }
};