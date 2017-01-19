$(document).ready(function() {
  $(".top-left").click(function(event) {
		flash(".top-left", "#sound-top-left");
	});
	$(".top-right").click(function(event) {
		flash(".top-right", "#sound-top-right");
	});
	$(".bottom-left").click(function(event) {
		flash(".bottom-left", "#sound-bottom-left");
	});
	$(".bottom-right").click(function(event) {
		flash(".bottom-right", "#sound-bottom-right");
	});

  function flash(btn, sound){
		$(btn).animate({opacity: 1}, 100);
		$(btn).animate({opacity: 0.6}, 100);
    $(sound).get(0).play();
	}
});
