// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

  //Scrolling 
  $(document).ready(
  function() {  
    $("html").niceScroll();
    }
  );  

  //Navigation  
$('#navigation').slimmenu(
{
    resizeWidth: '800',
    collapserTitle: '',
    animSpeed: 'medium',
    easingEffect: 'easeInSine',
    indentChildren: false,
    childrenIndenter:'&raquo;'

});

//Home fit screen 
  /*global $:false */
  $(function(){"use strict";
    $('#home').css({'height':($(window).height())+'px'});
    $(window).resize(function(){
    $('#home').css({'height':($(window).height())+'px'});
    });
  });

/*global $:false */
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