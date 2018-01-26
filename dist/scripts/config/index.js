require(["scripts/config/config.js"], function () {
	require(["jquery", "cookie"], function ($, cookie) {

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

		var $searchButton = $(".search-btn");

		$oSearch.on("focus", function () {
			$("#wd").val("");
		});

		// 查询结果 移出隐藏。
		$oSearchResultUl.on("mouseleave", function () {
			var _this = this;
			setTimeout(function () {
				$(_this).hide();
			}, 500);
		});

		// 鼠标点击body 隐藏查询结果：
		$("body").on("click", function () {
			$oSearchResultUl.hide();
		})

		// 查询百度接口，搜索关键字
		$oSearch.on("input", keyWordSearch);

		$searchButton.on("click", keyWordSearch)

		function keyWordSearch() {
			var searchKeyword = $oSearch.val();
				clearTimeout(searchTimer);
			searchTimer = setTimeout(function () {
				$oSearchResultUl.children().remove();

				// $.ajax({
				// 	url: "http://suggestion.baidu.com/",
				// 	type: "GET",
				// 	dataType: "jsonp",
				// 	jsonp: "cb",
				// 	data: "wd=" + searchKeyword,
				// 	success: function (data) {
						// console.log(data);
						var data = {};
						data.s = ["水井坊酒水", "水井坊价格", "水井坊图片", "水井坊链接", "水井坊相关"];
						for (let index = 0; index < data.s.length; index++) {
							if (index >= 8) {
								break;
							}
							item = data.s[index];
							var $li = $("<li></li>");
							$li.css({
								cursor: "pointer"
							});
							var $aSearchResult = $("<a></a>");
							var $spanSearchResult = $("<span></span>");
							$aSearchResult.append($spanSearchResult);
							$aSearchResult.attr({
								href: "html/itemsDetail.html"
							});
							$spanSearchResult.html(item);
							$li.append($aSearchResult);
							$oSearchResultUl.append($li);
						}

						$oSearchResultUl.show();
				// 	},
				// 	error: function (e) {
				// 		console.log(e);
				// 	}
				// });
			}, 300);
		}

		$(".receBoxs .raceList li .raceListTime").each(function(index, item) {
			timeCountDown($(this));
		});


		function timeCountDown(liDom) {
			var randomTime = getRandomTime();
			var timeArray = randomTime.split(":");
			var hour = timeArray[0];
			var minute = timeArray[1];
			var second = timeArray[2];
			var countDownMiliSecond = hour * 1000 * 60 * 60 + minute * 1000 * 60 + second * 1000;
	
			var endCountDownTime = new Date().getTime() + countDownMiliSecond;
	
			setInterval(function() {
				var beginCountDownTime = new Date().getTime();
				var totalMiliSecond = endCountDownTime - beginCountDownTime;
				var countDownHour = parseInt(totalMiliSecond / (1000 * 60 * 60));
				var countDownMinute = parseInt(totalMiliSecond % (1000 * 60 * 60) / (1000 * 60));
				var countDownSecond = parseInt(totalMiliSecond % (1000 * 60) / 1000);
	
				liDom.find(".hours").html(countDownHour);
				liDom.find(".minutes").html(countDownMinute);
				liDom.find(".seconds").html(countDownSecond);
			}, 1000);
		}
	
		function getRandomTime() {
			var hour = Math.round(Math.random() * 23);
			var minute = Math.round(Math.random() * 59);
			var second = Math.round(Math.random() * 59);
			return hour + ":" + minute + ": " + second;
		}
	});
});
