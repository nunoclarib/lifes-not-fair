import React from 'react'

const styles = {
    position: {
        position: "absolute",
        top: "1rem",
        zIndex: "100",
        left: "15px",
    }
};

export default function CounterButton({counter}) {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded border-solid border-2 border-teal-400 bg-white opacity-100" style={styles.position}>
          <div className='text-teal-400'>Wokeness Counter ⏰</div>
          <div className='text-black'>{counter > 0 ? (<span className='font-bold new-item'>{counter}</span>) : (counter)}/4</div>
    </button>
  )
}
