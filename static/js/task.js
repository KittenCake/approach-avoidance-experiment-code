 /*

Approach Avoidance Task
Bach Lab Universität Zürich
Pascal Misala, 10.2017
Version: 2.0.0

JsPsych Test setup for AAA

 */

//<<<<<<< Updated upstream
  
//=======
//function getGitHash(){      // simple php file to retrieve git hash
 // jQuery.support.cors = true;
//  $.ajax({

 //    url : '/getgithash.php',
 //    type : 'GET',
 //    success : function (data) {
    //    console.log (data); // Here, you need to use response by PHP file.
 //    },
 //    error : function () {
    //    console.log ('error');
 //    }
 //  });
   // };

//>>>>>>> Stashed changes

// Experiment parameter - Test blocks




/* load psiturk */
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);



var welcome_message = {

    type: "instructions",
    pages: ["Welcome to the Approach Avoidance Experiment, press next to start the experiment"],

    show_clickable_nav: true
};

var entrySurvey_block = {        // unique id for participants can be created whilst saving file to databank
 
    type: "survey-multi-choice",
    questions: ["How old are you?","What is your gender?"],
    options: [["placeholder"],["placeholder"]],
    required: [true,true],
    horizontal: [false, false]
};


var instruction_messageLevelOne = {

    type: 'instructions',
    pages: [ 'Please read following instructions carefully. <BR/> Now you will be collecting diamonds in an easy computer game. Your task is to win as many diamonds as possible - in each round of the game.',

    'In each round you will see a playing board with 4 fields. The green triangle - that is you. You are in a "safe square" - it is dark gray. Right across from you sits a sleeping "robber". There are three different types of robbers in this game. They are all gray - but the frame color is different for each of them: yellow, purple or cyan-blue (like here). These "robbers" are differently dangerous. It is important  that you learn how the robbers differ from each other - and that you adapt your strategy to it. <BR/> <BR/> <img src="/static/images/instructionsLevel1(1).jpeg"></img>',

    'From time to time yellow diamonds pop up in the left or right white empty squares. The diamonds disappear after some time. To collect a token, move to the diamond and back onto the "safe square" by pressing the arrow keys of your keyboard (right/left). You can only move left and right, and not reach the field where the robber sleeps.',

    'In the following picture you see a round with the yellow robber. Just now a diamond appeared. <BR/> <BR/> <img src="/static/images/instructionsLevel1(2).jpeg"></img>', 

    'Once you collected it, it appears on the left upper part of the screen <BR/> <BR/> <img src="/static/images/instructionsLevel1(3).jpeg"></img>',

    'Here the same situation again but with a purple robber. <BR/> <BR/> <img src="/static/images/instructionsLevel1(4).jpeg"></img>',

    'Here you collected the first diamond. Now a new one appears. In each round up to six diamonds can appear. <BR/> <BR/> <img src="/static/images/instructionsLevel1(5).jpeg"></img>',

    'However: the sleeping robber can wake up and attack you at any time. If this happens you will lose your life - the round ends and all your diamonds for this round are lost. <BR/> <img src="/static/images/instructionsLevel1(6).jpeg"></img>',

    'Try to avoid this. Remember: your task is to complete each round with as many diamonds as possible. If you get attacked, you do not have any diamonds for this round. If you want to prevent that, just stay in the safe square and do not catch new diamonds. With time you will get a feeling for how fast diamonds are appearing and disappearing. And what is most important, a feeling for how often the robbers will awake and attack you.',

    'By the way: whether you collect a diamond or not - the next diamond will not appear any faster or slower. Therefore you cannot shorten the experiment with your strategy. <BR/> <BR/> At the end of the experiment one "<b>Catch diamonds</b>" round is elected randomly. <BR/> For each diamond you collected in this chosen round, you will receive an extra $2.5 on top of the $15 participation payment. <BR/> <BR/> If you are really unlucky and you did not collect any diamonds in that elected round, you will not receive any extra amount of money. To prevent that, keep in mind to not get caught by the robber.',

    '<BR/> <BR/> What follows now is a short comprehension test please, Click next to start.'],

    show_clickable_nav: true // experiment instructions 
};


var instruction_messageLevelTwo = {

  type: 'instructions',
  pages: ['<b>Level 2</b> <BR/>Until now the robber could catch you at any time when you were collecting diamonds <BR/> <BR/> <b>From now on you have the chance to expose the robber.</b>',

      'In order to expose the robber you have to press the arrow key "up" in exactly the moment when he is awake. If you get him, you win an extra amount of money. If you do not get him, you will win nothing',

      'Hence there are from now on two possible game modes <BR/> <b>1. Collect diamonds!</b> In this game mode you see a gray diamond under the grid. These rounds are the same as in level 1 before. <img src="/static/images/instructionsLevel2(1).jpeg"></img>',

      '<b>2. Catch the robber!</b> In this game mode you see a gray robber under the grid.<BR/> <BR/> <img src="/static/images/instructionsLevel2(2).jpeg"></img> <BR/> Like in level 1, six diamonds will appear left and right. <b> You cannot collect them though! The left/right arrow keys are inactive.',

      'You can only press the up key.</b> If the robber is sleeping when you press the key, he turns black and the game proceeds. <BR/> <img src="/static/images/instructionsLevel2(3).jpeg"></img>',

      'If the robber is currently awake, he turns red. <b> This shows you that you caught him.</b> The round is over instantly, <b> and you can win extra money from this round.<BR/> <img src="/static/images/instructionsLevel2(4).jpeg"></img>',

      'In each round you can try to expose the robber 6 times. The round is over when you expose the robber or when all diamonds have appeared. If you try to catch the robber 6 times without success, the up key turns inactive.<BR/> At the end of the experiment a "<b>Catch the robber</b>" round gets elected randomly. If you managed to expose the robber in this elected round, you will win an extra $2.5 on top of the earnings from the elected "<b> Collect diamonds</b>" round. Keep in mind to try to expose the robber exactly when you think he is awake. Be aware that you do not see in advance whether the robber is awake or not. <BR/> <BR/> What follows now is a short comprehension test please, Click next to start <BR/>'],
  
  show_clickable_nav: true
};

var level1Start = {

  type: "text",
  text: "Level 1 has 45 rounds and takes around 13 mins to finish with 3 breaks.<BR/>  <BR/> press spacebar to start",
  timing_post_trial: 2000
};


