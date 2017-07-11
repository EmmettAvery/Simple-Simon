$(document).ready(function() {

"use strict";

	var arr = [];
	var playerVal;
	var x = 0;
	var simon = [];
	var opt1 = $("#0");
	var opt2 = $('#1');
	var opt3 = $('#2');
	var opt4 = $('#3');
	var imgs = ["imgs/st1.jpeg", "imgs/st2.jpeg", "imgs/st3.jpeg", "imgs/st4.jpeg", "imgs/st5.jpeg", "imgs/st6.jpeg", "imgs/st7.jpeg", "imgs/st8.jpeg", "imgs/st9.jpeg", "imgs/st10.jpeg", "imgs/st11.jpeg", "imgs/st12.jpeg", "imgs/st13.jpeg", "imgs/st14.jpeg", "imgs/st15.jpeg", "imgs/st16.jpeg", "imgs/st17.jpeg", "imgs/st18.jpg", "imgs/st19.jpeg", "imgs/st20.jpeg"];
	var cheater;
	var speed = (1000/prompt("what speed do you want? (Any)"));
	var difficulty = prompt("what difficulty do you want? (Recommended 1, 2 or 3)");
	$('#speed').val(speed);
	$('#difficulty').val(difficulty);


	//random image fills from imgs array

	 function imgRandom(imgArr) {
	        return imgArr[Math.floor(Math.random() * imgArr.length)];
	    };

	//populate com Array

	function populate(x){
		for (var i = 0; i < x; i++){
			var rand = Math.floor(Math.random()* 4);
			simon.push(rand);
		};
		console.log(simon)	
	};

	//displaying simple jack comp's pattern

	function display(){
		var i = 0;
		var godkillme = setInterval(function() {
			switch (simon[i]){
				case 0:
					opt1.html("<img src=" + imgRandom(imgs) + ">");
					cheater = true;
					setTimeout(function(){
						opt1.html('');
						cheater = false;
					},speed);
				break;
				case 1:
					opt2.html("<img src=" + imgRandom(imgs) + ">");
					cheater = true;
					setTimeout(function(){
						opt2.html('');
						cheater = false;
					},speed);
				break;
				case 2:
					opt3.html("<img src=" + imgRandom(imgs) + ">");
					cheater = true;
					setTimeout(function(){
						opt3.html('');
						cheater = false;
					},speed);
				break;
				case 3:
					opt4.html("<img src=" + imgRandom(imgs) + ">");
					cheater = true;
					setTimeout(function(){
						opt4.html('');
						cheater = false;
					},speed);
				break;
			}
			i++;
			if(i >= simon.length){
				clearInterval(godkillme);
				cheater = false;
			};
		}, Number(speed+50));
	};

	//reset game

	function resetGame(){
		simon = [];
		populate(difficulty);
		display();
		arr = simon;
	}


	//listener for input

	$( ".boxes" ).each(function(index) {
		$(this).on("click", function(){
			console.log(this.html);
			if (cheater !== true){
				playerVal = index;
				console.log(playerVal);
	    		if (playerVal == arr[x]){
					x++;
				} else {
					x = 0;
					alert("You lose!");
					resetGame();
					$('#months').val(0);
				};
				if (x == simon.length){
					populate(difficulty);
					display();
					x = 0;
					$('#months').val(simon.length - difficulty);
				};
			};
		});

		//opacity change on clicks

		$(this).on("mousedown", function(){
				$(this).css('backgroundColor','rgba(225,225,225,.8)');
		});
		$(this).on("mouseup", function(){
				$(this).css('backgroundColor','rgba(225,225,225,.5)');
		});
	});

	//reset game button

	$('button').click(function(){
		resetGame();
	});

	//scrolling background

	$(function(){
	    var x = 0;
	    setInterval(function(){
	        x-=1;
	        $('body').css('background-position', x + 'px 0');
	    }, 100);
	});
			
});   