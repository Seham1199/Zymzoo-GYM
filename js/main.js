/// <reference types="../@types/jquery" />

// ============================= Navbar ===========================
$(window).on('scroll' , function(){
    const scrollTop = $(window).scrollTop();
   // console.log(scrollTop);
   if (scrollTop > 120) {
    $('header nav').css( {'cssText':'background-color:white; padding: 12px 0px !important' });
    $('header .nav-item .nav-link , .cart').css({'color': "#252525" } );
    $('header .nav-icon').css({'cssText': "color:#252525 !important" } );
    $('.banner sup').css( {'cssText':'background-color:#e5ba03; color: #fff' });
    $('.links').css({'cssText':'border-top:35px solid #fff'})
   } else {
    $('header nav').css( {'cssText':'background-color:transparent; padding: 42px 0px !important' });
    $('header .nav-item .nav-link , .cart').css({'color': "#fcf3f3" } );
    $('header .nav-icon').css({'cssText': "color:white " } );
    $('.banner sup').css( {'cssText':'background-color:#fcf3f3; color: black !important' });
    $('.links').css({'cssText':'border-top:0px'})
   }
})
// ============================= Nav-item (Links) ================================
$("header .nav-item .nav-link").on('mouseenter' , function( {target} ){
     $(target).siblings().fadeIn(300)
    
 })
     $("header .nav-item").on('mouseleave' , function( ){
        $('.links').fadeOut(0);
         })
// ============================= Scroll to top ===========================
$(window).on('scroll' , function(){
    const scrollArrow = $(window).scrollTop();
   
    if (scrollArrow > 250) {
        $('#toTop').fadeIn(500 )
    } else {
        $('#toTop').fadeOut( 500)
    }
})

$('#toTop').on('click' , function(){
   $('html , body').animate({scrollTop:0} , 800);
   return false;
})    
// ============================= Video Area ===============================
$('#btnPlayBox').on('click' , function(){
    $('#videoPlay').fadeTo(300 , 1);
     $('body').css('overflow' ,'hidden');
})

$('#closeBtn').on('click' , function(){
    $('#videoPlay').css('display','none');
    $('body').css('overflow' ,'auto');
})
// ============================= Gallery Slider ===========================
  $( function() {
    $('.gallery-slider').owlCarousel();
  });
  $('.gallery-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        992:{
            items:3
        },
        1199:{
            items:4
        }
    }
})
// =========================== Testimonial Slider ==============================
$(function() {
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})
// =========================== Testimonial Area ==============================
$(function() {
    $('.testimonial-area').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
})
// ============================= Loading Screen ===============================
$(function(){
    $('.loader , .loading').fadeOut(500) 
})
// ============================= AOS Animation ===============================
AOS.init();