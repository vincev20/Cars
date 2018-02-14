
var $final = $("#final");
var yourAnswer;

var $first = $("#first")
var $second = $("#second")
var $third = $("#third")
var $fourth = $("#fourth")
var $fifth = $("#fifth")
var $fields = $(".fields")

var $framePic = $("#framePic")

$first.keyup(function(){
	var firstVal = $first.val()
	//console(.log(firstVal);
	if (isNaN(firstVal)){
		//alert("Please Enter a Number")
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
	}else if(firstVal < 1 || firstVal > 300){
		//alert("Please Enter a Number from 1 to 300")
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
		
	}else{
		$("#final").removeAttr("disabled");	
		$framePic.attr("src","newimages/monkeyFull.jpg");
	} 
	
	
});


$second.keyup(function(){
	var val = $second.val()
	//console(.log(firstVal);
	if (isNaN(val)){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
	}else if(val < 1 || val > 300){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
		
	}else{
		$("#final").removeAttr("disabled");	
		$framePic.attr("src","newimages/monkeyFull.jpg");
	} 
	
	
});


$third.keyup(function(){
	var val = $third.val()
	//console(.log(firstVal);
	if (isNaN(val)){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
	}else if(val < 1 || val > 300){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
		
	}else{
		$("#final").removeAttr("disabled");	
		$framePic.attr("src","newimages/monkeyFull.jpg");
	} 
	
	
});

$fourth.keyup(function(){
	var val = $fourth.val()
	//console(.log(firstVal);
	if (isNaN(val)){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
	}else if(val < 1 || val > 300){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
		
	}else{
		$("#final").removeAttr("disabled");	
		$framePic.attr("src","newimages/monkeyFull.jpg");
	} 
	
	
});


$fifth.keyup(function(){
	var val = $fifth.val()
	//console(.log(firstVal);
	if (isNaN(val)){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
	}else if(val < 1 || val > 300){
		$framePic.attr("src","newimages/monkeyFull3.png");
		$final.prop('disabled', true);	
		
	}else{
		$("#final").removeAttr("disabled");	
		$framePic.attr("src","newimages/monkeyFull.jpg");
	} 
	
	
});

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
var p1t2 = p1 * t2
var rightTerm = p2t1 / p1t2





answer = m1 * rightTerm
//var answer = (d0 + s2t2) / s1s2  
//answer = Math.ceil(answer)

answer = +(answer.toFixed(2))
//answer = answer

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


$(".image-container").mouseover(function () {
  $(this).attr('src', $(this).data("hover"));
}).mouseout(function () {
  $(this).attr('src', $(this).data("src"));
});
