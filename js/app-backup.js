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
responsiveRefreshRate : 300,
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
        container.slideUp( 100 );
        $(this).removeClass("active");
      } else {
        container.slideDown( 100 );
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
/////////////////////////////////////////////////////

//ARHIVE NOOV

//close je global
jQuery(function( $ ){
  var container = $( ".preview-wrapper" );
  $( ".preview-wrapper .close").click(
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

//otvori thumb1 galery1 i zatvori 
jQuery(function( $ ){
  var container = $( ".preview-wrapper " );
  $( ".gallery-thumb1").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview1").hide();
        $(".gallery-preview2").hide();
        $(".gallery-preview3").hide();
        $(".gallery-preview4").hide();
      } else {
        container.slideDown( 1000 );
        $(".gallery-preview1").show();
        $(".gallery-preview2").hide();
        $(".gallery-preview3").hide();
        $(".gallery-preview4").hide();
      }
    }
    );
});

//otvori thumb2 galery2 i zatvori 
jQuery(function( $ ){
  var container = $( ".preview-wrapper " );
  $( ".gallery-thumb2").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview1").hide();
        $(".gallery-preview2").hide();
        $(".gallery-preview3").hide();
        $(".gallery-preview4").hide();
      } else {
        container.slideDown( 1000 );
        $(".gallery-preview1").hide();
        $(".gallery-preview2").show();
        $(".gallery-preview3").hide();
        $(".gallery-preview4").hide();
      }
    }
    );
});

//otvori thumb3 galery3 i zatvori 
jQuery(function( $ ){
  var container = $( ".preview-wrapper" );
  $( ".gallery-thumb3").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview1").hide();
        $(".gallery-preview2").hide();
        $(".gallery-preview3").hide();
        $(".gallery-preview4").hide();
      } else {
        container.slideDown( 1000 );
        $(".gallery-preview1").hide();
        $(".gallery-preview2").hide();
        $(".gallery-preview3").show();
        $(".gallery-preview4").hide();
      }
    }
    );
});

//otvori thumb2 galery2 i zatvori 
jQuery(function( $ ){
  var container = $( ".preview-wrapper " );
  $( ".gallery-thumb4").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview1").hide();
        $(".gallery-preview2").hide();
        $(".gallery-preview3").hide();
        $(".gallery-preview4").hide();
      } else {
        container.slideDown( 1000 );
        $(".gallery-preview1").hide();
        $(".gallery-preview2").hide();
        $(".gallery-preview3").hide();
        $(".gallery-preview4").show();
      }
    }
    );
});


////////////////////////////


function resize() {
  if ($(window).width() < 514) {
    $('.gallery-thumb1').addClass('mobile');
    $('.gallery-thumb2').addClass('mobile');
    $('.gallery-thumb3').addClass('mobile');
    $('.gallery-thumb4').addClass('mobile');
  }
  else {
    $('.gallery-thumb1').removeClass('mobile');
    $('.gallery-thumb2').removeClass('mobile');
    $('.gallery-thumb3').removeClass('mobile');
    $('.gallery-thumb4').removeClass('mobile');
  }
}

$(document).ready( function() {
  $(window).resize(resize);
  resize();
});




//mobilni prvi thumb
//thumb gal 1 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-1 " );
  $( ".gallery-thumb1.mobile").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview1.mobile").hide();
      } else {
        container.slideDown( 1000 );
        $(".preview-wrapper").hide();
        $(".gallery-preview1-m").show();
      }
    }
    );
});

//close 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-1"  );
  $( ".preview-wrapper-m-1").click(
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

//thumb gal 1 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-2 " );
  $( ".gallery-thumb2.mobile").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview2.mobile").hide();
      } else {
        container.slideDown( 1000 );
        $(".preview-wrapper").hide();
        $(".gallery-preview2-m").show();
      }
    }
    );
});

//close 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-2"  );
  $( ".preview-wrapper-m-2").click(
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

//thumb gal 1 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-3" );
  $( ".gallery-thumb3.mobile").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview3.mobile").hide();
      } else {
        container.slideDown( 1000 );
        $(".preview-wrapper").hide();
        $(".gallery-preview3-m").show();
      }
    }
    );
});

//close 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-3"  );
  $( ".preview-wrapper-m-3").click(
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

//thumb gal 1 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-4 " );
  $( ".gallery-thumb4.mobile").click(
    function( event ){
      event.preventDefault();
      if (container.is( ":visible" )){
        container.slideUp( 1000 );
        $(".gallery-preview4.mobile").hide();
      } else {
        container.slideDown( 1000 );
        $(".preview-wrapper").hide();
        $(".gallery-preview4-m").show();
      }
    }
    );
});

//close 
jQuery(function( $ ){
  var container = $( ".preview-wrapper-m-4"  );
  $( ".preview-wrapper-m-4").click(
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


////gallery desk

//prva galerij gallery-thumb1
$(document).ready(function() {
  var owl = $(".gallery-preview1");
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
//prva galerij gallery-thumb2
$(document).ready(function() {
  var owl = $(".gallery-preview2");
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

//prva galerij gallery-thumb3
$(document).ready(function() {
  var owl = $(".gallery-preview3");
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

//prva galerij gallery-thumb4
$(document).ready(function() {
  var owl = $(".gallery-preview4");
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


//mobile gallery
//prva galerij gallery-thumb1
$(document).ready(function() {
  var owl = $(".gallery-preview1-m");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation :false,
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
//prva galerij gallery-thumb2
$(document).ready(function() {
  var owl = $(".gallery-preview2-m");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation :false,
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

//prva galerij gallery-thumb3
$(document).ready(function() {
  var owl = $(".gallery-preview3-m");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation :false,
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

//prva galerij gallery-thumb4
$(document).ready(function() {
  var owl = $(".gallery-preview4-m");
  var status = $(".owlStatus");
  owl.owlCarousel({
    singleItem:true,
autoPlay: 3000, //Set AutoPlay to 3 seconds
pagination : false,
navigation :false,
rewindNav : true,
responsive: true,
responsiveRefreshRate : 300,
responsiveBaseWidth: window,
autoPlay: false,
itemsScaleUp: true,
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

////test za mobilni


    $(document).ready(function() {
     
    $(".owl-demo-mobilni").owlCarousel({

      singleItem : 1,
      autoPlay: false,
      navigation: true,
      navigationText : ['<i class="arrow-left"></i>','<i class="arrow-right"></i>'],
      rewindNav: true,
      pagination:true,
      responsive: true,
      responsiveRefreshRate: 100,
      autoHeight: true
    });
  });


  $(document).keydown( function(eventObject) {
     if(eventObject.which==37) {//left arrow
      $('#slider-code .prev').click();//emulates click on prev button 
     } else if(eventObject.which==39) {//right arrow
      $('#slider-code .next').click();//emulates click on next button
     }
  } );
