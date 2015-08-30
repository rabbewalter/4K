/*!
*   4K || fourKay
*   Calculate breakpoints and base font-size values
*   so that your site will keep the same layout on larger
*   screens as on narrower screens.
*
*   Use 'em' instead of 'px' values for the site to scale up
*
*   Created by Rabbe Walter
*/

function fourKay(params) {
  'use strict';

  // Default settings for the fourKay script
  var settings = {
    minWidth: 1440,    // common screen width starting point
    maxWidth: 4096,    // 4K screen width
    presision: 2,      // 2 = 1.0||11, 3 = 1.00||123 - ie. how exact the script will be (2 is fine and will produce less code)
    codeOut: 'console' // use 'inline' to add a ´<style>´ tag in html head || 'id-tag' to insert as textNode
  };

  // Loop related variables
  var i = typeof params !== 'undefined' && typeof params.minWidth  !== 'undefined' ? params.minWidth  : settings.minWidth;
  var len = typeof params !== 'undefined' && typeof params.maxWidth  !== 'undefined' ? params.maxWidth  : settings.maxWidth;
  var threshold = typeof params !== 'undefined' && typeof params.threshold !== 'undefined' ? params.threshold : settings.threshold;
  var aspectRatio = i;
  var presision = typeof params !== 'undefined' && typeof params.presision !== 'undefined' ? params.presision : settings.presision;
  var lastFontSize = 0;
  var finalFontSize = 0;
  var finalMediaQuery = 0;
  var codeOut = typeof params !== 'undefined' && typeof params.codeOut !== 'undefined' ? params.codeOut : settings.codeOut;
  var inlineCSS = '';

  // Generate media query list containing breakpoints and font-size values
  for (i; i < len; (i = i + 1)) {

    // Set font-size to 'em'
    finalFontSize = (i / aspectRatio).toPrecision(presision);

    // Set media query values to 'em'
    finalMediaQuery = i / 16;

    // Compare to last generated value not to produce too many lines of code
    if (finalFontSize > lastFontSize) {

      // Generate CSS
      inlineCSS += '@media screen and (min-width:' + finalMediaQuery + 'em){body{font-size:' + finalFontSize + 'em}}\n';
    }

    // Reset font size for next loop through
    lastFontSize = finalFontSize;
  }


  // Output code in console
  if (codeOut === 'console') {
    console.log(inlineCSS);
  }

  // Output code as a style tag in document head
  else if (codeOut === 'inline') {
    var htmlHead = document.head || document.getElementsByTagName('head')[0];
    var inlineStyle = document.createElement('style');

    inlineStyle.type = 'text/css'; // Non HTML5
    if (inlineStyle.styleSheet){
      inlineStyle.styleSheet.cssText = inlineCSS;
    } else {
      inlineStyle.appendChild(document.createTextNode(inlineCSS));
    }
    htmlHead.appendChild(inlineStyle);
  }

  // Output code in defined container and wrap in a paragraph
  else {
    // Create textNode for styles and append
    var paragraph = document.createElement('p');
    var paragraphContent = document.createTextNode(inlineCSS);
    
    paragraph.appendChild(paragraphContent);
    document.getElementById(codeOut).appendChild(paragraph);
  }
}
