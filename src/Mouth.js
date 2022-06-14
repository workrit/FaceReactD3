
const Mouth=(props)=>{

    const mouthArc = d3.arc()
      .innerRadius(3/8*props.InnerRadi)
      .outerRadius(3/8*props.InnerRadi+4)
      .startAngle(Math.PI/2)
      .endAngle((3*Math.PI) / 2);
  
      return <path d={mouthArc()} />
      
  };

  export {Mouth}