/*
 Approach Avoidance Task Level 1
 Bach Lab Universität Zürich
 Pascal Misala, 10.2017
 Version: 1.2.0
 */

jsPsych.plugins["AAALevelOne"] = (function() {

  var plugin = {};
  

plugin.trial = function(display_element, trial){        // for every trial should a object be made

  //if any trial variables are functions
  // this evaluates the function and replaces
  // it with the output of the function
  trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);


  //trial variables

  trial.players = ['/static/images/imageTokken.jpeg','/static/images/imageSleepingRobber.jpeg','/static/images/imagePlayer.jpeg', '/static/images/imageCatchRobberRed.jpeg'];
  trial.grid = ['/static/images/azureFrame.jpeg','/static/images/yellowFrame.jpeg','/static/images/purpleFrame.jpeg'];
  trial.stringifyLambda = ["λ = 1.0536", "λ = 3.5667","λ = 2.2314"];   
  trial.stringifyRColor = ["azure", "yellow","purple"];
  trial.shuffledLambda = trial.shuffledLambda;        // randomized lambda array "parameter"
  trial.robberColor = trial.robberColor;         // robberColor array "parameter"
  trial.wonTokkenCounter = 0;
  trial.numberOfTokkens = 1; // one token per trial policy
  trial.tokkenCount = 0;

  trial.robberActive = false;                           // determines wether robber is currently active or not

  trial.playerIsOut = false;
  trial.playerIndex = 0;
  trial.playerGotCaught = false;

  trial.finish = false                                  // switches true if player is caught otherwise would finish multiple times


var keyHandler = function(event) {

    eventListenerReference(event)};

// variable to keep track of timing info and responses

  trial.startTime = (new Date()).getTime();

  trial.playerTrackDict = [];  // empty dictionary key: player location (-1,0,1) starting from 0(middle) value: time when pressed
  trial.robberTrackArr = [];   // alternating pop up time and pop out time
  trial.tokkenTrackDict = [];  // alternating pop up time and pop out time
  trial.playerCaughtTrackDict = [];
  trial.tokkeWonTrackDict = [];  // position where tokken was won and time when.
  trial.robberTrackColLamDict = [];      // robber color  --> 0 = azure , 1 = yellow , 2 = purple
  

  // Generates random numbers following the Gamma distribution.
  var gammaFirstDraw = jStat.gamma.sample(2,1);
  trial.currentTime = Math.min(Math.max(parseInt(gammaFirstDraw), gammaFirstDraw), 6);

  trial.timeAbsendFixed = 1;  //  1sec  

  trial.appearTokkenTime = [];
  trial.dissapearTokkenTime = [];

   

// fill the appearTokkenTimes and dissapearTokkenTimes with the random popUp/Out times. 

for (i = 0; i < trial.numberOfTokkens; i++) {

  var gammaX = jStat.gamma.sample(2,1);
  trial.timePresent = Math.min(Math.max(parseInt(gammaX), gammaX), 6);

  var gammaY = jStat.gamma.sample(2,1);
  trial.timeAbsendVariable = Math.min(Math.max(parseInt(gammaY), gammaY), 6);

  trial.appearTokkenTime.push(trial.currentTime);
  trial.currentTime += trial.timePresent;

  trial.dissapearTokkenTime.push(trial.currentTime);
  trial.currentTime += trial.timeAbsendFixed;
  trial.currentTime += trial.timeAbsendVariable;

  };


  console.log(trial.appearTokkenTime);
  console.log(trial.dissapearTokkenTime);

// robber settings

 trial.robberTimeouts = [];

 var ARobberExp  = Prob.exponential(1.0536); //1.0536
 var BRobberExp = Prob.exponential(3.5667);  //3.5667
 var CRobberExp = Prob.exponential(2.2314);   //2.2314

 var poissonExp = jStat.poisson.sample(1.0536); //Possible Poisson dist. for robber



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

    //robberColor = robberColor[Math.floor(Math.random() * robberColor.length)]; // to add robber color randomly add here randomisation of coler array
    
    return robberColor;
}

      
function tokkenApDisSide(){                   // random assignment of left or right side

    var leftOrRightTokken = Math.random() < 0.5 ? 37 : 39;

    return leftOrRightTokken;
  };



function popUpTokkens (tokkenSide) {      // helper function, lets tokken appear

 
  
  if (tokkenSide == 37 && trial.playerGotCaught == false) {

               

      display_element.append($('<img>', {
      src: trial.players[0],
      id: 'jspych-AAATokkenLeft'}));
    
      trial.tokkenTrackDict.push({
      position:   -1 ,
      time: (new Date()).getTime() - trial.startTime});  

       if(document.body.contains(document.getElementById('jspych-AAAPlayerLeft')) == true){

        trial.tokkeWonTrackDict.push({
              position:  -1 ,
              time: (new Date()).getTime() - trial.startTime});

        if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true){
        var imageLeftTokken = document.getElementById('jspych-AAATokkenLeft');
        imageLeftTokken.parentNode.removeChild(imageLeftTokken);
        }

        spawnWonTokkens();
       }
 }

  else if (tokkenSide == 39 && trial.playerGotCaught == false) {

  
        display_element.append($('<img>', {
        src: trial.players[0],
        id: 'jspych-AAATokkenRight'}));
        
        trial.tokkenTrackDict.push({
        position:   1 ,
        time: (new Date()).getTime() - trial.startTime});

        if(document.body.contains(document.getElementById('jspych-AAAPlayerRight')) == true){

          trial.tokkeWonTrackDict.push({
                position:  1 ,
                time: (new Date()).getTime() - trial.startTime});

           if(document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){
        var imageRightTokken = document.getElementById('jspych-AAATokkenRight');
        imageRightTokken.parentNode.removeChild(imageRightTokken);
        }

        spawnWonTokkens();
       }  
      
  }
  
};
  


