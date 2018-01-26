require(["../scripts/config/htmlConfig.js"], function() {
    require(["jquery", "shopping"], function($, shoppingCar) {
        var itemDetaiData = '[{"prductId":"57460","imgSrc":"http://img07.jiuxian.com/2017/1208/fe7847c58603439ead0050a32f03efb34.jpg","price":"339.00","title":"【水井坊特卖】52°水井坊臻酿八号500ml+景德镇荷韵瓷酒器","judge":"已有<span>8927</span>人评"},{"prductId":"57463","imgSrc":"http://img06.jiuxian.com/2017/1208/27df4cefc7244dddb29025493aa2a6b64.jpg","price":"359.00","title":"【水井坊特卖】52°水井坊鸿运装500ml+景德镇荷韵瓷酒器","judge":"已有<span>2505</span>人评"},{"prductId":"61402","imgSrc":"http://img07.jiuxian.com/2018/0117/6737e34187e5483395c56aec16d685a44.jpg","price":"2009.00","title":"【水井坊特卖】52°水井坊臻酿八号500ml（6瓶装）+JBL蓝牙小音箱","judge":"已有<span>6566</span>人评"},{"prductId":"61405","imgSrc":"http://img06.jiuxian.com/2018/0117/f6545cf428a04ed1afbbffbb93fd7eaf4.jpg","price":"2129.00","title":"【水井坊特卖】52°水井坊鸿运装500ml（6瓶装）+JBL蓝牙小音箱","judge":"已有<span>302</span>人评"},{"prductId":"57464","imgSrc":"http://img10.jiuxian.com/2017/1208/b12e2f22ceb349f19d35dcdcc2af24894.jpg","price":"759.00","title":"【水井坊特卖】52°水井坊典藏大师版500ml+景德镇荷韵瓷酒器","judge":"已有<span>2344</span>人评"},{"prductId":"61404","imgSrc":"http://img06.jiuxian.com/2018/0117/23b590c3bf814ced8ebffb77c18bb3ef4.jpg","price":"2909.00","title":"【水井坊特卖】52°水井坊井台装500ml（6瓶装）+功夫茶具套装（乐享）","judge":"已有<span>2100</span>人评"},{"prductId":"57462","imgSrc":"http://img06.jiuxian.com/2017/1208/54f0f263575e429aad3ad851786226724.jpg","price":"489.00","title":"【水井坊特卖】52°水井坊井台装500ml+景德镇荷韵瓷酒器","judge":"已有<span>4320</span>人评"},{"prductId":"57465","imgSrc":"http://img09.jiuxian.com/2017/1208/e7d2b2701eaa4d7d8c8e529a24f943fc4.jpg","price":"449.00","title":"【水井坊特卖】38°水井坊井台装500ml+景德镇荷韵瓷酒器","judge":"已有<span>2420</span>人评"},{"prductId":"61403","imgSrc":"http://img09.jiuxian.com/2018/0117/58ab7a8fd21648f9956b12186d0e72d54.jpg","price":"2309.00","title":"【水井坊特卖】52°水井坊·三国系列（义勇仁）500ml（6瓶装）+JBL蓝牙小音箱","judge":"已有<span>1156</span>人评"},{"prductId":"57461","imgSrc":"http://img10.jiuxian.com/2017/1208/1d07ba1f17bd44fd8a7bc136b01957ec4.jpg","price":"389.00","title":"【水井坊特卖】52°水井坊·三国系列（义勇仁）500ml+景德镇荷韵瓷酒器","judge":"已有<span>3367</span>人评"},{"prductId":"29234","imgSrc":"http://img06.jiuxian.com/2018/0122/498069b5f6094fd89605e330c8743f4a4.jpg","price":"899.00","title":"【礼盒】52°水井坊画卷装1000ml","judge":"已有<span>360</span>人评"},{"prductId":"44800","imgSrc":"http://img09.jiuxian.com/2017/0912/13f40b853c2e45e5ad7442d4368f55374.jpg","price":"369.00","title":"52°水井坊臻酿八号浓香型白酒500ml(单瓶装)","judge":"已有<span>99</span>人评"},{"prductId":"60969","imgSrc":"http://img07.jiuxian.com/2018/0113/124c48a40c524cc39d8a1803ee9a5fbe4.jpg","price":"4529.00","title":"【水井坊特卖】52°水井坊典藏大师版500ml（6瓶装）+功夫茶具套装（乐享）","judge":"已有<span>140</span>人评"},{"prductId":"35727","imgSrc":"http://img09.jiuxian.com/2017/0301/43a28b6c6be9485d8b7002b192a74c064.jpg","price":"658.00","title":"【老酒特卖】39°水井坊晶莹装500ml（2012年）","judge":"已有<span>5</span>人评"},{"prductId":"36073","imgSrc":"http://img09.jiuxian.com/2017/0309/98be0e95a4694cf49e93d2ad3b82198d4.jpg","price":"789.00","title":"【老酒特卖】52°水井坊井台装500ml（2012年）","judge":"已有<span>4</span>人评"},{"prductId":"46276","imgSrc":"http://img10.jiuxian.com/2017/0710/88d80a74c7144711aaf8813ea610804c4.jpg","price":"899.00","title":"54°水井坊画卷装1000ml","judge":"已有<span>37</span>人评"},{"prductId":"45143","imgSrc":"http://img08.jiuxian.com/2017/0625/c4e3f743a16242f1aa51f8495f9982db4.jpg","price":"12888.00","title":"66°水井坊大坛装5L","judge":"已有<span>1</span>人评"},{"prductId":"61896","imgSrc":"http://img07.jiuxian.com/2018/0119/59dc67c8682443589e4dc97a1ce9e30a4.jpg","price":"489.00","title":"52°水井坊井台500ml","judge":"已有<span>0</span>人评"},{"prductId":"40620","imgSrc":"http://img06.jiuxian.com/2017/0504/9edf5af2e9ba4b208196d1c4e95a3b024.jpg","price":"780.00","title":"53°水晶水井坊500ml（2012年老酒）","judge":"已有<span>0</span>人评"},{"prductId":"45164","imgSrc":"http://img08.jiuxian.com/2017/0625/de1ce59e75da4bb3974ed9b77a371ec54.jpg","price":"368.00","title":"52°水井坊鸿运装500ml","judge":"已有<span>1</span>人评"},{"prductId":"60994","imgSrc":"http://img08.jiuxian.com/2018/0113/5997d0f8f8cc410ab69af4d6156407534.jpg","price":"898.00","title":"52º水井坊典藏500ml","judge":"已有<span>0</span>人评"},{"prductId":"61005","imgSrc":"http://img09.jiuxian.com/2018/0113/ca368da635ae452c87df6d4ae80b8e0c4.jpg","price":"489.00","title":"52°水井坊井台500ml","judge":"已有<span>0</span>人评"},{"prductId":"50738","imgSrc":"http://img08.jiuxian.com/2017/0907/5b80f01afb9e456bb06044ae4fbf5ed24.jpg","price":"389.00","title":"52°水井坊鸿运装500ml","judge":"已有<span>1</span>人评"},{"prductId":"37227","imgSrc":"http://img10.jiuxian.com/2017/0327/6b74ba432ffd4670ac4aba8b5016e1fb4.jpg","price":"369.00","title":"52°水井坊臻酿八号500ml","judge":"已有<span>11</span>人评"},{"prductId":"61881","imgSrc":"http://img08.jiuxian.com/2018/0119/6ff58b2c538e4a71b9f70e0cf86256b34.jpg","price":"359.00","title":"52度水井坊红装500ml","judge":"已有<span>0</span>人评"},{"prductId":"61897","imgSrc":"http://img06.jiuxian.com/2018/0119/d97cf5e68397433aa8ccd62ea1430c944.jpg","price":"2129.00","title":"52度水井坊红装500ml*6","judge":"已有<span>0</span>人评"},{"prductId":"55302","imgSrc":"http://img08.jiuxian.com/2017/1111/ecac15fc27dc40f18ba1879a2b9325834.jpg","price":"2009.00","title":"52°水井坊臻酿八號500ml*6","judge":"已有<span>7</span>人评"},{"prductId":"45162","imgSrc":"http://img07.jiuxian.com/2017/0625/24d55bd686064f48bd5f2418c382bffa4.jpg","price":"499.00","title":"52°水井坊井台浓香型白酒500ml","judge":"已有<span>0</span>人评"},{"prductId":"59899","imgSrc":"http://img07.jiuxian.com/2018/0101/661689aaa5d242ddade0a4999d6789d94.jpg","price":"339.00","title":"52°水井坊臻酿八号500ml","judge":"已有<span>0</span>人评"},{"prductId":"60992","imgSrc":"http://img10.jiuxian.com/2018/0113/496357a49a4e4dd4b3e1b88569abb9d94.jpg","price":"1549.00","title":"52º水井坊典藏500ml(2瓶装）","judge":"已有<span>0</span>人评"},{"prductId":"60998","imgSrc":"http://img06.jiuxian.com/2018/0113/1ee230db36224a18acfd3411223a617c4.jpg","price":"2909.00","title":"52°水井坊井台500ml（6瓶装）","judge":"已有<span>0</span>人评"},{"prductId":"60990","imgSrc":"http://img07.jiuxian.com/2018/0113/ba8e6c7414c0469da8996b3db01d85dc4.jpg","price":"4529.00","title":"52º水井坊典藏500ml(6瓶装）","judge":"已有<span>0</span>人评"},{"prductId":"37223","imgSrc":"http://img06.jiuxian.com/2017/0327/8ff9184a66324488a288ddd26c776a574.jpg","price":"339.00","title":"38°水井坊臻酿八号500ml","judge":"已有<span>4</span>人评"},{"prductId":"40555","imgSrc":"http://img06.jiuxian.com/2017/0504/3a51e8d3695743b5a80500b2b88bb9894.jpg","price":"2399.00","title":"53°水井坊公元十三600ml(2010年)","judge":"已有<span>4</span>人评"},{"prductId":"41571","imgSrc":"http://img10.jiuxian.com/2017/0511/1be87e2fc8084e688dd4baa86f00afab4.jpg","price":"940.00","title":"48°水井坊典藏500ml（2010年）","judge":"已有<span>2</span>人评"},{"prductId":"37219","imgSrc":"http://img07.jiuxian.com/2017/0327/400004cf953d476a86f9b7557a99e08d4.jpg","price":"469.00","title":"38°水井坊井台装500ml","judge":"已有<span>2</span>人评"},{"prductId":"50694","imgSrc":"http://img07.jiuxian.com/2017/0910/4f8f42930a274ca298ad70f20fc2c31d4.jpg","price":"1199.00","title":"水井坊61°典藏500ml（2009年）","judge":"已有<span>1</span>人评"},{"prductId":"56591","imgSrc":"http://img08.jiuxian.com/2017/1127/c940aa3ef9f6406283ab7139a88335aa4.jpg","price":"339.00","title":"38°水井坊臻酿八号白酒500ml","judge":"已有<span>0</span>人评"},{"prductId":"48841","imgSrc":"http://img06.jiuxian.com/2017/0813/88d3b8c5375046f9bd0264c292cd83ba4.jpg","price":"680.00","title":"39°水晶水井坊500ml（2009年）","judge":"已有<span>3</span>人评"},{"prductId":"50691","imgSrc":"http://img08.jiuxian.com/2017/0910/373170a1db9244cd8ebd783de7916de44.jpg","price":"599.00","title":"38°井台水井坊500ml(2007年)","judge":"已有<span>1</span>人评"}]';



        var itemDetailArray = JSON.parse(itemDetaiData);
        // console.log(itemDetailArray);

        var totalShoppingItems = shoppingCar.get_shop_item();
        // console.log(totalShoppingItems);


        var $cartListWrapType = $(".cart-list-wrap .p-type");

        // for (var i = 0; i < totalShoppingItems.length; i++) {
        //     var goodsId = totalShoppingItems[i].id;
        //     var goodsNumber = totalShoppingItems[i].num;

        //     // <div class="cart-list  cart-list-line"
        //     var $divCartList = $("<div></div>");
        //     $divCartList.addClass("cart-list  cart-list-line");
        //     var $divClearFix = $("<div></div>");
        //     $divCartList.append($divClearFix);
        //     $divClearFix.addClass("clearfix");

        //     // <div class="cTab-tr cart-checkbox noMt">
        //     var $divCartCheckBox = $("<div></div>");
        //     $divClearFix.append($divCartCheckBox);
        //     $divCartCheckBox.addClass("cTab-tr cart-checkbox noMt");

        //     var $labelCheckBox = $("<label></label>");
        //     $divCartCheckBox.append($labelCheckBox);
        //     $labelCheckBox.addClass("click-checkbox checkbox");
        //     var $iCheckBox = $("<i></i>");
        //     $labelCheckBox.append($iCheckBox);
        //     $iCheckBox.addClass("cartIcon");
        //     var $inputCheckBox = $("<input>");
        //     $inputCheckBox.attr({
        //         name: "",
        //         value: ""
        //     });

        //     $labelCheckBox.append($inputCheckBox);
        //     $labelCheckBox.addClass("checkbox");

        //     // <div class="cTab-tr cart-goods">
        //     var $divCartGoods = $("<div></div>");
        //     $divClearFix.append($divCartGoods);
        //     $divCartGoods.addClass("cTab-tr cart-goods");
        //     var $divGoodInfo = $("<div></div>");
        //     $divCartGoods.append($divGoodInfo);
        //     $divGoodInfo.addClass("goods-info");
        //     var $divGoodsImg = $("<div></div>");
        //     $divGoodInfo.append($divGoodsImg);
        //     $divGoodsImg.addClass("goods-img");
        //     var $aGoodsImg = $("<a></a>");
        //     $divGoodsImg.append($aGoodsImg);
        //     $aGoodsImg.attr("href", "###");


        //     // 根据 JSON 数据， 获取购物车商品列表详细
        //     var productImgSrc = "";
        //     var productPrice = "";
        //     var productTitle = "";
        //     for (var j = 0; j < itemDetailArray.length; j++) {
        //         if (goodsId == itemDetailArray[i].prductId) {
        //             productImgSrc = itemDetailArray[i].imgSrc;
        //             productPrice = itemDetailArray[i].price;
        //             productTitle = itemDetailArray[i].title;
        //             break;
        //         }
        //     }

        //     var $imgGoods = $("<img>");
        //     $aGoodsImg.append($imgGoods);
        //     $imgGoods.attr({
        //         src: productImgSrc,
        //         width: 80,
        //         height: 80
        //     });

        //     // <div class="goods-right">
        //     var $divGoodsRight = $("<div></div>");
        //     $divGoodInfo.append($divGoodsRight);
        //     $divGoodsRight.addClass("goods-right");
        //     var $divGoodsName = $("<div></div>");
        //     $divGoodsRight.append($divGoodsName);
        //     $divGoodsName.addClass("goods-name");
        //     var $aGoodsName = $("<a></a>");
        //     $divGoodsName.append($aGoodsName);
        //     $aGoodsName.attr("href", "###");
        //     $aGoodsName.html(productTitle);

        //     var $divCartTag = $("<div></div>");
        //     $divGoodsRight.append($divCartTag);
        //     var $spanLimit = $("<span></span>");
        //     $divCartTag.append($spanLimit);
        //     $spanLimit.html("限时抢购");
        //     $divCartTag.addClass("cart-tag");

        //     // <div class="cTab-tr cart-price"> price
        //     var $divCartPrice = $("<div></div>");
        //     $divClearFix.append($divCartPrice);
        //     $divCartPrice.addClass("cTab-tr cart-price");
        //     var $divGoodPrice = $("<div></div>");
        //     $divCartPrice.append($divGoodPrice);
        //     $divGoodPrice.addClass("goods-price");
        //     $divGoodPrice.html(productPrice);

        //     // <div class="cTab-tr cart-gold">  金币
        //     var $divCartGold = $("<div></div>");
        //     $divClearFix.append($divCartGold);
        //     $divCartGold.addClass("cTab-tr cart-gold");
        //     var $divGoodGold = $("<div></div>");
        //     $divCartGold.append($divGoodGold);
        //     $divGoodGold.addClass("goods-gold");
        //     $divGoodGold.html(getRandomGold() + "金币");

        //     // <div class="cTab-tr cart-quantity"> 购买数量
        //     var $divCartQuantity = $("<div></div>");
        //     $divClearFix.append($divCartQuantity);
        //     $divCartQuantity.addClass("cTab-tr cart-quantity");
        //     var $divGoodsNum = $("<div></div>");
        //     $divCartQuantity.append($divGoodsNum);
        //     $divGoodsNum.addClass("goods-num");
        //     var $pCartIconCut = $("<p></p>");
        //     $divGoodsNum.append($pCartIconCut);
        //     var $iCartIconCut = $("<i></i>");
        //     $pCartIconCut.append($iCartIconCut);
        //     $iCartIconCut.addClass("cartIcon cut");
        //     var $inputGoodsNumber = $("input");
        //     $inputGoodsNumber.addClass("num");
        //     $inputGoodsNumber.attr({
        //         type: "text",
        //         autocomplete: "off",
        //         minnum: 1,
        //     });
        //     $inputGoodsNumber.val(goodsNumber);

        //     $divGoodsNum.append($inputGoodsNumber);

        //     var $pCartIconAdd = $("<p></p>");
        //     $divGoodsNum.append($pCartIconAdd);
        //     var $iCartIconAdd = $("<i></i>");
        //     $pCartIconAdd.append($iCartIconAdd);
        //     $iCartIconAdd.addClass("cartIcon add");

        //     // <div class="cTab-tr cart-subtotal"> 一个商品 * 数量 的价格
        //     var $divCartSubTotal = $("<div></div>");
        //     $divClearFix.append($divCartSubTotal);
        //     $divCartSubTotal.addClass("cTab-tr cart-subtotal");
        //     var $divGoodsTotalPrice = $("<div></div>");
        //     $divCartSubTotal.append($divGoodsTotalPrice);
        //     $divGoodsTotalPrice.addClass("goods-total-price");

        //     // 一个商品 * 数量 的价格
        //     var totalPriceNumber = goodsNumber * parseFloat(productPrice);
        //     $divGoodsTotalPrice.html("￥" + totalPriceNumber);

        //     // <div class="cTab-tr cart-operating">  购物车单个商品操作
        //     var $divCartOprating = $("<div></div>");
        //     $divClearFix.append($divCartOprating);
        //     $divCartOprating.addClass("cTab-tr cart-operating");
        //     var $divGoodsOprating = $("<div></div>");
        //     $divCartOprating.append($divGoodsOprating);
        //     $divGoodsOprating.addClass("goods-operating");
        //     var $pDel = $("<p></p>");
        //     $divGoodsOprating.append($pDel);
        //     var $aDel = $("<a></a>");
        //     $pDel.append($aDel);
        //     $aDel.attr("href", "###");
        //     $aDel.addClass("list-del");
        //     $aDel.html("删除");

        //     var $pCollect = $("<p></p>");
        //     $divGoodsOprating.append($pCollect);
        //     var $aCollect = $("<a></a>");
        //     $pCollect.append($aCollect);
        //     $aCollect.attr("href", "###");
        //     $aCollect.addClass("move-collect");
        //     $aCollect.html("移入我的收藏");

        //     // 插入
        //     $cartListWrapType.append($divCartList);
        // }


        // function getRandomGold() {
        //     return parseInt(Math.random() * 100 + 100);
        // }

        var finalTemplate = ``;
        
        // 遍历 cookie 之中的 商品数据
        for (var i = 0; i < totalShoppingItems.length; i++) {
            
            var randomGold = getRandomGold();

            var goodsId = totalShoppingItems[i].id;
            var goodsNumber = totalShoppingItems[i].num;

            // 根据 JSON 数据， 获取购物车商品列表详细
            var productImgSrc = "";
            var productPrice = "";
            var productTitle = "";
            for (var j = 0; j < itemDetailArray.length; j++) {
                // console.log(goodsId, itemDetailArray[i].prductId);
                if (goodsId == itemDetailArray[j].prductId) {
                    productImgSrc = itemDetailArray[j].imgSrc;
                    productPrice = itemDetailArray[j].price;
                    productTitle = itemDetailArray[j].title;
                    break;
                }
            }

            // console.log(goodsId, goodsNumber);
            // console.log(productImgSrc);
            // console.log(productPrice);
            // console.log(productTitle);

            var purchaseItemTemplate = `
            <div class="cart-list  cart-list-line" itemid="item-${goodsId}" proid="${goodsId}">
                <div class="clearfix">
                    <div class="cTab-tr cart-checkbox noMt">
                        <label class="click-checkbox ">
                            <i class="cartIcon"></i>
                            <input name="" type="checkbox" value="">
                        </label>
                    </div>
                    <div class="cTab-tr cart-goods">
                        <div class="goods-info">
                            <div class="goods-img">
                                <a href="###">
                                    <img src="${productImgSrc}" width="80" height="80">
                                </a>
                            </div>
                            <div class="goods-right">
                                <div class="goods-name">
                                    <a href="###">${productTitle}</a>
                                </div>
                                <div class="cart-tag">
                                    <span>限时抢购</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cTab-tr cart-price">
                        <div class="goods-price">￥${productPrice}</div>
                    </div>
                    <div class="cTab-tr cart-gold">
                        <div class="goods-gold">${randomGold}金币</div>
                    </div>
                    <div class="cTab-tr cart-quantity">
                        <div class="goods-num">
                            <p>
                                <i class="cartIcon cut "></i>
                            </p>
                            <input name="" type="text" class="num" value="${goodsNumber}" autocomplete="off" minnum="1">
                            <p>
                                <i class="cartIcon add "></i>
                            </p>
                        </div>
                    </div>
                    <div class="cTab-tr cart-subtotal">
                        <div class="goods-total-price">￥${productPrice * goodsNumber}</div>
                    </div>
                    <div class="cTab-tr cart-operating">
                        <div class="goods-operating">
                            <p>
                                <a href="###" class="list-del">删除</a>
                            </p>
                            <p>
                                <a href="###" class="move-collect">移入我的收藏</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            // $cartListWrapType.append($(purchaseItemTemplate));

            finalTemplate += purchaseItemTemplate;
        }
        // 插入
        $cartListWrapType.html(finalTemplate);

        function getRandomGold() {
            return parseInt(Math.random() * 100 + 100);
        }

        // 更新购物车数量总数：
        $(".my-cart-tit > span").html(totalShoppingItems.length);

        // 绑定选中所有的事件
        var itemCheckedBox = $(".cart-thead .check-all > i");
        itemCheckedBox.on("click", function() {
            // changeCheckStatus.call(this);
            toggleCheckClass($(this).parent());
            $(".cart-list-wrap .click-checkbox > i").each(function(index, item) {
                // changeCheckStatus.call(this);
                toggleCheckClass($(item).parent());
            });
        });

        itemCheckedBox.on("click", checkPayment);

        // 绑定选中单个商品的事件
        $(".cart-list-wrap .click-checkbox > i").each(function(index, item) {
            $(item).on("click", function() {
                // changeCheckStatus.call(this);
                // toggleCheckClass($(item).parent());
                toggleCheckClass($(item).parent());

                checkPayment()
            });

        });

        // function changeCheckStatus() {
        //     if ($(this).css("backgroundPosition") == "0px -58px") {
        //         $(this).css("backgroundPosition", "-17px -58px");
        //     } else {
        //         $(this).css("backgroundPosition", "0px -58px");
        //     }
        // }

        function toggleCheckClass(checkBoxEle) {
            // console.log(checkBoxEle.attr("class"));
            if (checkBoxEle.hasClass("checkbox-checked")) {
                // console.log("remove")
                checkBoxEle.removeClass("checkbox-checked");
            } else {
                // console.log("add");
                checkBoxEle.addClass("checkbox-checked");
            }
        }

        // 删除购物车单个商品
        $(".cart-tbody .p-type .cTab-tr .goods-operating p").find("a:contains('删除')").each(function(index, item) {
            $(item).on("click", function() {

                var productId = $(item).parents(".cart-list-line").attr("proid");
                console.log(productId);

                // 弹出确认框
                $(".cart-confirm-collect").css("display", "block");
                $(".cart-model").css("display", "block");

                // 确认按钮
                // 闭包也可以保存需要删除的id值，不需要另外保存商品 id。
                $(".cart-confirm .sure").on("click", function() {
                    shoppingCar.remove_shop_item(productId);
                    window.location.reload();
                });
            });
        });


        // 取消按钮 .cart-confirm-bg .cancel
        $(".cart-confirm-bg .cancel").on("click", function() {
            $(".cart-confirm-collect").css("display", "none");
            $(".cart-model").css("display", "none");
        });

        // 删除框 .cart-confirm-bg .cart-close
        $(".cart-confirm-bg .cart-close").on("click", function() {
            $(".cart-confirm-collect").css("display", "none");
            $(".cart-model").css("display", "none");
        });


        // 检查有多少商品选中，需要结算：

        function checkPayment() {
            var jieSuanButton = $(".cart-gopay-bottom .cart-gopay-btn a:first");

            var totalPriceEm = $(".total em");

            var productItemNumber = $(".pieces em");

            // 购物车所有的产品
            var allShoppingItems = $(".cart-list-wrap .cart-list-line");

            var totalProductNumber = 0;
            var totalProductPrice = 0.00;

            for (var i = 0; i < allShoppingItems.length; i++) {
                var $oneShoppingItem = $(allShoppingItems[i]);

                if ($oneShoppingItem.find(".click-checkbox").hasClass("checkbox-checked")) {
                    var oneItemCount = $oneShoppingItem.find(".goods-num input").val();
                    var oneItemPriceString = $oneShoppingItem.find(".goods-total-price").html().substring(1);

                    totalProductNumber += parseInt(oneItemCount);
                    totalProductPrice += parseFloat(oneItemPriceString);
                }
            }

            if (totalProductNumber != 0) {
                jieSuanButton.addClass("done");
                jieSuanButton.css("display", "inherit");

                totalPriceEm.html(totalProductPrice);

                productItemNumber.html(totalProductNumber);
            } else {
                jieSuanButton.removeClass("done");
                jieSuanButton.css("display", "");
                totalPriceEm.html(0.00);

                productItemNumber.html(0);
            }
        } 
    });
});
