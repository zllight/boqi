$(".head-main-left2").mouseenter(function () {
    $(".city_select").css({ "display": "block" })
})
$(".head-main-left2").mouseleave(function () {
    $(".city_select").css({ "display": "none" })
})
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
$(".nav-left").mouseenter(function () {
    $(".menu").css({ "display": "block" })
})
$(".nav-auto").mouseleave(function () {
    $(".menu").css({ "display": "none" })
})
$(".menu-list").mouseenter(function () {
    $(this).css({ "borderColor": "red" });
    $(".menu_right").eq($(this).index()).css({ "display": "block" })
})
$(".menu-list").mouseleave(function () {
    $(this).css({ "borderColor": "#ccc" })
    $(".menu_right").eq($(this).index()).css({ "display": "none" })
})
$(".tit-more").click(function(){
    $(this).css({"display":"none"});
    $(".none").css({"display":"block"})
    $("#a").css({"display":"block"})
})
$("#a").click(function () {
    $(this).css({ "display": "none" });
    $(".none").css({ "display": "none" })
    $(".tit-more").css({"display":"block"})
})
class shop {
    constructor() {
        this.cont = document.querySelector(".cont");
        this.url = "http://localhost/boqi/goods/goods.json"
        this.navNum = document.querySelector(".nav-num")
        this.init();
        this.addEvent();
    }
    init() {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.display();
        })
    }
    display() {
        var str = "";
        for (var i = 0; i < this.res.length; i++) {
            str += `<div class="box" index=${this.res[i].goodsId}>
                <img data-src="${this.res[i].img1}"
                    alt="">
                    <span>${this.res[i].price}</span>
                    <span>波奇豆抵10%换购</span>
                  <p><a class="p1"href="details.html">${this.res[i].name}</a></p>
                  <span>[11.1-11.11]黑卡充1000得1360</span>
                  <p>已售309661    已有779人评价</p>
                <input type="button" class="btn" value="加入购物车">
                 <input type="button" class="btn1" value="收藏">
                
            </div> `
        }
        this.cont.innerHTML = str;
        let imgs = document.querySelectorAll(".cont img")
        this.load(imgs);
    }
    load(imgs){
        var clientH = document.documentElement.clientHeight;
        var scrollT = document.documentElement.scrollTop;
        var arr = [];
        for (var i = 0; i < imgs.length; i++) {
            arr.push(imgs[i]);
        }
        function lazyLoad(elements, cH, sT) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].offsetTop < cH + sT) {
                    arr[i].src = arr[i].getAttribute("data-src");
                    arr.splice(i, 1);
                    i--;
                    console.log(arr)
                    console.log(cH,sT)
                }
            }
        }
        lazyLoad(imgs, clientH, scrollT);


        onscroll = function () {
            var scrollT = document.documentElement.scrollTop;
            lazyLoad(imgs, clientH, scrollT);
        }
    }
    addEvent() {
        var that = this;
        this.cont.onclick = function (eve) {
            if (eve.target.className == "btn") {
                if ($(".de").text() != "登录") {
                that.id = eve.target.parentNode.getAttribute("index");
                that.setCookie();
                    that.navNum.innerHTML++

                }else{
                    alert("请先登录")
                }
            }
            if (eve.target.className == "p1") {
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                that.setCookie1(); 
        }
    }
}
    setCookie() {
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        console.log(this.goods)
        if (this.goods.length == 0) {
            this.goods.push({
                id: this.id,
                num: 1
            })
        } else {
            var onoff = true;
            for (var i = 0; i < this.goods.length; i++) {
                if (this.goods[i].id === this.id) {
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            if (onoff) {
                this.goods.push({
                    id: this.id,
                    num: 1
                })
            }

        }
        setCookie("goods", JSON.stringify(this.goods));
    }
    setCookie1() {
        setCookie("id", this.id);
    } 
}

new shop;
let a = getCookie("name")
console.log(a)
console.log($(".de"))
if (a != "") {
    $(".de").html(a + "<span class='zhu'>注销</span>")
}
$(".zhu").click(function () {
    $(".de").html("<a href='login.html' target='_blank'>登录</a>")
    removeCookie("name");
    $(".nav-car").find("a").attr("href", "");
    $(".nav-num").text(0);
    removeCookie("goods")
})
console.log($(".de").text())
if ($(".de").text() != "登录") {
    $(".nav-car").find("a").attr("href", "shop.html")
}
$(".nav-car").find("a").click(function () {
    if ($(".de").text() == "登录") {
        alert("请先登录");
    }
})
var b = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
var c = 0;
if (b != []) {
    for (var i = 0; i < b.length; i++) {
        c += (b[i].num)
    }
}

console.log(c)
$(".nav-num").text(c)
$(".cont").find("img").css({"background":"#ccc","height":"100px"})

$(".return-top").click(function () {
    $("html").animate({
        scrollTop: $(".b").offset().top
    })
})


// var clientH = document.documentElement.clientHeight;
// var scrollT = document.documentElement.scrollTop;
// //		var arr = Array.from(elements);
// var arr = [];
// for (var i = 0; i < imgs.length; i++) {
//     arr.push(imgs[i]);
// }

// function lazyLoad(elements, cH, sT) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].offsetTop < cH + sT) {
//             arr[i].src = arr[i].getAttribute("data-src");
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// lazyLoad(imgs, clientH, scrollT);


// onscroll = function () {
//     var scrollT = document.documentElement.scrollTop;
//     lazyLoad(imgs, clientH, scrollT);
// }
