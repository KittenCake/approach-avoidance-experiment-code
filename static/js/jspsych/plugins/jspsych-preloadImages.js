/*
 Approach Avoidance Task Level 1
 Bach Lab Universität Zürich
 Pascal Misala, 10.2017
 Version: 1.0.0
 */

jsPsych.plugins["preloadImages"] = (function() {

  var plugin = {};
  

plugin.trial = function(display_element, trial){        // for every trial should a object be made

  //if any trial variables are functions
  // this evaluates the function and replaces
  // it with the output of the function

  trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

/*
should preload all images in list into browser cache,
to ensure faster load up of page and prevent faulty behaviour

images getting load up in list and removed again (for memory consumption reasons)

*/



function preloadImages(array) {             
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}


preloadImages(['images/imageTokken.jpeg','images/imageSleepingRobber.jpeg','images/imagePlayer.jpeg', 
  'images/imageActiveRightRobber.jpeg','images/imageActiveLeftRobber.jpeg', 'images/azureFrame.jpeg',
  'images/imageCatchRobberBlack.jpeg','images/imageCatchRobberRed.jpeg','images/imageTokkenLevelTwo.jpeg',
  'images/yellowFrame.jpeg','images/purpleFrame.jpeg','images/instructionsLevel1(1).jpeg','images/instructionsLevel1(2).jpeg',
  'images/instructionsLevel1(3).jpeg','images/instructionsLevel1(4).jpeg','images/instructionsLevel1(5).jpeg','images/instructionsLevel1(6).jpeg',
  'images/instructionsLevel2(1).jpeg','images/instructionsLevel2(2).jpeg','images/instructionsLevel2(3).jpeg','images/instructionsLevel2(4).jpeg'
  ]);


  };
  
    return plugin;


}());
