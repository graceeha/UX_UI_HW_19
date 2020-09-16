console.log("Your index.js file is loaded correctly!");

$(function() {
    alert( 'Pop up for Unit 19 Homework - Design quotes are set to 5 second rotations. ' );
});

 /*Text Rotator from codepen.io - https://codepen.io/AmruthPillai/pen/axvqB*/

(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 700,
                pauseSpeed: 4000,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('#rotate').rotaterator({fadeSpeed:700, pauseSpeed:4000});
 });

