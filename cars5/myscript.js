
var tl = new TimelineMax({ repeat: 0, repeatDelay: 0, delay: 0 });


//function init(){
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;

var delay = $("#delay").val();
var $step = $("#step");
var speed1 = $("#speed1").val(); 
var speed2 = $("#speed2").val();
var distance0 = $("#distance0").val(); 


var limit = 1000
var lowerLimit = 0
var scaleFactor = 10

var meet = $("#meet");
var distanceBetween = $("#distanceBetween");

var timer;

var $car1 = $("#skater1");
var $car2 = $("#skater2");
var $car3 = $("#skater3");
var $car4 = $("#skater4");

var $road1 = $("#road1");
var $road2 = $("#road2");


var $resetButton = $("#resetButton");
var $resetButtonb = $("#resetButtonb");

var speedUpForReset = 0
hideBottom()

//init();
delay = 0
speed1 = 20
speed2 = 30
distance0 = 0
 
//FORWARD INV 20 80 OK -- 2-1 2-1 1-2

var $ispeed1 = $("#speed1"); 
var $ispeed2 = $("#speed2");
var $idistance0 = $("#distance0"); 
var $idelay = $("#delay");

$ispeed1.change(function(){
  speed1 = parseInt($("#speed1").val()); 
  car1.speed = speed1  
  car3.speed = speed1/10    

});

$ispeed2.change(function(){
  speed2 = parseInt($("#speed2").val());
  car2.speed = speed2
  car4.speed = speed2/10

});

$idelay.change(function(){
  delay = $("#delay").val();
  car2.delay = delay
  car4.delay = delay
});

$idistance0.change(function(){

  distance0 = parseInt($("#distance0").val()); 
  init();

  //console.log("Here")

});


$step.change(function(){
	
	var steps = parseInt($step.val());
	console.log(steps)
	speedUpForReset = 1;
	executeRev();
	
	for (i=0;i<steps; i++){
		forward();
		
	}
	speedUpForReset = 0;
	
});

var car1 = {speed:speed1,total:total1,delay:0,pointer:$car1}
var car2 = {speed:speed2,total:total2,delay:delay,pointer:$car2}
 
var car3 = {speed:speed1/10,total:total3,delay:0,pointer:$car3}
var car4 = {speed:speed2/10,total:total4,delay:delay,pointer:$car4}

var sound = false;

$("#button1").click(function(){
  //FORWARD
  forward();
  //forwardInverted();

});

$("#button1b").click(function(){
 
  //forward();
  forwardInverted();

});

$("#button2").click(function(){
  //REWIND
  speedUpForReset = 0;
   backward()
  //executeRev();

});

$("#button2b").click(function(){

  backwardInverted()
 

});



$("#button3").click(function(){
  //PLAY
  //preventDefault();
  execute();

});

$("#button3b").click(function(){
  
  executeInverted();

});



$("#button4").click(function(){

  clearTimeout(timer);

});

$("#button4b").click(function(){

  clearTimeout(timer);

});


$resetButton.click(function(){
  //RESET
  speedUpForReset = 1;
  executeRev()
  init()    
});


$resetButtonb.click(function(){

  executeRev()
  init()  
});


function hideTop(){
	$road2.show();
	$road1.hide();
	
	console.log("Here");
}

function hideBottom(){
	$road1.show();
	//$road2.show();
	$road2.hide();
	console.log("Here2");
}


function move(obj){

  if (obj.total >= limit) {

    } else { 

      if (obj.delay > 0) {
        obj.delay = obj.delay - 1 
  
		return forwardStep(obj.pointer,0)
      }else{

        obj.total += obj.speed * scaleFactor;

        if (obj.total >= limit) {

            //EXCEED CASE
            var difference = obj.total - limit
            obj.total = limit;
			hideTop()
            return forwardStep(obj.pointer,((obj.speed * scaleFactor) - difference))
            //HIDE TOP
          	
		  
        }else{
          
            return forwardStep(obj.pointer,(obj.speed * scaleFactor))
            
        }

         
      }
  }


}  



