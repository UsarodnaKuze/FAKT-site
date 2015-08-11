// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';
   var hidepage_enabled = false;
   var upperpage_enabled = false;
   $(window).scroll(function() {
    var curr_pos = $(this).scrollTop();
    console.log(curr_pos);
    var windowheight = $(window).height();
    if (hidepage_enabled && $(".page-hide:visible").length && ($(".page-hide:visible").offset().top > curr_pos + windowheight || $(".page-hide:visible").offset().top + $(".page-hide:visible").outerHeight() < curr_pos)){
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
     $(".page-upper:visible").css("margin-top","-820px");
     $(window).scrollTop(curr_pos - $(".page-upper:visible").outerHeight());
     $("#tf-menu").fadeIn(1000);
     upperpage_enabled = false;
    }
   });

   /* ==============================================
    Uppper Slider
    =============================================== */ 

    $('a.page-scroll-up').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var showpage = $(this).attr("href");
          $(".page-upper").hide();
          $(showpage).show();
          
      
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $("#tf-menu").fadeOut(900);
            $(target).animate({
              margin: 0
            }, 900, function(){if ($(showpage).hasClass("page-upper")) upperpage_enabled = true;});
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
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
          $(".page-hide").hide();
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
  	      autoHeight : true,
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
        singleItem:true
        });

  	});

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