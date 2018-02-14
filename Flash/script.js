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
var shape;
var shape2;
var vehicles = [];

var $playButton = $("#playButton");
var $pauseButton = $("#pauseButton");
var $rewindButton = $("#rewindButton");
var $forwardButton = $("#forwardButton");
var $resetButton = $("#resetButton");
var $zoomButton = $("#zoomButton");

var $step = $("#step");
var $speed1 = $("#speed1");
var $speed2 = $("#speed2");
var $distance0 = $("#distance0");
var $delay = $("delay");
var $distanceBetween = $("#distanceBetween");

var $distance1 = $("#distance1");
var $distance2 = $("#distance2");


var $meet = $("#meet");

var limit = 400;

var $time = $("#time");
var editable = true;

var toggle = false;

var radius = 50;

var g = new createjs.Shape();

//var img = document.createElement("img")
var img = new Image();
//img.src = "images/city-full.jpg"
img.src = "images/city-full2.jpg"
//img.src = "http://upload.wikimedia.org/wikipedia/pt/0/02/Homer_Simpson_2006.png";
var img2 = new Image();
img2.src = "images/side2.jpg"

var timer;
//update2();

$time.change(function(){
	var temptime = parseInt($time.val())
	
	tl.totalTime(temptime);
	tl.pause();
});




//var tl = new TimelineMax({onUpdate:updateUI, repeat: 0, repeatDelay: 0, delay: 0 });
var tl = new TimelineMax({repeat: 0, repeatDelay: 0, delay: 0 });
var revtl = new TimelineMax({repeat: 0, repeatDelay: 0, delay: 0 });


$forwardButton.click(function(){
 
  model.next()

});

$playButton.click(function(){
 
  //model.play()
  ///model.next2()
	play()
	
	
});

$zoomButton.click(function(){
 
  //model.play()
  ///model.next2()
	//play()
	tl.add(forward2(vehicle1,20))
	tl.totalTime(15);
	console.log("At Zoom")
	
});

function combine(items){

  
        //var tl2 = new TimelineMax({onUpdate:updateStage,onComplete:updateStep})
        var tl2 = new TimelineMax({})
        tl2.add("step")
		
		items.forEach(function(item){
		   tl2.add(item,"step")
     	});
         
        return tl2
}



function init2(){
	
	forward(vehicle2,100)
}

function showPicture(obj,speed,options){

		var timeline = new TimelineMax();
		timeline.to(obj,0,{ visible: "=true", ease: Linear.easeNone})
    	console.log("Show Picture Fired")
        return timeline;
}

function play(){
	//tl.paused( !tl.paused() )
	
	
	if (tl.paused()){
		tl.play()
	}
	
	if (tl.reversed()){
		tl.reversed(false)
	}

	//if ( $distance1.text() > (100 * 0.9)){
	if ( $distance1.text() > (100 * 0.9) ) {
		//coll.push(showPicture(shape2))

		   if (shape2.visible ==false){
		      
		   		tl.add(showPicture(shape2))
		   }

		   if (vehicle3.visible==false){
		      
		  		tl.add(showPicture(vehicle3))
		   }
		   
		   if (vehicle4.visible==false){
		      
		   		tl.add(showPicture(vehicle4))
		   }
		   // tl.add(showPicture(vehicle3))
		   // tl.add(showPicture(vehicle4))
	}

	timer = setTimeout(function () {
		
		var coll = [];
		var tempSpeed = parseInt($speed1.val());
		var tempSpeed2 = parseInt($speed2.val());
		var tempSpeed3 = tempSpeed / 4;
		var tempSpeed4 = tempSpeed2 / 4;
		coll.push(forward(vehicle1,tempSpeed));
		coll.push(forward(vehicle2,tempSpeed2));
		coll.push(forward(vehicle3,tempSpeed3));
		coll.push(forward(vehicle4,tempSpeed4));


		var tempVehicle1x = vehicle1.x;
		//console.log(vehicle1.x)
		

		//coll.push(forward(vehicle3,tempSpeed3));
		//coll.push(forward(vehicle4,tempSpeed4));
		tl.add(combine(coll))
		
		 
		if (toggle == false){
			//tl.to(shape,1,{ alpha: 0 } )
			/*
			stage.removeChild(shape);
			stage.addChild(shape2);
			stage.removeChild(vehicle1);
			stage.removeChild(vehicle2);
			stage.removeChild(vehicle3);
			stage.removeChild(vehicle4);
			stage.addChild(vehicle1);
			stage.addChild(vehicle2);
			stage.addChild(vehicle3);
			stage.addChild(vehicle4);
			*/
			toggle = true;
		}else{
			//tl.to(shape,1,{ alpha: 1 } )
			/*
			stage.removeChild(shape2);
			stage.addChild(shape);
			stage.removeChild(vehicle1);
			stage.removeChild(vehicle2);
			stage.removeChild(vehicle3);
			stage.removeChild(vehicle4);
			stage.addChild(vehicle1);
			stage.addChild(vehicle2);
			stage.addChild(vehicle3);
			stage.addChild(vehicle4);
			*/
			toggle = false;
		}
			
		play()
		
	}, 1000);	
}



