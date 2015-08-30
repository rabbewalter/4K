# 4K || fourKay

Script for generating media queries containing font-size values which will keep the site or app in a similar scale when viewing it on larger screens.


## Usage

Include `fourKay.js` on your site/app/local development environment and call the function using the code:
`fourKay();`

The script supports the following parameters:
* `minWidth` : where to start of, the default is `1440`
* `maxWidth` : where to stop, the default is `4096`
* `presision` : how exact em values are desired, the default is `2` which generates 19 lines of code
* `codeOut` : which kind of output is desired, the default is `'console'` - can use `'inline'` which will inline a `<style>` tag in the site header containing the code or define a element ID eg. (´'result-div'´) to output the code in a paragraph containing the code

### Example
`fourKay({
  minWidth: 1440,
  maxWidth: 8000,
  presision: 2,
  codeOut: 'yourElementId'
});`




