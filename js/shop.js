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