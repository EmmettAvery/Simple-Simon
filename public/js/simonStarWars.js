$(document).ready(function(){
"use strict";
var arr = [];
var playerVal;
var x = 0;
var simon = [];
var opt1 = $("#fight");
var cheater;
var difficulty = 1;
$('#difficulty').val(difficulty);
opt1.html('<x-gif src="imgs/sturwurs/Ani_Obi.gif">');
$('#months').val(0);
var months = $('#months');

//populate com Array

function populate(x){
	for (var i = 0; i < x; i++){
		var rand = Math.floor(Math.random()* 4);
		simon.push(rand);
	}
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
				$('button').prop('hidden', false);
				$('#rand').html('<audio src="sounds/myenemy.mp3" type="audio/mpeg" autoplay></audio>');
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
		$('button').prop('hidden', true);
	});
	$('#after').html('<audio src="sounds/DuelOfTheFates.mp3" type="audio/mpeg" autoplay loop></audio>');
	var heTalks = setInterval(function(){
		var ehh = Math.floor(Math.random()* 70)+1;
		switch(ehh){
			case 1:
				$('#rand').html('<audio src="sounds/obiwan_chosenone.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 5:
				$('#rand').html('<audio src="sounds/AnakinFunbegins.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 10:
				$('#rand').html('<audio src="sounds/mustbedone.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 15:
				$('#rand').html('<audio src="sounds/twisted.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 20:
				$('#rand').html('<audio src="sounds/sworetodestroy.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 25:
				$('#rand').html('<audio src="sounds/willnottakeher.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 30:
				$('#rand').html('<audio src="sounds/Ih8u.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 40:
				$('#rand').html('<audio src="sounds/onlyasith.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 45:
				$('#rand').html('<audio src="sounds/notjointhem.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 50:
				$('#rand').html('<audio src="sounds/myenemy.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 55:
				$('#rand').html('<audio src="sounds/weremybrother.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 60:
				$('#rand').html('<audio src="sounds/weremybrother.mp3" type="audio/mpeg" autoplay></audio>');
			break;
			case 65:
				$('#rand').html('<audio src="sounds/dontlectureme.mp3" type="audio/mpeg" autoplay></audio>');
			break;
		}
	},5000);
})