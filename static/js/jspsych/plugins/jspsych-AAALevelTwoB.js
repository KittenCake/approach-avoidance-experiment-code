/*
 Approach Avoidance Task Level 1
 Bach Lab Universität Zürich
 Pascal Misala, 10.2017
 Version: 1.2.0
 */

jsPsych.plugins["AAALevelTwoB"] = (function() {

  var plugin = {};


plugin.trial = function(display_element, trial){        // for every trial should a object be made

// if any trial variables are functions
// this evaluates the function and replaces
// it with the output of the function
trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);


//trial variables
  
  trial.players = ['/static/images/imageTokken.jpeg','/static/images/imageSleepingRobber.jpeg','/static/images/imagePlayer.jpeg','/static/images/imageCatchRobberBlack.jpeg', '/static/images/imageCatchRobberRed.jpeg'];
  trial.grid = ['/static/images/azureFrame.jpeg','/static/images/yellowFrame.jpeg','/static/images/purpleFrame.jpeg'];
  trial.grid = ['/static/images/azureFrame.jpeg','/static/images/yellowFrame.jpeg','/static/images/purpleFrame.jpeg'];
  trial.stringifyLambda = ["λ = 1.0536", "λ = 3.5667","λ = 2.2314"];  
  trial.stringifyRColor = ["azure", "yellow","purple"];
  trial.shuffledLambda = trial.shuffledLambda;        // randomized lambda array "parameter"
  trial.robberColor = trial.robberColor;         // robberColor array "parameter"
  trial.numberOfTokkens = 6;
  trial.tokkenCount = 0;

  trial.robberActive = false;                           // determines wether robber is currently active or not

  trial.playerIsOut = false;
  trial.playerIndex = 0;
  trial.playerGotCaught = false;
  trial.playerCaughtRobber = false;

// variables level 2

  trial.catchTries = 6;
  trial.currentRobberColor = null; 
  trial.robberRandom = null;

  trial.tokkenTimeouts = [];
  trial.stopTokRobSpwaning = false;
  trial.finish = false;                                // switches true if player is caught otherwise would finish multiple times


  var keyHandler = function(event) {

    eventListenerReference(event)};


// variable to keep track of timing info and responses
  //trial.startTime = (new Date()).getTime();
  trial.startTime = (new Date()).getTime();

  trial.playerTrackDict = [];  // empty dictionary key: player location (-1,0,1) starting from 0(middle) value: time when pressed
  trial.robberTrackDict = [];   // robber active times
  trial.tokkenTrackDict = [];  // alternating pop up time and pop out time
  trial.playerCaughtTrackDict = [];
  trial.tokkeWonTrackDict = [];  // position where tokken was won and time when.
  trial.robberTrackColLamDict = [];      // robber color  --> 0 = azure , 1 = yellow , 2 = purple

// tracking variables level 2
  trial.failedCatchAttemptDict = [];  // key: player location value: time 
  trial.caughtRobberDict = [];      // key: player location value : time


  tokkenExp = Prob.exponential(1.25);  // generating random exponential number with lambda 1.25 via tokkenExp(); ----> not sure if has to be trial too
 
  trial.currentTime = 0;
  trial.timeAbsendFixed = 0.5;  //  500ms  --> Times in array * 1000

  trial.appearTokkenTime = [];
  trial.dissapearTokkenTime = [];


// fill the appearTokkenTimes and dissapearTokkenTimes with the random popUp/Out times. 

for (i = 0; i <= trial.numberOfTokkens; i++) {

trial.timePresent = tokkenExp();
trial.timeAbsendVariable = tokkenExp();

trial.appearTokkenTime.push(trial.currentTime);
trial.currentTime += trial.timePresent;

trial.dissapearTokkenTime.push(trial.currentTime);
trial.currentTime += trial.timeAbsendFixed;
trial.currentTime += trial.timeAbsendVariable;

};

// robber settings

 trial.robberTimeouts = [];

 var ARobberExp  = Prob.exponential(1.0536); 
 var BRobberExp = Prob.exponential(3.5667); 
 var CRobberExp = Prob.exponential(2.2314); 


trial.currentARobberTime = 0;
trial.currentBRobberTime = 0;
trial.currentCRobberTime = 0; 



// azure -> p = 0.1 , purple -> p = 0.2 , yellow -> p = 0.3 --> need to be randomized 
  trial.ARobberTimings  = [];
  trial.BRobberTimings = [];
  trial.CRobberTimings = [];


  trial.ARobberTimings.push(trial.currentARobberTime);
  trial.BRobberTimings.push(trial.currentBRobberTime);
  trial.CRobberTimings.push(trial.currentCRobberTime);

  trial.robberTimeTable = [trial.ARobberTimings, trial.BRobberTimings, trial.CRobberTimings];  // 0 = a(λ = 1.0536) 1 = b(λ = 3.5667) 2 = c(λ = 2.2314)
  trial.robberBinaryProb = [0.1,0.2,0.3];                                                      // for catch the robber
        
     
for (i = 0; i <= 100; i++){  


  trial.timePresentA = ARobberExp();
  trial.timePresentB = BRobberExp();
  trial.timePresentC = CRobberExp();


  trial.currentARobberTime += trial.timePresentA;
  trial.currentBRobberTime += trial.timePresentB;
  trial.currentCRobberTime += trial.timePresentC;


  trial.ARobberTimings.push(trial.currentARobberTime);
  trial.BRobberTimings.push(trial.currentBRobberTime);
  trial.CRobberTimings.push(trial.currentCRobberTime);



}


//functions:

function robberColor(){                         // can be modified to give a random color / here takes a parameter from task.js


  var robberColor = trial.robberColor; //0,1,2

  //robberColor = robberColor[Math.floor(Math.random() * robberColor.length)];
    
    return robberColor;
}

      
function tokkenApDisSide(){                   // random assignment of left or right side

    var leftOrRightTokken = Math.random() < 0.5 ? 37 : 39;

    return leftOrRightTokken;
  };



function popUpTokkens (tokkenSide) {      // helper function, lets tokken appear

 
  
  if (tokkenSide == 37 && trial.stopTokRobSpwaning == false) {

      display_element.append($('<img>', {
      src: trial.players[0],
      id: 'jspych-AAATokkenLeft'}));
    

      trial.tokkenTrackDict.push({
      position:   -1 ,
      time: (new Date()).getTime() - trial.startTime});
 }

  else if (tokkenSide == 39  && trial.stopTokRobSpwaning == false) {

        display_element.append($('<img>', {
        src: trial.players[0],
        id: 'jspych-AAATokkenRight'}));
       

        trial.tokkenTrackDict.push({
        position:   1 ,
        time: (new Date()).getTime() - trial.startTime});
      
  }
  
    };
  


function popOutTokkens (tokkenSide) { // helper function, lets tokken dissapear


     if (tokkenSide == 37 && trial.stopTokRobSpwaning == false) {
      

      trial.tokkenTrackDict.push({
      position:   -1 ,
      time: (new Date()).getTime() - trial.startTime});


        var imageLeftTokken = document.getElementById('jspych-AAATokkenLeft');
        imageLeftTokken.parentNode.removeChild(imageLeftTokken);
        trial.tokkenCount += 1;
        finishingTrialNormal();
      
        }
      else if (tokkenSide == 39 && trial.stopTokRobSpwaning == false) {


      trial.tokkenTrackDict.push({
      position:   1 ,
      time: (new Date()).getTime() - trial.startTime});

        var imageRightTokken = document.getElementById('jspych-AAATokkenRight');
        imageRightTokken.parentNode.removeChild(imageRightTokken);
        trial.tokkenCount += 1;
        finishingTrialNormal();
     
  }};

function spawnTokkens () {                          // spawns all 6 Tokken in defined random intervalls

  
  for (i = 0; i < trial.numberOfTokkens; i++) {
    
      tokkenSide = tokkenApDisSide();
     

    if (tokkenSide == 37){    // left tokken 

      
        trial.tokkenTimeouts.push(setTimeout(function() { popUpTokkens(37)}, trial.appearTokkenTime[0 + i]*1000));          // appearing    
        trial.tokkenTimeouts.push(setTimeout(function() { popOutTokkens(37)}, trial.dissapearTokkenTime[0 + i]*1000));          // disappearing
        
      
    
    }

    else if (tokkenSide == 39){  // right tokken

       
        trial.tokkenTimeouts.push(setTimeout(function() { popUpTokkens(39)}, trial.appearTokkenTime[0 + i]*1000));           // appearing
        trial.tokkenTimeouts.push(setTimeout(function() { popOutTokkens(39)},trial.dissapearTokkenTime[0 + i]*1000));         // disappearing
       
 
    }
  }
  };


function robberActivation(){

  trial.robberRandom = Math.random();

  if( trial.robberRandom <= trial.robberBinaryProb[trial.currentRobberColor]){

    trial.robberActive = true;} 
};




function spawnRobber (){                                        // activates the robber in defined random intervalls

  trial.currentRobberColor = robberColor();
  trial.currentRobberLambda = trial.shuffledLambda[trial.currentRobberColor];
  trial.currenTimeTable = trial.robberTimeTable[trial.currentRobberLambda];

  trial.robberTrackColLamDict.push({                                  // track robber color & lambda for current trial
      color: trial.stringifyRColor[trial.currentRobberColor],
      parameter: trial.stringifyLambda[trial.currentRobberLambda]});

        display_element.append($('<img>', {
        src: trial.grid[trial.currentRobberColor],
        id: 'jspych-AAAGrid'}));


        display_element.append($('<img>', {
        src: trial.players[1],
        id: 'jspych-AAAMiddleRobber'}));   // spawns one default robber in the top grid
        
};


function spawnWonTokkens (){    // spawn them next to each other maybe have to hardcode with 6 tokkens. 

    trial.wonTokkenCounter += 1;
    display_element.append($('<img>', {
    src: trial.players[0],
    id: 'jspych-AAAWonTokkens'}));
 
};

  

function playerGetsCaught (){   // add  remover of everything else or freeze or just lay a new grid over everything and sett variables to 0 tokkens etc. let timer count down to total 20s

   trial.wonTokkenCounter = 0;
   

   if(trial.playerIndex == -1){


    if(document.body.contains(document.getElementById('jspych-AAAActiveLeftRobber')) == false){

      document.removeEventListener('keydown', keyHandler);      //disable keyboard listener

        display_element.append($('<img>', {
        src: trial.players[3],
        id: 'jspych-AAAActiveLeftRobber'}));


       finishingTrialCaught();

        }

      
        while(document.body.contains(document.getElementById('jspych-AAAWonTokkens')) == true){       // remove all won tokkens

        var tokkenRemove = document.getElementById('jspych-AAAWonTokkens');
        tokkenRemove.parentNode.removeChild(tokkenRemove);
        }

                  
      }

   else if(trial.playerIndex == 1){


    if(document.body.contains(document.getElementById('jspych-AAAActiveRightRobber')) == false){

      document.removeEventListener('keydown', keyHandler);        // disable keyboard listener

        display_element.append($('<img>', {
        src: trial.players[3],
        id: 'jspych-AAAActiveRightRobber'}));

      finishingTrialCaught();

      }

        while(document.body.contains(document.getElementById('jspych-AAAWonTokkens')) == true){

        var tokkenRemove = document.getElementById('jspych-AAAWonTokkens');
        tokkenRemove.parentNode.removeChild(tokkenRemove);
        }

    }

   if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true || document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){

          if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true){

            var imageLeftTokken = document.getElementById('jspych-AAATokkenLeft');
            imageLeftTokken.parentNode.removeChild(imageLeftTokken);}

          else if(document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){

            var imageRightTokken = document.getElementById('jspych-AAATokkenRight');
            imageRightTokken.parentNode.removeChild(imageRightTokken);}

          }
    };
    