var level2Start = {

  type: "text",
  text: "Level 2 has 16 rounds and takes around 4 mins to finish with 1 break. <BR/> <BR/>  press spacebar to start",
  timing_post_trial: 2000
};


var instruction_postTest = {

      type: 'instructions',
      pages: ['<b>Congratulations you made it through all levels!!!</b> <BR/><BR/> On the following pages we show you the different grids you saw during the experiment. For each grid we ask you to estimate the probability for the robber to catch you if you step out of the safe zone. If you are not sure about it, we ask you to give your fast intuitive estimation. There are no right or wrong responses. We are interested in your personal opinion.'],
      show_clickable_nav: true
};

var surveyPost_Test1 = {

  type: 'similarity',
  stimuli: ['/static/images/yellowFrame.jpeg'],
  labels: ['0%','25%','50%','75%', '100%'],
  show_ticks: true,
  show_response: 'FIRST_STIMULUS',
  timing_first_stim: 0.1,
  timing_second_stim: -1,
  timing_image_gap: 0.1,
  prompt: '<BR/><p>How high was the probability of getting caught in this grid when you left the safe zone?</p>'
};

var surveyPost_Test2 = {

  type: 'similarity',
  stimuli: ['/static/images/azureFrame.jpeg'],
  labels: ['0%','25%','50%','75%', '100%'],
  show_ticks: true,
  show_response: 'FIRST_STIMULUS',
  timing_first_stim: 0.1,
  timing_second_stim: -1,
  timing_image_gap: 0.1,
  prompt: '<BR/><p>How high was the probability of getting caught in this grid when you left the safe zone?</p>'
};

var surveyPost_Test3 = {

  type: 'similarity',
  stimuli: ['/static/images/purpleFrame.jpeg'],
  labels: ['0%','25%','50%','75%', '100%'],
  show_ticks: true,
  show_response: 'FIRST_STIMULUS',
  timing_first_stim: 0.1,
  timing_second_stim: -1,
  timing_image_gap: 0.1,
  prompt: '<BR/><p>How high was the probability of getting caught in this grid when you left the safe zone?</p>'
};


var break_messageLvlOneA = {

  type: "text",
  text: "First period out of three completed. <BR/>  short break, press any key to continue"
};

var break_messageLvlOneB = {

    type: "text",
    text: "Second period out of three completed. <BR/>  short break, press any key to continue"
};

var break_messageLvlOneC = {

    type: "text",
    text: "Third and last period. <BR/>  short break, press any key to continue"
};

var break_messageLvlTwo = {

    type: "text",
    text: "First period out of two completed <BR/>  short break, press any key to continue with last period"
};

var preloadImages = {

  type: "preloadImages"

};

//Randomization of robber color & lambda  -> In level 1 & 2
var robberLambda = [0,1,2];
var shuffledRobberLambda =  jsPsych.randomization.repeat(robberLambda, 1);
var robberColor = [0,1,2];

// different variations of levels A-C allows you to define the exact number of robber of a certain color -> with lambda being randomized. 

//levelOne catch diamonds Color A-C
var levelOneA = {

  type: "AAALevelOne",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[0]
};

var levelOneB = {

  type: "AAALevelOne",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[1]
};

var levelOneC = {

  type: "AAALevelOne",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[2]
};

//levelTwo catch diamonds Color A-C
var levelTwoA = {

  type: "AAALevelTwoA",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[0]
};

var levelTwoB = {

  type: "AAALevelTwoA",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[1]
};

var levelTwoC = {

  type: "AAALevelTwoA",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[2]
};

// levelTwo catch the robber Color A-C
var levelTwoBA = {

  type: "AAALevelTwoB",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[0]
};

var levelTwoBB = {

  type: "AAALevelTwoB",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[1]
};

var levelTwoBC = {

  type: "AAALevelTwoB",
  shuffledLambda: shuffledRobberLambda,
  robberColor: robberColor[2]
};

// comprehension tests

var failedTestNot = {

    type: "text",
    text: "Unfortunately you made one or more mistakes in the previous test. Please go through the instructions and redo the test. It is important for us, that you understand the rules of this experiment.  <BR/> <BR/>  Press spacebar to continue"
};


//part one of experiment
var comprQn1 = ['1) Up to how many tokens can you collect in one round?',
              '2)  How many tokens can you lose in the following situation? <img id="jspych-comprehend" src="/static/images/comprehend2.jpeg"></img>',
              '3)  Are all robbers equally dangerous?',
              '4)  Is it possible in this moment to get caught by the robber? <img id="jspych-comprehend" src="/static/images/comprehend4.jpeg"></img>',
              '5)  What happened here? <img id="jspych-comprehend" src="/static/images/comprehend5.jpeg"></img>'];
                                            

var comprScale1 = ["3","5","6","8"];
var comprScale2 = ["3","5","1","6"];
var comprScale3 = ["Yes", "No", "We don't know"];
var comprScale4 = ["Yes (I am outside the safe square)", "No (I am inside the safe square)", "We don’t know"];
var comprScale5 = ["I got caught by the robber", "I won a token", "I caught the robber"];

var comprTest1 =      
    { type: "survey-multi-choiceOriginal",
    questions: comprQn1,
    preamble: ['<strong>Please read each question carefully and answer it </strong>'],
    options: [comprScale1, comprScale2, comprScale3, comprScale4, comprScale5],
    required: [true, true, true, true, true],
    data:{label: 'compr1', trialType: 'quest'}
    };


// part two of experiment
  var comprQn2 = ['1) What is your task in this situation? <img id="jspych-comprehend" src="/static/images/comprehend2.1.jpeg"></img>',
              '2)  How many chances do you get to catch the robber?',
              '3)  What happened in this situation? <img id="jspych-comprehend" src="/static/images/comprehend2.3.jpeg"></img>',
              '4)  Do you see whether the robber is active or not?',
              '5)  How many tokens do you have to catch in a catch the robber trial?'
               ];

var compr2Scale1 = ["Collecting tokens","Catch the robber(with the up arrow-key)","Catch the robber (with the left & right arrow keys)","I have to wait"];
var compr2Scale2 = ["4","5","6","as many as I need"];
var compr2Scale3 = ["I got caught by the robber", "I caught the robber","I failed to catch the robber"];
var compr2Scale4 = ["Yes", "No", "Sometimes"];
var compr2Scale5 = ["As many as possible", "6", "None"];

