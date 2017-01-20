$(document).ready(function() {
  $(".btn1").click(function(event) {
		flash(".btn1", "#sound1");
	});
	$(".btn2").click(function(event) {
		flash(".btn2", "#sound2");
	});
	$(".btn3").click(function(event) {
		flash(".btn3", "#sound3");
	});
	$(".btn4").click(function(event) {
		flash(".btn4", "#sound4");
	});

  function flash(btn, sound){
		$(btn).animate({opacity: 1}, 100);
		$(btn).animate({opacity: 0.6}, 100);
    $(sound).get(0).currentTime = 0;
    $(sound).get(0).play();
	}
});
