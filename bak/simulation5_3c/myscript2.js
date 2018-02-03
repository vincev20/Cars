
var $circle1 = $("#circle1")

var $pic1 = $("#pic1")
var $pic2 = $("#pic2")
var $pic3 = $("#pic3")

var $box = $("#box")[0]

var $button1 = $("#button1")
var $button2 = $("#button2")

var $steps = $("#steps")

var $button5 = $("#button5")
var $button6 = $("#button6")

var $button9 = $("#button9")


var $button11 = $("#button11")
var $button12 = $("#button12")
var $resetButton = $("#resetButton")

var $hand = $("#hand")
var $hand2 = $("#hand2")

var x = 500 //centerX ??
var y = 500 //centerY ??

var x2 = 500 //centerX ??
var y2 = 500 //centerY ??

var r = 250 //radius
var a = 3.14  // angle (from 0 to Math.PI * 2)
var a2 = 3.14  // angle (from 0 to Math.PI * 2)

var left = 0;

var w = 200
var h = 200

//var tl = new TimelineMax(); 


/*
var speed1 = parseInt($("#speed1").val()); 
var speed2 = parseInt($("#speed2").val());

var ospeed1 = parseInt($("#speed1").val()); 
var ospeed2 = parseInt($("#speed2").val());
*/
var speed1 = 20 
var speed2 = 30
var ospeed1 = 20 
var ospeed2 = 30


var $speed1Input = $("#speed1")
var $speed2Input = $("#speed2")
var $lengthInput = $("#distance0")
var $gap = $("#space")

var distance0 = parseInt($("#distance0").val()); 

distance0 = 100

var space = parseInt($("#space").val()); 
space = 0

var totDegrees = 360

var mfactor1 = distance0 / speed1
var mfactor2 = distance0 / speed2

var dspeed1 = totDegrees / mfactor1
var dspeed2 = totDegrees / mfactor2


var mfactor3 = distance0 / space
var dspeed3 = totDegrees / mfactor3


var tl = new TimelineMax({ repeat: 0, repeatDelay: 0, delay: 0 });


speed1 = dspeed1
//console.log(sp)

speed2 = dspeed2
console.log(speed1 + " " + speed2 + " " + mfactor1 + " " + mfactor2 + " " + space + " " + distance0)


var game = {score:0},
    scoreDisplay = document.getElementById("score");

var game2 = {score2:0},
    scoreDisplay2 = document.getElementById("score2");
      


var $preset = $("#preset");

$preset.change(function(){

  console.log($preset.val())

  var option = parseInt($preset.val())
  //var steps = parseInt($step.val())
  var steps = game.score
 /*
  if (option == 99){
    while (steps > 0){

      backw()
      steps -= 1
    }

  }else{
*/

      if (option > 0){

         
        while (steps > 0){
          backw()
          steps -= 1
        }
         

        if (option == 1){
          forw()
        }

        if (option == 2){
          forw()
          forw()
        }

        if (option == 3){
          forw()
          forw()
          forw()
        }

      }
 // }

});



function forw(){
   tl.to($hand,1,{ directionalRotation: "+=" + speed1 +  "_cw", ease: Linear.easeNone})
   tl.to($hand2,1,{ directionalRotation: "+=" + speed2 +  "_cw", ease: Linear.easeNone},"-=1")
   add20()
   add202()
   console.log(speed1,speed2)
}

function backw(){

   tl.to($hand,1,{ directionalRotation: "-=" + speed1 +  "_ccw", ease: Linear.easeNone})
   tl.to($hand2,1,{ directionalRotation: "-=" + speed2 +  "_ccw", ease: Linear.easeNone},"-=1")
   dec20()
   dec202()
   console.log(speed1,speed2)

}


function backw0(){

   tl.to($hand,0,{ directionalRotation: "-=" + speed1 +  "_ccw", ease: Linear.easeNone})
   tl.to($hand2,0,{ directionalRotation: "-=" + speed2 +  "_ccw", ease: Linear.easeNone})
   dec20zero()
   //dec202()

}


$resetButton.click(function(){
	var steps = game.score
	while (steps > 0){
          backw0()
          steps -= 1
        }

})

