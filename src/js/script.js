// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//     });
// });
var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.slick-prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.slick-next').onclick = function () {
    slider.goTo('next');
};