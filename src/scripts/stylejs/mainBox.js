$(function () {
    var $crazySaleDefer = $.ajax({
        type: "GET",
        dataType: "json",
        cache: "false",
        url: "data/jiuxianwang/crazySale.json",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                for (var key in data[i]) {
                    var $divIndexTabConWrap = $("<div></div>");
                    $divIndexTabConWrap.attr("name", key);
                    $divIndexTabConWrap.addClass("indexTabCon");
                    $divIndexTabConWrap.css("display", "block");
                    var $ulClearfix = $("<ul></ul>");
                    $divIndexTabConWrap.append($ulClearfix);
                    var liWind = data[i][key];
                    for (var j = 0; j < liWind.length; j++) {
                        var $liProduct = $("<li></li>");

                        // <div class="indexTabPic">
                        var $divIndexTabPic = $("<div></div>");
                        $liProduct.append($divIndexTabPic);
                        $divIndexTabPic.addClass("indexTabPic");
                        var $aWineHref = $("<a></a>");
                        $divIndexTabPic.append($aWineHref);
                        $aWineHref.attr({
                            href: "###",
                            title: liWind.title
                        });

                        // 在这里插入详情页：
                        if (liWind[j].src == "http://img06.jiuxian.com/2014/1028/36862faffea443ccbaa1bc51b569ae582.jpg") {
                            $aWineHref.attr({
                                href: "html/goods_1234_detail.html",
                            });
                        }

                        var $imgWineInfo = $("<img>");
                        $aWineHref.append($imgWineInfo);
                        $imgWineInfo.attr({
                            src: liWind[j].src,
                            width: 160,
                            height: 160,
                            alt: liWind[j].title
                        });

                        // <div class="indexTabTit">
                        var $divIndexTabTit = $("<div></div>");
                        $liProduct.append($divIndexTabTit);
                        $divIndexTabTit.addClass("indexTabTit");
                        var $aWineTitle = $("<a></a>");
                        $divIndexTabTit.append($aWineTitle);
                        $aWineTitle.attr({
                            href: "###",
                            title: liWind[j].title
                        });
                        $aWineTitle.html(liWind[j].title);

                        // <div class="indexTabPrice homegoodPrice">
                        var $divIndexTabPrice = $("<div></div>");
                        $liProduct.append($divIndexTabPrice);
                        $divIndexTabPrice.addClass("indexTabPrice");
                        $divIndexTabPrice.addClass("homegoodPrice");
                        var $strongPrice = $("<strong></strong>");
                        $divIndexTabPrice.append($strongPrice);
                        $strongPrice.html(liWind[j].price);

                        // end of appending li
                        $ulClearfix.append($liProduct);
                    }

                    // 将生成的DOM tree 插入到页面之中
                    $(".indexTabConWrap").append($divIndexTabConWrap);
                }
            }
        }
    });

    $crazySaleDefer.then(function () {
        $(".indexTabBox > .indexTabNav li").each(function (index, item) {
            $(item).on("mouseenter", function () {
                $(this).siblings().removeClass("on");
                $(".indexTabBox .indexTabCon").css("display", "none");
                $(this).addClass("on");
                $(".indexTabBox .indexTabCon").eq(index).css("display", "block");
            });
        });
    }, function () {
        console.log("疯狂促销，数据请求失败");
    }).catch(function (e) {
        console.log("Ajax 请求有误");
    });

    // 切换公告信息， 促销信息
    $(".indexTabNew > .indexTabNewNav li").each(function(index, item) {
        $(item).on("mouseenter", function() {
            $(this).addClass("on").siblings().removeClass("on");
            $(".indexTabNewCon .indexTabNewList").eq(index).css("display", "block").siblings().css("display", "none");
        })
    });


    // 公告信息下  两个小轮播图
    function LittleBanner(ulSelector, btnSelector) {
        this.init(ulSelector, btnSelector);
    }

    LittleBanner.prototype = {
        constructor: LittleBanner,

        init: function(ulSelector, btnSelector) {
            this.$ulEle = $(ulSelector);
            this.$btn_box = $(btnSelector);
            this.$btnArray = this.$btn_box.children();
            for (var i = 0; i < this.$btnArray.length; i++) {
                this.$btnArray[i].btnIndex = i;
            }
            this.index = 0;
            this.out = 0;

            this.$btn_box.children().on("mouseenter", $.proxy(this.moveTo, this));
            this.autoplay();
        },

        autoplay: function() {
            var _this = this;
            clearInterval(this.autopalyTimer);
            this.autopalyTimer = setInterval(function() {
                if (_this.index == _this.$ulEle.children().length - 1) {
                    _this.index = 0;
                } else {
                    _this.index++;
                }
                _this.rangeIndex();

                _this.moveTo();
            }, 2000);
        },

        rangeIndex: function() {
            if (this.index == 0) {
                this.out = this.$ulEle.children().length - 1;
            } else {
                this.out = this.index - 1;
            }
        },

        moveTo: function(e) {
            
            var _this = this;
            if (e instanceof Object) {
                var $btn = $(e.target);
                this.out = this.index;
                if (this.index == $btn.index()) {
                    return 0;
                }
                this.index = $btn.index();
            } else {
                var $btn = this.$btn_box.children().eq(this.index);
            }

            this.$ulEle.on("mouseover", function() {
                clearInterval(_this.autopalyTimer);
            });

            this.$ulEle.on("mouseout", function() {
                _this.autoplay();
            })

            this.$btn_box.on("mouseover", function() {
                clearInterval(_this.autopalyTimer);
            });

            this.$btn_box.on("mouseout", function() {
                _this.autoplay();
            });

            $btn.addClass("on").siblings().removeClass("on");

            if (this.index > this.out) {
                this.scrollLeft();
            } else {
                this.scrollRight();
            }
             

            // console.log("index: " + this.index);
            // console.log("out: " + this.out);
        },

        fade: function () {
            // console.log("index: " + this.index);
            // console.log("out: " + this.out);
			this.$ulEle.children().eq(this.index)
				.stop()
				.fadeIn()
				.siblings()
				.stop()
				.fadeOut()
		},

        scrollLeft: function() {
            // console.log("scroll left");
            // console.log("index: " + this.index);
            // console.log("out: " + this.out);
            var $li = this.$ulEle.children();
            
            // 进场元素
            $li.eq(this.index).css({
                left: -$li.width()
			}).stop(true).animate({
				left: 0
            })

           // console.log(this.index)
            //出场元素
			$li.eq(this.out).css({
                left: 0
			}).animate({
				left: $li.width()
			});
        },

        scrollRight: function() {
            // console.log("scroll right");
            // console.log("index: " + this.index);
            // console.log("out: " + this.out);

            var $li = this.$ulEle.children();
            
            // 进场元素
			$li.eq(this.index).css({
                left: $li.width(),
			}).stop(true).animate({
				left: 0
			});

            // 出场元素
			$li.eq(this.out).css({
				left: 0
			}).animate({
				left: -$li.width()
			});
        }
    }

    new LittleBanner(".indexTuanBox .bigUl", ".indexTuanBox .btnBg");
    new LittleBanner(".indexAdFocus .bigUl", ".indexAdFocus .btnBg");
});