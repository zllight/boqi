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
        this.navNum = document.querySelector(".nav-num")
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
                    <div>购买数量:</div>
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
                that.navNum.innerHTML = parseFloat(that.navNum.innerHTML)+parseFloat($(".btn2")[0].value);
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
    $(".nav-num").text(0)
    removeCookie("goods")
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

$(".return-top").click(function () {
    $("html").animate({
        scrollTop: $(".b").offset().top
    })
})