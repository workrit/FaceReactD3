import React from 'react';
import ReactDOM from 'react-dom/client';
import {arc} from 'd3';

console.log('ritesh')
console.log(arc)

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 5;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;


const mouthArc = d3.arc()
    .innerRadius(3/8*centerY)
    .outerRadius(3/8*centerY+10)
    .startAngle(Math.PI/2)
    .endAngle((3*Math.PI) / 2);


const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <circle
        r={centerY/2}
        fill="yellow"
        stroke="red"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={centerY/(4*Math.sqrt(2))}
        cy={-centerY/(4*Math.sqrt(2))}
        r={eyeRadius}
      />
      <circle
        cx={-centerY/(4*Math.sqrt(2))}
        cy={-centerY/(4*Math.sqrt(2))}
        r={eyeRadius}
      />
      <path d={mouthArc()}/>
    </g>
  </svg>
);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);