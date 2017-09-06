(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Closes responsive menu when a link is clicked
  $('.navbar-collapse>ul>li>a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#nav-parent").is(":visible") ) {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }
  });

  $(".nav a").on("click", function(){
    console.log("Hello");
   $(this).css('color','#fed136');
   
});

  $(document).on("click", "#homelink, #aboutlink, #contentlink", function() {

    $("button").attr("aria-expanded","false");

    $("button").addClass("collapsed");
    
    $("#navbarResponsive").attr("aria-expanded","false");

    $("#navbarResponsive").removeClass("show");    
    
    $("#navbarResponsive").addClass("collapsing").delay(1000).removeClass("collapsing").delay(1000).removeClass("collapse in").addClass("collapse");
    
  });  

})(jQuery); // End of use strict
