// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

//Preloader
$(window).load(function() {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
}) 

//resize header on scroll
function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 300,
    header = document.querySelector("header");
    if (distanceY > shrinkOn) {
      classie.add(header,"header-smaller");
    } else {
      if (classie.has(header,"header-smaller")) {
        classie.remove(header,"header-smaller");
      }
    }
  });
}
window.onload = init();

//Fit screens
/*global $:false */
$(function(){"use strict";
  $('header').css({'height':($(window).height())+'px'});
  $(window).resize(function(){
    $('header').css({'height':($(window).height())+'px'});
  });
});


//Navigation  
$('ul.slimmenu').on('click',function(){
  var width = $(window).width(); 
  if ((width <= 900)){ 
    $(this).slideToggle(); 
  } 
});   

$('ul.slimmenu').slimmenu(
{
  resizeWidth: '900',
  collapserTitle: '',
  easingEffect:'easeInOutQuint',
  animSpeed:'medium',
  indentChildren: true,
  childrenIndenter: '&raquo;'
});


//Scroll
$(document).ready(function(){"use strict";
  $(".scroll").click(function(event){

    event.preventDefault();

    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top - 60;

    $('html, body').animate({scrollTop:target_top}, 1200);
  });
});

//change text


//owl gallery
//owl gallery
$(document).ready(function() {
  /* First */
  var owl = $(".about-gallery");
  owl.owlCarousel({
    items : 3,
    itemsMobile : [479,1],
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation : true,
navigationText : ['<i class="arrow-left"></i>','<i class="arrow-right"></i>'],
rewindNav : true,
scrollPerPage : true,
responsive: true,
lazyLoad: true,
responsiveRefreshRate : 100,
responsiveBaseWidth: window,
autoPlay: true
});

});



//about panel slide
jQuery(function( $ ){
  var container = $( ".open-about-panel" );
  $( ".open-about, .close-about").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000, function(){
          $('html, body').animate({scrollTop:$('.open-about').offset().top-150}, {duration:800, queue:false});
        });
        $(this).removeClass("active");
        $(".open-about").removeClass("active");
      } else {
        container.slideDown( 1000);
        $(this).addClass("active");
      }
    }
    );
});
//dresscode panel slide
jQuery(function( $ ){
  var container = $( ".open-dresscode-panel" );
  $( ".open-dresscode, .close-dresscode").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(this).removeClass("active");
        $(".open-dresscode").removeClass("active");
        $('html, body').animate({scrollTop:$('.open-dresscode').offset().top-150}, {duration:800, queue:false});
      } else {
        container.slideDown( 1000 );
        $(this).addClass("active");
      }
    }
    );
});




//open artists
jQuery(function( $ ){
  var artists = $('.artist-wrapper');
  $('.artist-wrapper').each(function(i,o){
    var $o = $(o);
    $o.children('h5').click(      
      function( event ){
        event.preventDefault();
        if($o.hasClass('active')){
          $('.artist-wrapper').removeClass('active')
          $('.artist-wrapper > div').slideUp( 1000 );        
        } else {
          $('.artist-wrapper').removeClass('active')
          $('.artist-wrapper > div').slideUp( 1000 );          
          $o.addClass('active');
          $o.children('div').slideDown( 1000 );          
        }      
    });  
  });
});


//footer scroll to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//Archive gallery

//first determine window size and gallery we will use
/*function resize() {
  if ($(window).width() < 1000) {
    $('.archive-gallery .mobile').show();
    $('.archive-gallery .desk').hide();
  }
  else {
    $('.archive-gallery .mobile').hide();
    $('.archive-gallery .desk').show();
  }
}

$(document).ready( function() {
  $(window).resize(resize);
  resize();
});*/


//use mobile
//use desk gallery
///// Archive Gallery (owl carousel)
$(document).ready(function() {
  var owl = $(".archive-gallery-the");
  //var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    pagination : false,
    navigation : true,
    navigationText : [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    responsive: true,
    responsiveRefreshRate : 300,
    responsiveBaseWidth: window,
    autoPlay: false,
    lazyLoad: true,
    afterAction : afterAction
});
  function updateResult(pos,value, $contex){
    $(".owlStatus", $contex).find(pos).find(".result").text(value);
  }
  function afterAction(a){
    var $contex = $(a).parents('.desk-gallery-wrapper');
    updateResult(".owlItems", this.owl.owlItems.length, $contex);
    updateResult(".currentItem", this.owl.currentItem, $contex);
  }
});
////// galley close button ( global )
jQuery(function( $ ){
  var container = $( ".desk-gallery-wrapper"  );
  $( ".close").click(
    function( event ){
      $('.desk-thumb-wrapper > div').removeClass('active');
      $('.desk-gallery-wrapper').removeClass('active'); 
    }
    );
});
////// gallery open/close on thumbs
jQuery(function( $ ){  
  $( ".desk-thumb-wrapper a").click(function( event ){
      event.preventDefault();
      var $evSrc = $(this);
      var $activeThumb = $evSrc.parents('.desk-thumb-wrapper > div');
      var $thmbs = $('.desk-thumb-wrapper > div');
      var $galleryWrapperThe = $($(this).attr('href'));
      var $galleryWrappers = $('.desk-gallery-wrapper');
      if($evSrc.parent('.active').length > 0){  
        $thmbs.removeClass('active');
        $galleryWrappers.removeClass('active');      
        return false;
      } else {
        $thmbs.removeClass('active');
        $galleryWrappers.removeClass('active');        
        $activeThumb.addClass('active');
        $galleryWrapperThe.addClass('active');
        return false;
      }
  });
  $('.desk-gallery-wrapper').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e){
    if($('.desk-gallery-wrapper.active').length > 0){
      $('html, body').animate({scrollTop:$('.desk-gallery-wrapper.active').offset().top}, {duration:800, queue:false}); 
    }
  });   
});
////// gallery media reordering 
jQuery(function( $ ){
  var $galleryes = $('.desk-gallery-wrapper');
  var timeout;  
  var reorder = function(){
    if(Foundation.utils.is_small_only()){
      $galleryes.each(function(i,o){
       $('.desk-thumb-wrapper .desk-thumb').eq(i).after($(o));
      });
    } else {
      $('#gallery-box-desk').append($galleryes);
    }      
  }
  reorder();
  $(window).resize(function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      reorder();
    }, 250);  
  });  
});


//paralex
$(document).ready(function(){
	$('.slimmenu').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#home').parallax("50%", 0);
	$('#artists').parallax("50%", 0);
	$('#dresscode').parallax("50%", 0);
	$('#tickets').parallax("50%", 0);

})

//contact
  

/*
jQuery(document).ready(function ($) { // wait until the document is ready
  $('#send').click(function(){ // when the button is clicked the code executes
    $('.error').fadeOut('slow'); // reset the error messages (hides them)

    var error = false; // we will set this true if the form isn't valid




    var data_string = $('#ajax-form').serialize(); // Collect data from form

    $.ajax({
      type: "POST",
      url: $('#ajax-form').attr('action'),
      data: data_string,
      timeout: 6000,
      error: function(request,error) {
        if (error == "timeout") {
          $('#err-timedout').slideDown('slow');
        }
        else {
          $('#err-state').slideDown('slow');
          $("#err-state").html('An error occurred: ' + error + '');
        }
      },
      success: function() {
        $('#ajax-form').slideUp('slow');
        $('#ajaxsuccess').slideDown('slow');
      }
    });

    return false; // stops user browser being directed to the php file
  }); // end click function
});
*/
$('#ajax-form').on('valid.fndtn.abide', function() {
  // Handle the submission of the form

});