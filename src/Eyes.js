
const Eyes = (props) => (
    <>
      <circle
        cx={props.centerY/(4*Math.sqrt(2))}
        cy={-props.centerY/(4*Math.sqrt(2))}
        r={props.eyeRadius}
      />
      <circle
        cx={-props.centerY/(4*Math.sqrt(2))}
        cy={-props.centerY/(4*Math.sqrt(2))}
        r={props.eyeRadius}
      />
    </>
);
export {Eyes};

//JUST TO CHECK GIT