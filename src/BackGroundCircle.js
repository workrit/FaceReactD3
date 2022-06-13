const BackGroundCircle=(props)=>{
    return(<circle
          r={props.radius}
          fill="yellow"
          stroke="red"
          strokeWidth={props.strokeWidth}
        />);
  };
  export {BackGroundCircle};