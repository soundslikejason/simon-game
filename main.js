$(document).ready(function() {
  var computer = [];
  var round = 0;

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
  $("#new").click(function() {
    newRound();
  });

  function flash(btn, sound){
    $(btn).animate({opacity: 1}, 100);
    $(btn).animate({opacity: 0.5}, 100);
    $(sound).get(0).currentTime = 0;
    $(sound).get(0).play();
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function newRound() {
    round++;
    var random = getRandom(1, 4);
    computer.push(random);
    animate();
  }

  function animate() {
    var i = 0;
    var interval = setInterval(function(){
      btn = ".btn"+computer[i];
      sound = "#sound"+computer[i];
      flash(btn, sound);
      i++;
      if (i >= computer.length) {
        clearInterval(interval);
      }
    }, 550);
  }
});
