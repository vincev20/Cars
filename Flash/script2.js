// JavaScript Document
	var logo = $("#logo"),
		progressValue = $("#progressValue"),
		totalProgressValue = $("#totalProgressValue"),
		timeValue = $("#timeValue"),
		totalTimeValue = $("#totalTimeValue"),
	 	restartBtn = $("#restartBtn"),
		txtContainer = $("#txtContainer"),
		tl, 
		progressSlider, 
		totalProgressSlider, 
		txt;



var stage;
var vehicle1;
var vehicle2;

var vehicle1Obj;
var vehicle2Obj;

var vehicles = [];

var $playButton = $("#playButton");
var $pauseButton = $("#pauseButton");
var $rewindButton = $("#rewindButton");
var $forwardButton = $("#forwardButton");
var $resetButton = $("#resetButton");

var $step = $("#step");
var $speed1 = $("#speed1");
var $speed2 = $("#speed2");
var $distance0 = $("#distance0");
var $delay = $("delay");
var $distanceBetween = $("#distanceBetween");

var limit = 100;

var $time = $("#time");


//update2();

$time.change(function(){
	var temptime = parseInt($time.val())
	
	tl.totalTime(temptime);
});


var tl = new TimelineMax({onUpdate:updateUI, repeat: 0, repeatDelay: 0, delay: 0 });
var revtl = new TimelineMax({repeat: 0, repeatDelay: 0, delay: 0 });


$forwardButton.click(function(){
 
  model.next()

});

$playButton.click(function(){
 
  //model.play()
  model.next2()

});

$pauseButton.click(function(){
 
  model.pause()

});

$rewindButton.click(function(){
 
  model.prev()	 

});




createjs.Ticker.on("tick", update);
// these are equivalent, 1000ms / 40fps = 25ms
//createjs.Ticker.interval = 25;
createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

createjs.Ticker.framerate = 60;
 
 
function init() {
    // code here.
     	 
	 stage = new createjs.Stage("demoCanvas");
	 
	 //RESET STEPS
	 $step.val(0);
		
	 var tempSpeed1 = parseInt($speed1.val());
	 var tempSpeed2 = parseInt($speed2.val());
	 var tempDelay = parseInt($delay.val());
	  
	 vehicle1 = new createjs.Bitmap("images/skate-01.png");
	 vehicle1.scaleX = 0.05;
	 vehicle1.scaleY = 0.05;
	 vehicle1Obj = {speed:tempSpeed1,total:0,delay:0,pointer:vehicle1}
	
	 vehicle2 = new createjs.Bitmap("images/skate-02.png");
	 vehicle2.scaleX = 0.05;
	 vehicle2.scaleY = 0.05;
	 vehicle2.y = 40;
	 vehicle2Obj = {speed:tempSpeed2,total:0,delay:tempDelay,pointer:vehicle2} 
	
	 //vehicles.push(vehicle1Obj,vehicle2Obj)
	 vehicles.push(vehicle1,vehicle2)
	
	 progressSlider = $("#progressSlider").slider({
            range: false,
            min: 0,
            max: 100,
			step:.1,
            slide: function ( event, ui ) {
				tl.pause();
                tl.progress( ui.value/100 );
            }
        });
		
		totalProgressSlider = $("#totalProgressSlider").slider({
            range: false,
            min: 0,
            max: 100,
			step:.1,
            slide: function ( event, ui ) {
				tl.pause();
                tl.totalProgress( ui.value/100 );
            }
        });		
	
	 stage.addChild(vehicle1);
	 stage.addChild(vehicle2);
	 stage.update();
		
 	
}


function combine(items){

      //var test3
        var tl2 = new TimelineMax({onComplete:updateStep})
        tl2.add("step")
		
		items.forEach(function(item){
		   tl2.add(item,"step")
        //tl2.add(second,"step") 
		//tl2.add(third,"step")
        //tl2.add(fourth,"step")
		
		});
         
        return tl2
}


var model = {
	currentStep: 0,
	playMode: false,
	
	play: function() {
	    this.playMode = true;
			
	},
	
	pause: function() {
	    this.playMode = false;
			
	},
	
	increaseStep: function() {
		
		var tempStep = parseInt($step.val());
		$step.val(tempStep + 1);
	},
	
 
	next2: function() {
	    
		//tl.restart();
		//for (i=0;i<300;i++){
		 //var output = model.next();
		 timer = setTimeout(function () {
		 console.log(model.next())
		//console.log("output is " + output)
		 	if (model.next() == true){
				model.next2()
		 	}

		 }, 1000);
		//}
	},
	
	
	next: function() {
	    var tempStep = parseInt($step.val());
		//$step.val(tempStep + 1);
		var coll = []
		//MOVE CARS BY 1 STEP
		var output;
		var count = 0;

			vehicles.forEach(function(item){
		    	//item.total += item.speed; 
		    	
		    	output = forward(item,10);

		    	if (output){	

		    		coll.push(output);
	    		    count += 1;
	    		    console.log("output step")
	    		}

	    	});
			
			if (count > 0){
				tl.add(combine(coll))
				console.log("true case")
				//model.next();
				return true;
			}else {
				console.log("false case")
				return false;
			}

		
	},
	
	prev: function() {
	 //    var tempStep = parseInt($step.val())
		
		// if (tempStep > 0){
		
		// 	$step.val(tempStep - 1)
					
		// 	vehicles.forEach(function(item){
		//     	item.total -= item.speed; 
		//     	backward(item.pointer,item.speed)
		// 	});
		// }	
		//MOVE CARDS BACK 1 STEP
	//	var temptime = parseInt($time.val())
	
		//tl.totalTime(Math.floor(temptime)-1);
		tl.reverse();
	},
	
	
	
};

function update(event){
 
	 stage.update(event);
	
}

function update2(event){
 
	  //stage.update(event);
	
}






function forward(obj,speed,options){
	
    var requestedDistance = obj.x + speed;
    console.log(requestedDistance)
    var timeline = new TimelineMax();

    if (requestedDistance > limit){

    	console.log("Over")
    	return false;

    }else{

		//if (options == true){
		 timeline.to(obj,1,{ x: "+=" + speed , onUpdate:update2,  ease: Linear.easeNone})
		// }else{
		//  timeline.to(obj,1,{ x: "+=" + speed , onUpdate:update2,  ease: Linear.easeNone})	
		// }
	//obj.total += speed;
	//obj.x += speed;
	//TweenMax.to(obj,0.5,{ x: "+=" + speed , onComplete:model.increaseStep, ease: Linear.easeNone})
    return timeline;
    }
}

 

function backward(obj,speed){
    revtl.to(obj,1,{ x: "-=" + speed , ease: Linear.easeNone})
 
}

function buildTimeline() {
		
		//note this timeline uses 3D transforms which will only work in recent versions of Safari, Chrome, and FireFox. IE10 will support 3D transforms as well. All other browsers simply will not show those properties being tweened. 
		
				 
	} 
	 
	/* callbacks */
	
	function updateUI() {
		//change slider value
		 progressSlider.slider("value", tl.progress() *100);
		 totalProgressSlider.slider("value", tl.totalProgress() *100);
		
		//update display of values
		progressValue.html(tl.progress().toFixed(2));
		totalProgressValue.html(tl.totalProgress().toFixed(2));
		timeValue.html(tl.time().toFixed(2));
		totalTimeValue.html(tl.totalTime().toFixed(2));
		
		
	} 		
   
    function updateStep(){
		model.increaseStep()
		//model.next()
	}

		  	
	restartBtn.click(function() {
		//Start playing from a progress of 0.
		tl.restart();
	});
	
	