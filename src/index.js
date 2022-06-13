import React from 'react';
import ReactDOM from 'react-dom/client';
import {BackGroundCircle} from './BackGroundCircle.js'
import {Eyes} from './Eyes.js'
import {Mouth} from './Mouth.js'

console.log('ritesh')


const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 5;
const eyeRadius = centerY/16;


const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <BackGroundCircle radius={centerY/2}
       strokeWidth={strokeWidth}
       />

      <Eyes centerX={centerX} 
      centerY={centerY} 
      eyeRadius={eyeRadius}
      />

      <Mouth centerY={centerY}/>
    </g>
  </svg>
);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);