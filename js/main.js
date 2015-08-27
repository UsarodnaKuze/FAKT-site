// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   function debouncer( func , timeout ) {
   var timeoutID , timeout = timeout || 200;
   return function () {
      var scope = this , args = arguments;
      clearTimeout( timeoutID );
      timeoutID = setTimeout( function () {
          func.apply( scope , Array.prototype.slice.call( args ) );
      } , timeout );
    }
   }


   $('body').click(function (e) {
    if (!($(e.target).parent().hasClass("hover-text") == true || $(e.target).hasClass("hover-text") == true)){
      $('.hover-bg').removeClass("hovered");
      console.log(e.target);
   }
   })

   $('.hover-bg').click(function() {
    $('.hover-bg').not(this).removeClass("hovered");
    $(this).toggleClass("hovered");
   });
   
   var hidepage_enabled = false;
   var upperpage_enabled = false;
   $(window).scroll(function() {
    var curr_pos = $(this).scrollTop();
    console.log(curr_pos);
    var windowheight = $(window).height();
    if (hidepage_enabled && $(".page-hide:visible").length && ($(".page-hide:visible").offset().top > curr_pos + windowheight)){
     if ($(".page-hide:visible").offset().top + $(".page-hide:visible").outerHeight() < curr_pos) {
      var new_pos = curr_pos - $(".page-hide:visible").outerHeight();
      $(".page-hide").stop().hide();
      $(window).scrollTop(new_pos);
     }
     else{
       $(".page-hide").hide();
     }
     hidepage_enabled = false;
   }

    if (upperpage_enabled && $(".page-upper:visible").length && $(".page-upper:visible").offset().top + $(".page-upper:visible").outerHeight() <= curr_pos) {
     $(".page-upper:visible").css("margin-top","-"+Number($(".page-upper:visible").outerHeight()+40)+"px");
     $(window).scrollTop(curr_pos - $(".page-upper:visible").outerHeight());
     $("#tf-menu").fadeIn(1000);
     upperpage_enabled = false;
    }
   });

  $(window).resize(debouncer( function ( e ){
    $(".page-upper:visible").css("margin-top","-"+Number($(".page-upper:visible").outerHeight()+40)+"px");
   }));

   /* ==============================================
    Uppper Slider
    =============================================== */ 

    $('a.page-scroll-up').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var showpage = $(this).attr("href");
          $(".page-upper").hide();
          $(showpage).show();
          var animationspeed = 900;
      if ($(this).hasClass("noscroll")) animationspeed = 0;
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $(target).css("height","auto");
            $("#tf-menu").fadeOut(animationspeed);
            $(target).animate({
              margin: 0
            }, animationspeed, function(){if ($(showpage).hasClass("page-upper")) upperpage_enabled = true;});
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, animationspeed);
            return false;
          }
        }
      });



   /* ==============================================
    Testimonial Slider
    =============================================== */ 

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var showpage = $(this).attr("href");
          if ($(showpage).hasClass("common")) $(".page-hide.common").hide();
          $(showpage).show();
          
      
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900, function(){if ($(showpage).hasClass("page-hide")) hidepage_enabled = true;});
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : false,
          autoPlay:true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 3],
				        [1200, 3],
				        [1400, 3],
				        [1600, 3]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay:10000
        });

    });
      //owl.trigger (owl.play,6000);


         /* ==============================================
    Accordion
    =============================================== */ 

    $('div.panel-heading').click(function(e) {
        if ($(e.target).is("a") == false)
        $(this).children("h4").children("a").click();
      })


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();