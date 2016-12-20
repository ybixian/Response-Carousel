/*
 * 轮播图移动端和PC端显示不同的图片
 *
 *
 */

'use strict';

$(function() {
    // 当文档加载完成才会执行
    /**
     * 根据屏幕宽度的变化决定轮播图片应该展示什么
     * @return {[type]} [description]
     */
    function resize() {
        // 获取屏幕宽度
        var windowWidth = $(window).width();
        // 判断屏幕属于大还是小
        var isSmallScreen = windowWidth < 768;
        // 根据大小为界面上的每一张轮播图设置背景
        // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
        $('#main_ad > .carousel-inner > .item').each(function(i, item) {
            // 因为拿到是DOM对象 需要转换
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            // 设置背景图片
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }
    // $(window).on('resize', resize);
    // // 让window对象立即触发一下resize
    // $(window).trigger('resize');
    $(window).on('resize', resize).trigger('resize');



    //1,获取手指在轮播图元素上的一个滑动方向(左右)

    //结束触摸瞬间记录最后的手指所在的坐标x


    //获取界面上的轮播图容器
    var $carousel = $('.carousel');
    var startX,endX;
    var offset = 50;
    //注册事件
    $carousel.on('touchstart', function (e) {
        //手指触摸开始时记录一下手指所在的坐标X
        startX = e.originalEvent.touches[0].clientX;
        //console.log(startX);
    })
    $carousel.on('touchmove', function (e) {
        //手指触摸开始时记录一下手指所在的坐标X
        endX = e.originalEvent.touches[0].clientX;
        //console.log(e.originalEvent.touches[0].clientX);
    })
    $carousel.on('touchend', function (e) {
        //console.log(endX)
        //控制精度
        //获取每次运动的距离,当距离大于一定值时认为是有方向变化
        var distance = Math.abs(startX - endX);
        if(distance >offset){
          //  console.log(startX > endX ? '<-' : '->');
            //2,根据获得到的方向选择上一张或者一张
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }

    })

});
