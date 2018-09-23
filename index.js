function animateSvgSignature(args) {
  let el = document.getElementById(args.el);
  let path = el.querySelectorAll('path');
  let keyFrames, additionalStyles;

  let defaults = {
    color: '#8c1f1f',
    dashArray: 3000,
    dashOffset: 4000,
    animationTime: 5,
    easingFunction: 'ease-in'
  };

  let options = {
    dashArray: args.dashArray !== undefined ? args.dashArray : defaults.dashArray,
    dashOffset: args.dashOffset !== undefined ? args.dashOffset : defaults.dashOffset,
    color: args.color !== undefined ? args.color : defaults.color,
    stroke: args.color !== undefined ? args.color : defaults.color,
    animationTime: args.animationTime !== undefined ? args.animationTime : defaults.animationTime,
    easingFunction: args.easingFunction !== undefined ? args.easingFunction : defaults.easingFunction,
  };

  path.forEach(i => {
    i.setAttribute('stroke-dasharray', options.dashArray);
    i.setAttribute('stroke-dashoffset', options.dashOffset);
    i.setAttribute('stroke', options.stroke);
    i.setAttribute('fill', 'transparent');
    i.style.animation = `svgAnimation ${options.animationTime}s ${options.easingFunction} forwards`;
  });

  additionalStyles = document.createElement('style');
  document.head.appendChild(additionalStyles);

  keyFrames = `
    @keyframes svgAnimation {
    0% {
      stroke-dashoffset: ${options.dashOffset};
    }
    
    80% {
      fill: transparent;
      stroke-dashoffset: 0;
    }
    
    100% {
      fill: ${options.color};
      stroke-dashoffset: 0;
    }
  }`;

  additionalStyles.innerHTML = keyFrames;
}


module.exports = animateSvgSignature;
