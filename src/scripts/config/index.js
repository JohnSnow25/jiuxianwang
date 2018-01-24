require(["scripts/config/config.js"],function(){
	require(["jquery", "cookie"],function($, cookie){

		// 检查在cookie是否能够查找到用户的信息。如果有的话，显示欢迎信息。
		var cookieUserName = $.cookie("userName");
		if (cookieUserName) {
			$(".topHeader .topHeaderLeft .greeting").html("欢迎登陆用户：");
			$(".topHeader .topHeaderLeft .headerReg").remove();
			var loginInfo = $(".topHeader .topHeaderLeft .headerLogin");
			$(".topHeader .topHeaderLeft .headerLogin").attr("href", "");
			$(".topHeader .topHeaderLeft .headerLogin").css({
				fontSize: "18px",
				fontWeight: "blod",
			});
			$(".topHeader .topHeaderLeft .headerLogin").html($.cookie("userName"));
		}

		// 使用 jsonp 请求百度接口数据。
		var $oSearch = $("#wd");
		var $oSearchResultUl = $("#searchCon > ul");
		var searchTimer = null;
		$oSearch.on("focus", function() {
			$("#wd").val("");
		});

		// 查询结果 移出隐藏。
		$oSearchResultUl.on("mouseleave", function() {
			var _this = this;
			setTimeout(function() {
				$(_this).hide();
			}, 500);
		});

		// 鼠标点击body 隐藏查询结果：
		$("body").on("click", function() {
			$oSearchResultUl.hide();
		})

		// 查询百度接口，搜索关键字
		$oSearch.on("input", function() {
			var searchKeyword = $oSearch.val();
			console.log(searchKeyword);
			clearTimeout(searchTimer);
			searchTimer = setTimeout(function() {
				console.log("send ajax");
				$.ajax({
					url: "http://suggestion.baidu.com/",
					type: "GET",
					dataType: "jsonp",
					jsonp: "cb",
					data: "wd=" + searchKeyword,
					success: function(data) {
						console.log(data);
						$.each(data.s, function(index, item) {
							var $li = $("<li></li>");
							var $aSearchResult = $("<a></a>");
							var $spanSearchResult = $("<span></span>");
							$aSearchResult.append($spanSearchResult);
							$spanSearchResult.html(item);
							$li.append($aSearchResult);
							$oSearchResultUl.append($li);
						});
						$oSearchResultUl.show();
					},
					error: function(e) {
						console.log(e);
					}
				});
			}, 500);
		});

	});	
});
