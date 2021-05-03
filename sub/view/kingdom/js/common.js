$(document).ready(function(){
    

    
    
    $(".mv").bxSlider({
        auto:true
    });
    

    $(".season_img").bxSlider({
        auto:true
    });
    
    
    $(".still").bxSlider({
        auto:true
    });


    
    
    
    //히든메뉴
    $(".m_menu").click(function(){
       $(".m_wrap").animate({
           left:"0"
       }); 
    });
    $(".close").click(function(){
       $(".m_wrap").animate({
           left:"100%"
       });  
    });
    
    //2차메뉴
    $(".dp2,.dp2_bg").hide();
    $(".gnb>li").mouseenter(function(){
       $(".dp2,.dp2_bg").stop().slideDown();
        
    });
    
    $(".gnb>li").mouseleave(function(){
       $(".dp2,.dp2_bg").stop().slideUp();
        
    });
    
    
     location.href = "#tab1";
    
    
    
    
    
});