function popOutTokkens (tokkenSide) { // helper function, lets tokken dissapear

     if (tokkenSide == 37 && trial.playerGotCaught == false) {
      

      trial.tokkenTrackDict.push({
      position:   -1 ,
      time: (new Date()).getTime() - trial.startTime});

      if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true){
        var imageLeftTokken = document.getElementById('jspych-AAATokkenLeft');
        imageLeftTokken.parentNode.removeChild(imageLeftTokken);
        }

        trial.tokkenCount += 1;
        finishingTrialNormal();
      
        }
      else if (tokkenSide == 39 && trial.playerGotCaught == false) {


      trial.tokkenTrackDict.push({
      position:   1 ,
      time: (new Date()).getTime() - trial.startTime});

      if(document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){
        var imageRightTokken = document.getElementById('jspych-AAATokkenRight');
        imageRightTokken.parentNode.removeChild(imageRightTokken);
        }
        trial.tokkenCount += 1;
        finishingTrialNormal();
     
  }};

function spawnTokkens () {                          // spawns all 6 Tokken in defined random intervalls

  
  for (i = 0; i < trial.numberOfTokkens; i++) {
    
      tokkenSide = tokkenApDisSide();
     

    if (tokkenSide == 37){    // left tokken 

      
        setTimeout(function() { popUpTokkens(37)}, trial.appearTokkenTime[0 + i]*1000);          // appearing    
        setTimeout(function() { popOutTokkens(37)}, trial.dissapearTokkenTime[0 + i]*1000);          // disappearing
        
      
    
    }

    else if (tokkenSide == 39){  // right tokken

       
        setTimeout(function() { popUpTokkens(39)}, trial.appearTokkenTime[0 + i]*1000);           // appearing
        setTimeout(function() { popOutTokkens(39)},trial.dissapearTokkenTime[0 + i]*1000);         // disappearing
       
 
    }
  }
  };


