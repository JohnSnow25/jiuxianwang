require(["../scripts/config/config.js"],function(){
	require(["jquery"],function($){
        // 商品预览图切换
        $(".show-list-con li").each(function(index, item) {
            $(item).on("mouseenter", function() {
                $(this).addClass("on").siblings().removeClass("on");
                var showPicArray = ["http://img08.jiuxian.com/2014/1028/36862faffea443ccbaa1bc51b569ae585.jpg", "http://img10.jiuxian.com/2014/1028/319966abfcd34dc6afa4310776f0fa125.jpg"];

                $(".introShow .show-pic img").attr("src", showPicArray[index]);
            })
        });
        

        // 商品预览图放大镜
        // <div class="jqZoomPup" style="width: 231px; height: 231px; top: 207px; left: 0px;">&nbsp;</div>
        var bigImageArray = ["http://img08.jiuxian.com/2014/1028/36862faffea443ccbaa1bc51b569ae586.jpg", "http://img10.jiuxian.com/2014/1028/319966abfcd34dc6afa4310776f0fa126.jpg"];

        $(".introShow .show-pic img").on("mouseenter", function() {
            
        });
	});	
});