$speed1Input.change(function(){
  speed1 = parseInt($("#speed1").val()); 
  mfactor1 = distance0 / speed1
 // mfactor2 = distance0 / speed2
  dspeed1 = totDegrees / mfactor1
  //dspeed2 = totDegrees / mfactor2



speed1 = dspeed1
//console.log(sp)

//speed2 = dspeed2

  console.log(speed1 + " " + speed2 + " " + mfactor1 + " " + mfactor2 + " " + space + " " + distance0)

});

$speed2Input.change(function(){

  speed2 = parseInt($("#speed2").val());
 // mfactor1 = distance0 / speed1
  mfactor2 = distance0 / speed2
 // dspeed1 = totDegrees / mfactor1
  dspeed2 = totDegrees / mfactor2
//speed1 = dspeed1
//console.log(sp)
speed2 = dspeed2
   console.log(speed1 + " " + speed2 + " " + mfactor1 + " " + mfactor2 + " " + space + " " + distance0)

});

$lengthInput.change(function(){

  distance0 = parseInt($("#distance0").val()); 
  mfactor1 = distance0 / speed1
  mfactor2 = distance0 / speed2
  dspeed1 = totDegrees / mfactor1
  dspeed2 = totDegrees / mfactor2
speed1 = dspeed1
//console.log(sp)
speed2 = dspeed2
 console.log(speed1 + " " + speed2 + " " + mfactor1 + " " + mfactor2 + " " + space + " " + distance0)
});

$gap.change(function(){

  space = parseInt($("#space").val());
  mfactor3 = distance0 / space
  dspeed3 = totDegrees / mfactor3
  createSpace();
});



function createSpace(){

  tl.to($hand2,0,{ directionalRotation: "+=" + dspeed3 +  "_cw" })


}







//var speed1 = 10
//var speed2 = 20

/*
var tween,
    opacity = false,
    motionPath = MorphSVGPlugin.pathDataToBezier();
*/




//add20Btn.onclick = add20;

function add20() {
  tl.to(game, 1, {score:"+=1", roundProps:"score", onUpdate:updateHandler, ease:Linear.easeNone},"-=1");

  tl.to(game2, 1, {score2:space, roundProps:"score2", ease:Linear.easeNone},"-=1");

}

function dec20() {
  tl.to(game, 1, {score:"-=1", roundProps:"score", onUpdate:updateHandler, ease:Linear.easeNone},"-=1");
}


function dec20zero() {
  tl.to(game, 0, {score:"-=1", roundProps:"score", onUpdate:updateHandler, ease:Linear.easeNone});
}


function add20s() {
  tl.to(game, 1, {score:0, roundProps:"score", onUpdate:updateHandler, ease:Linear.easeNone});
}
    
function updateHandler() {
  scoreDisplay.innerHTML = game.score;



  spd1c = ospeed1 * game.score 
  spd2c = (ospeed2 * game.score) + space 

 //console.log(spd1c)
 //console.log(spd2c)

  var bigger = Math.max(spd1c,spd2c)
  var smaller = Math.min(spd1c,spd2c)
  var distBetween = bigger - smaller


  scoreDisplay2.innerHTML = distBetween;



}

add20s();




//Distance counter


      
//add20Btn.onclick = add20;


function add202() {

  //Basically Calculate the distance here

  //console.log(scoreDisplay.innerHTML)

  /*
  var time = parseInt(scoreDisplay.innerHTML) 

  spd1c = speed1 * time 
  spd2c = (speed2 * time) + space 

 console.log(spd1c)
 console.log(spd2c)

  var bigger = Math.max(spd1c,spd2c)
  var smaller = Math.min(spd1c,spd2c)
  var distBetween = bigger - smaller
 

  tl.to(game2, 1, {score2:distBetween, roundProps:"score2", onUpdate:updateHandler2, ease:Linear.easeNone},"-=1");

  */

}

function dec202() {
  //tl.to(game2, 1, {score2:"-=20", roundProps:"score2", onUpdate:updateHandler2, ease:Linear.easeNone},"-=1");
}



function add202s() {
  tl.to(game2, 1, {score2:space, roundProps:"score2", onUpdate:updateHandler2, ease:Linear.easeNone});
}
    
