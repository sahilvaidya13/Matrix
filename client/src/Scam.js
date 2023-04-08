import React from "react";
import Webcam from "react-webcam";
import "./Cam.css"


const Cam = () => {
  return (
    <div>
        <h1>HR Interview</h1>
    <Webcam className="Cam"
    //  audio={true}
    />    
    </div>
  )
}

export default Cam;