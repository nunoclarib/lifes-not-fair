import React from 'react'

const styles = {
    position: {
        position: "absolute",
        top: "1rem",
        zIndex: "100",
        left: "15px",
    }
};

export default function CounterButton({counter, nodePhases, counterNumber}) {
  return (
    <button className="text-white font-bold py-2 px-4 rounded border-solid border-2 border-teal-400 bg-white opacity-100" style={styles.position}>
          <div className='text-teal-400'>Wokeness Counter ⏰</div>
          {(nodePhases == 4 || nodePhases == 6 || nodePhases == 8) ? (<div className='text-black'>{counter}/{counterNumber}</div>) : (<div className='text-black'>{counter == 4 || counter == 6 || counter == 5 ? (<span className='font-bold new-item'>{counter}</span>) : (counter)}/{counterNumber}</div>)}
    </button>
  )
}