function moveBack(obj){
 

  if (obj.total == lowerLimit){

  } else if (obj.total < lowerLimit) {
 

  } else {  


    if (obj.delay > 0) {
        obj.delay = obj.delay - 1 

 

    }else{


        obj.total -=  (obj.speed * scaleFactor);

	    if (obj.total > lowerLimit) {
    	  //NORMAL CASE      
          if (obj.total < (limit * 0.02) ){
			  hideBottom()
		  }	
		 
          return backwardStep(obj.pointer,(obj.speed * scaleFactor * -1))
          
        } else {
		  //EXCEED CASE

		 
          
          var difference = lowerLimit - obj.total
          obj.total = lowerLimit
          
          return backwardStep(obj.pointer,((obj.speed * scaleFactor * -1) + difference))
         

        }

    }
  }

}



function move2(obj){
   
    if (obj.total >= limit) {

    } else { 

      obj.total += distance0 * scaleFactor;
      return forwardStep(obj.pointer,(distance0 * scaleFactor))

    }

}  



function execute(){
     timer = setTimeout(function () {
    
        if ( forward() == true){
        //if ( forwardInverted() == true){
          execute();
        }
      }, 1000);
}

function executeRev(){
     //timer = setTimeout(function () {
    
        if ( backward() == true){
        //if ( forwardInverted() == true){
          executeRev();
        }
      //}, 1000);
}

function executeInverted(){
     timer = setTimeout(function () {
    
        //if ( forward() == true){
        if ( forwardInverted() == true){
          executeInverted();
        }
      }, 1000);
}


function executeRevInverted(){
      timer = setTimeout(function () {
    
        if ( backwardInverted() == true){
        //if ( forwardInverted() == true){
          executeRevInverted();
        }
      }, 1000);
}




function backwardStep(obj,speed){

	  if (speedUpForReset == 1){
		  return TweenMax.to(obj,0,{ x: "+=" + speed, onUpdate:distanceBetween3, ease: Linear.easeNone})
	  }else {
      
      return TweenMax.to(obj,1,{ x: "+=" + speed, onUpdate:distanceBetween3, ease: Linear.easeNone})
	  }
}
 

function forwardStep(obj,speed){
      
      return TweenMax.to(obj,1,{ x: "+=" + speed, onUpdate:distanceBetween3, ease: Linear.easeNone})
 

}

function playSound(){
	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/boros.mp3');
	
	if (!sound){
	audioElement.play(1)
	sound = true;
		setInterval(function(){
			audioElement.pause();
			
		},3000);
	
	}
}
 
function distanceBetween3(){

  var biggest = Math.max(car1.total,car2.total,car3.total,car4.total)
  var smallest = Math.min(car1.total,car2.total,car3.total,car4.total)
  //biggest = biggest * scaleFactor
  //smallest = smallest * scaleFactor

  var answer = Math.ceil((biggest - smallest) / scaleFactor)
  //answer = answer 

  distanceBetween.val(answer);
   if (answer == 0){
   	playSound()
   }
}
 

function backward(){
    calcLimit()
    var status = false;
    var stepDown = 0;

    var first = moveBack(car1)
    var second = moveBack(car2)
	var third = moveBack(car3)
    var fourth = moveBack(car4)
	var items = [];

    if (first){
      stepDown += 1
	  items.push(first)
    }
    if (second){
      stepDown += 1
	  items.push(second)
    }
	if (third){
      stepDown += 1
	  items.push(third)
    }
    if (fourth){
      stepDown += 1
	  items.push(fourth)
    }

    if (stepDown > 2 ){
      tl.add(combine(items))
    }

    if (stepDown == 1){
        if (first){
          tl.add(first)
        }
        if (second){
          tl.add(second)
        }
		if (third){
          tl.add(third)
        }
		if (fourth){
          tl.add(fourth)
        }
    }



  if (stepDown > 0){

    var steps = parseInt($step.val())
    if (steps > 0){
    $step.val(steps-1);
    }

    status = true

  }
  stepDown = 0;


  return status
 
}