var comprTest2 =      
    { type: "survey-multi-choiceOriginal",
    questions: comprQn2,
    preamble: ['<strong>Please read each question carefully and answer it </strong>'],
    options: [compr2Scale1, compr2Scale2, compr2Scale3, compr2Scale4, compr2Scale5],
    required: [true, true, true, true, true],
    data:{label: 'compr2', trialType: 'quest'}
    };


  var loopComprT1 = {
    timeline: [failedTestNot, instruction_messageLevelOne, comprTest1],
    loop_function: function(data){

          // get the data from the previous trial,
         var lasttrialdata = jsPsych.data.getLastTrialData();
          if(lasttrialdata.responses == '{"Q0":"6","Q1":"3","Q2":"No","Q3":"No (I am inside the safe square)","Q4":"I got caught by the robber"}'){

              return false;}
        else{
          return true;}
        }
      };


  var loopComprT2 = {
    timeline: [failedTestNot, instruction_messageLevelTwo, comprTest2],
    loop_function: function(data){

          // get the data from the previous trial,
         var lasttrialdata = jsPsych.data.getLastTrialData();
          if(lasttrialdata.responses == '{"Q0":"Catch the robber(with the up arrow-key)","Q1":"6","Q2":"I caught the robber","Q3":"No","Q4":"None"}'){

              return false;}
        else{
          return true;}
        }
      };


  // subject has to redo comprehension test until pass. 
  var if_comprTfail = {
    timeline: [loopComprT1],
    conditional_function: function(){

        // get the data from the previous trial,
         var lasttrialdata = jsPsych.data.getLastTrialData();
          if(lasttrialdata.responses == '{"Q0":"6","Q1":"3","Q2":"No","Q3":"No (I am inside the safe square)","Q4":"I got caught by the robber"}')

          {return false;}
        else{return true;}
    }
    };


  // subject has to redo comprehension test until pass. 
  var if_comprTfail2 = {
    timeline: [loopComprT2],
    conditional_function: function(){

        // get the data from the previous trial,
         var lasttrialdata = jsPsych.data.getLastTrialData();
          if(lasttrialdata.responses == '{"Q0":"Catch the robber(with the up arrow-key)","Q1":"6","Q2":"I caught the robber","Q3":"No","Q4":"None"}')

          {return false;}
        else{return true;}
    }
};

var comprehensionTestBlock1 = [comprTest1, if_comprTfail];
var comprehensionTestBlock2 = [comprTest2, if_comprTfail2];


// participant feedback
var feedbackParticipant = {
  type: 'survey-text',
  rows: [15],
  columns: [90],
  questions: ["(feedback is optional) <BR/> <BR/> In order to keep track of possible bugs and to improve the experience, <BR/> we kindly ask you to give us feedback. Feel free to share your opinion with us on our experiment :).<BR/>"],
};



//external questionnaire:

