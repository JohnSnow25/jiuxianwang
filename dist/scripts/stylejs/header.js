$(function() {
    // 我的酒仙下拉菜单
    $(".topHeaderRight .hd-n1").on("mouseover", function() {
        $(".myJiuxian s").css("transform", "rotate(180deg)");
        $(".hd-n1 .myJiuxianBox").css("display", "block");
        $(".topHeaderRight .dropTitle").eq(0).addClass("onmv");
    });

    $(".topHeaderRight .hd-n1").on("mouseout", function() {
        $(".myJiuxian s").css("transform", "rotate(0)");
        $(".hd-n1 .myJiuxianBox").css("display", "none");
        $(".topHeaderRight .dropTitle").eq(0).removeClass("onmv");
    });

    // 手机逛酒仙，onmouseover 字体颜色不变
    $(".topHeaderRight .hd-n5").on("mouseover", function() {
        $(".topHeaderRight .hd-n5 > a").css({
            color: "#fff",
        });

        $(".topHeaderRight .erm2015922").css("display", "block");
    });

    $(".topHeaderRight .hd-n5").on("mouseout", function() {
        $(".topHeaderRight .hd-n5 > a").css({
            color: "#fff",
        });

        $(".topHeaderRight .erm2015922").css("display", "none");
    });

    // 网站导航
    $(".topHeaderRight .hd-n7").on("mouseover", function() {
        $(".topHeaderRight .hd-n7 s").css("transform", "rotate(180deg)");
        $(".hd-n7 .subNavBox").css("display", "block");
        $(".topHeaderRight .dropTitle").eq(1).addClass("onmv");
    });

    $(".topHeaderRight .hd-n7").on("mouseout", function() {
        $(".topHeaderRight .hd-n7 s").css("transform", "rotate(0)");
        $(".hd-n7 .subNavBox").css("display", "none");
        $(".topHeaderRight .dropTitle").eq(1).removeClass("onmv");
    });

    // 客户服务
    $(".topHeaderRight .hd-n8").on("mouseover", function() {
        $(".topHeaderRight .hd-n8 s").css("transform", "rotate(180deg)");
        $(".hd-n8 .cusServiceBox").css("display", "block");
        $(".topHeaderRight .dropTitle").eq(2).addClass("onmv");
    });

    $(".topHeaderRight .hd-n8").on("mouseout", function() {
        $(".topHeaderRight .hd-n8 s").css("transform", "rotate(0)");
        $(".hd-n8 .cusServiceBox").css("display", "none");
        $(".topHeaderRight .dropTitle").eq(2).removeClass("onmv");
    });
});