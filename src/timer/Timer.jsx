import { useState, useEffect } from 'react';

export default function Timer({timeLeft, setTimeLeft}) {

  const styles = {
    position: {
        position: "absolute",
        top: "2rem",
        zIndex: "10000000",
        textAlign: '-webkit-center',
        width: "100%",
        fontFamily: 'Istok Web',
        fontWeight:'bold',
        color: '#5ED9C7'
    }
};

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft === 0) {
          // commented this so counter is always up when restart
          //clearInterval(intervalId);
          // You can do something when timeLeft is 0
        } else {
          return timeLeft - 1;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    (timeLeft>0) ? (<div style={styles.position}><div className='timer'>{`${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</div></div>)
    :(<div style={styles.position}><div className='timer'>Times Up!</div></div>)  
    );
}





