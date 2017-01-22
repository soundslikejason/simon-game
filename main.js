$(document).ready(function() {
  var computer = [];
  var round = 0;
  var player = [];
  var correct = false;
  var strict = false;

  $(".btn1").click(function(event) {
		flash(".btn1", "#sound1");
    if (round > 0) {
      check(".btn1");
    }
	});
	$(".btn2").click(function(event) {
		flash(".btn2", "#sound2");
    if (round > 0) {
      check(".btn2");
    }
	});
	$(".btn3").click(function(event) {
		flash(".btn3", "#sound3");
    if (round > 0) {
      check(".btn3");
    }
	});
	$(".btn4").click(function(event) {
		flash(".btn4", "#sound4");
    if (round > 0) {
      check(".btn4");
    }
	});
  $("#new").click(function() {
    startGame();
  });
  $("#strict").click(function(){
    strict = !strict;
    $(this).toggleClass("btn-danger");
    if (strict) {
      $(this).html("Strict On");
    } else {
      $(this).html("Strict Off");
    }
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
    if (round > 20){
			alert("WINNER!!!");
			newGame();
		}
 		$("#display").val(round + " of 20");
    var random = getRandom(1, 4);
    computer.push(random);
    player = computer.slice(0);
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

  function check(btn) {
    var playerPress = player.shift();
    if (btn === ".btn" + playerPress) {
      correct = true;
    } else {
      if (strict) {
        alert("Wrong. Start new game!");
        startGame();
      } else {
        alert("Wrong. Try again!");
        player = computer.slice(0);
        animate();
      }
    }
    if (player.length === 0 && correct) {
      newRound();
    }
  }

  function startGame() {
 		computer = [];
 		player = [];
 		round = 0;
 		newRound();
 	}
});
