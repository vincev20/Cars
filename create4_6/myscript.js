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

var mult = s2 * t2
var diff = s2 - s1

answer = mult / diff
//var answer = (d0 + s2t2) / s1s2  
//answer = Math.ceil(answer)
answer = +(answer.toFixed(2))


yourAnswer = $("#final").val()

	if (s1 > s2) {

		alert("There is no valid answer as s1 > s2");

	}else if(s1 == s2){


		alert("There is no valid answer as s1 == s2");

    }else {
		if (yourAnswer == answer ){

			alert("Your Answer " + yourAnswer + " and Correct Answer " + answer + "\nGood Job!");
		}else {

			alert("When two objects are moving in the same direction, what conditions must be fulfilled for them to catch up? \nIncorrect Answer. Try Again.");
		}
	}

//$("#final").val(Math.ceil(answer))



});


$(".image-container").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});