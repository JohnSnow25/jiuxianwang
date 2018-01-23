$(function() {
    var userName = $("#userName");
    var password = $("#password");
    var verification = $("#verification");
    var save = $("#save");

    $("#save").on("blur", function(event) {
        $("#verification").siblings(".mistakeTip").css("display", "none");
    });

    $("#save").on("click", function(event) {
        event = event || window.event;

        if (userName.val() == 123 && password.val() == 123) {
            $("#usernamelogin").html(userName.val());
            $(".modelBg").css("display", "block");
            $("#bindPop1").css("display", "block");

            countDown($("#loginCountDonw").html(), $("#loginCountDonw"));
        } else {
            event.preventDefault();
            $("#verification").siblings(".mistakeTip").css("display", "block");
        }
    });

    // 遮罩层退出按钮
    var exitButton = $("#bindPop1 > .bindTitle > i");
    exitButton.on("click", function() {
        $(".modelBg").css("display", "none");
        $("#bindPop1").css("display", "none");
    });

    function countDown(countNumber, numberDom) {
        var countTimer = null;
        clearInterval(countTimer);
        countTimer = setInterval(function() {
            countNumber--;
            numberDom.html(countNumber);

            if (countNumber == 0) {
                clearInterval(countTimer);
                window.location.href = "http://localhost:81/jiuxianwang/src/index.html";
            }
        }, 1000);
    }

    // 
});