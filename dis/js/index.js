"use strict"
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
    removeCookie("name")
    $(".nav-car").find("a").attr("href", "")
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

"use strict"
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
class car {
    constructor() {
        this.url = "http://localhost/boqi/goods/goods.json";
        this.tbody1 = document.querySelector(".shop-l");
        this.tbody2 = document.querySelector(".shop-c");
        this.tbody3 = document.querySelector(".synopsis");
        this.load();
    }
    load() {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.getCookie();
        })
    }
    getCookie() {
        this.id = getCookie("id");
        console.log(this.id)
        this.display();
    }
    display() {
        var str1 = "";
        var str2 = "";
        var str3= "";
        for (var j = 0; j < this.res.length; j++) {
            if (this.res[j].goodsId === this.id) {
                str1 = `<div class="shop-l-t">
                        <div class="shop-img">
                            <img src="${this.res[j].img1}" alt="">
                            <span></span>
                            </div>
                            <div class="shop-big">
                                <img src="${this.res[j].img1}"
                                alt="">
                                </div>
                                <div class="img-small">
                                    <div class="img-s">
                                        <img src="${this.res[j].img1}" alt=""> 
                                        <img src="${this.res[j].img2}" alt="">
                                        <img src="${this.res[j].img3}" alt="">
                                        <img src="${this.res[j].img4}" alt="">
                                        <img src="${this.res[j].img5}" alt="">
                                        </div>
                                        </div>
                                        </div>`
                str2 = `  <div class="shop-name">
                  <div class="shop-name-t">
                      <h3>${this.res[j].name}</h3>
                  </div>  
                  <div class="shop-name-f">
                      <p>[11.1-11.11]黑卡充1000得1360，充5000得6400！素力高/渴望/纽顿尽享5折！</p>
                  </div>
                </div>
                <div class="shop-center">
                <p><span>波奇价:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><strong>${this.res[j].price}</strong><span>&nbsp;&nbsp;&nbsp;&nbsp;波奇豆抵10%</span></p>
                <p><span>厂商指导价:&nbsp;&nbsp;&nbsp;</span>
                <span>¥168.30</span></p>
                <div class="l">促销信息:</div>
                <div class="r">
                换购全场满￥1.00元另加￥5.00元，全场满￥100.00元另加￥10.00元，全场满￥199.00元另加￥29.00元，即可换购热销商品</div>
                </div> 
                <div class="shop-footer">
                    <div class="home">
                    <div>配 送 至：</div>
                    <div class="dz">江苏</div>
                    <div class="dz1">
                        <a href="">湖北</a>
                        <a href="">湖南</a>
                        <a href="">河南</a>
                        <a href="">江西</a>
                        <a href="">陕西</a>
                        <a href="">甘肃</a>
                        <a href="">青海</a>
                        <a href="">宁夏</a>
                        <a href="">新疆</a>
                    </div>
                    <div>有货；支持使用优惠券</div>
                    </div>
                    <div class="number">
                    <div>购买数量</div>
                    <div class="num-b">
                        <input type="button" id="btn1" value="-">
                        <input type="type" class="btn2"  size="2" value="1" disabled>
                        <input type="button" id="btn3" value="+">
                    </div>
                </div>
                        <div class="buy">
                          <input type="button" value="立即购买" id="go">
                         <input type="button" value="加入购物车" id="buy">  
                        </div>
                </div>  
                             `
            str3=`
              <div class="synopsis-auto">
        <h1>商品详情</h1>
           <img src="${this.res[j].img6}" alt="">
           <img src="${this.res[j].img7}" alt="">
           <img src="${this.res[j].img8}" alt="">
           <img src="${this.res[j].img9}" alt=""> 
       </div>
            
            `
            }
        }
        this.tbody1.innerHTML = str1;
        this.tbody2.innerHTML = str2;
        this.tbody3.innerHTML = str3;
        new Magnifier();
        this.img();
        this.buy();
    }
    img() {
        $(".img-s").children("img").click(function () {
            console.log(($(this).attr("src")))
            $(".shop-img").children("img").attr("src", ($(this).attr("src")))
            $(".shop-big").children("img").attr("src", ($(this).attr("src")))
        })
        $(".dz").mouseenter(function () {
            $(".dz1").css({
                "display": "block"
            }).mouseleave(function () {
                $(".dz1").css({
                    "display": "none"
                })
            })
        })
    }
    buy() {
        var that =this;
        $("#btn1").click(function () {
            if ($(".btn2")[0].value == 1) {
                $(".btn2")[0].value = 1;
            } else {
                $(".btn2")[0].value--;
            }
        })
        $("#btn3").click(function () {
            $(".btn2")[0].value++;
        })
        $("#buy").click(function () {
            if ($(".de").text() != "登录") {
            console.log($(".btn2")[0].value)
            that.setCookie()
            }else{
                alert("请先登录");
            }
        })
        $("#go").click(function () {
            if ($(".de").text() != "登录") {
            console.log($(".btn2")[0].value)
            that.setCookie()
            window.location.href = "http://localhost/boqi/html/shop.html"
            }else{
                alert("请先登录");
            }
        })
    }
    setCookie() {
        console.log($(".btn2")[0].value)
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        console.log(this.goods)
        if (this.goods.length == 0) {
            this.goods.push({
                id: this.id,
                num:parseFloat($(".btn2")[0].value)
            })
        } else {
            var onoff = true;
            for (var i = 0; i < this.goods.length; i++) {
                if (this.goods[i].id === this.id) {
                    this.goods[i].num +=parseFloat($(".btn2")[0].value);
                    onoff = false;
                }
            }
            if (onoff) {
                this.goods.push({
                    id: this.id,
                    num:parseFloat($(".btn2")[0].value)
                })
            }

        }
        setCookie("goods", JSON.stringify(this.goods));
    }
}

