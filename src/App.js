import React from 'react';

import Weathercontent  from "./components/weather.component";

import './App.css';
import video from "./asset/myedit.mp4";


function App() {
  return (
    <div className="hero-section">
    <div className="bg-video"> 
      <video src={video} autoPlay={true} loop={true}  muted={true} ></video>
    </div>
    <Weathercontent/>
    </div>
    
  );
}

export default App;