function forward(obj,speed,options){
	
    var timeline = new TimelineMax();
	timeline.to(obj,1,{ x: "+=" + speed, onUpdate:updateStage, ease: Linear.easeNone})



	//shape.graphics.beginBitmapFill(img);
	return timeline;
     
}


function forward2(obj,speed,options){
	
    var timeline = new TimelineMax();
	timeline.to(obj,15,{ x: "+=" + speed * 5, onUpdate:updateStage, ease: Linear.easeNone})


	//timeline.pause()

	//shape.graphics.beginBitmapFill(img);
	return timeline;
     
}


$pauseButton.click(function(){
 
  //tl.pause()
  clearTimeout(timer);
	tl.pause()
});

$rewindButton.click(function(){
  clearTimeout(timer);
  tl.reverse();

});

runningTotal1 = 0;


createjs.Ticker.on("tick", update);
// these are equivalent, 1000ms / 40fps = 25ms
//createjs.Ticker.interval = 25;
createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

createjs.Ticker.framerate = 30;
 
 
function init() {
    // code here.
     	 
	 stage = new createjs.Stage("demoCanvas");
	 
	 //RESET STEPS
	 $step.val(0);
		
	 var tempSpeed1 = parseInt($speed1.val());
	 var tempSpeed2 = parseInt($speed2.val());
	
	 var tempSpeed3 = parseInt($speed1.val()) / 4;
	 var tempSpeed4 = parseInt($speed2.val()) / 4;
	
	 var tempDelay = parseInt($delay.val());
	
	 flag = new createjs.Bitmap("images/skate-01.png");
	 flag.scaleX = 0.1;
	 flag.scaleY = 0.1;
	 
	 vehicle1 = new createjs.Bitmap("images/skate-01b.png");
	
	 vehicle1.scaleX = 0.1;
	 vehicle1.scaleY = 0.1;
	 vehicle1.y = 480;
	 vehicle1Obj = {speed:tempSpeed1,total:0,delay:0,pointer:vehicle1}
	
	 
	 vehicle2 = new createjs.Bitmap("images/skate-02b.png");
	 //vehicle2.cache(0, 0, bmp.width, bmp.height, 1, {gl: "new"});
	 vehicle2.scaleX = 0.1;
	 vehicle2.scaleY = 0.1;
	 vehicle2.y = 410;
	 vehicle2Obj = {speed:tempSpeed2,total:0,delay:tempDelay,pointer:vehicle2} 
	 
	 vehicle3 = new createjs.Bitmap("images/skate-01b.png");
	 //vehicle3.cache(0, 0, bmp.width, bmp.height, 1, {gl: "new"}); 
	 vehicle3.scaleX = 0.02;
	 vehicle3.scaleY = 0.02;
	 vehicle3.y = 210;
	 vehicle3Obj = {speed:tempSpeed3,total:0,delay:0,pointer:vehicle3}
	 
	 vehicle4 = new createjs.Bitmap("images/skate-02b.png");
	 //vehicle4.cache(0, 0, bmp.width, bmp.height, 1, {gl: "new"}); 
	 vehicle4.scaleX = 0.02;
	 vehicle4.scaleY = 0.02;
	 vehicle4.y = 230;
	 vehicle4Obj = {speed:tempSpeed4,total:0,delay:tempDelay,pointer:vehicle4}
	 //vehicles.push(vehicle1Obj,vehicle2Obj)
	 vehicles.push(vehicle1,vehicle2,vehicle3,vehicle4)
	
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
	
	 
	
	shape = new createjs.Shape();
	
	shape.graphics.beginBitmapFill(img);
	shape.graphics.drawRect(0,0,800,600);
	shape.snapToPixel = true;
	//shape.filters = [
     //new createjs.ColorFilter(1,0,0,1, 255,0,255,0)
 //];
	 //shape.cache(0, 0,shape.width, shape.height);
	
	//shape.visi

	shape2 = new createjs.Shape();
	shape2.graphics.beginBitmapFill(img2);
	shape2.graphics.drawRect(0,0,800,600);
	//shape2.cache(0, 0,shape2.width, shape2.height);
	
	
	
	//console.log("Here")
	
	//shape.visible = false;
	shape2.visible = false;
	stage.addChild(shape);
	stage.addChild(shape2);
	stage.addChild(vehicle1);
	stage.addChild(vehicle2);
	
	vehicle3.visible = false;
	vehicle4.visible = false;
	

	stage.addChild(vehicle3);
	stage.addChild(vehicle4);
	

	stage.addChild(flag);
	//stage.addChild(g)
	//g.graphics.moveTo(50,50).setStrokeStyle(1).beginStroke("#ff0000").lineTo(100,100);
	
	
    stage.addChild(g)
	//init2();
	stage.update();
		
 	
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
	    
		 
	},
	
	
	next: function() {
	    var tempStep = parseInt($step.val());
		//$step.val(tempStep + 1);
		var coll = []
		//MOVE CARS BY 1 STEP
		var output1;
		var output2;
		var count = 0;

			//vehicles.forEach(function(item){
		    	//item.total += item.speed; 
		    	
		    	//output1 = forward(vehicle1,parseInt($speed1.val()));
		    	//output2 = forward(vehicle2,parseInt($speed2.val()));

		 
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

 
 

function forward(obj,speed,options){
	
    var timeline = new TimelineMax();
	timeline.to(obj,1,{ x: "+=" + speed, onUpdate:updateStage, ease: Linear.easeNone})
	return timeline;
     
}

function updateStage(){
	//stage.update();
	updateUI2()
}

function update(){
	stage.update();
	//updateUI2()
} 

function backward(obj,speed){
    revtl.to(obj,1,{ x: "-=" + speed , ease: Linear.easeNone})
 
}

function drawConnectingLine(a,b){
	

	g.graphics.clear();
	g.graphics.setStrokeStyle(2);
	g.graphics.beginStroke("#ff0000");
	
	ymid = (vehicle1.y + vehicle2.y/2)
	ymid = 560;

	 
 
	var tempx1 = vehicle1.x + 50
	var tempx2 = vehicle2.x + 50
	//console.log(tempx1)
	//console.log(tempx2)
	
	g.graphics.moveTo(tempx1, ymid);
	//g.graphics.lineTo(tempx1, ymid+5);
	g.graphics.lineTo(tempx1+5, ymid+5);
	g.graphics.moveTo(tempx1, ymid);
	g.graphics.lineTo(tempx1+5, ymid-5);
	//g.graphics.moveTo(tempx1, ymid);
	g.graphics.moveTo(tempx1, ymid);
	g.graphics.lineTo(tempx2, ymid);
	
	g.graphics.lineTo(tempx2, ymid);
	g.graphics.lineTo(tempx2-5, ymid+5);
	g.graphics.moveTo(tempx2, ymid);
	g.graphics.lineTo(tempx2-5, ymid-5);
	
	
	g.graphics.endStroke();
	
	
	
}

//function setFlag(){

function buildTimeline() {
		
		//note this timeline uses 3D transforms which will only work in recent versions of Safari, Chrome, and FireFox. IE10 will support 3D transforms as well. All other browsers simply will not show those properties being tweened. 
		
				 
	} 
	 
	/* callbacks */
	
	function updateUI2() {
		//change slider value
		progressSlider.slider("value", tl.progress() *100);
		totalProgressSlider.slider("value", tl.totalProgress() *100);
		
		//update display of values
		progressValue.html(tl.progress().toFixed(2));
		totalProgressValue.html(tl.totalProgress().toFixed(2));
		timeValue.html(tl.time().toFixed(2));

		$step.val(tl.time().toFixed(2))

		totalTimeValue.html(tl.totalTime().toFixed(2));
		
		var tempDist1 = vehicle1.x.toFixed(0);
		var tempDist2 = vehicle2.x.toFixed(0);
		
		//tempDist1 = vehicle1.x;
		//tempDist2 = vehicle2.x;
		
		$distance1.text(tempDist1);
		$distance2.text(tempDist2);
		//console.log(vehicle1.x);
		
		var absval = Math.abs(tempDist1 - tempDist2)
		
		drawConnectingLine(tempDist1,tempDist2)
		
		$distanceBetween.text(absval);
		
		//console.log(shape);

		if ( tempDist1 == tempDist2 ){
		
		    if (tempDist1 > 10 ){	
				
				//setFlag();
				//flag.x(vehicle1.x)
				//flag.y((vehicle1.y - vehicle2.y / 2))
				//flag.y(100)
				
				$meet.text("Yes");
				console.log("Yes")
				
			
			}
		}
	
	} 		
   
 
		  	
	restartBtn.click(function() {
		//Start playing from a progress of 0.
		location.reload()
		tl.restart();
	});
	
	