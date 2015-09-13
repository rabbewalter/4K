/**
 *  JS access CSS helper class containing breakpoints
 *  call: if (cssBreakpoint === 's')
 */
var jsHelperClass = document.querySelector('.js-resize-helper');
var cssBreakpoint = jsHelperClass ? window.getComputedStyle(jsHelperClass, '::after').content : undefined;


/**
 *  Debounce
 */

function debounce(func, wait, immediate) {
  'use strict';

  var timeout;
  return function () {
    var context = this, args = arguments, later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}



/**
 *  Throttle
 */

function throttle(delay, callback) {
  'use strict';

  // Define when called last
  var lastCall = new Date().getTime();

  return function () {
    // Get current time
    var now = new Date().getTime();
    if ((now - lastCall) >= delay) {
      // Redefine last time the function was called
      lastCall = now;
      callback.apply(null, arguments);
    }
  };
}


/**
 * Call 4K
 */

// For console on page load
//fourKay({maxWidth:8000});


// Initiate form
var $form = document.querySelectorAll('.tool-calc form')[0];


// Form function
function generateMq () {
  
  // check values in form
  var min = document.getElementById('minWidth').value ? document.getElementById('minWidth').value : 1440;
  var max = document.getElementById('maxWidth').value && document.getElementById('maxWidth').value ?document.getElementById('maxWidth').value : 8000;
  var resultDiv = 'generatedMq';
  
  // Empty previous result
  document.getElementById(resultDiv).innerHTML = "";
  
  // generate
  fourKay({
    minWidth: min,
    maxWidth: max,
    codeOut: resultDiv
  });
};








// Add events to the form



$form.addEventListener('submit', function (event) {
  event.preventDefault();
  generateMq();
});










