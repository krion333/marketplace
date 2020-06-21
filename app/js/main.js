$(function(){

   $(".ratestar").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true,
   });


   $('.featured__slider-items').slick({
    //    dots: true,
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
      
   });

   $('.followers__slider-items').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: false,
    //  infinite: true,
        nextArrow: '<button class="slick-arrow slick-next"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                                    
               }
            },

            {
               breakpoint: 800,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                                   
               }
            },
        ]      
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

 $('.product-one__aside-license label').on('click', function () {
     var $this = $(this);
     $('.product-one__aside-license .text').slideUp(600);
     $this.parent('div').find('p').slideDown(600);
     $('.product-one__aside-title span').text($this.data('price') + '.00');
 });

 $('.product-one__content-tabs .tab').on('click', function(event) {
     var id = $(this).attr('data-id');
          $('.product-one__content-tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.product-one__content-tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
     });

 $('select').styler();

 $('.header__menu-btn').on('click', function () {
     $('.topmenu').slideToggle('slow');
 });

 $('.header__account').on('click', function () {
    $('.header__box').toggleClass('active');
});

  

   var mixer = mixitup('.release__inner-box');
   
});
