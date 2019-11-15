$(".ph").mouseenter(function () {
    $(".tel").css({ "display": "block" })
})
$(".ph").mouseleave(function () {
    $(".tel").css({ "display": "none" })
})
$(".sh").mouseenter(function () {
    $(".ph2").css({ "display": "block" })
})
$(".sh").mouseleave(function () {
    $(".ph2").css({ "display": "none" })
})
$(".ph1").mouseenter(function () {
    $(".gh").css({ "display": "block" })
})
$(".ph1").mouseleave(function () {
    $(".gh").css({ "display": "none" })
})
var oTxt1 = document.getElementById("ph");
var opas1 = document.getElementById("m1");
var opas2 = document.getElementById("m2");
var oTxt2 = document.getElementById("user");
var obtn = document.getElementById("bt");
var t1 = p1 = p2 = t2 = false;
oTxt1.onblur = function () {
    var reg = /^1[3-9][0-9]{9}$/
    if (reg.test(this.value)) {
        this.nextElementSibling.innerHTML = "正确";
        t1 = true;
    } else {
        this.nextElementSibling.innerHTML = "请输入符合格式的手机号";
        t1 = false;
    }
}


opas1.onblur = function () {
      var reg =/^[a-z,A-Z.0-9]{6,20}$/
    if (reg.test(this.value)) {
        this.nextElementSibling.innerHTML = "正确";
        t2 = true;
    } else {
        this.nextElementSibling.innerHTML = "请输入合适的密码";
        t2 = false;
    }
    if (opas2.value == "") return;
    if (this.value === opas2.value) {
        opas2.nextElementSibling.innerHTML = "一致";
        p2 = true;
    } else {
        opas2.nextElementSibling.innerHTML = "不一致";
        p2 = false;
    }
}
opas2.onblur = function () {
    if (this.value === opas1.value) {
        this.nextElementSibling.innerHTML = "一致";
        p2 = true;
    } else {
        this.nextElementSibling.innerHTML = "不一致";
        p2 = false;
    }
}

var arr;
arr = getCookie("user") ? JSON.parse(getCookie("user")):[];
obtn.onclick = function () {
    var off = false;
    if (  p2 && t2 && t1) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].user === oTxt2.value) {
                    alert("用户名已存在")
                     off = false;
                     return;
                }
            }
        
          if(!off){
              arr.push({
                user: oTxt2.value,
                pass: opas1.value
           })
              setCookie("user", JSON.stringify(arr), { expires: 3, });
           off = true;
              alert("注册成功，去登录")
          }
        }
        
       if (off) {
        window.location.href = 'http://localhost/boqi/html/login.html'
      }
    }
    //     var obj={}
    //     obj.user = oTxt2.value;
    //     obj.pass =opas1.value;
    //    arr.push(obj)
    //    console.log(JSON.stringify(arr))
    //    setCookie("user",JSON.stringify(arr));
    //   if(off){
    //     window.location.href = 'http://localhost/boqi/login.html'
    //     }
       
    
// function setCookie() {
//    var arr = getCookie("user") ? JSON.parse(getCookie("user")) : [];
//     console.log(arr)
//     if (arr.length == 0) {
//         this.arr.push({
//            user:oTxt2.value,
//            pass:opas1.value
//         })
//     } else {
//         for (var i = 0; i <arr.length; i++) {
//             if (arr[i].user === oTxt2.value) {
//               alert("用户名已存在")
//             }
//         }
//     }
//     setCookie("user", JSON.stringify(arr));
// }