function eventListenerReference(event){ // Handles keyboard input from the player

  
  if(event.keyCode == 38 && trial.playerIndex == 0 && trial.catchTries > 0) { //  up-arrow
          
        if(trial.tokkenCount < 6){

                 robberActivation();

                 trial.robberTrackDict.push({
                 randomBinary:   trial.robberRandom,
                 robberProbability: trial.robberBinaryProb[trial.currentRobberColor], 
                 active: trial.robberActive});



                 trial.playerIndex = 2;
                 trial.catchTries -=1;

                 trial.playerTrackDict.push({
                 position:   trial.playerIndex,
                 time: (new Date()).getTime() - trial.startTime});


                 var imageHomePlayer = document.getElementById('jspych-AAAPlayerHome');
                 imageHomePlayer.parentNode.removeChild(imageHomePlayer);   

                      display_element.append($('<img>', {
                      src: trial.players[2],
                      id: 'jspych-AAAPlayerTop'}));



                    if (trial.robberActive == false){  // robber sleeping he turns black 

                           trial.failedCatchAttemptDict.push({
                           position:   2 ,
                           time: (new Date()).getTime() - trial.startTime});

                         display_element.append($('<img>', {
                         src: trial.players[3],
                         id: 'jspych-AAASleepingRobberBlack'}));

                        var imageMiddleRobber = document.getElementById('jspych-AAAMiddleRobber');
                            imageMiddleRobber.parentNode.removeChild(imageMiddleRobber);

                        var imageBlackRobber = document.getElementById('jspych-AAASleepingRobberBlack');
                        var imageTopPlayer = document.getElementById('jspych-AAAPlayerTop');
                        

                        setTimeout(function() { imageBlackRobber.parentNode.removeChild(imageBlackRobber); imageTopPlayer.parentNode.removeChild(imageTopPlayer); 
                            display_element.append($('<img>', {src: trial.players[2],id: 'jspych-AAAPlayerHome'})); display_element.append($('<img>', {src: trial.players[1],id: 'jspych-AAAMiddleRobber'})); trial.playerIndex = 0; }, 500);
                        
                          }


                    else if(trial.robberActive == true) { // caught robber awake he turns red

                         trial.caughtRobberDict.push({
                         position:   2 ,
                         time: (new Date()).getTime() - trial.startTime});

                         trial.playerCaughtRobber = true;

                         var imageMiddleRobber = document.getElementById('jspych-AAAMiddleRobber');
                            imageMiddleRobber.parentNode.removeChild(imageMiddleRobber);

                         display_element.append($('<img>', {
                         src: trial.players[4],
                         id: 'jspych-AAASleepingRobberRed'}));
                        
                         trial.stopTokRobSpwaning = true;
                         document.removeEventListener('keydown', keyHandler);
                         finishingTrialCaught();
                                                                                                       
                    }
                  }
              }

};

