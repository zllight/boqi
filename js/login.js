var p = document.getElementById("ph")
var m = document.getElementById("m")
var btn = document.getElementById("btn")
var a = getCookie("user")?JSON.parse(getCookie("user")):[];
var off = 0;
console.log(a)
btn.onclick = function () {
    for (var i = 0; i < a.length; i++) {
        if (ph.value == a[i].user && m.value == a[i].pass) {
            window.location.href = " http://localhost/boqi/html/index.html";
            setCookie("name", ph.value)
            off = 1;
           console.log(a[i].user)
        }
    }
    
        //  for (var i = 0; i < a.length; i++) {
        //     if (ph.value != a[i].user && m.value != a[i].pass) {
        //           off = 2;
        //      }
        // }
        if(ph.value==""&&m.value==""){
            alert("请输入用户名和密码登录")
            return;
        }else if(ph.value == "") {
        alert("请输入用户名")
        return;
       }else if ( m.value == "") {
        alert("请输入密码")
        return;
     }
        if (off == 0) {
            alert("密码错误");
        }
         if (off == 2) {
            alert("用户名不存在")
        }
    }