function popInRobber(){ // check on pop in of the robber if there is a player if yes kill  


  if(document.body.contains(document.getElementById('jspych-AAAPlayerLeft')) == true || document.body.contains(document.getElementById('jspych-AAAPlayerRight')) == true){

      trial.robberTrackArr.push((new Date()).getTime() - trial.startTime);      //push the last robber timing 

     
      trial.playerCaughtTrackDict.push({
      position: trial.playerIndex ,
      time: (new Date()).getTime() - trial.startTime});


     trial.playerGotCaught = true;
     playerGetsCaught();
    
    }



  else if(trial.tokkenCount != 6 && trial.playerGotCaught == false) {

    trial.robberTrackArr.push((new Date()).getTime() - trial.startTime);

    trial.robberActive = true;
  }
};


function popOutRobber(){       

  if(document.body.contains(document.getElementById('jspych-AAAActiveLeftRobber')) == false && document.body.contains(document.getElementById('jspych-AAAActiveRightRobber')) == false){

      if(trial.tokkenCount != 6 && trial.playerGotCaught == false){

      trial.robberActive = false;

    }
  }
    
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

    for (i = 1; i <=  trial.currenTimeTable.length; i++) {
      
     
        trial.robberTimeouts.push(setTimeout(function() { popInRobber();}, trial.currenTimeTable[i]*1000));          // appearing            
        trial.robberTimeouts.push(setTimeout(function() { popOutRobber();}, trial.currenTimeTable[i]*1000));         // disappearing

        }
      
};


function spawnWonTokkens (){    // spawn them next to each other maybe have to hardcode with 6 tokkens. 

    trial.wonTokkenCounter += 1;
    display_element.append($('<img>', {
    src: trial.players[0],
    id: 'jspych-AAAWonTokkens'}));
 

};


function playerGetsCaught (){   // add  remover of everything else or freeze or just lay a new grid over everything and sett variables to 0 tokkens etc. let timer count down to total 20s

   trial.wonTokkenCounter = 0;
   
   trial.robberTimeouts.forEach(function(timer) { // clears remainig Timeouts for robber
    clearTimeout(timer);});  

   if(trial.playerIndex == -1){


    if(document.body.contains(document.getElementById('jspych-AAAPlayerLeft')) == true){

      document.removeEventListener('keydown', keyHandler);      //disable keyboard listener

       if(document.body.contains(document.getElementById('jspych-AAAMiddleRobber')) == true){
        var imageMiddleRobber = document.getElementById('jspych-AAAMiddleRobber');
            imageMiddleRobber.parentNode.removeChild(imageMiddleRobber);};

        display_element.append($('<img>', {
        src: trial.players[3],
        id: 'jspych-AAAActiveLeftRobber'}));


       finishingTrialCaught();

        }

      
        while(document.body.contains(document.getElementById('jspych-AAAWonTokkens')) == true){       // remove all won tokkens

        var tokkenRemove = document.getElementById('jspych-AAAWonTokkens');
        tokkenRemove.parentNode.removeChild(tokkenRemove);
        }

         if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true || document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){

              if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true){

                 var imageLeftTokken = document.getElementById('jspych-AAATokkenLeft');
                 imageLeftTokken.parentNode.removeChild(imageLeftTokken);}

         else if(document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){

                var imageRightTokken = document.getElementById('jspych-AAATokkenRight');
                imageRightTokken.parentNode.removeChild(imageRightTokken);}

              }
      }

   else if(trial.playerIndex == 1){


    if(document.body.contains(document.getElementById('jspych-AAAPlayerRight')) == true){

      document.removeEventListener('keydown', keyHandler);        // disable keyboard listener

        if(document.body.contains(document.getElementById('jspych-AAAMiddleRobber')) == true){
        var imageMiddleRobber = document.getElementById('jspych-AAAMiddleRobber');
            imageMiddleRobber.parentNode.removeChild(imageMiddleRobber);};

        display_element.append($('<img>', {
        src: trial.players[3],
        id: 'jspych-AAAActiveRightRobber'}));

      finishingTrialCaught();

      }

        while(document.body.contains(document.getElementById('jspych-AAAWonTokkens')) == true){

        var tokkenRemove = document.getElementById('jspych-AAAWonTokkens');
        tokkenRemove.parentNode.removeChild(tokkenRemove);}


        if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true || document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){

            if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true){

                var imageLeftTokken = document.getElementById('jspych-AAATokkenLeft');
                imageLeftTokken.parentNode.removeChild(imageLeftTokken);}

        else if(document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){

                var imageRightTokken = document.getElementById('jspych-AAATokkenRight');
                imageRightTokken.parentNode.removeChild(imageRightTokken);}

          }

    }

    };