function playerNavigation (){       // do it with an index => -1 = playerIsLeft 0 = at start 1 = player is right

            display_element.append($('<img>', {
            src: trial.players[2],
            id: 'jspych-AAAPlayerHome'}));

              

               document.addEventListener('keydown', keyHandler); // simple keyboard input listener
              
};
 
function resetDom(){        // removes all images in the dom

            var images = document.getElementsByTagName('img');
            var l = images.length;
            for (var i = 0; i < l; i++) {
            images[0].parentNode.removeChild(images[0]);}
    };


trial.finishNormal = true;

function finishingTrialNormal(){


if (trial.tokkenCount == 6 && trial.finishNormal == true){

 
      var trial_data = {

           "robberTrackColLamDict": JSON.stringify(trial.robberTrackColLamDict),
           "robberTrackDict": JSON.stringify(trial.robberTrackDict),
           "tokkenTrackDict": JSON.stringify(trial.tokkenTrackDict),
           "playerTrackDict": JSON.stringify(trial.playerTrackDict),
           "failedCatchAttemptDict": JSON.stringify(trial.failedCatchAttemptDict),
           "caughtRobberDict": JSON.stringify(trial.caughtRobberDict),
           "playerCaughtRobber":JSON.stringify(trial.playerCaughtRobber)
      };


    setTimeout(function() {display_element.html(''); resetDom();checkFullscreen(trial_data); document.removeEventListener('keydown', keyHandler);}, 1500);
  }
};



  function finishingTrialCaught(){

  if (trial.finish == false && trial.playerGotCaught == false){


    trial.finish = true;
    trial.finishNormal = false;
    
    trial.tokkenTimeouts.forEach(function(timer) { // clears remainig Timeouts for tokkens
    clearTimeout(timer);});


     var trial_data = {

           "robberTrackColLamDict": JSON.stringify(trial.robberTrackColLamDict),
           "robberTrackDict": JSON.stringify(trial.robberTrackDict),
           "tokkenTrackDict": JSON.stringify(trial.tokkenTrackDict),
           "playerTrackDict": JSON.stringify(trial.playerTrackDict),
           "failedCatchAttemptDict": JSON.stringify(trial.failedCatchAttemptDict),
           "caughtRobberDict": JSON.stringify(trial.caughtRobberDict),
           "playerCaughtRobber":JSON.stringify(trial.playerCaughtRobber)
      };
      

     setTimeout(function() { display_element.html('');resetDom();checkFullscreen(trial_data);}, 1500); 
  }
    };



function checkFullscreen(trialData){  // checks after every trial if fullscreen is on or not -> trial only ends if fullscreen is on again

    trial_data = trialData;

    if (!document.isFullScreen && !document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {

        
        display_element.append('<div style=""><p>Please activate and continue the experiment in fullscreen.</p><button id="jspsych-fullscreen-btn" class="jspsych-btn">Activate Fullscreen</button></div>');
        $('#jspsych-fullscreen-btn').on('click', function() {
          var element = document.documentElement;
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }

          $('#jspsych-fullscreen-btn').off('click', jsPsych.finishTrial(trial_data));
          display_element.html('');
          });
        }

    else {

        jsPsych.finishTrial(trial_data);

    };

  };


/*  
In order to prevent different timings in different browsers keep track of the actually pop up timings on the screen 
that way they could be compared with the function call
  */



  //main
  

    display_element.append($('<img>', {
    src: trial.players[1],
    id: 'jspych-AAALevel2IndicateRobber'}));

   


    spawnTokkens();
    spawnRobber();
    playerNavigation();
   
 
  };
  
    return plugin;


}());
