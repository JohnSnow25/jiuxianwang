$(function() {
    $(".navList li").on("mouseover", function() {
        $(this).css("background", "#b40c10");
    });

    $(".navList li").on("mouseout", function() {
        $(this).css("background", "#900");
    });

    // "一键选购" onmouseover _nowactstr1
    var menuBoxTimer = null;
    $("#_nowactstr1").on("mouseenter", function() {
        $("#_nowactstr1").addClass("on");
        $(".menuBox").eq(0).css("display", "block");
    })

    $("#_nowactstr1").on("mouseleave", function() {
        menuBoxTimer = setTimeout(function() {
            $("#_nowactstr1").removeClass("on");
            $(".menuBox").eq(0).css("display", "none");
        }, 50);
    })

    $(".menuBox").eq(0).on("mouseenter", function() {
        clearTimeout(menuBoxTimer);
    });

    $(".menuBox").eq(0).on("mouseleave", function() {
        $("#_nowactstr1").removeClass("on");
        $(".menuBox").eq(0).css("display", "none");
    });


    // 分类列表右侧详情文字
    $(".menuCon-list a").on("mouseover", function() {
        if ("hot".indexOf($(this).attr("class")) == -1) {
            $(this).css("color", "#cc0001");
        }
    });

    $(".menuCon-list a").on("mouseout", function() {
        if ("hot".indexOf($(this).attr("class")) == -1) {
            $(this).css("color", "#666");
        }
    });

    // 白酒分类列表
    var menuBoxTimer2 = null;
    $("#_nowactstr2").on("mouseenter", function() {
        $("#_nowactstr2").addClass("on");
        $(".menuBox").eq(1).css("display", "block");
    })

    $("#_nowactstr2").on("mouseleave", function() {
        menuBoxTimer2 = setTimeout(function() {
            $("#_nowactstr2").removeClass("on");
            $(".menuBox").eq(1).css("display", "none");
        }, 50);
    })

    $(".menuBox").eq(1).on("mouseenter", function() {
        clearTimeout(menuBoxTimer2);
    });

    $(".menuBox").eq(1).on("mouseleave", function() {
        $("#_nowactstr2").removeClass("on");
        $(".menuBox").eq(1).css("display", "none");
    });

    // 葡萄酒分类列表
    var menuBoxTimer3 = null;
    $("#_nowactstr3").on("mouseenter", function() {
        $("#_nowactstr3").addClass("on");
        $(".menuBox").eq(2).css("display", "block");
    })

    $("#_nowactstr3").on("mouseleave", function() {
        menuBoxTimer3 = setTimeout(function() {
            $("#_nowactstr3").removeClass("on");
            $(".menuBox").eq(2).css("display", "none");
        }, 50);
    })

    $(".menuBox").eq(2).on("mouseenter", function() {
        clearTimeout(menuBoxTimer3);
    });

    $(".menuBox").eq(2).on("mouseleave", function() {
        $("#_nowactstr3").removeClass("on");
        $(".menuBox").eq(2).css("display", "none");
    });

    // 洋酒分类
    var menuBoxTimer4 = null;
    $("#_nowactstr4").on("mouseenter", function() {
        $("#_nowactstr4").addClass("on");
        $(".menuBox").eq(3).css("display", "block");
    })

    $("#_nowactstr4").on("mouseleave", function() {
        menuBoxTimer4 = setTimeout(function() {
            $("#_nowactstr4").removeClass("on");
            $(".menuBox").eq(3).css("display", "none");
        }, 50);
    })

    $(".menuBox").eq(3).on("mouseenter", function() {
        clearTimeout(menuBoxTimer4);
    });

    $(".menuBox").eq(3).on("mouseleave", function() {
        $("#_nowactstr4").removeClass("on");
        $(".menuBox").eq(3).css("display", "none");
    });

    // 啤酒分类
    var menuBoxTimer5 = null;
    $("#_nowactstr5").on("mouseenter", function() {
        $("#_nowactstr5").addClass("on");
        $(".menuBox").eq(4).css("display", "block");
    })

    $("#_nowactstr5").on("mouseleave", function() {
        menuBoxTimer5 = setTimeout(function() {
            $("#_nowactstr5").removeClass("on");
            $(".menuBox").eq(4).css("display", "none");
        }, 50);
    })

    $(".menuBox").eq(4).on("mouseenter", function() {
        clearTimeout(menuBoxTimer5);
    });

    $(".menuBox").eq(4).on("mouseleave", function() {
        $("#_nowactstr5").removeClass("on");
        $(".menuBox").eq(4).css("display", "none");
    });

    // 食尚分类
    var menuBoxTimer6 = null;
    $("#_nowactstr6").on("mouseenter", function() {
        $("#_nowactstr6").addClass("on");
        $(".menuBox").eq(5).css("display", "block");
    })

    $("#_nowactstr6").on("mouseleave", function() {
        menuBoxTimer6 = setTimeout(function() {
            $("#_nowactstr6").removeClass("on");
            $(".menuBox").eq(5).css("display", "none");
        }, 50);
    })

    $(".menuBox").eq(5).on("mouseenter", function() {
        clearTimeout(menuBoxTimer6);
    });

    $(".menuBox").eq(5).on("mouseleave", function() {
        $("#_nowactstr6").removeClass("on");
        $(".menuBox").eq(5).css("display", "none");
    });
});