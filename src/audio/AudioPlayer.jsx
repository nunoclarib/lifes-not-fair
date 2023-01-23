import React, { useRef, useState } from 'react';
import volume from '../icons/volume.png'
import noVolume from '../icons/no-volume.png'

function AudioPlayer({ src }) {
  const audioRef = useRef(null);

  const [play, setPlay] = useState(false);

  const styles = {
    position: {
        position: "absolute",
        top: "1rem",
        zIndex: "1000",
        right: "20px",
        heigh: "40px",
        width: "40px"
    }
};

  const handlePlay = () => {
    audioRef.current.play();
    setPlay(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlay(false);
  };

  //console.log(src);                                  

  return (
    <div style={styles.position}>
      <audio src={src} ref={audioRef} onEnded={handlePlay} loop />
      {/* <button onClick={handlePlay}>Play</button> */}
      {play ? (<img src={volume} onClick={handlePause}/>) : (<img src={noVolume} onClick={handlePlay}/>)}
      {/* <button onClick={handlePause}>Pause</button> */}
    </div>
  );
}

export default AudioPlayer;
