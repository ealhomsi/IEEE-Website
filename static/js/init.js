(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(document).ready(function () {
       $('.slider').slider({full_width: true});
   });
    $(document).ready(function(){
      $('.carousel').carousel();
    });

    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

    $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  //   $(document).ready(function(){
  //   $('.scrollspy').scrollSpy();
  // });
  //  $(window).on('scroll', function(){
 // $timeline_block.each(function(){
 //   if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
 //     $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
 //   }
 // });
//});


    //$('.carousel.carousel-slider').carousel({fullWidth: true});

    $('.tapTarget').tapTarget('open');
    $('.tapTarget').tapTarget('close');

    $(document).ready(function(){
        $('.modal').modal();
        $('#modal1').modal('open');
        $('#modal1').modal('close');
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

   