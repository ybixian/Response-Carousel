/*
 * �ֲ�ͼ�ƶ��˺�PC����ʾ��ͬ��ͼƬ
 *
 *
 */

'use strict';

$(function() {
    // ���ĵ�������ɲŻ�ִ��
    /**
     * ������Ļ��ȵı仯�����ֲ�ͼƬӦ��չʾʲô
     * @return {[type]} [description]
     */
    function resize() {
        // ��ȡ��Ļ���
        var windowWidth = $(window).width();
        // �ж���Ļ���ڴ���С
        var isSmallScreen = windowWidth < 768;
        // ���ݴ�СΪ�����ϵ�ÿһ���ֲ�ͼ���ñ���
        // $('#main_ad > .carousel-inner > .item') // ��ȡ������һ��DOM���飨���Ԫ�أ�
        $('#main_ad > .carousel-inner > .item').each(function(i, item) {
            // ��Ϊ�õ���DOM���� ��Ҫת��
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            // ���ñ���ͼƬ
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            // ��Ϊ������ҪСͼʱ �ߴ�ȱ����仯������Сͼʱ����ʹ��img��ʽ
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }
    // $(window).on('resize', resize);
    // // ��window������������һ��resize
    // $(window).trigger('resize');
    $(window).on('resize', resize).trigger('resize');



    //1,��ȡ��ָ���ֲ�ͼԪ���ϵ�һ����������(����)

    //��������˲���¼������ָ���ڵ�����x


    //��ȡ�����ϵ��ֲ�ͼ����
    var $carousel = $('.carousel');
    var startX,endX;
    var offset = 50;
    //ע���¼�
    $carousel.on('touchstart', function (e) {
        //��ָ������ʼʱ��¼һ����ָ���ڵ�����X
        startX = e.originalEvent.touches[0].clientX;
        //console.log(startX);
    })
    $carousel.on('touchmove', function (e) {
        //��ָ������ʼʱ��¼һ����ָ���ڵ�����X
        endX = e.originalEvent.touches[0].clientX;
        //console.log(e.originalEvent.touches[0].clientX);
    })
    $carousel.on('touchend', function (e) {
        //console.log(endX)
        //���ƾ���
        //��ȡÿ���˶��ľ���,���������һ��ֵʱ��Ϊ���з���仯
        var distance = Math.abs(startX - endX);
        if(distance >offset){
          //  console.log(startX > endX ? '<-' : '->');
            //2,���ݻ�õ��ķ���ѡ����һ�Ż���һ��
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }

    })

});
