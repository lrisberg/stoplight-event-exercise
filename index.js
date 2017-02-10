(function() {
  document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    // YOUR CODE HERE
    let controls = document.getElementById('controls');
    let buttons = document.getElementsByClassName('button');
    let stopButton = document.getElementById('stopButton');
    let slowButton = document.getElementById('slowButton');
    let goButton = document.getElementById('goButton');

    let stopLight = document.getElementById('stopLight');
    let slowLight = document.getElementById('slowLight');
    let goLight = document.getElementById('goLight');


    controls.addEventListener('click', function(event) {
      if (event.target === stopButton) {
        console.log('You clicked the stop button');
        stopLight.classList.toggle('stop');
      } else if (event.target === slowButton) {
        console.log('You clicked the slow button');
        slowLight.classList.toggle('slow');
      } else if (event.target === goButton) {
        console.log('You clicked the go button!');
        goLight.classList.toggle('go');
      }
    });


  });
})();