function backwardInverted(){
    calcLimit()
    var status = false;
    var stepDown = 0;
    var first = moveBack(car1)
    var second = move(car2)
	var items = []

    if (first){
      stepDown += 1
	  items.push(first)
    }
    if (second){
      stepDown += 1
	  items.push(second)
    }
	if (third){
      stepDown += 1
	  items.push(third)
    }
    if (fourth){
      stepDown += 1
	  items.push(fourth)
    }

    if (stepDown == 2 ){
      tl.add(combine(items))
    }

    if (stepDown == 1){
        if (first){
          tl.add(first)
        }
        if (second){
          tl.add(second)
        }
		if (third){
          tl.add(third)
        }
		if (fourth){
          tl.add(fourth)
        }
    }

 
    if (stepDown > 0){

      $step.val(parseInt($step.val())-1);
      status = true
    }
    stepDown = 0;
    return status;
}





function combine(items){

      //var test3
        var tl2 = new TimelineMax()
        tl2.add("step")
		
		items.forEach(function(item){
		   tl2.add(item,"step")
        //tl2.add(second,"step") 
		//tl2.add(third,"step")
        //tl2.add(fourth,"step")
		
		});
         
        return tl2
}

function calcLimit(input){
  
  var roadLength = document.getElementById('road1').offsetWidth;
  var car2length = document.getElementById('skater2').offsetWidth;
  
  if (roadLength){
	  
  }else{
 
 	  roadLength = document.getElementById('road2').offsetWidth;
  }
  
  if (car2length){
	  
  }else{
 
 	  car2length = document.getElementById('skater4').offsetWidth;
  }
   
  scaleFactor = Math.floor(roadLength / 100)
  roadLength = roadLength - car2length

  limit = roadLength


  console.log(scaleFactor,roadLength,limit)

}


function forward(){
  calcLimit()
  var status = false;
  var stepUp = 0;
  
  //var indicator = checkSpeed()

    var first = move(car1)
    var second = move(car2)
    
	var third = move(car3)
    var fourth = move(car4)
	var items = []
	
	//CHECK IF AT LEAST 1 MOVES

    if (first){
      stepUp += 1
	  items.push(first)
    }
    if (second){
      stepUp += 1
	  items.push(second)
    }
	if (third){
      stepUp += 1
	  items.push(third)
    }
    if (fourth){
      stepUp += 1
	  items.push(fourth)
    }
	
	//COMBINE ALL THAT MOVES

	/*
    if (stepUp == 2 ){
      tl.add(combine(first,second))
    }
	*/
	
	if (stepUp > 1 ){
      tl.add(combine(items))
    }

	//FOR 1 MOVE CASE

    if (stepUp == 1){
        if (first){
          tl.add(first)
        }
        if (second){
          tl.add(second)
        }
		if (third){
          tl.add(third)
        }
		if (fourth){
          tl.add(fourth)
        }
    }
  
  if (stepUp > 0){
    
    $step.val(parseInt($step.val())+1);
    status = true;
    
  }

  stepUp = 0;
  return status;


}



function forwardInverted(){
  calcLimit()
  var status = false;
  var stepUp = 0;
  
  var first = move(car1)
  var second = moveBack(car2)

    if (first){
      stepUp += 1
    }
    if (second){
      stepUp += 1
    }

    if (stepUp == 2 ){
      tl.add(combine(first,second))
    }

    if (stepUp == 1){
      if (first){
          tl.add(first)
      }
      if (second){
          tl.add(second)
      }
    }


  if (stepUp > 0){
    $step.val(parseInt($step.val())+1);
    status = true;
  }

  stepUp = 0;

  return status;

}


function init(){
  calcLimit()
  if (car2.total >= limit) {


  } else { 

    //executeRev()
    tl.add(move2(car2))
	tl.add(move2(car4))
    

  }
}



 