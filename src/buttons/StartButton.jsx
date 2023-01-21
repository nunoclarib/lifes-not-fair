import React, {useState} from 'react'
import sound from '../audio/LifesNot-Fair.wav'
import { Howler, Howl } from 'howler';
import { useEffect } from 'react';

// cursor-not-allowed

const styles = {
    button: {
        marginTop:'150px',
        width: '330px',
        height: '81px',
        background: 'rgba(94, 217, 199, 0.74)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        color: 'white',
        fontFamily: 'Istok Web',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '40px',
        lineHeight: '72px'
    }
};

export default function StartButton(props) {
  const { setStartGame } = props;

  //const [audio] = useState(new Audio('../audio/LifesNot-Fair.wav'));

  const handleClick = () => {
    setStartGame('hidden');
    //SoundPlay(sound);
  }

  const SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.stop()
    sound.currentTime = 0;
    sound.play()
  }
  const SoundStop = (src) => {
    const sound = new Howl({
      src
    })
    sound.currentTime = 0;
    sound.stop()
  }

  return (
    <button style={styles.button} onClick={handleClick}>
        Start Game
    </button>
  )
}

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [audio] = useState(new Audio('path/to/audio.mp3'));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       audio.currentTime = 0;
//       audio.play();
//     }, 1000); // 1000ms = 1s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* render something here */}
//     </div>
//   );
// }
