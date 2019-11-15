// var p = document.getElementById("ph")
// var m = document.getElementById("m")
// var btn = document.getElementById("btn")
// var a = getCookie("user") ? JSON.parse(getCookie("user")) : [];
// var off = 0;
// console.log(a)
// btn.onclick = function () {
//     for (var i = 0; i < a.length; i++) {
//         if (ph.value == a[i].user && m.value == a[i].pass) {
//             window.location.href = " http://localhost/boqi/html/index.html";
//             setCookie("name", ph.value,{ expires: 3, })
//             off = 1;
//             console.log(a[i].user)
//             break;
//         }
//         if (ph.value == a[i].user && m.value != a[i].pass){
//             off = 2;
//             break;
//         }
//         if (ph.value != a[i].user){
//             off =3;
//             break;
//         }
//     }
//     switch (off) {
//         case 2: alert("密码错误");
//             break;
//         case 3: alert("用户名不存在");
//             break;
//     }
var p = document.getElementById("ph")
var m = document.getElementById("m")
var btn = document.getElementById("btn")
var a = getCookie("user") ? JSON.parse(getCookie("user")) : [];
console.log(a)
btn.onclick = function () {
    var off = 3;
    for (var i = 0; i < a.length; i++) {
        if (ph.value == a[i].user && m.value == a[i].pass) {
            window.location.href = " http://localhost/boqi/html/index.html";
            setCookie("name", ph.value, { expires: 3, })
            off = 1;
            console.log(a[i].user)
            break;
        }
          if (ph.value == a[i].user && m.value != a[i].pass) {
            off = 2;
            break;
        }
        // if (ph.value != a[i].user) {
        //     off = 3;
        //     break;
        // }
    }
    switch (off) {
        case 2: alert("密码错误");
            break;
        case 3: alert("用户名不存在");
            break;
    }

    //  for (var i = 0; i < a.length; i++) {
    //     if (ph.value != a[i].user && m.value != a[i].pass) {
    //           off = 2;
    //      }
    // }
    // if (ph.value == "" && m.value == "") {
    //     alert("请输入用户名和密码登录")
    //     return;
    // } else if (ph.value == "") {
    //     alert("请输入用户名")
    //     return;
    // } else if (m.value == "") {
    //     alert("请输入密码")
    //     return;
    // }
    // if (off == 0) {
    //     alert("密码错误");
    // }
    // if (off == 2) {
    //     alert("用户名不存在")
    // }
}

