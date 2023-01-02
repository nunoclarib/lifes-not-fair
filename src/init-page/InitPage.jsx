import { useState } from 'react';
import ConfirmButtton from '../buttons/ConfirmButtton';
import StartButton from '../buttons/StartButton';
import { Howler, Howl } from 'howler';
import sound from '../audio/LifesNot-Fair.wav'

const styles = {
    connector: {
        height: "10px",
        width: "10px",
    }
};

export default function InitPage() {
  const SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play()
  }
  const SoundStop = (src) => {
    const sound = new Howl({
      src
    })
    sound.stop()
  }


  const [startGame, setStartGame] = useState(null);
  //console.log(startGame);

  return (
    <div className='init-back' style={{visibility: startGame}}>
        <div>
            <h1 className='title-game'>Life's Not Fair</h1>
            <h3 className='subtitle-game'>a not so serious game that makes you <span className='underline'>stay woke!</span></h3>
        </div>
        <StartButton setStartGame={setStartGame}/>
        {/* <StartButton onClick={()=>SoundStop(sound)}/> */}
        {SoundPlay(sound)}
    </div>
  )
}
