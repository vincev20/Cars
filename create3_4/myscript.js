


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


var s1 = $("#first").val()
var t2 = $("#second").val()
var s2 = $("#third").val()
var d0 = $("#fourth").val()

var s2t2 = s2 * t2
var s1s2 = s1 + s2


answer = (d0 + ( s2 * t2 ) ) / (s1 + s2)
//var answer = (d0 + s2t2) / s1s2  
//answer = Math.ceil(answer)
answer = +(answer.toFixed(2))
yourAnswer = $("#final").val()

if (yourAnswer == answer ){

	alert("Your Answer " + yourAnswer + " and Correct Answer " + answer + "\nGood Job!");
}else {

	//alert("Your Answer " + yourAnswer + " and Correct Answer " + answer + "\n When two objects moving in the opposite direction meet/pass one another/ what can we say about their distances travelled? \nTry Again.");
	alert("When two objects moving in the opposite direction meet/pass one another/ what can we say about their distances travelled? \nIncorrect Answer. Try Again.");
}


//$("#final").val(Math.ceil(answer))



});