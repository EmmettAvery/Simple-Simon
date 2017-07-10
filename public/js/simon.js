"use strict";
var arr = [];
var playerVal;
var x = 0;
var simon = [];
var opt1 = $("#0");
var opt2 = $('#1');
var opt3 = $('#2');
var opt4 = $('#3');
var imgs = ["imgs/ss1.jpeg", "imgs/ss2.jpeg", "imgs/ss3.jpeg", "imgs/ss4.jpeg", "imgs/ss5.jpeg", "imgs/ss6.jpeg", "imgs/ss7.jpeg", "imgs/ss8.jpeg", "imgs/ss9.jpeg", "imgs/ss10.jpeg", "imgs/ss11.jpeg", "imgs/ss12.jpeg"];
var cheater;

//populate com Array
 function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
function populate(x){
	for (var i = 0; i < x; i++){
		var rand = Math.floor(Math.random()* 4);
		simon.push(rand);
	}
	console.log(simon)
	
}
function display(){
var i = 0;
	function plsno(){
	var godkillme = setInterval(function() {
	switch (simon[i]){
		case 0:
		opt1.html("<img src=" + imgRandom(imgs) + ">");
		cheater = true;
		setTimeout(function(){
			opt1.html('');
			cheater = false;
		},1000);
		break;
		case 1:
		opt2.html("<img src=" + imgRandom(imgs) + ">");
		cheater = true;
		setTimeout(function(){
			opt2.html('');
			cheater = false;
		},1000);
		break;
		case 2:
		opt3.html("<img src=" + imgRandom(imgs) + ">");
		cheater = true;
		setTimeout(function(){
			opt3.html('');
			cheater = false;
		},1000);
		break;
		case 3:
		opt4.html("<img src=" + imgRandom(imgs) + ">");
		cheater = true;
		setTimeout(function(){
			opt4.html('');
			cheater = false;
		},1000);
		break;
	}
	i++;
	if(i >= simon.length){
		clearInterval(godkillme);
		cheater = false;
	}
	}, 1050);
}
plsno();

}
function resetGame(){
	simon = [];
	populate(1);
	display();
	arr = simon;
}
$('input').val(simon.length);
//checking for proper values.
        //listener for input{
        $( ".boxes" ).each(function(index) {
        	$(this).on("click", function(){
        		console.log(this.html);
        		if (cheater == true){
        		}
        		else{
        		playerVal = index;
        		console.log(playerVal);
        		if (playerVal == arr[x]){
					x++;
				}          
				else{
					x = 0;
					alert("You lose!");
					resetGame();
					$('input').val(0);
				}
				if (x == simon.length){
					alert("Next level!");
					populate(1);
					display();
				x = 0;
				$('input').val(simon.length -1);
			}
		}
        	})
    	})
$('button').click(function(){
resetGame();
})

			
     