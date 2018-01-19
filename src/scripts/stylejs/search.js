$(function() {
    $(".headerSearch .hotWords").find("a").on("mouseover", function() {
        $(this).css("color", "#cc0000");
    });

    $(".headerSearch .hotWords").find("a").on("mouseout", function() {
        $(this).css("color", "#999");
    })
});