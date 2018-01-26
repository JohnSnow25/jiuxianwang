require(["../scripts/config/htmlConfig.js"], function () {
	require(["jquery", "shopping"], function ($, shoppingCar) {
		// 购物车弹出框
		var $shoppingCarAlert = $(".alt_succ");
		var shoppingCartAlertTimer = null;

		$(".proListSearch li .prtlt_btn2").on("click", function () {
			var productId = $(this).siblings("span").find("input").attr("gid");
			var productNumber = $(this).siblings("span").find("input").val();

			// 设置购物车 cookie
			shoppingCar.set_shop_itme(productId, productNumber);

			var totalProductNumber = 0;
			var totalShoppingItems = shoppingCar.get_shop_item();
			for (var i = 0; i < totalShoppingItems.length; i++) {
				totalProductNumber += Number(totalShoppingItems[i].num);
			}
			// 更改购物车商品数量
			$("#alt_num").html(totalProductNumber);
			$shoppingCarAlert.css("display", "block");

			clearTimeout(shoppingCartAlertTimer);
			shoppingCartAlertTimer = setTimeout(function() {
				$shoppingCarAlert.css("display", "none");
			}, 5000);
		});


		// 购买商品数量增加：
		$(".proListSearch li .increase").on("click", function () {
			var $purchaseNumberDom = $(this).parent().siblings("span").find("input");
			var number = $purchaseNumberDom.val();

			if (number >= 99) {
				return 0;
			}

			if (number == 1) {
				$(this).parent().css("backgroundPosition", "-233px -138px");
			} else {
				$(this).parent().css("backgroundPosition", "-185px -138px");
			}

			$purchaseNumberDom.val(++number);
		});

		// 购买商品数量减少：
		$(".proListSearch li .decrease").on("click", function () {

			// 父级DIV， 可以减少：
			// background-position: -233px -138px;
			// 不能再减少：
			// background-position: -185px -138px;

			var $purchaseNumberDom = $(this).parent().siblings("span").find("input");
			var number = $purchaseNumberDom.val();

			if (number <= 1) {
				return 0;
			}

			if (number <= 1) {
				$(this).parent().css("backgroundPosition", "-233px -138px");
			} else {
				$(this).parent().css("backgroundPosition", "-185px -138px");
			}

			$purchaseNumberDom.val(--number);
		});

		$(".alt_succ .sum .succ_close").on("click", function() {
			$shoppingCarAlert.css("display", "none");
		});

		$(".alt_succ .sum .contgo").on("click", function() {
			$shoppingCarAlert.css("display", "none");
		});
	});
});