new car;
//放大镜
function Magnifier() {
    this.sBox = document.querySelector(".shop-l-t");
    this.span = document.querySelector(".shop-img span");
    this.bBox = document.querySelector(".shop-big")
    this.bImg = document.querySelector(".shop-big img")
    this.init()
}
Magnifier.prototype.init = function () {
    var that = this;
    this.sBox.onmouseover = function () {
        that.show()
    }
    this.sBox.onmouseout = function () {
        that.hide();
    }
    this.sBox.onmousemove = function (eve) {
        var e = eve || window.event
        that.move(e);
    }
}
Magnifier.prototype.show = function () {
    this.span.style.display = "block";
    this.bBox.style.display = "block";
    this.span.style.width = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth + "px";
    this.span.style.height = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight + "px";
}
Magnifier.prototype.hide = function () {
    this.span.style.display = "none";
    this.bBox.style.display = "none";
}


Magnifier.prototype.move = function (e) {
    var l = e.pageX - this.sBox.offsetLeft - this.span.offsetWidth / 2;
    var t = e.pageY - this.sBox.offsetTop - this.span.offsetHeight / 2;
    if (l < 0) l = 0;
    if (t < 0) t = 0;
    if (l > this.sBox.offsetWidth - this.span.offsetWidth - 40) {
        l = this.sBox.offsetWidth - this.span.offsetWidth - 40;
    }
    if (t > this.sBox.offsetHeight - this.span.offsetHeight - 95) {
        t = this.offsetHeight - this.span.offsetHeight - 95;
    }

    this.span.style.left = l + "px";
    this.span.style.top = t + "px";
    var x = l / (this.sBox.offsetWidth - this.span.offsetWidth)
    var y = t / (this.sBox.offsetWidth - this.span.offsetHeight)
    this.bImg.style.left = x * (this.bBox.offsetWidth - this.bImg.offsetWidth) + "px";
    this.bImg.style.top = y * (this.bBox.offsetHeight - this.bImg.offsetHeight) + "px";
}
//注销功能。
let a = getCookie("name")
console.log(a)
console.log($(".de"))
if (a != "") {
    $(".de").html(a + "<span class='zhu'>注销</span>")
}
$(".zhu").click(function () {
    $(".de").html("<a href='login.html' target='_blank'>登录</a>")
    removeCookie("name")
    $(".nav-car").find("a").attr("href", "")
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
$(".nav-num").text(c + "件")
"use strict"
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

$(".menu-list").mouseenter(function () {
    $(this).css({"borderColor":"red"});
    $(".menu_right").eq($(this).index()).css({ "display": "block" })
})
$(".menu-list").mouseleave(function () {
    $(this).css({ "borderColor": "#ccc" })
    $(".menu_right").eq($(this).index()).css({ "display": "none" })
})

$(".box").banner({
    imgs: $(".box").find("img"),
    left: $(".box").find("#left"),
    right: $(".box").find("#right"),
    list: true,
    autoPlay: true,
    delayTime: 3000,
    moveTime: 600,
})
class shop {
    constructor() {
        this.h = $("#h");
        this.cont = document.querySelector(".cont");
        this.cont1 = document.querySelector(".goods-right");
        this.cont2 = document.querySelector(".goods-right2");
        this.url = "http://localhost/boqi/goods/goods.json"
        this.init(0);
        this.click(6);
        this.addEvent();
    }
    init(t) {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.display(t);
        })
    }
    display(t) {
        var str = "";
        var str2="";
        for (var i = 0+t; i < this.res.length; i++) {
            str += `<div class="box2" index=${this.res[i].goodsId}>
                <img src="${this.res[i].img1}" alt="">
               <p><a class="p1" target="_blank" href="details.html">${this.res[i].name}<a></p>
              <span style="color:red"">${this.res[i].price}</span>
          </div>`
            str2 += `<div class="box3" index=${this.res[i].goodsId}>
                <img src="${this.res[i].img1}" alt="">
               <p><a class="p1" target="_blank" href="details.html">${this.res[i].name}<a></p>
              <span style="color:red"">${this.res[i].price}</span>
          </div>`
        }
        this.cont.innerHTML = str;
        this.cont1.innerHTML = str2;
        this.cont2.innerHTML = str2;

        this.tap();
    }
    tap(){
        $(".goods-dogs a").mouseenter(function(){
            $(".goods-right").eq($(this).index()).addClass("a3").siblings().removeClass("a3")
        })
        $(".goods-cats a").mouseenter(function () {
            $(".goods-right2").eq($(this).index()).addClass("a3").siblings().removeClass("a3")
        })
    }

    addEvent() {
        var that = this;
        this.cont.onclick = function (eve) {
            if (eve.target.className == "p1") {
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                that.setCookie();
                console.log(that.id)
            }
        }
        this.cont1.onclick = function (eve) {
            if (eve.target.className == "p1") {
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                that.setCookie();
                console.log(that.id)
            }
        }
        this.cont2.onclick = function (eve) {
            if (eve.target.className == "p1") {
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                that.setCookie();
                console.log(that.id)
            }
        }
    }
    click(t) {
        var that = this;
        this.h.click(function () {
            that.init(t);
        })
    }
    setCookie() {
        setCookie("id",this.id );
        } 
    }
