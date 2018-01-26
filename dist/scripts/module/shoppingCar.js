define(["jquery", "cookie"], function ($) {
	//console.log($.cookie);
	function Shopping() {
	}
	
	Shopping.prototype = {
		constructor: Shopping,

		set_shop_itme: function (productId, productNum) {
			var dataId = productId;
			// 第一次检查 在 cookie 之中 是否有 shopping_Car 的 项
			if ($.cookie("shopping_car")) {
				//增加一个值;
				var scookie = $.cookie("shopping_car");
				var acookie = JSON.parse(scookie);
				var flag = false;//代表是否存在数据;
				acookie.forEach(function (item) {

					// 如果 有 shopping_car cookie， 并且在cookie之中有此 商品id 存在
					if (item.id == dataId) {
						//证明存在; ==> 数量自增;
						item.num = Number(item.num);
						item.num += Number(productNum);
						flag = true;
					}
				})

				// 如果 此 商品 id 不存在 cookie 之中
				if (!flag) {
					var item = {
						"id": dataId,
						"num": productNum
					}
					acookie.push(item);
				}
				scookie = JSON.stringify(acookie);
				$.cookie("shopping_car", scookie);

			} else {  //  如果不存在的话， 创建一个 shopping_car 的 cookie
				$.cookie("shopping_car", '[{"id":"' + dataId + '","num": "' + productNum + '"}]')
			}
			console.log(this.get_shop_item());

		},

		get_shop_item: function () {
			if ($.cookie("shopping_car")) {
				return JSON.parse($.cookie("shopping_car"))
			}
		},

		remove_shop_item: function (id) {
			var scookie = $.cookie("shopping_car");
			if (scookie) {
				var acookie = JSON.parse(scookie);
				acookie.forEach(function (item, index) {
					if (item.id == id) {
						acookie.splice(index, 1);
					}
				})
			}
			scookie = JSON.stringify(acookie);
			$.cookie("shopping_car", scookie);
		}
	}

	return new Shopping();
})