import React from 'react';
import ReactDOM from 'react-dom/client';
import { Face } from './face.js';


const genetRateRandom = function(min,max){
  return Math.random()*(max-min)+min;
}



const root=ReactDOM.createRoot(
  document.getElementById('root')
  );

const width = 160;
const height = 160;

const array = d3.range(9*4);

const App = () =>
  array.map(() => (
    <Face 
      width={width}
      height={height}
      centerX = {width/2}
      centerY = {height/2}
      strokeWidth = {5+genetRateRandom(-4,-1)}
      eyeRadius = {height/32 +genetRateRandom(2,8)}
      InnerRadi={height/2+genetRateRandom(-10,4)}
      />
      ));

function tick(){
        root.render(<App />)
  }

setInterval(tick,1000);