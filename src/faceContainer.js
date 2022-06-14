const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;



const FaceContainer =(props) =>(
    <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
    {props.children}
    </g>
    </svg>
)

export {FaceContainer};