function updateHandler2() {
  scoreDisplay2.innerHTML = game2.score2;
}

add202s();




//tl.pause()


var playBtn = $("#playBtn")
var pauseBtn = $("#pauseBtn")
var resumeBtn = $("#resumeBtn")
var reverseBtn = $("#reverseBtn")
var playFromBtn = $("#playFromBtn")
var reverseFromBtn = $("#reverseFromBtn")
var seekBtn = $("#seekBtn")
var timeScaleSlowBtn = $("#timeScaleSlowBtn")
var timeScaleNormalBtn = $("#timeScaleNormalBtn")
var timeScaleFastBtn = $("#timeScaleFastBtn")
var restartBtn = $("#restartBtn")


var spd = 1



$button1.click(function(){


});



//set

function incrementCounter(){

  var num = parseInt($steps.val());
  num += 1

  $steps.val(num); 

}

function incrementCounter2(){

  //For distance between?

  var dist = 0;

  var num = parseInt($steps.val());
  num += 1

  $steps.val(dist); 

}




$button5.click(function(){

  //$hand.css({ "animation": "rotate 10s infinite linear"})

  //TweenLite.to($hand,1,{ rotation: "+=100", ease: Linear.easeNone})
  forw()

   //tl.to($hand,1,{ directionalRotation: "+=90_cw", ease: Linear.easeNone})
   //incrementCounter()
  //$hand2.css({ "animation": "rotate 20s infinite linear"})

  //setInterval(incrementCounter,1000) 

});

$button11.click(function(){
  backw()
  //$hand.css({ "animation": "rotate 10s infinite linear"})

  //TweenLite.to($hand,1,{ rotation: "+=100", ease: Linear.easeNone})

   //tl.to($hand,1,{ directionalRotation: "+=90_cw", ease: Linear.easeNone})
   //incrementCounter()
  //$hand2.css({ "animation": "rotate 20s infinite linear"})

  //setInterval(incrementCounter,1000) 

});


function sfor(){

   tl.to($hand,1,{ directionalRotation: "+=" + speed1 +  "_cw", ease: Linear.easeNone})
   tl.to($hand2,1,{ directionalRotation: "+=" + speed2 +  "_cw", ease: Linear.easeNone},"-=1")
   add20()
   add202()
   //sfor()
}

var timer;

$button9.click(function(){

  timer = setInterval(function(){
    sfor()

    
    //incrementCounter()
  },1000);

  //tl.to($hand,1,{ directionalRotation: "+=90_cw", ease: Linear.easeNone})
  //spd = spd + 10
  //$hand.toggleClass("off")
  //$hand.css({ "animation": "rotate " + spd +"s "})

});




$button6.click(function(){

  //tl.pause(0,false)
  clearInterval(timer)


});




 playBtn.click(function(){
        //Play the tween forward from the current position.
        //If tween is complete, play() will have no effect
        tl.play();
    });
    pauseBtn.click(function(){
        tl.pause(0,false);
    });
    resumeBtn.click(function(){
        //Resume playback in current direction.
        tl.resume();
    });
    reverseBtn.click(function(){
        tl.reverse();
    });
    playFromBtn.click(function(){
        //Play from a sepcified time (in seconds).
        tl.play(1);
    });
    reverseFromBtn.click(function(){
        //Reverse from a specified time (in seconds).
        tl.reverse(1);
    });
    seekBtn.click(function(){
        //Jump to specificied time (in seconds) without affecting
        //whether or not the tween is paused or reversed.
        tl.seek(1.5);
    });
    timeScaleSlowBtn.click(function(){
        //timescale of 0.5 will make the tween play at half-speed (slower).
        //Tween will take 12 seconds to complete (normal duration is 6 seconds).
        tl.timeScale(0.5);
    });
    timeScaleNormalBtn.click(function(){
        //timescale of 1 will make tween play at normal speed.
        tl.timeScale(1);
    });
    timeScaleFastBtn.click(function(){
        //timescale of 1 will make the tween play at double-speed (faster).
        //Tween will take 3 seconds to complete (normal duration is 6 seconds).
        tl.timeScale(2);
    });
    restartBtn.click(function(){
        //Start playing from a progress of 0.
        tl.restart();
    });

