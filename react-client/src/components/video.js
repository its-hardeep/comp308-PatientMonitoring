import React from 'react';
import ReactPlayer from "react-player"

const Video = () => {
  return (
    <div className="container1">
      <h3 className="d-flex justify-content-center p-2">Motivational Videos</h3>
      <div className="d-flex justify-content-around">
      
      <ReactPlayer
        url="https://www.youtube.com/watch?v=gC_L9qAHVJ8"
      />
      
      <ReactPlayer
        url="https://www.youtube.com/watch?v=krIgKr3IC7s"
      />
      
      </div>
      
    </div>
  )
}

export default Video;