$(function(){

   $(".ratestar").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true,
   });


   $('.featured__slider-items').slick({
       
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
      
   });

   $('.followers__slider-items').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: false,
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
      
   });

   $('.release__filter').on('click', function () {
       $('.release__filter-category').css({ "display": "block"}); 
               
   });  

         
    $('.page').on('click', function () {
          $('.category').slideToggle();
     
 }); 

 $('.filt').on('click', function () {
     $('.product').slideToggle();

}); 
$('.pric').on('click', function () {
     $('.form').slideToggle();

}); 

 $(".js-range-slider").ionRangeSlider({
     type: "double",
     min: 0,
     max: 1000,
     from: 0,
     to: 300,
     prefix: "$",
    
 });

   var mixer = mixitup('.release__inner-box');
   
});