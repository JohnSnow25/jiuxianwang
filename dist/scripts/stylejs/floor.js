$(function() {

    // 1楼
    wineDetail("data/jiuxianwang/1floorbaijiuguan.json", ".loadFirst .whiteWine .spiritList");
    hotSale("data/jiuxianwang/1floorbaijiuguanrexiao.json", ".loadFirst .topTenBox .topTenConWrap .topTenCon");

    // 2楼
    wineDetail("data/jiuxianwang/2floorputaojiu.json", ".loadSecond .whiteWine .spiritList");
    hotSale("data/jiuxianwang/2floorputaojiurexiao.json", ".loadSecond .topTenBox .topTenConWrap .topTenCon");

    // 3楼
    wineDetail("data/jiuxianwang/3flooryangjiuguan.json", ".loadThird .whiteWine .spiritList");
    hotSale("data/jiuxianwang/3flooryangjiuguanremai.json", ".loadThird .topTenBox .topTenConWrap .topTenCon");

    // 4楼
    wineDetail("data/jiuxianwang/4flooryangjiurexiao.json", ".loadFourth .whiteWine .spiritList");
    hotSale("data/jiuxianwang/4flooryangjiurexiaorexiao.json", ".loadFourth .topTenBox .topTenConWrap .topTenCon");

    // 5楼
    wineDetail("data/jiuxianwang/5floorshipin.json", ".loadFifth .whiteWine .spiritList");
    hotSale("data/jiuxianwang/5floorshipinrexiao.json", ".loadFifth .topTenBox .topTenConWrap .topTenCon");

    // 详情
    function wineDetail(url, fatherSelector) {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: url,
            success: function(data) {
                var $ul = $("<ul></ul>");
                $ul.addClass("clearfix");
                for (var i = 0; i < data.length; i++) {
                    var wineDetail = data[i];
                    var $li = $("<li></li>");
    
                    // <div class="spiritListPic">
                    var $divSpiritListPic = $("<div></div>");
                    $divSpiritListPic.addClass("spiritListPic");
                    $li.append($divSpiritListPic);
                    var $aWine = $("<a></a>");
                    $divSpiritListPic.append($aWine);
                    $aWine.attr({
                        href: "###",
                        title: wineDetail.title,
                    });
                    var $imgWine = $("<img>");
                    $aWine.append($imgWine);
                    $imgWine.attr({
                        src: wineDetail.src,
                        width: 160,
                        height: 160,
                        alt: wineDetail.title
                    });
    
                    // <div class="spiritListTit">
                    var $divSpiritListTit = $("<div></div>");
                    $li.append($divSpiritListTit);
                    $divSpiritListTit.addClass("spiritListTit");
                    var $aWineTitle = $("<a></a>");
                    $divSpiritListTit.append($aWineTitle);
                    $aWineTitle.attr({
                        href: "###",
                        title: wineDetail.title
                    });
                    $aWineTitle.html(wineDetail.title);
    
                    // <div class="spiritListPrice">
                    var $divSpiritListPrice = $("<div></div>");
                    $li.append($divSpiritListPrice);
                    $divSpiritListPrice.addClass("spiritListPrice");
                    var $strongPrice = $("<strong></strong>");
                    $divSpiritListPrice.append($strongPrice);
                    $strongPrice.html(wineDetail.price);
                    if (wineDetail.discount) {
                        var $spanDiscount = $("<span></span>");
                        $divSpiritListPrice.append($spanDiscount);
                        var $emDiscount = $("<em></em>");
                        $spanDiscount.append($emDiscount);
                        $emDiscount.html(wineDetail.discount);
                        var $iDiscount = $("<i></i>");
                        $spanDiscount.append($iDiscount);
                        $iDiscount.addClass("clubIcon");
                        $iDiscount.css("display", "inline-block");
                    }
    
                    $ul.append($li);
                }
    
                $(fatherSelector).append($ul);
            }
        })
    }


    // 热销
    function hotSale(url, fatherSelector) {
        $.ajax({
            type: "get",
            dataType: "json",
            cache: "false",
            url: url,
            success: function(data) {
                var $ul = $("<ul></ul>");
                $ul.addClass("clearfix");
                for (var i = 0; i < data.length; i++) {
                    var hotSale = data[i];
                    var $li = $("<li></li>");
                    var $iSpace = $("<i></i>");
                    $li.append($iSpace);
                    $iSpace.addClass("topTenOne");
                    
                    // <div class="topTenPic">
                    var $divTopTenPic = $("<div></div>");
                    $li.append($divTopTenPic);
                    $divTopTenPic.addClass("topTenPic");
                    var $aTopTenPic = $("<a></a>");
                    $divTopTenPic.append($aTopTenPic);
                    $aTopTenPic.attr({
                        href: "###",
                        title: hotSale.title
                    });
                    var $imgHotSale = $("<img>");
                    $aTopTenPic.append($imgHotSale);
                    $imgHotSale.attr({
                        src: hotSale.src,
                        width: 90,
                        height: 90,
                        alt: hotSale.title
                    });
    
                    // <div class="topTenTitBox">
                    var $divTopTenTitBox = $("<div></div>");
                    $li.append($divTopTenTitBox);
                    $divTopTenTitBox.addClass("topTenTitBox");
    
                    // <div class="topTenTit">
                    var $divTopTenTitle = $("<div></div>");
                    $divTopTenTitBox.append($divTopTenTitle);
                    $divTopTenTitle.addClass("topTenTit");
                    var $aTopTenTitle = $("<a></a>");
                    $divTopTenTitle.append($aTopTenTitle);
                    $aTopTenTitle.attr({
                        href: "###",
                        title: hotSale.title
                    });
                    $aTopTenTitle.html(hotSale.title);
    
                    // <div class="topTenPrice">
                    var $divTopTenPrice = $("<div></div>");
                    $divTopTenTitBox.append($divTopTenPrice);
                    $divTopTenPrice.addClass("topTenPrice");
                    var $strongPrice = $("<strong></strong>");
                    $divTopTenPrice.append($strongPrice);
                    $strongPrice.html(hotSale.price);
    
                    $ul.append($li);
                }
    
                $(fatherSelector).append($ul);
            }
        });
    }

    // logo墙
    var $logoWallTitle = $(".Lay_2 > .titleBox li");
    var $moveDiv = $(".Lay_2 .titleSlider");
    var $logoBoxWall = $(".Lay_2 .logoBox .logoAll");
    $logoWallTitle.each(function(index, item) {
        $(item).on("mouseenter", function() {
            var moveWidth = 105;
            $moveDiv.stop(true, false).animate({
                left: moveWidth * index
            }, "fast");

            $(this).addClass("on").siblings().removeClass("on");

            $logoBoxWall.eq(index).css("display", "block").siblings().css("display", "none");
        });
    });
});