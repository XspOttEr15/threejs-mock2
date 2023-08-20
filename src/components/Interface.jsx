import React, { useRef, useState } from 'react';
import './Interface.css';

import buttonClickSound from '/sounds/Space_Walk.mp3'; // Import your sound file

const Interface = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume

  const handleButtonClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <>
      <div className="contain">
        <div className="center-content">
          <button className={`custom-btn btn-3 ${isPlaying ? 'playing' : ''}`} onClick={handleButtonClick}>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          {isPlaying && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          )}
          <audio ref={audioRef} src={buttonClickSound}></audio>
        </div>
      </div>
    </>
  );
};

export default Interface;
