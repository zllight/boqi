; (function ($) {
    "use strict";
    $.fn.extend({
        banner: function (options) {
            this.obj = {};
            var that = this.obj;
            that.imgs = options.imgs;
            that.list = options.list == false ? false : true;
            that.autoPlay = options.autoPlay == false ? false : true;
            that.delayTime = options.delayTime || 3000;
            that.moveTime = options.moveTime || 1000;
            that.index = 0;
            that.iPrev = that.imgs.length - 1;
            if (options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0) {
                options.left.click(btnLeft)
                options.right.click(btnRight)
                function btnLeft() {
                    if (that.index == 0) {
                        that.index = that.imgs.length - 1;
                        that.iPrev = 0;
                    } else {
                        that.index--;
                        that.iPrev = that.index + 1;
                    }
                    that.move(1)
                }
                function btnRight() {
                    if (that.index == that.imgs.length - 1) {
                        that.index = 0;
                        that.iPrev = that.imgs.length - 1;
                    } else {
                        that.index++;
                        that.iPrev = that.index - 1;
                    }
                    that.move(-1)
                }
                that.move = function (t) {
                    that.imgs.eq(that.iPrev).css({ left: 0 }).stop().animate({
                        left: that.imgs.eq(0).width() * t
                    }, that.moveTime)
                    that.imgs.eq(that.index).css({ left: -that.imgs.eq(0).width() * t }).stop().animate({
                        left: 0
                    }, that.moveTime)
                    if (that.list) {
                        ul.children("li").css({
                            background: "#ccc"
                        }).eq(that.index).css({
                            background: "red"
                        })
                    }
                }
                if (that.list) {
                    var str = "";
                    for (var i = 0; i < options.imgs.length; i++) {
                        str += `<li></li>`
                    }
                    var ul = $("<ul>").html(str);
                    this.append(ul)
                    ul.css({
                        width: "100%",
                        hieght: 30,
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        left: 0,
                        bottom: 20,
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                    }).children("li").css({
                        width: 15,
                        height: 15,
                        borderRadius: "50%",
                        background: "#ccc",
                        margin: "0 20px",
                        cursor: "pointer"
                    }).eq(that.index).css({
                        background: "red"
                    })
                    ul.children("li").click(function () {
                        if ($(this).index() > that.index) {
                            that.listMove($(this).index(), 1)
                        } else if ($(this).index() < that.index) {
                            that.listMove($(this).index(), -1)
                        }
                        $(this).css({
                            background: "red"
                        }).siblings().css({
                            background: "#ccc"
                        })
                        that.index = $(this).index()
                    })
                    that.listMove = function (iNow, t) {
                        options.imgs.eq(that.index).css({
                            left: 0
                        }).stop().animate({
                            left: -options.imgs.eq(0).width() * t
                        }, that.moveTime)
                        options.imgs.eq(iNow).css({
                            left: options.imgs.eq(0).width() * t
                        }).stop().animate({
                            left: 0
                        }, that.moveTime)
                    }
                if(that.autoPlay){
                   that.t=setInterval(() => {
                          btnRight();
                     }, that.delayTime);

                     this.hover(function(){
                         clearInterval(that.t)
                     },function(){
                             that.t=setInterval(() => {
                                 btnRight();
                             }, that.delayTime);
                         
                     })
                   }
                }
            }

        }

    })
})(jQuery)