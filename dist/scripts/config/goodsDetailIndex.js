require(["../scripts/config/htmlConfig.js"], function () {
    require(["jquery"], function ($) {

        var $jqZoomPup = $(".jqZoomPup");
        var $zoomdiv = $(".zoomdiv");
        var $zoomDivImg = $(".zoomdiv img");

        // 商品预览图切换
        $(".show-list-con li").each(function (index, item) {
            $(item).on("mouseenter", function () {
                $(this).addClass("on").siblings().removeClass("on");
                var showPicArray = ["http://img08.jiuxian.com/2014/1028/36862faffea443ccbaa1bc51b569ae585.jpg", "http://img10.jiuxian.com/2014/1028/319966abfcd34dc6afa4310776f0fa125.jpg"];

                var bigImageArray = ["http://img08.jiuxian.com/2014/1028/36862faffea443ccbaa1bc51b569ae586.jpg", "http://img10.jiuxian.com/2014/1028/319966abfcd34dc6afa4310776f0fa126.jpg"];

                $(".introShow .show-pic img").attr("src", showPicArray[index]);

                $zoomDivImg.attr("src", bigImageArray[index]);
            })
        });


        // 商品预览图放大镜
        // <div class="jqZoomPup" style="width: 231px; height: 231px; visibility: visible; top: 207px; left: 0px;">&nbsp;</div>

        // <div class="zoomdiv" style="top: -1px; left: 440px; width: 440px; height: 440px; display: block;"><img class="bigimg" src="http://img08.jiuxian.com/2014/1028/36862faffea443ccbaa1bc51b569ae586.jpg"></div>


        $(".introShow .show-pic").on("mousemove", function (event) {
            event = event || window.event;
            var picOffsetX = event.offsetX - $jqZoomPup.width() / 2;
            var picOffsetY = event.offsetY - $jqZoomPup.height() / 2;
            picOffsetX = picOffsetX <= 0 ? 0 : picOffsetX;
            picOffsetY = picOffsetY <= 0 ? 0 : picOffsetY;

            var maxPicOffsetX = $(".introShow .show-pic").width() - $jqZoomPup.width();
            var maxPicOffsetY = $(".introShow .show-pic").height() - $jqZoomPup.height();
            picOffsetX = picOffsetX >= maxPicOffsetX ? maxPicOffsetX : picOffsetX;
            picOffsetY = picOffsetY >= maxPicOffsetY ? maxPicOffsetY : picOffsetY;

            $jqZoomPup.css({
                width: 231,
                height: 231,
                visibility: "visible",
                left: picOffsetX,
                top: picOffsetY
            });

            $zoomdiv.css({
                width: 440,
                height: 440,
                display: "block"
            });

            // 不能够给图片设置width和height， 否则图片的大小会变， 保持原来的尺寸即可。
            $zoomDivImg.css({
                left: -picOffsetX * 2,
                top: - picOffsetY * 2
            });
        });


        $(".introShow .show-pic").on("mouseleave", function (event) {
            event = event || window.event;
            $jqZoomPup.css({
                visibility: "hidden"
            });

            $zoomdiv.css({
                display: "none"
            });
        });


        function elementOfBodyOffsetLeft(childEle) {
            var offsetLeft = childEle.offsetLeft;
            if (childEle.offsetParent.nodeName !== "BODY") {
                offsetLeft += elementOfBodyOffsetLeft(childEle.offsetParent);
            }
            return offsetLeft;
        }
    });
});
