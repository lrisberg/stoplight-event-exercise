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

    let stopText = stopButton.innerText;
    let slowText = slowButton.innerText;
    let goText = goButton.innerText;


    controls.addEventListener('click', function(event) {
      if (event.target === stopButton) {
        console.log(stopText + ' bulb on');
        stopLight.classList.toggle('stop');
      } else if (event.target === slowButton) {
        console.log(slowText + ' bulb on');
        slowLight.classList.toggle('slow');
      } else if (event.target === goButton) {
        console.log(goText + ' bulb on');
        goLight.classList.toggle('go');
      }
    })

    controls.addEventListener('mouseover', function(event) {
      if (event.target === stopButton) {
        console.log("Entered " + stopText + " button");
      } else if (event.target === slowButton) {
        console.log("Entered " + slowText + " button");
      } else if (event.target === goButton) {
        console.log("Entered " + goText + " button");
      }
    })

    controls.addEventListener('mouseout', function(event) {
      if (event.target === stopButton) {
        console.log("Left " + stopText + " button");
      } else if (event.target === slowButton) {
        console.log("Left " + slowText + " button");
      } else if (event.target === goButton) {
        console.log("Left " + goText + " button");
      }
    })
    ;


  });
})();