function metaqnstest() {


//EMPTY ARRAY FOR TIMELINE OF QUESTIONNAIRES
var qns = [];

//INSTRUCTIONS PLUGIN
  var begin_qns =
  {
  type:"text",
  text:'<p class="instructions">We will now ask you to complete some questionnaires. Please note the options given might differ for different questionnaires.</p>' +
  '<p class="instructions">Please read each question carefully and answer according to the options given.</p>' +
  '<p class="instructions">Press spacebar to continue.</p>',
  data: {label: 'intruct', trialType: 'quest'},
  };



//BIS PLUGIN
var  bis_qn =[' 1) I plan tasks carefully.',
        '2) I do things without thinking.',
        '3) I make-up my mind quickly.',
        '4) I am happy-go-lucky.',
        '5) I don’t “pay attention.”',
        '6) I have “racing” thoughts.',
        '7) I plan trips well ahead of time.',
        '8) I am self controlled.',
        '9) I concentrate easily.',
        '10) I save regularly.',
        '11) I “squirm” at plays or lectures.',
        '12) I am a careful thinker.',
        '13) I plan for job security.',
        '14) I say things without thinking.',
        '15) I like to think about complex problems.',
        '16) I change jobs.',
        '17) I act “on impulse.”',
        '18) I get easily bored when solving thought problems.',
        '19) I act on the spur of the moment.',
        '20) I am a steady thinker.',
        '21) I change residences.',
        '22) I buy things on impulse.',
        '23) I can only think about one thing at a time.',
        '24) I change hobbies.',
        '25) I spend or charge more than I earn.',
        '26) I often have extraneous thoughts when thinking.',
        '27) I am more interested in the present than the future.',
        '28) I am restless at the theater or lectures.',
        '29) I like puzzles.',
        '30) I am future oriented.'];


var bis_scale = ["Do not agree at all",  "Agree slightly", "Agree a lot",  "Agree completely"];

// bis has 30 qns   
    var bis = 
    { type: "survey-multi-choiceOriginal",
    questions: bis_qn,
    options: [bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale,bis_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    horizontal: true,
    preamble: ['<strong>People differ in the ways they act and think in different situations. Read each statement and rate according to the labels. Do not spend too much time on any statement. Answer quickly and honestly.'],
    data:{label: 'bis', trialType: 'quest'}
    };





//OCIR PLUGIN
var ocir_qn = ['1) I have saved up so many things that they get in the way. ',
        '2) I check things more often than necessary. ',
        '3) I get upset if objects are not arranged properly.' ,
        '4) I feel compelled to count while I am doing things. ',
        '5) I find it difficult to touch an object when I know it has been touched by strangers or certain people.',

        '6) I find it difficult to control my own thoughts. ',
        '7) I collect things I don’t need. ',
        '8) I repeatedly check doors, windows, drawers, etc. ',
        '9) I get upset if others change the way I have arranged things. ',
        '10) I feel I have to repeat certain numbers. ',
        '11) I sometimes have to wash or clean myself simply because I feel contaminated.',

        "12) If you are paying attention to these questions, please select 'A little' as your answer.", // !!!!!catch question in OCIR number 12

        '13) I am upset by unpleasant thoughts that come into my mind against my will. ',
        '14) I avoid throwing things away because I am afraid I might need them later. ',
        '15) I repeatedly check gas and water taps and light switches after turning them off.',

        '16) I need things to be arranged in a particular way. ',
        '17) I feel that there are good and bad numbers. ',
        '18) I wash my hands more often and longer than necessary. ',
        '19) I frequently get nasty thoughts and have difficulty in getting rid of them.'];

        //ocir has 18 qns       + 1 for catch question     
        var ocir_scale = ["Not at all",  "A little", "Moderately",  "A lot" , "Extremely"];


    var ocir =        
    { type: "survey-multi-choiceOriginal",
    questions: ocir_qn,
    options: [ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale,ocir_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    horizontal: true,
    preamble: ['<strong>The following statements refer to experiences that many people have in their everyday lives. Rate according to the label that best describes HOW MUCH that experience has DISTRESSED or BOTHERED you during the PAST MONTH.</strong>'],

    data:{label: 'ocir', trialType: 'quest'}
    };


//SCHIZO PLUGIN 
var schizo_qn = ['1) When in the dark do you often see shapes and forms even though there is nothing there?',
        '2) Are your thoughts sometimes so strong that you can almost hear them?',
        '3) Have you ever thought that you had special, almost magical powers?',
        '4) Have you sometimes sensed an evil presence around you, even though you could not see it?',
        "5) Do you think that you could learn to read other's minds if you wanted to?",
        '6) When you look in the mirror does your face sometimes seem quite different from usual?',
        '7) Do ideas and insights sometimes come to you so fast that you cannot express them all?',
        '8) Can some people make you aware of them just by thinking about you?',
        '9) Does a passing thought ever seem so real it frightens you?',
        '10) Do you feel that your accidents are caused by mysterious forces?',
        '11) Do you ever have a sense of vague danger or sudden dread for reasons that you do not understand?',
        '12) Does your sense of smell sometimes become unusually strong?',

        '13) Are you easily confused if too much happens at the same time?',
        '14) Do you frequently have difficulty in starting to do things?',
        '15) Are you a person whose mood goes up and down easily?',
        '16) Do you dread going into a room by yourself where other people have already gathered and are talking?',
        '17) Do you find it difficult to keep interested in the same thing for a long time?',
        '18) Do you often have difficulties in controlling your thoughts?',
        '19) Are you easily distracted from work by daydreams?',
        "20) Do you ever feel that your speech is difficult to understand because the words are all mixed up and don't make sense?",
        '21) Are you easily distracted when you read or talk to someone?',
        '22) Is it hard for you to make decisions?',
        '23) When in a crowded room, do you often have difficulty in following a conversation?',

        '24) Are there very few things that you have ever enjoyed doing?',
        '25) Are you much too independent to get involved with other people?',
        '26) Do you love having your back massaged?',
        '27) Do you find the bright lights of a city exciting to look at?',
        '28) Do you feel very close to your friends?',
        '29) Has dancing or the idea of it always seemed dull to you?',
        '30) Do you like mixing with people?',
        '31) Is trying new foods something you have always enjoyed?',
        '32) Have you often felt uncomfortable when your friends touch you?',
        '33) Do you prefer watching television to going out with people?',

        '34) Do you consider yourself to be pretty much an average sort of person?',
        '35) Would you like other people to be afraid of you?',
        "36) Do you often feel the impulse to spend money which you know you can't afford?",
        '37) Are you usually in an average kind of mood, not too high and not too low?',
        '38) Do you at times have an urge to do something harmful or shocking?',
        '39) Do you stop to think things over before doing anything?',
        '40) Do you often overindulge in alcohol or food?',
        '41) Do you ever have the urge to break or smash things?',
        '42) Have you ever felt the urge to injure yourself?',
        '43) Do you often feel like doing the opposite of what other people suggest even though you know they are right?'];

//schizo has 43 qns           
var schizo_scale = ["No", "Yes"];


    var schizo =       
    { type: "survey-multi-choiceOriginal",
    questions: schizo_qn,
    options: [schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale,schizo_scale ],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    horizontal: true,
    preamble: ["<strong>Please read the statements and answer whether you agree or disagree with the statements with 'No' or 'Yes' ONLY.</strong>"],
    data:{label: 'schizo', trialType: 'quest'}
    };



//XUNG PLUGIN
var  zung_qn = ['1) I feel down-hearted and blue.', 
        '2) Morning is when I feel the best.',
        '3) I have crying spells or feel like it.',
        '4) I have trouble sleeping at night.',
        '5) I eat as much as I used to.',
        '6) I still enjoy sex.',
        '7) I notice that I am losing weight.',
        '8) I have trouble with constipation.',
        '9) My heart beats faster than normal.',
        '10) I get tired for no reason.',
        '11) My mind is as clear as it used to be.',
        '12) I find it easy to do the things I used to do.',
        "13) I am restless and can't keep still.",
        '14) I feel hopeful about the future.',
        '15) I am more irritable than usual.',
        '16) I find it easy to make decisions.',
        '17) I feel that I am useful and needed.',
        '18) My life is pretty full.',
        '19) I feel that others would be better off if I were dead.',
        '20) I still enjoy the things I used to do.'];


var zung_scale = ["A little of the time",  "Some of the time", "Good part of the time",  "Most of the time"];

//zung has 20 qns   
    var zungdep =       
    { type: "survey-multi-choiceOriginal",
    questions: zung_qn,
    options: [zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale,zung_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    horizontal: true,
    preamble : ['<strong>Please read each statement and decide HOW MUCH of the time the statement describes how you have been feeling during the PAST SEVERAL DAYS.</strong>'],
    data:{label: 'depress', trialType: 'quest'}
    };





//LIEBO SOCIAL ANXIETY QUESTIONNAIRE
var lebsocial_qn = ['<strong>1) Telephoning in public.</strong><br></br> Fear/Anxiety:',    
          'Avoidance:',
          '<br><strong>2) Participating in small groups.</strong><br></br> Fear/Anxiety:'   ,
          'Avoidance:',
          '<br><strong>3) Eating in public places.</strong><br></br> Fear/Anxiety:'   ,
          'Avoidance:',
          '<br><strong>4) Drinking with others in public places.</strong><br></br> Fear/Anxiety:'   ,
          'Avoidance:',
          '<br><strong>5) Talking to people in authority.</strong><br></br> Fear/Anxiety:'  ,     
          'Avoidance:',
          '<br><strong>6) Acting, performing or giving a talk in front of an audience.</strong><br></br> Fear/Anxiety:' ,
          'Avoidance:',
          '<br><strong>7) Going to a party.</strong><br></br> Fear/Anxiety:'    ,
          'Avoidance:',
          '<br><strong>8) Working while being observed.</strong><br></br> Fear/Anxiety:'    ,
          'Avoidance:',
          '<br><strong>9) Writing while being observed.</strong><br></br> Fear/Anxiety:'    , 
          'Avoidance:',
          '<br><strong>10) Calling someone you don’t know very well.</strong><br></br> Fear/Anxiety:'   ,
          'Avoidance:',
          '<br><strong>11) Talking with people you don’t know very well.</strong><br></br> Fear/Anxiety:'   ,
          'Avoidance:',
          '<br><strong>12) Meeting strangers.</strong><br></br> Fear/Anxiety:',
          'Avoidance:',

          '<strong>13) Urinating in a public bathroom.</strong><br></br> Fear/Anxiety:'      , 
          'Avoidance:',
          '<br><strong>14) Entering a room when others are already seated.</strong><br></br> Fear/Anxiety:' ,
          'Avoidance:',
          '<br><strong>15) Being the center of attention.</strong><br></br> Fear/Anxiety:',
          'Avoidance:',
          '<br><strong>16) Speaking up at a meeting.</strong><br></br> Fear/Anxiety:' ,
          'Avoidance:',
          '<br><strong>17) Taking a test.</strong><br></br> Fear/Anxiety:',
          'Avoidance:',
          "<br><strong>18) Expressing a disagreement or disapproval to people you don't know very well.</strong><br></br> Fear/Anxiety:",
          'Avoidance:',
          '<br><strong>19) Looking at people you don’t know very well in the eyes.</strong><br></br> Fear/Anxiety:' ,
          'Avoidance:',
          '<br><strong>20) Giving a report to a group.</strong><br></br> Fear/Anxiety:',
          'Avoidance:',
          '<br><strong>21) Trying to pick up someone.</strong><br></br> Fear/Anxiety:',
          'Avoidance:',
          '<br><strong>22) Returning goods to a store.</strong><br></br> Fear/Anxiety:',
          'Avoidance:',
          '<br><strong>23) Giving a party.</strong><br></br> Fear/Anxiety:',
          'Avoidance:',
          '<br><strong>24) Resisting a high pressure salesperson.</strong><br></br> Fear/Anxiety:',
          'Avoidance:'
];

var lebsocial_scale1 = [ "None" , "Mild", "Moderate","Severe"];
var lebsocial_scale2 = [ "Never (0%)" ,"Occasionally (1—33%)", "Often (33—67%)","Usually (67—100%)"];


    var lebsocial =      
    { type: "survey-multi-choiceOriginal",
    questions: lebsocial_qn,
    options: [lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2, lebsocial_scale1,lebsocial_scale2],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    preamble: ['<strong>Read each bolded statement carefully and answer two questions about that statement. The first question asks how ANXIOUS or FEARFUL you feel in that situation. The second question asks how often you AVOID that situation. Please base your ratings on the way that the situations have affected you in the LAST WEEK.</strong>'],

    data:{label: 'social', trialType: 'quest'}
    };




//  IQ QUESTIONAIRE PLUGIN
var  iq_qn1 = ['1) What number is one fifth of one fourth of one ninth of 900?',
        '2) Zach is taller than Matt and Richard is shorter than Zach. Which of the following statements would be the most accurate?',
        '3) Joshua is 12 years old and his sister is three times as old as he. When Joshua is 23 years old, how old will his sister be?',       
        '4) If the day after tomorrow is two days before Thursday then what day is it today?',
        '5) In the following alphanumeric series, what letter comes next? K N P S U',
        '6) In the following alphanumeric series, what letter comes next? V Q M J H',
        '7) In the following alphanumeric series, what letter comes next? I J L O S',
        '8) In the following alphanumeric series, what letter comes next? Q S N P L',

        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx45_q.png"><br><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx45_a.png"><br></center>'+
        '9) Which figure fits into the missing slot?',

        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx46_q.png"><br><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx46_a.png"><br></center>'+
        '10) Which figure fits into the missing slot?',

        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx47_q.png"><br><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx47_a.png"><br></center>'+
        '11) Which figure fits into the missing slot?',

        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx55_q.png"><br><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/mx55_a.png"><br></center>'+
        '12) Which figure fits into the missing slot?',


        '13) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/rsd3_q.png"></center>',

        '14) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/rsd4_q.png"></center>',

        '15) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/rsd6_q.png"></center>',

        '16) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
        '<center><img src="http://www.fil.ion.ucl.ac.uk/~tseow/metacog_phaseII/rsd8_q.png"></center>'];
        

var iq_scale1 = ["2", "3", "4", "5", "6","7"];    
var iq_scale2 = ["Richard is taller than Matt", "Richard is shorter than Matt",  "Richard is as tall as Matt" ,"It's impossible to tell"];
var iq_scale3 = ["25" ,"39", "44", "47" ,"53", "57"];
var iq_scale4 = ["Friday" ,"Monday", "Wednesday",  "Saturday" ,"Tuesday", "Sunday"];
var iq_scale5 = ["S" ,"T", "U",  "V" ,"W", "X"];
var iq_scale6 = ["E" ,"F", "G", "H" ,"I", "J"];
var iq_scale7 = ["T" ,"U", "V",  "X" ,"Y", "Z"];
var iq_scale8 = ["J" ,"H", "I", "N" ,"M", "L"];

var iq_scale9 = ["A" ,"B", "C", "D" ,"E", "F"];
var iq_scale10 = ["A" ,"B", "C", "D" , "E", "F","G","H"];


    var icariq =      
    { type: "survey-multi-choiceOriginal",
    questions: iq_qn1,
    preamble: ['<strong>Please read each question carefully and answer as best as you can.</strong>'],
    options: [iq_scale1,iq_scale2,iq_scale3,iq_scale4,iq_scale5,iq_scale6,iq_scale7,iq_scale8,iq_scale9,iq_scale9,iq_scale9,iq_scale9,iq_scale10,iq_scale10,iq_scale10,iq_scale10],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    data:{label: 'iq', trialType: 'quest'}
    };
    
    
  //AUDIT PLUGIN
var  alcohol_qn =[' 1) How often do you have a drink containing alcohol? ',
        '2) How many drinks containing alcohol do you have on a typical day when you are drinking?',
        '3) How often do you have six or more drinks on one occasion? ',
        '4) How often during the last year have you found that you were not able to stop drinking once you had started? ',
        '5) How often during the last year have you failed to do what was normally expected from you because of drinking?  ',
        '6) How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session? ',
        '7) How often during the last year have you had a feeling of guilt or remorse after drinking?',
        '8) How often during the last year have you been unable to remember what happened the night before because you had been drinking? ',
        '9) Have you or someone else been injured as a result of your drinking?',
        '10) Has a relative or friend, or a doctor or other health worker been concerned about your drinking or suggested you cut down?'];

var alcohol_scale1 = [ "Never" , "Monthly or less", "Two to four times a month","Two to three times a week","Four or more times a week"];
var alcohol_scale2 = [ "1 or 2" , "3 or 4","5 or 6","7 to 9","10 or more"];
var alcohol_scale3 = [ "Never","Less than monthly","Monthly","Weekly","Daily or almost daily"];
var alcohol_scale4 = [ "No","Yes, but not in the last year","Yes, during the last year"];


    var alcoholadd =      
    { type: "survey-multi-choiceOriginal",
    questions: alcohol_qn,
    options: [alcohol_scale1,alcohol_scale2,alcohol_scale3,alcohol_scale3,alcohol_scale3,alcohol_scale3,alcohol_scale3,alcohol_scale3,alcohol_scale4,alcohol_scale4],
    required: [true,true,true,true,true,true,true,true,true,true],
    preamble: ['<strong>Now we are going to ask you some questions about your use of alcoholic beverages during the past year. Please try to be as honest and as accurate as you can be.</strong>'],
    data:{label: 'alcohol', trialType: 'quest'}
    };
    
//APATHY PLUGIN
var  apathy_qn =[' 1) I am interested in things. ',
        '2) I get things done during the day. ',
        '3) Getting things started on my own is important to me.',
        '4) I am interested in having new experiences.  ',
        '5) I am interested in learning new things.  ',
        '6) I put little effort into anything.  ',
        '7) I approach life with intensity. ',
        '8) Seeing a job through to the end is important to me. ',
        '9) I spend time doing things that interest me. ',
        '10) Someone has to tell me what to do each day. ',
        '11) I am less concerned about my problems than I should be. ',
        '12) I have friends.  ',
        '13) Getting together with friends is important to me.',
        '14) When something good happens, I get excited.' ,
          '15) I have an accurate understanding of my problems. ',
        '16) Getting things done during the day is important to me.',
        '17) I have initiative.',
        '18) I have motivation.' ];

var apathy_scale = [ "Not at all characteristic","Slightly characteristic","Somewhat characteristic","Very characteristic"];

    var apathy =      
    { type: "survey-multi-choiceOriginal",
    questions: apathy_qn,
    options: [apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale,apathy_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    preamble: ['<strong>For each question, choose the answer that best describes your thoughts, feelings, and actions during the past 4 weeks.</strong>'],
    data:{label: 'apathy', trialType: 'quest'}
    };

    
//EATING DISORDER PLUGIN
var  eat_qn =[' 1) I am terrified about being overweight.',
        '2) I avoid eating when I am hungry.',
        '3) I find myself preoccupied with food.',
        '4) I have gone on eating binges where I feel that I may not be able to stop. ',
        '5) I cut my food into small pieces.',
        '6) I am aware of the calorie content of foods I eat.',
        '7) I particularly avoid foods with high carbohydrate content.',
        '8) I feel that others would prefer if I ate more.',
        '9) I vomit after I have eaten. ',
        '10) I feel extremely guilty after eating.',
        '11) I am preoccupied with a desire to be thinner.',
        '12) I think about burning up calories when I exercise.',
        '13) Other people think that I am too thin.',
        '14) I am preoccupied with the thought of having fat on my body.',
          '15) I take longer than others to eat meals.',
        '16) I avoid foods with sugar in them.',
        '17) I eat diet foods.',
        '18) I feel that food controls my life.',
        '19) I display self-control around food.',
        '20) I feel that others pressure me to eat.',
        '21) I give too much time and thought to food.' ,
          '22) I feel uncomfortable after eating sweets.',
        '23) I engage in dieting behaviour.',
        '24) I like my stomach to be empty.',
        '25) I enjoy trying new rich foods.',
        '26) I have the impulse to vomit after meals.'];

var eat_scale = [ "Always","Usually","Often","Sometimes","Rarely","Never"];

    var eat =      
    { type: "survey-multi-choiceOriginal",
    questions: eat_qn,
    options: [eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale,eat_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    preamble: ['<strong>Please answer the questions below as accurately, honestly and completely as possible. There are no right or wrong answers.</strong>'],
    data:{label: 'eat', trialType: 'quest'}
    };
    
    
    
//STAI Form Y2 - ANXIETY PLUGIN
var  anxiety2_qn =[' 1) I feel pleasant.',
        '2) I feel nervous and restless.',
        '3) I feel satisfied with myself.',
        '4) I wish I could be as happy as others seem to be. ',
        '5) I feel like a failure.',
        '6) I feel rested.',
        '7) I am "calm, cool, and collected".',
        '8) I feel that difficulties are piling up so that I cannot overcome them.',
        "9) I worry too much over something that really doesn't matter. ",
        '10) I am happy.',
        '11) I have disturbing thoughts.',
        '12) I lack self-confidence.',
        '13) I feel secure.',
        '14) I make decisions easily.',
        '15) I feel inadequate.',
        '16) I am content.',
        '17) Some unimportant thought runs through my mind and bothers me.',
        "18) I take disappointments so keenly that I can't put them out of my mind.",
        '19) I am a steady person.',
        '20) I get in a state of tension or turmoil as I think over my recent concerns and interests.'];

var anxiety2_scale = [ "Almost never","Sometimes","Often","Almost always"];

  var genanxiety2 =      
    { type: "survey-multi-choiceOriginal",
    questions: anxiety2_qn,
    options: [anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale , anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale, anxiety2_scale,anxiety2_scale,anxiety2_scale,anxiety2_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    preamble: ['<strong>Read each statement and select the appropriate response to indicate how you generally feel, that is, at this very moment. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.</strong>'],
    data:{label: 'anxiety-Y2', trialType: 'quest'}
    };

//STAI Form Y1 - ANXIETY PLUGIN
var  anxiety1_qn =[' 1) I feel calm.',
        '2) I feel secure.',
        '3) I am tense.',
        '4) I feel strained.',
        '5) I feel at ease.',
        '6) I feel upset.',
        '7) I am presently worrying over possible misfortunes.',
        '8) I feel satisfied.',
        "9) I feel frightened. ",
        '10) I feel comfortable.',
        '11) I feel self-confident.',
        '12) I feel nervous.',
        '13) I am jittery.',
        '14) I feel indecisive.',
        '15) I am relaxed.',
        '16) I feel content.',
        '17) I am worried.',
        "18) I feel confused.",
        '19) I feel steady.',
        '20) I feel pleasant.'];

var anxiety1_scale = [ "Not at all","Somewhat","Moderately so","Very much so"];

    var genanxiety1 =      
    { type: "survey-multi-choiceOriginal",
    questions: anxiety1_qn,
    options: [anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale , anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale, anxiety1_scale,anxiety1_scale,anxiety1_scale,anxiety1_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    preamble: ['<strong>Read each statement and select the appropriate response to indicate how you feel right now, that is, at this very moment. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.</strong>'],
    data:{label: 'anxiety-Y1', trialType: 'quest'}
    };  

// Taylor Manifest Anxiety Scale (TMAS)
var  anxiety_TMAS =[
        '1) I do not tire quickly.',
        '2) I am troubled by attacks of nausea.',
        '3) I believe I am no more nervous than most others.',
        '4) I have very few headaches.',
        '5) I work under a great deal of tension.',
        '6) I cannot keep my mind on one thing.',
        '7) I worry over money and business.',
        "8) I frequently notice my hand shakes when I try to do something.",
        '9) I blush no more often than others.',
        '10) I have diarrhea once a month or more.',
        '11) I worry quite a bit over possible misfortunes.',
        '12) I practically never blush.',
        '13) I am often afraid that I am going to blush.',
        '14) I have nightmares every few nights.',
        '15) My hands and feet are usually warm.',
        '16) I sweat very easily even on cool days.',
        "17) Sometimes when embarrassed, I break out in a sweat.",
        '18) I hardly ever notice my heart pounding and I am seldom short of breath.',
        '29) I feel hungry almost all the time.',
        '20) I am very seldom troubled by constipation.',
        '21) I have a great deal of stomach trouble.',
        '22) I have had periods in which I lost sleep over worry.',
        '23) My sleep is fitful and disturbed.',
        '24) I dream frequently about things that are best kept to myself.',
        '25) I am easily embarrassed.',
        '26) I am more sensitive than most other people.',
        '27) I frequently find myself worrying about something.',
        '28) I wish I could be as happy as others seem to be.',
        '29) I am usually calm and not easily upset.',
        '30) I cry easily.',
        '31) I feel anxiety about something or someone almost all the time.',
        '32) I am happy most of the time.',
        '33) It makes me nervous to have to wait.',
        '34) I have periods of such great restlessness that I cannot sit long I a chair.',
        '35) Sometimes I become so excited that I find it hard to get to sleep.',
        '36) I have sometimes felt that difficulties were piling up so high that I could not overcome them.',
        '37) I must admit that I have at times been worried beyond reason over something that really did not matter.',
        '38) I have very few fears compared to my friends.',
        '39) I have been afraid of things or people that I know could not hurt me.',
        '40) I certainly feel useless at times.',
        '41) I find it hard to keep my mind on a task or job.',
        '42) I am usually self-conscious.',
        '43) I am inclined to take things hard.',
        '44) I am a high-strung person.',
        '45) Life is a strain for me much of the time.',
        '46) At times I think I am no good at all.',
        '47) I am certainly lacking in self-confidence.',
        '48) I sometimes feel that I am about to go to pieces.',
        '49) I shrink from facing crisis or difficulty.',
        '50) I am entirely self-confident.'];

var anxietyTMAS_scale = [ "True","False"];

    var anxietyTMAS =      
    { type: "survey-multi-choiceOriginal",
    questions: anxiety_TMAS,
    options: [anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale,anxietyTMAS_scale],
    required: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],
    preamble: ['<strong>Read each statement and select the appropriate response.</strong>'],
    data:{label: 'anxiety-TMAS', trialType: 'quest'}
    };  


// CADS questionnare (daringness subscale) - Items 3/6/9/11/50
var  daringness_CADS =[
        '1) Are you daring and adventurous?',
        '2) Do you like rough games and sports?',
        '3) Do you enjoy doing things that are risky or dangerous?',
        '4) Do you like things that are exciting and loud?',
        '5) Are you brave?'];

var daringnessCADS_scale = [ "Not at all","Just a little","Pretty much/pretty often","Very much/very often"];

    var daringnessCADS =      
    { type: "survey-multi-choiceOriginal",
    questions: daringness_CADS,
    options: [daringnessCADS_scale,daringnessCADS_scale,daringnessCADS_scale,daringnessCADS_scale,daringnessCADS_scale],
    required: [true,true,true,true,true],
    preamble: ['<strong>When you answer these questions, please think about the last 12 months and tick the box that you feel best describes you.</strong>'],
    data:{label: 'daringness-CADS', trialType: 'quest'}
    };  
    
    
//PUSH QUESTIONNAIRE INSTRUCTIONS
qns.push(begin_qns);

//, ocir, schizo, zungdep, lebsocial, icariq, genanxiety, apathy, eat, alcoholadd
var questlist = [daringnessCADS, anxietyTMAS, bis, ocir, schizo, zungdep, lebsocial, icariq, genanxiety2, genanxiety1, apathy, eat, alcoholadd];
var shufflequestlist  = jsPsych.randomization.shuffle(questlist);

//PUSH THE QUESTIONNAIRES
for(var i = 0; i < shufflequestlist.length; i++)
{
 
qns.push(shufflequestlist[i]);


};

return qns;
}
//166 qns in total  
 var questionnaires = metaqnstest();



// Randomizations
    
// adding leveOne 
var levelOneList = [];     // part 1

for(i = 0; i <= 14; i++){      // 15 trials

  levelOneList.push(levelOneA);
  levelOneList.push(levelOneB);
  levelOneList.push(levelOneC);
};


var levelOneList = jsPsych.randomization.repeat(levelOneList,1);

  var levelOneListA = levelOneList.slice(0,15);
  var levelOneListB = levelOneList.slice(15,30);
  var levelOneListC = levelOneList.slice(30,45);


// Randomization of level 2 -> 1/3 LevelA 3/4 LevelB 
var levelTwoRandom = [];
for(i = 0; i <= 0; i++){  // 4 trials

  levelTwoRandom.push(levelTwoA);
  levelTwoRandom.push(levelTwoA);
  levelTwoRandom.push(levelTwoB);
  levelTwoRandom.push(levelTwoC);
};      

for(i = 0; i <= 3; i++){  // 12 

  levelTwoRandom.push(levelTwoBA);
  levelTwoRandom.push(levelTwoBB);
  levelTwoRandom.push(levelTwoBC);
}; 

var shuffledLevelTwoRandom = jsPsych.randomization.repeat(levelTwoRandom,1);    // 

var subsetLevelTwoRandomA = shuffledLevelTwoRandom.slice(0,8); // sliced array from 0 - 8
var subsetLevelTwoRandomB = shuffledLevelTwoRandom.slice(8,16); // sliced array from 8 - 16

// Randomization of posttest 1-3
var surveyPost = [surveyPost_Test1,surveyPost_Test2,surveyPost_Test3];
var shuffledSurveyPosttest = jsPsych.randomization.repeat(surveyPost,1); 

// this adds a property called 'subjectId' to every trial
var subjectId = jsPsych.randomization.randomID(10);      // generate a random subject ID  --> Point of uniqueness? now on a 10 digit string
 
jsPsych.data.addProperties({ subjectId: subjectId});





// reward Variables

var chosenTrialLvl1;
var nrWonTokensLvl1;
var chosenTrialLvl2;
var isRobberCaught;
var totalRewardWon;

var rewardCalculation = function() {             // function for calculating the reward of a participant

    var totalReward = 15;      // participation payment: 15$

    //levelOne  -- choose a random trial among all level one's
    var allCatchDiamonds = jsPsych.data.getTrialsOfType("AAALevelOne");  

    var randomNrOne = Math.floor(Math.random() * ((allCatchDiamonds.length -1) - 0 + 1)) + 0; // election of random trial nr.
    var isCaught = Object.values(allCatchDiamonds[randomNrOne])[6];
    var nrWonTok = Object.values(allCatchDiamonds[randomNrOne])[4];
 
    chosenTrialLvl1 = randomNrOne;
    nrWonTokensLvl1 = parseInt(nrWonTok);


    if(isCaught == "false"){

      wonToken = parseInt(nrWonTok);  // + bonus for every caught diamond default 2.5$ per nrWonTok
      totalReward += wonToken*2.5;
    }


    //levelTwoB  -- choose a random trial among all level twoB's
    var allCatchRobber = jsPsych.data.getTrialsOfType("AAALevelTwoB");

    var randomNrB = Math.floor(Math.random() * ((allCatchRobber.length -1) - 0 + 1)) + 0;  // election of random trial nr.
    var caughtRobber = Object.values(allCatchRobber[randomNrB])[6];
  
    chosenTrialLvl2 = randomNrB;
    isRobberCaught = caughtRobber;

    if(caughtRobber == "true"){

      totalReward += 2.5;  // Bonus for level 2B for + 2.5$ if robber was caught in that round
    }
   

    totalRewardWon = totalReward;

    jsPsych.data.addProperties({earnedReward: totalReward});
    psiturk.taskdata.set('bonus', totalRewardWon - totalReward);  // only the bonus without participation payment --> Total reward

    
 };


var rewardCalc = {
    type: 'call-function',
    func: rewardCalculation
}

var rewardInformation = {

    type: "text",
    text: function(){ return ("<b> What follows now is the calculation of your reward!</b>  <BR/><BR/>Summed up there are 49 possible 'catch diamonds' rounds from level 1 (with 45 rounds) and level 2 (with 4 rounds) as well as 12 possible 'catch the robber' rounds from level 2 only.<BR/> <BR/>" +
        "From those rounds one '<b>catch diamonds</b>' and one '<b>catch the robber</b>' round will be selected randomly.<BR/> <BR/>" + 
          "As '<b>catch diamonds</b>' round <b>"  + (chosenTrialLvl1+1) +  "</b> was randomly selected. <BR/> <BR/>In this chosen round you collected <b>" +
         nrWonTokensLvl1 + "</b> tokens. This gives you a bonus of<b> " + (nrWonTokensLvl1*2.5) + "$.</b>.<BR/> <BR/> As for 'catch the robber', round <b> " + (chosenTrialLvl2+1) + "</b> , was randomly selected.<BR/> <BR/>" +
         "In this selected round you " + isItCaught() +
        "<BR/> <BR/>In this way you earned a total of <b> " + totalRewardWon + "$</b> in this experiment.")}
      };

// heleper function to determine whether the robber was caught or not
var isItCaught = function(){

  if(isRobberCaught == "true"){

    return ("managed to catch the robber, which gives you an extra <b>2.5$</b>");
  }
    else{

      return("did not manage to catch the robber, which gives you <b>no extra bonus</b>. ");
    }
};


//MAIN --> defining experiment structure

var timeline = [welcome_message, entrySurvey_block,instruction_messageLevelOne]; 
 

     timeline = timeline.concat(comprehensionTestBlock1);
     timeline.push(level1Start);
     timeline = timeline.concat(levelOneListA);
     timeline.push(break_messageLvlOneA);
     timeline = timeline.concat(levelOneListB);
     timeline.push(break_messageLvlOneC);
     timeline = timeline.concat(levelOneListC);

     timeline = timeline.concat(instruction_messageLevelTwo);
     timeline = timeline.concat(comprehensionTestBlock2);
     timeline.push(level2Start);
     timeline = timeline.concat(subsetLevelTwoRandomA);         
     timeline.push(break_messageLvlTwo);
     timeline = timeline.concat(subsetLevelTwoRandomB); 
     timeline.push(instruction_postTest);
     timeline = timeline.concat(shuffledSurveyPosttest);

    timeline = timeline.concat(questionnaires);
    timeline.push(rewardCalc);
    timeline.push(rewardInformation);
    timeline.push(feedbackParticipant);



jsPsych.init({
    display_element: $('#jspsych-target'),
    timeline: timeline,
    fullscreen: true,       // fullscreen setting 
    show_progress_bar: true,  

    // record data to psiTurk after each trial
    on_data_update: function(data) {
        psiturk.recordTrialData(data);

    },
    on_finish: function() {

    psiturk.taskdata.set('codeversion', de62006e57969afc76d9cf44f5b76d770787f93d); // add commit hash of current version 

    //save data
    psiturk.saveData({

    success: function() { 
      // function to run if the data is saved
     psiturk.completeHIT();
   },
    error: function() { 
      // function to run if there was an error
  
   }
});
}

});



      















