import {BackGroundCircle} from './BackGroundCircle.js'
import {Eyes} from './Eyes.js'
import {Mouth} from './Mouth.js'
import { FaceContainer } from './faceContainer.js';

const Face=(props)=>(
    <FaceContainer

    width={props.width}
    height={props.height}
    centerX={props.centerX}
    centerY={props.centerY}

    >

    <BackGroundCircle radius={props.centerY/2}
    strokeWidth={props.strokeWidth}
    />

    <Eyes centerX={props.centerX} 
    centerY={props.centerY} 
    eyeRadius={props.eyeRadius}
    />

    <Mouth InnerRadi={props.InnerRadi}/>

    </FaceContainer>
);

export {Face};