function eventListenerReference(event){ // Handles keyboard input from the player

  

  if(event.keyCode == 37 && trial.playerIndex == 0) { //  left-arrow
          
   
                 trial.playerIndex = -1;

                 trial.playerTrackDict.push({
                              position:   trial.playerIndex,
                              time: (new Date()).getTime() - trial.startTime});


                 var imageHomePlayer = document.getElementById('jspych-AAAPlayerHome');
                 imageHomePlayer.parentNode.removeChild(imageHomePlayer);   // throws error

                  display_element.append($('<img>', {
                  src: trial.players[2],
                  id: 'jspych-AAAPlayerLeft'}));

                    if (trial.robberActive == true){ 

                          trial.playerCaughtTrackDict.push({
                          position: trial.playerIndex ,
                          time: (new Date()).getTime() - trial.startTime});
                          
                          trial.playerGotCaught = true;
                          playerGetsCaught();
                          
                         
                          }

                     else if(document.body.contains(document.getElementById('jspych-AAATokkenLeft')) == true){

                        trial.tokkeWonTrackDict.push({
                        position:  -1 ,
                        time: (new Date()).getTime() - trial.startTime});

                           var imageLeftTokken = document.getElementById('jspych-AAATokkenLeft');
                           imageLeftTokken.parentNode.removeChild(imageLeftTokken);
                           spawnWonTokkens();
                        }

                        trial.playerIsOut = true;
                      }

               else if(event.keyCode == 39 && trial.playerIndex == 0) { // right-arrow

                 trial.playerIndex = 1;

                              trial.playerTrackDict.push({
                              position: trial.playerIndex,
                              time: (new Date()).getTime() - trial.startTime});

                 var imageHomePlayer = document.getElementById('jspych-AAAPlayerHome');
                 imageHomePlayer.parentNode.removeChild(imageHomePlayer);

                  display_element.append($('<img>', {
                  src: trial.players[2],
                  id: 'jspych-AAAPlayerRight'}));
                                                                                                       
                    if (trial.robberActive == true){ 

                            trial.playerCaughtTrackDict.push({
                            position: trial.playerIndex ,
                            time: (new Date()).getTime() - trial.startTime});
                           
                            trial.playerGotCaught = true;
                            playerGetsCaught();
                            
                           
                          }


                  else if(document.body.contains(document.getElementById('jspych-AAATokkenRight')) == true){

                        trial.tokkeWonTrackDict.push({
                        position:  1 ,
                        time: (new Date()).getTime() - trial.startTime});
                         
                           var imageRightTokken = document.getElementById('jspych-AAATokkenRight');
                           imageRightTokken.parentNode.removeChild(imageRightTokken);
                           spawnWonTokkens();                           // add won tokkens tracker
                        }

                   trial.playerIsOut = true;
                
                  }

               else if(event.keyCode == 39 && trial.playerIndex == -1) {

                trial.playerIsOut = false;
                trial.playerIndex = 0;

                trial.playerTrackDict.push({
                position: trial.playerIndex,
                time: (new Date()).getTime() - trial.startTime});


                var imageLeftPlayer = document.getElementById('jspych-AAAPlayerLeft');
                imageLeftPlayer.parentNode.removeChild(imageLeftPlayer);        // throws error on repeat

                display_element.append($('<img>', {
                src: trial.players[2],
                id: 'jspych-AAAPlayerHome'}));

                
                }

               else if(event.keyCode == 37 && trial.playerIndex == 1) {
                
                trial.playerIsOut = false;
                trial.playerIndex = 0;

                trial.playerTrackDict.push({
                position: trial.playerIndex,
                time: (new Date()).getTime() - trial.startTime});


                var imageRightPlayer = document.getElementById('jspych-AAAPlayerRight');
                imageRightPlayer.parentNode.removeChild(imageRightPlayer);

                display_element.append($('<img>', {
                src: trial.players[2],
                id: 'jspych-AAAPlayerHome'}));

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



function finishingTrialNormal(){


trial.finishNormal = true;

if (trial.tokkenCount == 1 && trial.finishNormal == true){


      trial.robberTimeouts.forEach(function(timer) { // clear the remaining robberTimeouts
      clearTimeout(timer);});  
      

      var trial_data = {

           "robberTrackColLamDict": JSON.stringify(trial.robberTrackColLamDict),
           "robberTrackArr": JSON.stringify(trial.robberTrackArr),
           "tokkenTrackDict": JSON.stringify(trial.tokkenTrackDict),
           "playerTrackDict": JSON.stringify(trial.playerTrackDict),
           "wonTokkens": JSON.stringify(trial.wonTokkenCounter),
           "tokkeWonTrackDict": JSON.stringify(trial.tokkeWonTrackDict),
           "playerIsCaught": JSON.stringify(trial.playerGotCaught),
           "playerCaughtTrackDict": JSON.stringify(trial.playerCaughtTrackDict)
      };

        // truncated at 4 sec.

      var interceptX = jStat.gamma.sample(2,1);

      //random intertrial interval
      drawnInterceptInterval = Math.min(Math.max(parseInt(interceptX), interceptX), 4)*1000;
     
      setTimeout(function(){document.removeEventListener('keydown', keyHandler);resetDom();}, 1000);

      setTimeout(function(){checkFullscreen(trial_data);}, drawnInterceptInterval + 1000);
  }
};


  function finishingTrialCaught(){

  
  if (trial.finish == false && trial.playerGotCaught == true){

    trial.finish = true;
    trial.finishNormal = false;
   

     var trial_data = {

           "robberTrackColLamDict": JSON.stringify(trial.robberTrackColLamDict),
           "robberTrackArr": JSON.stringify(trial.robberTrackArr),
           "tokkenTrackDict": JSON.stringify(trial.tokkenTrackDict),
           "playerTrackDict": JSON.stringify(trial.playerTrackDict),
           "wonTokkens": JSON.stringify(trial.wonTokkenCounter),
           "tokkeWonTrackDict": JSON.stringify(trial.tokkeWonTrackDict),
           "playerIsCaught": JSON.stringify(trial.playerGotCaught),
           "playerCaughtTrackDict": JSON.stringify(trial.playerCaughtTrackDict)
      };
      
      display_element.append('<div style= "text-align:left;left:250px;top:425px;position: absolute;"> please wait... </div>'); 

      // truncated at 4 sec.
      var interceptX = jStat.gamma.sample(2,1);
      drawnInterceptInterval = Math.min(Math.max(parseInt(interceptX), interceptX), 4)*1000;
      var remainingTokenTime = (trial.dissapearTokkenTime[0]*1000) - ((new Date()).getTime() - trial.startTime)

     setTimeout(function() {display_element.html('');}, remainingTokenTime);
    
     setTimeout(function() {checkFullscreen(trial_data);},remainingTokenTime + drawnInterceptInterval);
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


  //main


 
  spawnTokkens();
  spawnRobber();
  playerNavigation();
 
  };
  
    return plugin;


}());
