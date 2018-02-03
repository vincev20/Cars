/*
var total1;
var total2;

var delay;
var $step;

var limit;
var lowerLimit;

var scaleFactor;

var speed1; 
var speed2;

var distance0; 

var meet;
var distanceBetween;


var size = 100;
*/



//function init(){
var total1 = 0;
var total2 = 0;

var delay = $("#delay").val();
var $step = $("#step");

var limit = 1000
var lowerLimit = 0

var scaleFactor = 10

var speed1 = $("#speed1").val(); 
var speed2 = $("#speed2").val();

var distance0 = $("#distance0").val(); 

var meet = $("#meet");
var distanceBetween = $("#distanceBetween");


var size = 100;

var timer;
var i=0;

init();
init2();

function compute(){

console.log(speed2)

  if (total1 == total2){
    meet.val("Meet:Yes");

  }else{
    meet.val("Meet:No");
  }

}

function execute(){
     timer = setTimeout(function () {
        //alert(array[i]);
        // i++;
        if ( forwardInverted() == true){
          execute();
        }
      }, 1000);
}

$("#button3").click(function(){
  //init();
  execute();

});

$("#button4").click(function(){

  clearTimeout(timer);

});

$("#button99").click(function(){

  speed1 = $("#speed1").val(); 
  speed2 = $("#speed2").val();

});


function distanceBetween2(){

  var biggest = Math.max(total1,total2)
  var smallest = Math.min(total1,total2)

  var answer = (biggest - smallest) / 10
  //var time = parseInt($step.val())
  //var d1 = speed1 * time 
  //var d2 = speed2 * time
  
  //var answer = (distance0 + d1) - d2;
  distanceBetween.val(answer);
}






$("#button2").click(function(){
  backwardInverted();
});

function backward(){

//init();
var stepDown = 0;

  if (total1 == lowerLimit){

  } else if (total1 < lowerLimit) {
 

  } else {  

    total1 = total1 - (speed1 * scaleFactor);

    if (total1 > lowerLimit) {
      
      $("#car1").animate({ 
        right: "-=" + (speed1 * scaleFactor * -1),
      }, 1000 );

      stepDown = stepDown + 1;

    } else {

      
      var difference = lowerLimit - total1

      $("#car1").animate({ 
        right: "-=" + ((speed1 * scaleFactor * -1) + difference),
      }, 1000 );
      
      total1 = lowerLimit

      stepDown = stepDown + 1;

    }

    stepDown = stepDown + 1;
    //stepDown = stepDown + 1;
    console.log(total1)
  }


  if (total2 == lowerLimit){

  } else if (total2 < lowerLimit) {
 

  } else {  

    total2 = total2 - (speed2 * scaleFactor);


    if (total2 > lowerLimit) {
      
      $("#car2").animate({ 
        right: "-=" + (speed2 * scaleFactor * -1),
      }, 1000 );

      stepDown = stepDown + 1;

    } else {

      
      var difference = lowerLimit - total2

      $("#car2").animate({ 
        right: "-=" + ((speed2 * scaleFactor * -1) + difference),
      }, 1000 );
      total2 = lowerLimit
      stepDown = stepDown + 1;

    }

    stepDown = stepDown + 1;
    //stepDown = stepDown + 1;
    console.log(total1)
  }


  if (stepDown > 0){


    $step.val(parseInt($step.val())-1);


  }
  stepDown = 0;

  compute();
  distanceBetween2();

  

}

function forwardInverted(){

  var status = false;
  var stepUp = 0;

  if (total1 >= limit) {
 

  } else {  

    total1 = total1 + (speed1 * scaleFactor);

    if (total1 > limit) {

      var difference = total1 - limit 

      $("#car1").animate({ 
        right: "-=" + ((speed1 * scaleFactor) - difference),
      }, 1000 );

      total1 = limit;

    }else if (total1 == limit){  

      var difference = total1 - limit 

      $("#car1").animate({ 
        right: "-=" + ((speed1 * scaleFactor) - difference),
      }, 1000 );


    }else{

      $("#car1").animate({ 
        right: "-=" + (speed1 * scaleFactor),
      }, 1000 );
    }

    stepUp = stepUp + 1;
    console.log(total1)
  }


   if (total2 == lowerLimit){

  } else if (total2 < lowerLimit) {
 

  } else {  

    total2 = total2 - (speed2 * scaleFactor);


    if (total2 > lowerLimit) {
      
      $("#car2").animate({ 
        right: "-=" + (speed2 * scaleFactor * -1),
      }, 1000 );

      stepUp = stepUp + 1;

    } else {

      
      var difference = lowerLimit - total2

      $("#car2").animate({ 
        right: "-=" + ((speed2 * scaleFactor * -1) + difference),
      }, 1000 );
      total2 = lowerLimit
      stepUp = stepUp + 1;

    }

    stepUp = stepUp + 1;
    //stepDown = stepDown + 1;
    console.log(total1)
  }


 /* if (total2 >= limit) {

  } else { 

    if (delay > 0) {
      delay = delay - 1 

    }else{

      total2 += speed2 * scaleFactor;

      if (total2 >= limit) {

        var difference = total2 - limit 

        $("#car2").animate({ 
          right: "-=" + ((speed2 * scaleFactor) - difference),
        }, 1000 );

        total2 = limit;

      }else{

        $("#car2").animate({ 
          right: "-=" + (speed2 * scaleFactor),
        }, 1000 );
      }

      stepUp = stepUp + 1;
    }
  }
*/

  if (stepUp > 0){
  $step.val(parseInt($step.val())+1);
  status = true;
  }

  stepUp = 0;

  compute();
  distanceBetween2();
  
  return status;


}


