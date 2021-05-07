$(document).ready(function(){
   $('.').slick({
        centerMode: true,
        autoplay: true,
        centerPadding: '100px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
    }
  ]
    });
});