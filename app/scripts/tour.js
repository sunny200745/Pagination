'use strict';
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "My Header",
          content: "Header of the page.",
          target: "header",
          placement: "left"
        },
        {
          title: "Content Heading",
          content: "Here is where I put my content.",
          target: "heading",
          placement: "bottom",
          xOffset:'center'
        },
        {
          title: "Table Content",
          content: "Content Area.",
          target: "table-content",
          placement: "left",
          yOffset:'center',
          arrowOffset:'center'
        },
        {
          title: "Page Index",
          content: "Indexing of page happen here.",
          target: "page-Index",
          placement: "left",
          yOffset:'center',
          arrowOffset:'center'
        }
      ],
    showPrevButton: true
    };

    // Start the tour!
    //hopscotch.startTour(tour,0);


    /* ========== */
/* TOUR SETUP */
/* ========== */
var addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
};

var init = function() {
  var startBtnId = 'startTourBtn',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager();
      
  
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: startBtnId,
        placement: 'right',
        title: 'Take an example tour',
        content: 'Start by taking an example tour to see Hopscotch in action by : <br/>'+'<img src=./images/yeoman.png />',
        yOffset: -25,
        arrowOffset: 20,
        width: 240,
        onClose:onClose
      });
    }, 100);
  

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });

  var onClose = function(){
    document.getElementById('startTourBtn').disabled = true;
  };

}; 

init();