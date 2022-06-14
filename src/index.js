import React from 'react';
import ReactDOM from 'react-dom/client';
import { Face } from './face.js';


const genetRateRandom = function(min,max){
  return Math.random()*(max-min)+min;
}



const root=ReactDOM.createRoot(
  document.getElementById('root')
  );

const width = window.innerWidth;
const height = window.innerHeight;

const App = () => (
  (<Face 
    width={width}
    height={height}
    centerX = {width/2}
    centerY = {height/2}
    strokeWidth = {5}
    eyeRadius = {height/32 + genetRateRandom(10,40)}
    />)
);

function tick(){
root.render(<App />);
}

setInterval(tick,1000)
