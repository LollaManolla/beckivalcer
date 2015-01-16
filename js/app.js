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
  $( ".open-about").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(this).removeClass("active");
      } else {
        container.slideDown( 1000);
        $(this).addClass("active");
      }
    }
    );
});

jQuery(function( $ ){
  var container = $( ".open-about-panel" );
  $( ".close-about").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".open-about").removeClass("active");
      } else {
        container.slideDown( 1000 );
      }
    }
    );
})


// When the DOM is ready, initialize the scripts.
jQuery(function( $ ){
// Get a reference to the container.
var container = $( ".open-artist1-panel" );
// Bind the link to toggle the slide.
$( ".open-artist1" ).click(
  function( event ){
// Prevent the default event.
event.preventDefault();
// Toggle the slide based on its current
// visibility.
if (container.is( ":visible" )){
// Hide - slide up.
container.slideUp( 1000 );
} else {
// Show - slide down.
container.slideDown( 1000 );
}
}
);
});

//open artists
jQuery(function( $ ){
  var container = $( ".open-artist2-panel" );
  $( ".open-artist2" ).click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
      } else {
        container.slideDown( 1000 );
      }
    }
    );
});

//open artists
jQuery(function( $ ){
  var container = $( ".open-artist3-panel" );
  $( ".open-artist3" ).click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
      } else {
        container.slideDown( 1000 );
      }
    }
    );
});

//open artists
jQuery(function( $ ){
  var container = $( ".open-artist4-panel" );
  $( ".open-artist4" ).click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
      } else {
        container.slideDown( 1000 );
      }
    }
    );
});

//open artists
jQuery(function( $ ){
  var container = $( ".open-artist5-panel" );
  $( ".open-artist5" ).click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
      } else {
        container.slideDown( 1000 );
      }
    }
    );
});

//open artists
jQuery(function( $ ){
  var container = $( ".open-artist6-panel" );
  $( ".open-artist6" ).click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
      } else {
        container.slideDown( 1000 );
      }
    }
    );
});

//dresscode panel slide
jQuery(function( $ ){
  var container = $( ".open-dresscode-panel" );
  $( ".open-dresscode").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(this).removeClass("active");
      } else {
        container.slideDown( 1000 );
        $(this).addClass("active");
      }
    }
    );
});

jQuery(function( $ ){
  var container = $( ".open-dresscode-panel" );
  $( ".close-dresscode").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".open-dresscode").removeClass("active");
      } else {
        container.slideDown( 1000 );
      }
    }
    );
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
////desk owl carousel
/////first slide
$(document).ready(function() {
  var owl = $(".desk-gallery-f1");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation : true,
navigationText : [ "<i class='fa fa-angle-left'></i>",
"<i class='fa fa-angle-right'></i>"],
rewindNav : true,
responsive: true,
responsiveRefreshRate : 300,
responsiveBaseWidth: window,
autoPlay: false,
lazyLoad: true,
afterAction : afterAction
});
  function updateResult(pos,value){
    status.find(pos).find(".result").text(value);
  }
  function afterAction(){
    updateResult(".owlItems", this.owl.owlItems.length);
    updateResult(".currentItem", this.owl.currentItem);
  }
});
////// close is global
//close 
jQuery(function( $ ){
  var container = $( ".desk-gallery-wrapper"  );
  $( ".close").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
      } else {
        container.slideDown( 1000 );
      }
    }
    );
});
//////open 1st slide on click
jQuery(function( $ ){
  var container = $( ".desk-gallery-wrapper" );
  $( ".desk-thumb1").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".desk-gallery-f1").hide();
        $(".desk-gallery-f2").hide();
        $(".desk-gallery-f3").hide();
        $(".desk-gallery-f4").hide();
      } else {
        container.slideDown( 1000 );
        $(".desk-gallery-f1").show();
        $(".desk-gallery-f2").hide();
        $(".desk-gallery-f3").hide();
        $(".desk-gallery-f4").hide();
        return false;
      }
    }
    );
});

/////second slide
$(document).ready(function() {
  var owl = $(".desk-gallery-f2");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation : true,
navigationText : [ "<i class='fa fa-angle-left'></i>",
"<i class='fa fa-angle-right'></i>"],
rewindNav : true,
responsive: true,
responsiveRefreshRate : 300,
responsiveBaseWidth: window,
autoPlay: false,
lazyLoad: true,
afterAction : afterAction
});
  function updateResult(pos,value){
    status.find(pos).find(".result").text(value);
  }
  function afterAction(){
    updateResult(".owlItems", this.owl.owlItems.length);
    updateResult(".currentItem", this.owl.currentItem);
  }
});
//////open close 2st slide on click
jQuery(function( $ ){
  var container = $( ".desk-gallery-wrapper" );
  $( ".desk-thumb2").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".desk-gallery-f1").hide();
        $(".desk-gallery-f2").hide();
        $(".desk-gallery-f3").hide();
        $(".desk-gallery-f4").hide();
      } else {
        container.slideDown( 1000 );
        $(".desk-gallery-f1").hide();
        $(".desk-gallery-f2").show();
        $(".desk-gallery-f3").hide();
        $(".desk-gallery-f4").hide();
        return false;
      }
    }
    );
});
/////third slide
$(document).ready(function() {
  var owl = $(".desk-gallery-f3");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation : true,
navigationText : [ "<i class='fa fa-angle-left'></i>",
"<i class='fa fa-angle-right'></i>"],
rewindNav : true,
responsive: true,
responsiveRefreshRate : 300,
responsiveBaseWidth: window,
autoPlay: false,
lazyLoad: true,
afterAction : afterAction
});
  function updateResult(pos,value){
    status.find(pos).find(".result").text(value);
  }
  function afterAction(){
    updateResult(".owlItems", this.owl.owlItems.length);
    updateResult(".currentItem", this.owl.currentItem);
  }
});
//////open close 3st slide on click
jQuery(function( $ ){
  var container = $( ".desk-gallery-wrapper" );
  $( ".desk-thumb3").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".desk-gallery-f1").hide();
        $(".desk-gallery-f2").hide();
        $(".desk-gallery-f3").hide();
        $(".desk-gallery-f4").hide();
      } else {
        container.slideDown( 1000 );
        $(".desk-gallery-f1").hide();
        $(".desk-gallery-f2").hide();
        $(".desk-gallery-f3").show();
        $(".desk-gallery-f4").hide();
        return false;
      }
    }
    );
});
/////forth slide
$(document).ready(function() {
  var owl = $(".desk-gallery-f4");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation : true,
navigationText : [ "<i class='fa fa-angle-left'></i>",
"<i class='fa fa-angle-right'></i>"],
rewindNav : true,
responsive: true,
responsiveRefreshRate : 300,
responsiveBaseWidth: window,
autoPlay: false,
lazyLoad: true,
afterAction : afterAction
});
  function updateResult(pos,value){
    status.find(pos).find(".result").text(value);
  }
  function afterAction(){
    updateResult(".owlItems", this.owl.owlItems.length);
    updateResult(".currentItem", this.owl.currentItem);
  }
});
//////open close 4st slide on click
jQuery(function( $ ){
  var container = $( ".desk-gallery-wrapper" );
  $( ".desk-thumb4").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".desk-gallery-f1").hide();
        $(".desk-gallery-f2").hide();
        $(".desk-gallery-f3").hide();
        $(".desk-gallery-f4").hide();
      } else {
        container.slideDown( 1000 );
        $(".desk-gallery-f1").hide();
        $(".desk-gallery-f2").hide();
        $(".desk-gallery-f3").hide();
        $(".desk-gallery-f4").show();
        return false;
      }
    }
    );
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