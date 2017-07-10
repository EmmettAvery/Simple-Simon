"use strict";
var arr = [];
var playerVal;
var x = 0;
var simon = [];
// var num1 = $('#num1').html().val();
// var num2 = $('#num2').html().val();
// var num3 = $('#num3').html().val();
// var num4 = $('#num4').html().val();
//populate com Array
function populate(x){
	for (var i = 0; i < x; i++){
		var rand = Math.floor(Math.random()* 3);
		simon.push(rand);
	}
	console.log(simon);
}
function displaySimon(){
	for (var i = 0; i < simon.length-1; i++){
		
	}
}
function resetGame(){
	arr = [];
	populate(1);
	displaySimon();
}

//checking for proper values.
        //listener for input{
        $( ".boxes" ).each(function(index) {
        	$(this).on("click", function(){
        		playerVal = index;
        		console.log(playerVal);
        		if (playerVal == simon[x]){
					x++;
				}          
				else{
					x = 0;
					Alert("You lose!");
					resetGame();
				}
				if (x == arr.length-1){
					alert("Next level!");
					populate(1);
					displaySimon();
			}
        	})
    	})
       
resetGame();

			
     