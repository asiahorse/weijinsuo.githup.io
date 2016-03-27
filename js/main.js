/*
 * @Author: Administrator
 * @Date:   2016-01-11 15:56:36
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-01-15 09:42:25
 */

'use strict';
$(function() {

  $(window).on("resize", listImg);
  $(window).on("resize", ulContainerWidth).trigger("resize");

  function listImg() {
    /*获取屏幕的宽度*/
    var screenWith = $(window).width();
    /*判断临界值*/
    var isSmallScreen = screenWith < 765;
    //获取界面上的每一个轮播项目
    var $slideItems = $("#ad_carousel .item");
    //遍历每一项
    $slideItems.each(function(i, items) {
      var $item = $(items);
      var $itemImg = isSmallScreen ? $item.data("smImage") : $item.data("lgImage");

      var url = "url(" + $itemImg + ")"
      $item.css("backgroundImage", url);
      $item.empty();
      if (isSmallScreen) {
        $item.append("<img src='" + $itemImg + "' alt='' />");
      }
    });
  }
  /*注册第二个*/
  function ulContainerWidth() {
    /*获取ul*/
    var $ulElement = $("#products .nav-tabs")
    var $liElements = $("li[role='presentation']", $ulElement);
    var width = 20;
    $liElements.each(function(i, liElement) {
      width += $(liElement).width();
    });
    var containerWidth = $ulElement.width();
    if (width > containerWidth) {
      $ulElement.width(width);
    } else {
      $ulElement.css("width", "auto");
    }
  }
});
