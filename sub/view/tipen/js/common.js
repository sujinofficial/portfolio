$(document).ready(function() { //문서준비이벤트

    $(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".gotop").fadeIn();
	} else {
		$(".gotop").fadeOut();
	}
});

$(".gotop").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
	return false;
});
    
    
    //사이트맵
    $(".all_gnb_wrap").hide();
    $(".all_menu").click(function(){
        $(".all_gnb_wrap").fadeIn();
    });
    $(".close").click(function(){
        $(".all_gnb_wrap").fadeOut();
    });
    
    
    //2차메뉴
     $('.dp2').hide();

            $('.gnb > li').mouseenter(function() {
                $(this).children('.dp2').stop().slideDown().fadeIn();
            });

            $('.gnb > li').mouseleave(function() {
                $(this).children('.dp2').stop().slideUp().fadeDown();
            });
    
    
    
    //메인배너
    var slider = $(".mv").bxSlider({
        auto: true
    });


    
    
    
    //Review Slider
    
    var slider = $(".review_img").bxSlider({
        auto: true,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth:262,
        slideMargin:60,
        pager:false
    });

}); //문서준비이벤트 종료
