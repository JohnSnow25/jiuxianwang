require(["../scripts/config/config.js"],function(){
	require(["jquery", "cookie"],function($, cookie){
        var userPhone = $(".userAccountNameByPhone");
        var yzCode = $(".yzCode");
        var iphoneCode = $(".iphoneCode");
        var userPassWord = $(".userPassWord");
        var userPassWord2 = $(".userPassWord2");
    
        var validationItems = [userPhone, yzCode, iphoneCode, userPassWord, userPassWord2];
    
        // 手机号码用户名 验证
    
        // 提示图片
        // regTrue
        // regFalse
    
        // 提示信息文字
        // poiTrue
        // poiFalse
    
        var $userPhoneTip1 = userPhone.siblings("span").eq(0);
        var $userPhoneTip2 = userPhone.siblings("span").eq(1);
        var $userPhoneTipPic = userPhone.siblings(".regPointIcon");
        userPhone.on("focus", function() {
            var userPhoneClass = $userPhoneTip1.attr("class");
            if (/poiTrue|poiFalse/g.test(userPhoneClass)) {
                userPhoneClass = userPhoneClass.replace(/poiTrue|poiFalse/, "poiTrue");
            } else {
                userPhoneClass += " poiTrue";
            }
            $userPhoneTip1.attr("class", userPhoneClass);
            $userPhoneTip1.css("display", "block");
            $userPhoneTip2.css("display", "none");
            $userPhoneTipPic.css("display", "none");
            userPhone.removeClass("on");
        });
    
        userPhone.on("blur", function() {
            // $userPhoneTip1.css("display", "block");
            var userPhoneClass = $userPhoneTip1.attr("class");
            var userPhoneTipPicClass = $userPhoneTipPic.attr("class");
            var mobilReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    
            if (mobilReg.test(userPhone.val())) { // 如果能够匹配正则
                // console.log("匹配正则");
                if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                    userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regTrue");
                } else {
                    userPhoneTipPicClass += " regTrue";
                }
                $userPhoneTipPic.css("display", "block");
                $userPhoneTipPic.attr("class", userPhoneTipPicClass);
                $userPhoneTip1.css("display", "none");
                $userPhoneTip2.css("display", "none");
                this.pass = true;
            } else { // 如果不能够匹配正则
                // console.log("不匹配正则");
                if (userPhone.val().trim() != 0) { // 如果输入框不为空
                    // 交给正则来判断
                    // console.log("输入框不为空");
                    if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                        userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regFalse");
                    } else {
                        userPhoneTipPicClass += " regFalse";
                    }
                    if (/poiTrue|poiFalse/g.test(userPhoneClass)) {
                        userPhoneClass = userPhoneClass.replace(/poiTrue|poiFalse/, "poiFalse");
                    } else {
                        userPhoneClass += " poiFalse";
                    }
                    // console.log("pic: " + userPhoneTipPicClass);
                    // console.log("tip: " + userPhoneClass);
                    $userPhoneTip1.attr("class", userPhoneClass);
                    $userPhoneTip2.attr("class", userPhoneClass);
                    $userPhoneTipPic.attr("class", userPhoneTipPicClass);
                    $userPhoneTip1.css("display", "none");
                    $userPhoneTip2.css("display", "block");
                    $userPhoneTipPic.css("display", "block");
                } else { // 如果输入框为空
                    // console.log("输入框为空");
                    if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                        userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regFalse");
                    } else {
                        userPhoneTipPicClass += " regFalse";
                    }
                    if (/poiTrue|poiFalse/g.test(userPhoneClass)) {
                        userPhoneClass = userPhoneClass.replace(/poiTrue|poiFalse/, "poiFalse");
                    } else {
                        userPhoneClass += " poiFalse";
                    }
                    // console.log("pic: " + userPhoneTipPicClass);
                    // console.log("tip: " + userPhoneClass);
                    $userPhoneTip1.attr("class", userPhoneClass);
                    $userPhoneTip2.attr("class", userPhoneClass);
                    $userPhoneTipPic.attr("class", userPhoneTipPicClass);
                    $userPhoneTip1.css("display", "block");
                    $userPhoneTip2.css("display", "none");
                    $userPhoneTipPic.css("display", "block");
                }
                userPhone.addClass("on");
            }
            
        });
    
        // 验证码 验证
        var yzCodeTip = yzCode.siblings(".regPoint");
        yzCode.on("focus", function() {
            yzCodeTip.css("display", "none");
            yzCode.removeClass("on");
        });
    
        yzCode.on("blur", function() {
            if (yzCode.val() != "ywfp") {
                yzCode.addClass("on");
                yzCodeTip.css("display", "block");
            } else {
                yzCodeTip.css("display", "none");
                yzCode.removeClass("on");
                this.pass = true;
            }
        });
    
        // 短信 校验码 验证
        var iphoneCodeTip = iphoneCode.siblings(".regPoint");
        iphoneCode.on("focus", function() {
            iphoneCodeTip.css("display", "none");
            iphoneCode.removeClass("on");
        });
    
        iphoneCode.on("blur", function() {
            if (!iphoneCode.val()) {
                iphoneCode.addClass("on");
                iphoneCodeTip.css("display", "block");
            } else {
                iphoneCodeTip.css("display", "none");
                iphoneCode.removeClass("on");
                this.pass = true;
            }
        });
    
        // 密码 验证：
        var $userPassWordTip1 = userPassWord.siblings("span").eq(0);
        var $userPassWordTip2 = userPassWord.siblings("span").eq(1);
        var $userPassWordTipPic = userPassWord.siblings(".regPointIcon");
        userPassWord.on("focus", function() {
            var userPassWordClass = $userPassWordTip1.attr("class");
            if (/poiTrue|poiFalse/g.test(userPassWordClass)) {
                userPassWordClass = userPassWordClass.replace(/poiTrue|poiFalse/, "poiTrue");
            } else {
                userPassWordClass += " poiTrue";
            }
            $userPassWordTip1.attr("class", userPassWordClass);
            $userPassWordTip1.css("display", "block");
            $userPassWordTip2.css("display", "none");
            $userPassWordTipPic.css("display", "none");
            userPassWord.removeClass("on");
        });
    
        
        userPassWord.on("blur", function() {
            // $userPassWordTip1.css("display", "block");
            var matchCount = 0;
            var userPassWordClass = $userPassWordTip1.attr("class");
            var userPhoneTipPicClass = $userPassWordTipPic.attr("class");
            var userPassWordValue = userPassWord.val();
            var userPassWordReg = /^[^/\\\*<>\|\?]{6,20}$/;
    
            if (!!userPassWordValue) { // 如果能够匹配基础密码
                console.log("匹配基础密码");
                if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                    userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regTrue");
                } else {
                    userPhoneTipPicClass += " regTrue";
                }
    
                if (/poiTrue|poiFalse/g.test(userPassWordClass)) {
                    userPassWordClass = userPassWordClass.replace(/poiTrue|poiFalse/, "poiTrue");
                } else {
                    userPassWordClass += " poiTrue";
                }
    
                if (/\d/g.test(userPassWordValue)) {
                    matchCount++;
                }
                if (/[a-z]/gi.test(userPassWordValue)) {
                    matchCount++;
                }
                if (/[!@#\$%\^&\*\(\)]/gi.test(userPassWordValue)){
                    matchCount++;
                }
                if (userPassWordValue.length > 10) {
                    matchCount++;
                }
    
                console.log(userPassWordValue);
                // 如果只匹配了密码的一个规则。
                if(matchCount <= 1 || userPassWordValue.length < 8) {
                    console.log("失败： 只匹配了密码的一个规则");
                    if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                        userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regFalse");
                    } else {
                        userPhoneTipPicClass += " regFalse";
                    }
                    if (/poiTrue|poiFalse/g.test(userPassWordClass)) {
                        userPassWordClass = userPassWordClass.replace(/poiTrue|poiFalse/, "poiFalse");
                    } else {
                        userPassWordClass += " poiFalse";
                    }
    
                    $userPassWordTip1.attr("class", userPassWordClass);
                    $userPassWordTip2.attr("class", userPassWordClass);
                    $userPassWordTipPic.attr("class", userPhoneTipPicClass);
                    $userPassWordTip1.css("display", "none");
                    $userPassWordTip2.css("display", "block");
                    $userPassWordTipPic.css("display", "block");
                    $(".strength").css("display", "none");
    
                    return 0;
                } else if (matchCount == 2) {
                    console.log("通过，密码等级： 低");
                    $(".strength").css("display", "block");
                    $(".strength .strength1").css("background-position", "-222px -99px");
                } else if (matchCount == 3) {
                    console.log("通过，密码等级： 中");
                    $(".strength").css("display", "block");
                    $(".strength .strength1").css("background-position", "-269px -99px");
                } else {
                    console.log("通过，密码等级： 高");
                    $(".strength").css("display", "block");
                    $(".strength .strength1").css("background-position", "-316px -99px");
                }
    
                $userPassWordTip1.attr("class", userPassWordClass);
                $userPassWordTip2.attr("class", userPassWordClass);
                $userPassWordTipPic.attr("class", userPhoneTipPicClass);
                $userPassWordTipPic.css("display", "block");
                $userPassWordTip1.css("display", "none");
                $userPassWordTip2.css("display", "none");
                this.pass = true;
            } else { // 如果不能够匹配基础密码
    
                console.log("else :  不能够匹配基础密码");
    
                if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                    userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regFalse");
                } else {
                    userPhoneTipPicClass += " regFalse";
                }
                if (/poiTrue|poiFalse/g.test(userPassWordClass)) {
                    userPassWordClass = userPassWordClass.replace(/poiTrue|poiFalse/, "poiFalse");
                } else {
                    userPassWordClass += " poiFalse";
                }
    
                $userPassWordTip1.attr("class", userPassWordClass);
                $userPassWordTip2.attr("class", userPassWordClass);
                $userPassWordTipPic.attr("class", userPhoneTipPicClass);
                $userPassWordTip1.css("display", "block");
                $userPassWordTip2.css("display", "none");
                $userPassWordTipPic.css("display", "block");
    
                $(".strength").css("display", "none");
                userPassWord.addClass("on");
            }
        });
    
    
        
        var $userPassWord2Tip1 = userPassWord2.siblings("span").eq(0);
        var $userPassWord2Tip2 = userPassWord2.siblings("span").eq(1);
        var $userPassWord2TipPic = userPassWord2.siblings(".regPointIcon");
        userPassWord2.on("focus", function() {
            var userPassWord2Class = $userPassWord2Tip1.attr("class");
            if (/poiTrue|poiFalse/g.test(userPassWord2Class)) {
                userPassWord2Class = userPassWord2Class.replace(/poiTrue|poiFalse/, "poiTrue");
            } else {
                userPassWord2Class += " poiTrue";
            }
            $userPassWord2Tip1.attr("class", userPassWord2Class);
            $userPassWord2Tip1.css("display", "block");
            $userPassWord2Tip2.css("display", "none");
            $userPassWord2TipPic.css("display", "none");
            userPassWord2.removeClass("on");
        });
    
        userPassWord2.on("blur", function() {
            var userPassWord2Class = $userPassWord2Tip1.attr("class");
            var userPhoneTipPicClass = $userPassWord2TipPic.attr("class");
    
            if (userPassWord.val() == userPassWord2.val() && userPassWord2.val().length != 0) { 
                console.log("密码匹配");
                if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                    userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regTrue");
                } else {
                    userPhoneTipPicClass += " regTrue";
                }
                $userPassWord2TipPic.css("display", "block");
                $userPassWord2TipPic.attr("class", userPhoneTipPicClass);
                $userPassWord2Tip1.css("display", "none");
                $userPassWord2Tip2.css("display", "none");
                this.pass = true;
            } else { 
                console.log("密码不匹配", userPassWord, userPassWord2);
                if (userPassWord2.val().trim() != 0) {
    
                    if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                        userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regFalse");
                    } else {
                        userPhoneTipPicClass += " regFalse";
                    }
                    if (/poiTrue|poiFalse/g.test(userPassWord2Class)) {
                        userPassWord2Class = userPassWord2Class.replace(/poiTrue|poiFalse/, "poiFalse");
                    } else {
                        userPassWord2Class += " poiFalse";
                    }
    
                    $userPassWord2Tip1.attr("class", userPassWord2Class);
                    $userPassWord2Tip2.attr("class", userPassWord2Class);
                    $userPassWord2TipPic.attr("class", userPhoneTipPicClass);
                    $userPassWord2Tip1.css("display", "none");
                    $userPassWord2Tip2.css("display", "block");
                    $userPassWord2TipPic.css("display", "block");
                } else { 
                    if (/regTrue|regFalse/g.test(userPhoneTipPicClass)) {
                        userPhoneTipPicClass = userPhoneTipPicClass.replace(/regTrue|regFalse/, "regFalse");
                    } else {
                        userPhoneTipPicClass += " regFalse";
                    }
                    if (/poiTrue|poiFalse/g.test(userPassWord2Class)) {
                        userPassWord2Class = userPassWord2Class.replace(/poiTrue|poiFalse/, "poiFalse");
                    } else {
                        userPassWord2Class += " poiFalse";
                    }
    
                    $userPassWord2Tip1.attr("class", userPassWord2Class);
                    $userPassWord2Tip2.attr("class", userPassWord2Class);
                    $userPassWord2TipPic.attr("class", userPhoneTipPicClass);
                    $userPassWord2Tip1.css("display", "block");
                    $userPassWord2Tip2.css("display", "none");
                    $userPassWord2TipPic.css("display", "block");
                }
                userPassWord2.addClass("on");
            }
            
        });
    
        // 确认提交：
        $("#phoneSubit").on("click", function(event) {
            event = event || window.event;
    
            var flag = true;
            for (var i = 0; i < validationItems.length; i++) {
                // console.log(validationItems[i].get(0), validationItems[i].get(0).pass);
                if (!validationItems[i].get(0).pass) {
                    flag = false;
                    $(validationItems[i]).trigger("blur");
                }
            }
    
            if (!flag) {
                console.log("stop");
                event.preventDefault();
                return 0;
            }
    
            setTimeout(function() {
                $(".regConWrap > ul").remove();
                var appendDiv = `<div style="width: 994px;height: 500px; line-height: 500px;  text-align: center;"><span style="font-size: 20px; font-weight: bold; color: #000;">注册成功，<span id="countNumber" style="font-size: 16px; color: red;">3</span>转入登录页面</span></div>`;
                $(".regConWrap").html(appendDiv);
                countDown($("#countNumber").html(), $("#countNumber"));
            }, 1000);
        });
    
        function countDown(countNumber, numberDom) {
            var countTimer = null;
            clearInterval(countTimer);
            countTimer = setInterval(function() {
                countNumber--;
                numberDom.html(countNumber);
    
                if (countNumber == 0) {
                    clearInterval(countTimer);
                    window.location.href = "login.html";
                }
            }, 1000);
        }
	});	
});
