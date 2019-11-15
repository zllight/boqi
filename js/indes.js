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
               <p><a class="p1"  href="details.html">${this.res[i].name}<a></p>
              <span style="color:red"">${this.res[i].price}</span>
          </div>`
            str2 += `<div class="box3" index=${this.res[i].goodsId}>
                <img src="${this.res[i].img1}" alt="">
               <p><a class="p1"  href="details.html">${this.res[i].name}<a></p>
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

 