new shop;
$(".callback").children("div").click(function () {
    var index = $(this).index()
    $("html").animate({
        scrollTop: $(".b").eq($(this).index()).offset().top
    })
})
let a = getCookie("name")
console.log(a)
console.log($(".de"))
if(a!=""){
$(".de").html(a+"<span class='zhu'>注销</span>")
}
$(".zhu").click(function(){
    $(".de").html("<a href='login.html' target='_blank'>登录</a>")
    removeCookie("name")
    $(".nav-car").find("a").attr("href", "")
})
console.log($(".de").text())
if ($(".de").text()!="登录"){
   $(".nav-car").find("a").attr("href","shop.html")
}
$(".nav-car").find("a").click(function(){
    if ($(".de").text() == "登录") {
     alert("请先登录");
    }
})
var b =getCookie("goods")?JSON.parse(getCookie("goods")):[];
var c=0
if(b!=[]){
for(var i=0;i<b.length;i++){
    c+=(b[i].num)
}
}
console.log(c)
$(".nav-num").text(c+"件")

 
"use strict"
var p = document.getElementById("ph")
var m = document.getElementById("m")
var btn = document.getElementById("btn")
var a = getCookie("user") ? JSON.parse(getCookie("user")) : [];
var off = 0;
console.log(a)
btn.onclick = function () {
    for (var i = 0; i < a.length; i++) {
        if (ph.value == a[i].user && m.value == a[i].pass) {
            window.location.href = " http://localhost/boqi/html/index.html";
            setCookie("name", ph.value,{ expires: 3, })
            off = 1;
            console.log(a[i].user)
            break;
        }
        if (ph.value == a[i].user && m.value != a[i].pass){
            off = 2;
            break;
        }
        if (ph.value != a[i].user){
            off =3;
            break;
        }
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


"use strict"
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
              setCookie("user", JSON.stringify(arr),{ expires: 3, });
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

"use strict"
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
class Car {
    constructor() {
        this.tbody = document.querySelector("tbody")
        this.url = "http://localhost/boqi/goods/goods.json";
        this.ajax()
        this.delete();
    }
    ajax() {
        var that = this
        ajaxGet(this.url, function (res) {

            that.res = JSON.parse(res);
            console.log(that.res);
            that.cookie()
        })
    }
    cookie() {
        var that = this;
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        this.str = "";
        for (var i = 0; i < this.goods.length; i++) {
            for (var j = 0; j < that.res.length; j++) {
                if (this.goods[i].id == that.res[j].goodsId) {
                    this.str += `
                                <tr class="h-50" index="${that.goods[i].id}">
                                        <td class="align-middle " scope="row">
                                            <div class="checkbox">
                                                <label><input type="checkbox" value="">单选</label>
                                            </div>
                                        </td>
                                        <td class="align-middle"><img src=${that.res[j].img1}></td>
                                        <td class="align-middle">${that.res[j].name}</td>
                                        <td class="align-middle">
                                            <div class="border">
                                                <button type="button" class="add pl-0">+</button>
                                                <span class="ml-5" style="display:inline-block">${that.goods[i].num}</span>
                                                <button type="button" class="reduce ml-5">-</button>
                                            </div>
                                        </td>
                                        <td class="align-middle">${that.res[j].price}</td>
                                        <td class="align-middle">0</td>
                                        <td class="align-middle">
                                                <button type="button" class="btn btn-danger btnd">删除</button>
                                        </td>
                                </tr>`
                }
            }
        }
        this.tbody.innerHTML = this.str;
        this.checked();
        this.add();
        this.reduce();
        this.money();
        this.clear()

    }
    // 全选
    checked() {
        var that = this
        $("#checkbox").click(function () {
            for (var i = 0; i < $("tbody input").length; i++) {
                if ($("#checkbox")[0].checked) {
                    $("tbody input")[i].checked = true;
                } else {
                    $("tbody input")[i].checked = false;
                }
                that.num()
            }
        });

        $("tbody input").click(function () {
            for (var i = 0; i < $("tbody input").length; i++) {
                if ($("tbody input")[i].checked) {
                    $("#checkbox")[0].checked = false;
                }
                that.num()
            }
        })

    }
    // 增加按钮
    add() {
        var that = this
        $(".add").click(function () {
            this.goods = JSON.parse(getCookie("goods"));
            for (var i = 0; i < this.goods.length; i++) {
                if (this.goods[i].id == $(this).parent().parent().parent().attr("index")) {
                    this.goods[i].num++;
                    $(this).next().text(this.goods[i].num);

                    $(this).parent().parent().next().next().text(this.goods[i].num * $(this).parent().parent().next().text());
                }
            }
            setCookie("goods", JSON.stringify(this.goods));
            that.num();
        })

    }
    // 减少按钮
    reduce() {
        var that = this
        $(".reduce").click(function () {
            this.goods = JSON.parse(getCookie("goods"));
            for (var i = 0; i < this.goods.length; i++) {
                if (this.goods[i].id == $(this).parent().parent().parent().attr("index")) {
                    if (!this.goods[i].num) {
                        this.goods[i].num = 0;
                    } else {
                        this.goods[i].num--;
                        $(this).prev().text(this.goods[i].num);
                        $(this).parent().parent().next().next().text(this.goods[i].num * $(this).parent().parent().next().text());
                        console.log(this.goods[i].num);
                    }
                }
            }
            setCookie("goods", JSON.stringify(this.goods));
            that.num();

        })
    }
    // 删除按钮
    delete() {
        var that = this
        $("tbody").click(function (e) {
            that.arr = that.getCookie()
            if (e.target.className.includes("btnd")) {
                alert("确定删除吗");
                this.index = e.target.parentElement.parentElement.getAttribute("index");
                for (var i = 0; i < that.arr.length; i++) {
                    if (that.arr[i].id == this.index) {
                        that.arr.splice(i, 1);
                        that.saveCookie(that.arr)
                        e.target.parentElement.parentElement.remove();
                    }
                }
                that.num()
            }
        })
    }
    // 设置cookie
    saveCookie(arr) {
        setCookie("goods", JSON.stringify(arr))
    }
    // 获取cookie
    getCookie() {
        this.arr = JSON.parse(getCookie("goods"))
        return this.arr;
    }
    // 操作后总计
    num() {
        this.str = 0;
        for (var i = 0; i < $("tbody>tr").length; i++) {
            if ($("tbody>tr input")[i].checked) {
                console.log($($("tbody>tr")[i]).children().eq(3).children().children().eq(1).text())
                this.str += $($("tbody>tr")[i]).children().eq(4).text() * $($("tbody>tr")[i]).children().eq(3).children().children().eq(1).text()
            }
        }
        $($("tfoot>tr")[0]).children().eq(1).text(this.str)
    }
    // 初始化金额
    money() {
        for (var i = 0; i < $("tbody>tr").length; i++) {
            $($("tbody>tr")[i]).children().eq(5).text($($("tbody>tr")[i]).children().eq(4).text() * $($("tbody>tr")[i]).children().eq(3).children().children().eq(1).text())
        }
    }
    clear() {
        var that = this
        $(".cbtn").click(function () {
            removeCookie("goods");
            that.ajax()
            $(".abc")[0].innerHTML =0;
        })
    }
}
new Car;
//登录注销功能。
let a = getCookie("name")
console.log(a)
console.log($(".de"))
if (a != "") {
    $(".de").html(a + "<span class='zhu'>注销</span>")
}
$(".zhu").click(function () {
    $(".de").html("<a href='login.html' target='_blank'>登录</a>")
    removeCookie("name")
    removeCookie("goods")
    $("tbody").html("");
    $(".nav-car").find("a").attr("href", "")
})
console.log($(".de").text())
if ($(".de").text() != "登录") {
    $(".nav-car").find("a").attr("href", "shop.html")
}
$(".allSum-auto").find("h3").click(function(){
    if ($(".abc")[0].innerHTML == 0){
        alert("请选择商品")
    }else{
       alert("功能正在开发中，请期待！")
    }

    
})