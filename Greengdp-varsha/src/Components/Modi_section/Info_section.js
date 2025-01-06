import React, { useState, useRef } from 'react';
import './Info_section.css';

import  videoBg3 from "../../asset/modi3.mp4";

const Info_section = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isPlaying) {
      const playButton = document.getElementById('playButton');
      playButton.classList.add('show');
    }
  };

  const handleMouseLeave = () => {
    if (!isPlaying) {
      const playButton = document.getElementById('playButton');
      playButton.classList.remove('show');
    }
  };

  return (
    <div>
      <div className="container-fluid bg-primaryy">
        <div className="modi-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h1>What is Green GDP?</h1>
              <p>The Green Gross Domestic Product, or Green GDP, is a way to measure how a country's economy is growing while also looking at its impact on the environment. It's like the regular GDP, but it includes things like how much biodiversity is being lost and how much it's costing to deal with climate change. We can use measurements like how much carbon dioxide is released each year or how much waste each person produces to create an overall score called the "Sustainable Development Index." This helps us see if a country's economic growth is happening in a way that's good for both people and the planet.</p>
            </div>
            <div className="col-lg-6 col-md-12 m-vdo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="videoContainer">
                <video id="infoVideo" ref={videoRef} src={videoBg3} className="w-100" onEnded={() => setIsPlaying(false)} />
                <div className={`play-button ${!isPlaying ? 'show' : ''}`} id="playButton" onClick={togglePlay}>
                  <i className="fas fa-play-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_section;
