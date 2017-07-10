"use strict";
var arr = [];
var playerVal;
var x = 0;
var simon = [];
var boxArray = [$("#0"),$("#1"),$("#2"),$("#3")];
var imgs = ["imgs/ss1.jpeg", "imgs/ss2.jpeg", "imgs/ss3.jpeg", "imgs/ss4.jpeg", "imgs/ss5.jpeg", "imgs/ss6.jpeg", "imgs/ss7.jpeg", "imgs/ss8.jpeg", "imgs/ss9.jpeg", "imgs/ss10.jpeg", "imgs/ss11.jpeg", "imgs/ss12.jpeg"];
// var num1 = $('#num1').html().val();
// var num2 = $('#num2').html().val();
// var num3 = $('#num3').html().val();
// var num4 = $('#num4').html().val();
//populate com Array
 function imgRandom(imgArr) {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }
function populate(x){
	for (var i = 0; i < x; i++){
		var rand = Math.floor(Math.random()* 3);
		simon.push(rand);
	}
	console.log(simon);
}
function randomBox(){
	var x = 0;
	for (var i = 0; i < simon.length; i++){
	function startIMG(i){
       		boxArray[simon[i]].html("<img src=" + imgRandom(imgs) + ">");
		console.log("1");
	}
	function stopIMG(i){
			boxArray[simon[i]].html("<img src=>");
		console.log("2");
	}
	}
    console.log("3");
    };
function resetGame(){
	arr = [];
	populate(2);
	randomBox();
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
					alert("You lose!");
					resetGame();
				}
				if (x == arr.length-1){
					alert("Next level!");
					populate(1);
					for (var y = 0; y < simon.length; y++){
					randomBox();
				}
			}
        	})
    	})
       
resetGame();

			
     