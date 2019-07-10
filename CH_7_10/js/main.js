window.onload = function () {
    var num1 = null;
    var num2 = null;
    var sign = null;
    var result = null;
    var td = document.getElementsByTagName("td");
    for (var i = 0; i < td.length; i++) {
        td[i].onclick = function () {
            key = this.innerHTML
            sum(key);
        };
    }

    function sum(key) {
        switch (key) {
            case "+":
                print();
                break;
            case "-":
                print();
                break;
            case "x":
                print();
                break;
            case "÷":
                print();
                break;
            case "%":
                print();
                break;
            case "=":
                redults();
                break;
            case "C":
                delet();
                break;
            case "删除":
                slip();
                break;
            case "...":
                break;
            default:
                join(key);
                break;
        }
    }




    function add() {
        result = num1 + num2;
    }

    function jian() {
        result = num1 - num2;
    }

    function chen() {
        result = num1 * num2;
    }

    function chu() {
        result = num1 / num2;
    }

    function yu() {
        result = num1 % num2;
    }
    //运算
    function operation() {
        switch (sign) {
            case "+":
                add();
                break;
            case "-":
                jian();
                break;
            case "x":
                chen();
                break;
            case "÷":
                chu();
                break;
            case "%":
                yu();
                break;
        }
    }

    //点击运算符号
    function print() {
        sign = key;
        document.getElementById("d2").innerHTML = num1;
        document.getElementById("d1").innerHTML = sign;
    }
    //点击等于符号，输出结果
    function redults() {
        if (!isNaN(num1) && !isNaN(num2) && sign != null) {
            operation();
            document.getElementById("d3").innerHTML = num1;
            document.getElementById("d2").innerHTML = sign + num2;
            document.getElementById("d1").innerHTML = result;
        } else {
            document.getElementById("d3").innerHTML = "&nbsp";
            document.getElementById("d2").innerHTML = "&nbsp";
            document.getElementById("d1").innerHTML = result;
        }
    }
    //组合数字
    function join(num) {
        if (sign == null) {
            if (num1 == null) num1 = "";
            num1 += num;
            document.getElementById("d1").innerHTML = num1;
        } else {
            document.getElementById("d2").innerHTML = num1;
            if (num2 == null) num2 = "";
            num2 += num;
            document.getElementById("d1").innerHTML = sign + num2;
        }
    }
    //撤销数字
    function slip() {
        if (sign == null) {
            if (num1 == null || num1.length == 0) {
                return;
            }
            num1 = num1.substring(0, num1.length - 1);
            document.getElementById("d1").innerHTML = num1;
        } else if(result==null){
            if (num2 == null || num2.length == 0) {
                return;
            }
            num2 = num2.substring(0, num2.length - 1);
            document.getElementById("d1").innerHTML = sign + num2;
        }
    }
    //清除屏幕
    function delet() {
        document.getElementById("d3").innerHTML = "&nbsp";
        document.getElementById("d2").innerHTML = "&nbsp";
        document.getElementById("d1").innerHTML = 0;
        num1 = null;
        num2 = null;
        sign = null;
        result = null;
    }
}