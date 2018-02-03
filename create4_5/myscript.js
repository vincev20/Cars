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
var s2 = $("#second").val()
var d0 = $("#third").val()

var diff = s1 - s2



answer = d0 / diff
//var answer = (d0 + s2t2) / s1s2  
answer = Math.ceil(answer)

 yourAnswer = $("#final").val()

	if (s1 > s2){

		if (yourAnswer == answer ){

			alert("Your Answer " + yourAnswer + " and Correct Answer " + answer + "\nGood Job!");
		}else {

			alert("When two objects are moving in the same direction, what conditions must be fulfilled for them to catch up? \nIncorrect. Try Again.");
		}
	}else{
		alert("There is no valid answer as s1 <= s2");

	}

//$("#final").val(Math.ceil(answer))



});