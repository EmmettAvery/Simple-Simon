$(document).ready(function(){
"use strict";
var arr = [];
var playerVal;
var x = 0;
var simon = [];
var opt1 = $("#fight");
var imgs = ["imgs/simplejack/ss1.jpeg", "imgs/simplejack/ss2.jpeg", "imgs/simplejack/ss3.jpeg", "imgs/simplejack/ss4.jpeg", "imgs/simplejack/ss5.jpeg", "imgs/simplejack/ss6.jpeg", "imgs/simplejack/ss7.jpeg", "imgs/simplejack/ss8.jpeg", "imgs/simplejack/ss9.jpeg", "imgs/simplejack/ss10.jpeg", "imgs/simplejack/ss11.jpeg", "imgs/simplejack/ss12.jpeg"];
var cheater;
//var speed = (1000/prompt("what speed do you want? (Any)"));
var difficulty = 1;
$('#difficulty').val(difficulty);
opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif">');
$('#months').val(0);
var months = $('#months');

//random image fills from imgs array

 function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }

//populate com Array

function populate(x){
	for (var i = 0; i < x; i++){
		var rand = Math.floor(Math.random()* 4);
		simon.push(rand);
	}
	console.log(simon)	
}

//displaying simple jack comp's pattern

function display(){
	var i = 0;
	var godkillme = setInterval(function() {
		switch (simon[i]){
			case 1:
				opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-left.gif">');
				cheater = true;
				setTimeout(function(){
					opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif">');
					cheater = false;
				},2000);
			break;
			case 3:
				opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-right.gif">');
				cheater = true;
				setTimeout(function(){
					opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif">');
					cheater = false;
				},2000);
			break;
			case 2:
				opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-down.gif">');
				cheater = true;
				setTimeout(function(){
					opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif">');
					cheater = false;
				},2000);
			break;
			case 0:
				opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-up.gif">');
				cheater = true;
				setTimeout(function(){
					opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif">');
					cheater = false;
				},2000);
			break;
		}
		i++;
		if(i >= simon.length){
			clearInterval(godkillme);
			cheater = false;
		};
	}, Number(2010));
};

//reset game

function resetGame(){
	simon = [];
	populate(difficulty);
}


//listener for input

$(document).keyup(function(event){
		if (cheater !== true){
			playerVal = event.keyCode;
			switch (playerVal){
				case 38:
				playerVal = 0;
				break;
				case 37:
				playerVal = 1;
				break;
				case 40:
				playerVal = 2;
				break;
				case 39:
				playerVal = 3;
				break;
			}
			if (playerVal == arr[x]){
				x++;
				switch (playerVal){
					case 1:
						opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-left.gif"></x-gif>');
						cheater = true;
						setTimeout(function(){
							opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif"></x-gif>');
							cheater = false;
						},2000);
					break;
					case 3:
						opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-right.gif"></x-gif>');
						cheater = true;
						setTimeout(function(){
							opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif"></x-gif>');
							cheater = false;
						},2000);
					break;
					case 2:
						opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-down.gif"></x-gif>');
						cheater = true;
						setTimeout(function(){
							opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif"></x-gif>');
							cheater = false;
						},2000);
					break;
					case 0:
						opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi-up.gif"></x-gif>');
						cheater = true;
						setTimeout(function(){
							opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif"></x-gif>');
							cheater = false;
						},2000);
					break;
				}
			} else if (playerVal == 0 || playerVal == 1 || playerVal == 2 || playerVal == 3){
				x = 0;
				alert("You lose!");
				resetGame();
				$('#months').val(0);
				$('button').prop('disabled', false);
			};
			if (x == simon.length){
				populate(difficulty);
				display();
			x = 0;
			months.val(simon.length - difficulty);
			};
		};
	});
	resetGame();
	$('button').click(function(){
	display();
	arr = simon;
	$('button').prop('disabled', true);
	});
});