
var $final = $("#final");
var yourAnswer;

$final.keyup(function() {
	// body...
	//alert("here")
	yourAnswer = $("#final").val()
	if( yourAnswer ) {
		
		$("#button").removeAttr("disabled");	
	}else{
		$("#button").prop('disabled', true);	

	}

})



$("#button").click(function(){

//alert($("#first").val());


var m1 = $("#first").val()
var p1 = $("#second").val()
var t1 = $("#third").val()
var p2 = $("#fourth").val()
var t2 = $("#fifth").val()

var p2t1 = p2 * t1
var p1t2 = p1 + t2

var rightTerm = p2t1 / p1t2

answer = m1 * rightTerm
//var answer = (d0 + s2t2) / s1s2  
answer = Math.ceil(answer)


//$final.prop('disabled', true);
yourAnswer = $("#final").val()

//document.getElementById("final").disabled = true; 


if( yourAnswer ) {

	if (yourAnswer == answer ){

		alert("Your Answer " + yourAnswer + " and Correct Answer " + answer + "\nGood Job!");
	}else {

		//alert("Your Answer " + yourAnswer + " and Correct Answer " + answer + "\n Among the monkeys, peanut sacks, and time taken, can you guess which of these are directly proportionate, and which are inversely proportionate? \nTry Again.");
		alert("Among the monkeys, peanut sacks, and time taken, can you guess which of these are directly proportionate, and which are inversely proportionate? \nIncorrect. Try Again.");
	}

}


//$("#final").val(Math.ceil(answer))


});