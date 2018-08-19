(function($){
	$(window).on('load',function() {
		setInterval(function() {
			var r = Math.floor((Math.random()*255)+1);
			var g = Math.floor((Math.random()*255)+1);	
			var b = Math.floor((Math.random()*255)+1);		
			$('body').css('background-color','rgb('+r+','+g+','+b+')');
		},1000);
	});
})(jQuery);