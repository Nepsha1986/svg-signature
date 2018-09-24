# svg-signature

SVG signature is a way to animate your SVG by changing dash-array and dash-offset of yor svg image.


## Installation 

````
 npm i svg-signature --save-dev
````

## Usage

```
let animateSvgSignature = require('svg-signature');

animateSvgSignature({
  el: 'logo',
  dashArray: 500,
  dashOffset: 300,
  animationTime: 4,
});

```
## Options

* el: ID of element you want to be animated.
* dashArray: dash-array property definition.
* dashOffset: dash-offset property definition.
* animationTime: animation duration property.