function backwardInverted(){

//init();
var stepDown = 0;

if (total1 == lowerLimit){

  } else if (total1 < lowerLimit) {
 

  } else {  

    total1 = total1 - (speed1 * scaleFactor);

    if (total1 > lowerLimit) {
      
      $("#car1").animate({ 
        right: "-=" + (speed1 * scaleFactor * -1),
      }, 1000 );

      stepDown = stepDown + 1;

    } else {

      
      var difference = lowerLimit - total1

      $("#car1").animate({ 
        right: "-=" + ((speed1 * scaleFactor * -1) + difference),
      }, 1000 );
      
      total1 = lowerLimit

      stepDown = stepDown + 1;

    }

    stepDown = stepDown + 1;
    //stepDown = stepDown + 1;
    console.log(total1)
  }



  if (total2 >= limit) {

  } else { 

    if (delay > 0) {
      delay = delay - 1 

    }else{

      total2 += speed2 * scaleFactor;

      if (total2 >= limit) {

        var difference = total2 - limit 

        $("#car2").animate({ 
          right: "-=" + ((speed2 * scaleFactor) - difference),
        }, 1000 );

        total2 = limit;

      }else{

        $("#car2").animate({ 
          right: "-=" + (speed2 * scaleFactor),
        }, 1000 );
      }

      stepDown = stepDown + 1;
    }
  }
 



  if (stepDown > 0){


    $step.val(parseInt($step.val())-1);


  }
  stepDown = 0;

  compute();
  distanceBetween2();

  

}



function forward(){

  var status = false;
  var stepUp = 0;

  if (total1 >= limit) {
 

  } else {  

    total1 = total1 + (speed1 * scaleFactor);

    if (total1 > limit) {

      var difference = total1 - limit 

      $("#car1").animate({ 
        right: "-=" + ((speed1 * scaleFactor) - difference),
      }, 1000 );

      total1 = limit;

    }else if (total1 == limit){  

      var difference = total1 - limit 

      $("#car1").animate({ 
        right: "-=" + ((speed1 * scaleFactor) - difference),
      }, 1000 );


    }else{

      $("#car1").animate({ 
        right: "-=" + (speed1 * scaleFactor),
      }, 1000 );
    }

    stepUp = stepUp + 1;
    console.log(total1)
  }


  if (total2 >= limit) {

  } else { 

    if (delay > 0) {
      delay = delay - 1 

    }else{

      total2 += speed2 * scaleFactor;

      if (total2 >= limit) {

        var difference = total2 - limit 

        $("#car2").animate({ 
          right: "-=" + ((speed2 * scaleFactor) - difference),
        }, 1000 );

        total2 = limit;

      }else{

        $("#car2").animate({ 
          right: "-=" + (speed2 * scaleFactor),
        }, 1000 );
      }

      stepUp = stepUp + 1;
    }
  }

  if (stepUp > 0){
  $step.val(parseInt($step.val())+1);
  status = true;
  }

  stepUp = 0;

  compute();
  distanceBetween2();
  
  return status;


}




$("#button1").click(function(){

//init();
  forwardInverted();

});




function init(){

  if (total2 >= limit) {


  } else { 

    $("#car2").animate({ 
      right: "-=" + (distance0 * scaleFactor),
    }, 1000 );
    total2 += distance0 * scaleFactor;
  }

}


function init2(){
/*
  if (total1 >= limit) {


  } else { 

    $("#car1").animate({ 
      right: "-=" + (distance0 * scaleFactor),
    }, 1000 );
    total2 += distance0 * scaleFactor;
  }
*/
}


$("#button0").click(function(){


  if (total2 >= limit) {


  } else { 

    $("#car2").animate({ 
      right: "-=" + (distance0 * scaleFactor),
    }, 1000 );
    total2 += distance0 * scaleFactor;
  }


});

