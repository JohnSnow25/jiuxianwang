$(function() {
    function Banner() {
        this.init();
    }

    Banner.prototype = {
        constructor: Banner,

        init: function() {
            this.index = 0;

            this.$ul = $(".mainBanner .bigUl");
            this.$btn_box = $(".smallBtn .smallUl")

            this.$btn_box.children().on("mouseenter", $.proxy(this.moveTo, this));
            this.autoplay();
        },

        moveTo: function(e) {
            var _this = this;
            if (e instanceof Object) {
                var $btn = $(e.target);
                if (this.index == $btn.index()) {
                    return 0;
                }

                this.index = $btn.index();
            } else {
                var $btn = this.$btn_box.children().eq(this.index);
            }

            // 当鼠标在图片上面的时候，清除定时器
            this.$ul.on("mouseover", function() {
                clearInterval(_this.autoplayTimer);
            });

            // 当鼠标离开图片的时候，重新开启定时器
            this.$ul.on("mouseout", function() {
                _this.autoplay();
            });

            this.$btn_box.on("mouseenter", function() {
                clearInterval(_this.autoplayTimer);
            });

            this.$btn_box.on("mouseleave", function() {
                _this.autoplay();
            });

            $btn.addClass("on").siblings().removeClass("on");
            $.proxy(this.fade(), this);
        },

        fade: function() {
            this.$ul.children().eq(this.index)
				.stop()
				.fadeIn()
				.siblings()
				.stop()
				.fadeOut();
        },

        autoplay: function() {
            var _this = this;
            
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = setInterval(function() {
                if (_this.index == _this.$ul.children().length - 1) {
                    _this.index = 0;
                } else {
                    _this.index++;
                }
                
                _this.moveTo();
            }, 2000);
        }
    }

    new Banner();
});