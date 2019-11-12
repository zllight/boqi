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
class car {
    constructor() {
        this.url = "http://localhost/boqi/goods/goods.json";
        this.tbody = document.querySelector("tbody");
        this.ch = document.getElementById("ch");
        this.abc = document.getElementById("abc");
        this.efg = document.getElementById("efg");
        this.h4 = document.querySelector("h4 input");
        this.price = 0;
        this.sum = 0;
        this.load();
        this.addEvent();
        this.delete();
    }
    load() {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.getCookie();
        })
    }
    getCookie() {
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        this.display();
    }
    display() {
        var str = "";
        for (var i = 0; i < this.res.length; i++) {
            for (var j = 0; j < this.goods.length; j++) {
                if (this.res[i].goodsId === this.goods[j].id) {
                    str += `<tr index="${this.goods[j].id}">
                                    <td class=" text-center  py-5"><input type="checkbox" class="in"></td>
                                    <td class=" text-center  py-2"><img src="${this.res[i].img1}" alt=""></td>
                                    <td class=" text-center  py-5">${this.res[i].name}</td>
                                    <td class=" text-center  py-5">${this.res[i].price}</td>
                                    <td class=" text-center  py-5"><input type="text" class="nums" value="${this.goods[j].num}" disabled></td>
                                    <td class=" text-center  py-5"><span class="btn btn-danger ">删除<span></td>
                                    <td class=" text-center  py-5">${this.res[i].price * this.goods[j].num}</td>
                                </tr>`
                }
            }
        }
        this.tbody.innerHTML = str;
        this.inp = document.getElementsByClassName("in")
        // this.jia1 = document.getElementsByClassName("jia")
        // this.jian1 = document.getElementsByClassName("jian")
        // this.nums = document.getElementsByClassName("nums")
        // this.jia();
        // this.jian();
        this.checked();
        this.prices();
    }
    addEvent() {
        var that = this;
        this.tbody.addEventListener("click", fn)
        function fn(e) {
            if (e.target.tagName == "SPAN") {
                that.id = e.target.parentNode.parentNode.getAttribute("index")
                e.target.parentNode.parentNode.remove();
                that.updateCookie(function (i) {
                    that.goods.splice(i, 1);
                })
            }
            that.abc.innerHTML = "总计：" + that.price + "元";
        }
        this.tbody.addEventListener("input", fn1);
        function fn1(e) {
            if (e.target.className == "num") {
                that.id = e.target.parentNode.parentNode.getAttribute("index");
                that.updateCookie(function (i) {
                    that.goods[i].num = e.target.value;
                    that.display()
                })
            }
        }
        this.sum1();
    }
    updateCookie(cb) {
        for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id == this.id) {
                cb(i);
            }
        }
        setCookie("goods", JSON.stringify(this.goods))
    }
    prices() {
        var that = this;
        for (var i = 0; i < this.inp.length; i++) {
            this.inp[i].onclick = function () {
                if (this.checked == true) {
                    that.id = this.parentNode.parentNode.getAttribute("index");
                    that.price += parseFloat(this.parentNode.parentNode.lastElementChild.innerHTML)
                } else if (this.checked == false) {
                    that.ch.checked = false;
                    that.price -= parseFloat(this.parentNode.parentNode.lastElementChild.innerHTML);
                }
                that.abc.innerHTML = "总计：" + that.price + "元";
            }
        }
    }
    sum1() {
        var that = this;
        this.tbody.addEventListener("click", fn)
        function fn(e) {
            if (e.target.className == "in") {
                if (e.target.checked == true) {
                    that.id = e.target.parentNode.parentNode.getAttribute("index")
                    for (var i = 0; i < that.goods.length; i++) {
                        if (that.goods[i].id == that.id) {
                            that.sum += parseFloat(that.goods[i].num)
                        }
                    }
                } else if (e.target.checked == false) {
                    that.id = e.target.parentNode.parentNode.getAttribute("index")
                    for (var i = 0; i < that.goods.length; i++) {
                        if (that.goods[i].id == that.id) {
                            console.log(parseFloat(that.goods[i].num))
                            that.sum -= parseFloat(that.goods[i].num)
                        }
                    }
                }
                that.efg.innerHTML = "总计：" + that.sum + "件";
            }
        }

    }
    // jia() {
    //     var that =this;
    //     this.jia1.onclick = function(){
    //          that.nums.value++;
    //         console.log(that.nums)
    //     }
    // }
    // jian() {
    //     var that = this;
    //     this.jian1.onclick = function(){
    //         that.nums.value--;
    //         console.log(that.nums.value)
    //         console.log(1)
    //     }
    // }
    delete() {
        var that = this;
        this.h4.onclick = function () {
            that.tbody.innerHTML = "";
            removeCookie("goods")
            that.efg.innerHTML = "总计：" + 0 + "件";
            that.abc.innerHTML = "总计：" + 0 + "元";
        }
    }
    checked() {
        var that = this;
        this.ch.onclick = function () {
            // console.log(that.abc);
            if (that.ch.checked == true) {
                for (var i = 0; i < that.inp.length; i++) {
                    if (that.inp[i].checked == true) {
                        that.price -= parseFloat(that.inp[i].parentNode.parentNode.lastElementChild.innerHTML);
                        that.id = that.inp[i].parentNode.parentNode.getAttribute("index")
                        for (var j = 0; j < that.goods.length; j++) {
                            if (that.goods[j].id == that.id) {
                                console.log(parseFloat(that.goods[j].num))
                                that.sum -= parseFloat(that.goods[j].num)
                            }
                        }

                    }
                    that.inp[i].checked = true;
                    that.price += parseFloat(that.inp[i].parentNode.parentNode.lastElementChild.innerHTML)
                    console.log(that.price)
                    that.id = that.inp[i].parentNode.parentNode.getAttribute("index")
                    for (var j = 0; j < that.goods.length; j++) {
                        if (that.goods[j].id == that.id) {
                            that.sum += parseFloat(that.goods[j].num)
                        }
                    }
                }
            } else if (that.ch.checked == false) {
                for (var i = 0; i < that.inp.length; i++) {
                    that.inp[i].checked = false;
                    that.price -= parseFloat(that.inp[i].parentNode.parentNode.lastElementChild.innerHTML);
                    that.id = that.inp[i].parentNode.parentNode.getAttribute("index")
                    for (var j = 0; j < that.goods.length; j++) {
                        if (that.goods[j].id == that.id) {
                            console.log(parseFloat(that.goods[j].num))
                            that.sum -= parseFloat(that.goods[j].num)
                        }
                    }
                }
            }
            that.abc.innerHTML = "总计：" + that.price + "元";
            that.efg.innerHTML = "总计：" + that.sum + "件";
            console.log(that.price)
        }
    }

}
new car;
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